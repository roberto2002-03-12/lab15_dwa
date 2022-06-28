const {PrismaClient} = require('@prisma/client');
const prisma = new PrismaClient();

module.exports = {
    create: async (req, res) => {
        try {
            const { nombre, categoria, ubicacion, precio } = req.body;

            const resultado = await prisma.producto.create({
                data: {
                    nombre,
                    categoria,
                    ubicacion,
                    precio
                }
            });

            res.status(201).send(resultado);
        } catch (err) {
            console.error(err);
            res.status(500).send('hubo error en inserción');
        }
    },
    list: async (req, res) => {
        try {
            const resultado = await prisma.producto.findMany();
            res.status(200).json(resultado);
        } catch (err) {
            console.error(err);
            res.status(500).send('hubo error en listar');
        }
    },
    update: async (req, res) => {
        try {

            let id = req.params.id;
            let producto = {
                nombre: req.body.nombre,
                categoria: req.body.categoria,
                ubicacion: req.body.ubicacion,
                precio: req.body.precio
            }

            const resultado = await prisma.producto.update({
                where: {id: Number(id)},
                data: {
                    nombre: producto.nombre,
                    categoria: producto.categoria,
                    ubicacion: producto.ubicacion,
                    precio: producto.precio
                }
            });

            res.status(200).send(resultado);

        } catch (err) {
            console.error(err);
            res.status(500).send('hubo error en editar');
        }
    },
    delete: async (req, res) => {
        try {
            let id = req.params.id;
            const resultado = await prisma.producto.delete({
                where: {id: Number(id)}
            });
            res.status(200).json({msg: 'eliminado correctamente'});
        } catch (err) {
            console.error(err);
            res.status(500).send('hubo error en listar');
        }
    },
    find: async (req, res) => {
        try {
            let id = req.params.id;

            const resultado = await prisma.producto.findUnique({
                where: {id: Number(id)}
            });
            
            res.status(200).json(resultado);
        } catch (err) {
            console.error(err);
            res.status(500).send('hubo error en listar');
        }
    }
}