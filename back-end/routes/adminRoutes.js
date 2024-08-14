const express = require('express')
const router = express.Router()
const adminControllers = require('./../controllers/adminController.js')
const menuControllers = require('./../controllers/menuController.js')
const {authenticateToken, isAdmin} = require('./../middlewares/auth.js')


router.get('/admin/users', authenticateToken, isAdmin,adminControllers.viewUsers)
router.get('/admin/booking', authenticateToken, isAdmin, adminControllers.viewUsers)
router.put('/admin/update', authenticateToken, isAdmin, adminControllers.updateBookingStatus)


// Admin Routes that related to menu access
router.post('/admin/menuadd', authenticateToken, isAdmin, menuControllers.addItem)
router.put('/admin/menuupdate', authenticateToken, isAdmin, menuControllers.updateItem)
router.delete('/admin/menudelete', authenticateToken, isAdmin, menuControllers.deleteItem)




module.exports = router