const Vacancy = require("../models/vacancy");

const get_all_vacancies = async (req, res) => {
  try {
    const all_vacancies = await Vacancy.find({});
    res.status(200).send(all_vacancies);
  } catch (error) {
    res.status(500).send(error.message);
  }
};

const get_vacancy = async (req, res) => {
  try {
    const vacancy = await Vacancy.findById(req.params.vacancy_id).select(
      "-__v"
    );

    if (!vacancy) {
      res.status(404).send({ message: "not found" });
      return;
    }

    const final = vacancy.toObject();
    delete final.id;
    res.send(final);
  } catch (e) {
    res.status(500).send(e);
  }
};

const add_vacancy = async (req, res) => {
  try {
    console.log(req.body);
    if (!req.body) {
      throw new Error("Empty Parameters");
    }

    const vacancy = new Vacancy({
      ...req.body,
    });

    await vacancy.save();
    res.status(201).send(vacancy);
  } catch (e) {
    res.status(500).send(e.message);
  }
};

const delete_vacancy = async (req, res) => {
  let vacancy_id = req.params.vacancy_id;

  try {
    const vacancy = await Vacancy.findOneAndDelete({
      _id: vacancy_id,
    }).select("-__v");
    if (!vacancy) {
      res.status("400").send({ message: "could not delete" });
      return;
    }
    const final = vacancy.toObject();
    delete final.id;
    res.send(final);
  } catch (e) {
    res.status(500).send(e);
  }
};

const update_vacancy = async (req, res) => {
  const updates = Object.keys(req.body);
  try {
    const vacancy = await Vacancy.findById(req.params.vacancy_id).select(
      "-__v"
    );
    console.log(vacancy);
    if (!vacancy) {
      res.status(404).send({ message: "not found" });
      return;
    }

    await updates.forEach((update) => {
      vacancy[update] = req.body[update];
    });

    await vacancy.save();
    res.send(vacancy);
  } catch (e) {
    res.status(500).send(e);
  }
};

module.exports = {
  get_vacancy,
  get_all_vacancies,
  delete_vacancy,
  update_vacancy,
  add_vacancy,
};
