const express = require('express');
const router = express.Router();
const proyectoController = require('../controllers/proyectoController');
const authMiddleware = require('../middleware/auth');
const { check } = require ('express-validator');

//Crea proyectos
// api/proyectos

router.post('/',
    authMiddleware,
    [
        check('nombre', 'El nombre del proyecto es obligatorio').not().isEmpty()
    ],
    proyectoController.crearProyecto
);

//Obtener todos los proyectos
router.get('/',
    authMiddleware,
    proyectoController.obtenerProyectos
);

//Actualizar proyecto via ID
router.put('/:id',
    authMiddleware,
    [
        check('nombre', 'El nombre del proyecto es obligatorio').not().isEmpty()
    ],
    proyectoController.actualizarProyecto
);

//Eliminar un proyecto
router.delete('/:id',
    authMiddleware,
    proyectoController.eliminarProyecto
);
module.exports = router;