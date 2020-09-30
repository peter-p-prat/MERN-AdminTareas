// rutas para crear usuarios
const express = require('express');
const router = express.Router();
const usuarioController = require('../controllers/usuarioController');
const { check } = require('express-validator');
//crea un usuario
//endpoint : api/usuarios, por eso va la /, porque en index ya pusimos api/usuarios
router.post('/', [
    check('nombre', 'El nombre es obligatorio').not().isEmpty(),
    check('email', 'Agrega un email valido').isEmail(),
    check('password', 'El password debe tener 6 caracteres como minimo').isLength({ min: 6})
],
usuarioController.crearUsuario
)

module.exports = router;