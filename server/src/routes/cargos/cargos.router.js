const express = require('express');

const { httpAddNewPost, httpGetAllPosts } = require('./cargos.controller');

const cargosRouter = express.Router();

cargosRouter.get('/', httpGetAllPosts);

cargosRouter.post('/', httpAddNewPost);


module.exports = cargosRouter;