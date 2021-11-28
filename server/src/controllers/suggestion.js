const Suggestion = require('../models/suggestion');

const get_all_suggestions = async (req, res) => {
    try {
        const all_suggestions = await Suggestion.find({});
        res.status(200).send(all_suggestions);
    } catch (error) {
        res.status(500).send(error.message);
    }
}

const get_suggestion = async (req, res) => {
    try {
        const suggestion = await Suggestion.findById(req.params.suggestion_id).select('-__v');

        if (!suggestion) {
            res.status(404).send({message: 'not found'});
            return;
        }

        const final = suggestion.toObject();
        delete final.id;
        res.send(final);
    } catch (e) {
        res.status(500).send(e);
    }
}

const add_suggestion = async (req, res) => {
    try {
        console.log(req.body)
        if ( !req.body.title || !req.body.description) {
            throw new Error('Empty Parameters');
        }


        const suggestion = new Suggestion({
            ...req.body
        });

        await suggestion.save();
        res.status(201).send(suggestion);

    } catch (e) {
        res.status(500).send(e.message);
    }
}

const delete_suggestion = async (req, res) => {
  let  suggestion_id = req.params.suggestion_id

    try {
        const suggestion = await Suggestion.findOneAndDelete({_id: suggestion_id}).select('-__v');
        if (!suggestion) {
            res.status('400').send({message: 'could not delete'});
            return;
        }
        const final = suggestion.toObject();
        delete final.id;
        res.send(final);

    } catch (e) {
        res.status(500).send(e);
    }
}


const update_suggestion = async (req, res) => {
    const updates = Object.keys(req.body);
    try {
        const suggestion = await Suggestion.findById(req.params.suggestion_id).select('-__v');
        console.log(suggestion)
        if (!suggestion) {
            res.status(404).send({message: 'not found'});
            return;
        }

        await updates.forEach((update) => {
            suggestion[update] = req.body[update];
        });

        await suggestion.save();
        res.send(suggestion);
    } catch (e) {
        res.status(500).send(e);
    }
}

module.exports = {
    get_suggestion,
    get_all_suggestions,
    delete_suggestion,
    update_suggestion,
    add_suggestion
}