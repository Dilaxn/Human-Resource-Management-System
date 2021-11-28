const express = require('express');
const router = new express.Router();
const {
    all_users,
    user_update,
    delete_user,
    user_login,
    user_logout,
    get_user,
    get_single_user,
    create_user
} = require('../controllers/user');

// user signin
router.post('/api/userRegister', create_user);

// user signin
router.post('/api/userLogin', user_login);

// user logout
router.post('/api/userLogout', user_logout);

// Getting all users
router.get('/api/allUsers', all_users);


// user update
router.patch('/api/userUpdate/:_id',  user_update);


// Delete user account
router.delete("/api/deleteUser/:user_id",  delete_user);

// buyer own profile
router.get('/api/getUser',  get_user);

// Get a buyer details for admin
router.get('/api/getUser/:_id', get_single_user);

// Update allowed products


module.exports = router;