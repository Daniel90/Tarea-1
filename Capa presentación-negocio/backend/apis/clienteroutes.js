/*
	Taller práctico de desarrollo en ReactJS con API REST
	Por: daniel.
	E-mail: daniel.abrilot@sonda.com
*/

var dataclientes = require('../fakedata/clientes');
var datacliente = require('../fakedata/cliente');

exports.obtenerclientes = function(req, res) {
    res.status(200).send(dataclientes);
}

exports.obtenercliente = function(req, res) {

    var id = req.body.id;
    res.status(200).send(datacliente);
}