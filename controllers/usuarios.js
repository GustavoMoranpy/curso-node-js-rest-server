const { response, request } = require('express');

const usuariosGet = (req = request,res = response) => {
    
    const {name = 'No name',
            lastname = 'No lastname',
            page = 1,
            limit} = req.query;

    res.json({
        msg: 'GET Hello Word - controller',
        name,
        lastname,
        page,
        limit
    });

}

const usuariosPost = (req,res = response) => {
    
    const { name, lastname, age } = req.body;


    res.json({
        msg: 'POST Hello Word - controller',
        name,
        lastname,
        age
    });

}

const usuariosPut = (req,res = response) => {
    
    //const id = req.params.id;

    const {id} = req.params;

    res.json({
        msg: 'PUT Hello Word - controller',
        id
    });

}

const usuariosDelete = (req,res = response) => {
    
    res.json({
        msg: 'DELETE Hello Word - controller'
    });

}

const usuariosPatch = (req,res = response) => {
    
    res.json({
        msg: 'PATCH Hello Word - controller'
    });

}


module.exports = {
    usuariosGet,
    usuariosPost,
    usuariosPut,
    usuariosDelete,
    usuariosPatch
}
