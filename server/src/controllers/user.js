const User = require('../models/user');
const bcrypt = require("bcryptjs");

// Create user
const create_user = async (req, res) => {
    const user = new User(req.body);
    try {
        await user.save();
        res.status(201).send(user);
    } catch (error) {
        res.status(400).send(error.message);
    }
}

// user signin
const user_login = async (req, res) => {
    try {
        console.log("user login")
        const user = await User.findByCredentials(
            req.body.email,
            req.body.password
        );
        console.log(user)


        res.send({user});
    } catch (e) {
        res.status(400).send(e.message);
    }
}

// user logout
const user_logout = async (req, res) => {
    try {
        req.user.tokens = req.user.tokens.filter((token) => {
            return token.token !== req.token;
        })
        await req.user.save();
        res.send({message: 'you are logged out'})
    } catch (e) {
        res.status(500).send(e.message);
    }
}

// Getting all users
const all_users = async (req, res) => {
    try {
        const all_users = await User.find({});
        res.send(all_users);
    } catch (error) {
        res.status(400).send(error.message);
    }
}



// user update
const user_update = async (req, res) => {
    const updates = Object.keys(req.body);
    console.log(req.body)
    const user = await User.findById(req.params._id);



    try {
        updates.forEach((update) => {
            // if (req.file) {
            //     req.user['profile_pic'] = req.file.path;
            // }
            console.log(req.body[update])

            user[update] = req.body[update];
        });
        await user.save();
        res.send(user);
    } catch (e) {
        res.status(400).send(e.message);
    }
}


// Delete user by admin
const delete_user = async (req, res) => {
    try {
        const user = await User.findById(req.params.user_id);
        user['account_status'] = 'terminated';
        await user.save();
        res.send(user);
    } catch (e) {
        res.status(400).send(e.message);
    }
}

// LoggedIn user individual profile data
const get_user = async (req, res) => {
    res.send(req.user);
}

//Details of individual user for admin
const get_single_user = async (req, res) => {
    try {
        const user = await User.find({_id: req.params._id});
        res.send(user);
    } catch (error) {
        res.status(400).send(error.message);
    }
}






module.exports = {
    create_user,
    all_users,
    user_update,
    delete_user,
    user_login,
    user_logout,
    get_user,
    get_single_user
}