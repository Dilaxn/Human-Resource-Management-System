const express = require("express");
const {
    get_department,
    get_all_departments,
    delete_department,
    update_department,
    add_department
} = require("../controllers/department");
const router = new express.Router();

router.post("/api/addDepartment", add_department);
router.delete("/api/deleteDepartment/:dep_id", delete_department);
router.patch("/api/updateDepartment/:dep_id", update_department);
router.get("/api/department/:dep_id", get_department);
router.get("/api/alldepartments/", get_all_departments);

module.exports = router;
