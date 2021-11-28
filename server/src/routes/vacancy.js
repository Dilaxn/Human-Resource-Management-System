const express = require("express");
const {
  add_vacancy,
  update_vacancy,
  get_vacancy,
  get_all_vacancies,
  delete_vacancy,
} = require("../controllers/vacancy");
const router = new express.Router();

router.post("/api/addVacancy", add_vacancy);
router.delete("/api/deleteVacancy/:vacancy_id", delete_vacancy);
router.patch("/api/updateVacancy/:vacancy_id", update_vacancy);
router.get("/api/vacancy/:vacancy_id", get_vacancy);
router.get("/api/vacancies/", get_all_vacancies);

module.exports = router;
