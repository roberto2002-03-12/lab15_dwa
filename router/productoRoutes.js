const express = require('express');
const router = express.Router();
const productoController = require('../controller/productoController');

//api productos
router.post('/', (req, res) => {
    productoController.create(req, res);
});

router.get('/', (req, res) => {
    productoController.list(req, res);
});

router.put('/:id', (req, res) => {
    productoController.update(req, res);
});

router.get('/:id', (req, res) => {
    productoController.find(req, res);
});

router.delete('/:id', (req, res) => {
    productoController.delete(req, res);
});

module.exports = router;