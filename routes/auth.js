// rutas para autenticar uruarios
const express = require('express');
const router = express.Router();
const { check } = require('express-validator');
const auth = require('../middleware/auth');
const authController = require('../controllers/authController');
//crea un usuario
//endpoint : api/auth, por eso va la /, porque en index ya pusimos api/usuarios
router.post('/',
    authController.autenticarUsuario
);

//Obtiene el usuario autenticado
router.get('/', 
    auth,
    authController.usuarioAutenticado
)

module.exports = router;