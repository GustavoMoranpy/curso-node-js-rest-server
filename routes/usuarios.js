const { Router } = require('express');
const { usuariosGet, 
        usuariosPost, 
        usuariosPut, 
        usuariosDelete, 
        usuariosPatch } = require('../controllers/usuarios');
        
const router = Router();

//GET
router.get('/',usuariosGet );

//POST
router.post('/',usuariosPost );

//PUT
router.put('/:id',usuariosPut);

//DELETE
router.delete('/',usuariosDelete);

//PATCH
router.patch('/',usuariosPatch);





//Se exporta el modulo
module.exports = router;


