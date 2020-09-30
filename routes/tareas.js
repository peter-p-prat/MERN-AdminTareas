
const express = require('express');
const router = express.Router();
const tareaController = require('../controllers/tareaController');
const authMiddleware = require('../middleware/auth');
const { check } = require('express-validator');

// crear una tarea
// api/tareas
router.post('/', 
    authMiddleware,
    [
        check('nombre', 'El Nombre es obligatorio').not().isEmpty(),
        check('proyecto', 'El Proyecto es obligatorio').not().isEmpty()
    ],
    tareaController.crearTarea
);

//Obtener las tareas por proyecto
router.get('/',
    authMiddleware,
    tareaController.obtenerTareas
);

//actualizar tareas
router.put('/:id',
    authMiddleware,
    tareaController.actualizarTarea
);

//eliminar una tarea
router.delete('/:id',
    authMiddleware,
    tareaController.eliminarTarea
)
module.exports = router;