const Annotations = require('../models/AnnotationData');
const mongoose = require("mongoose");

module.exports = {

    async read(request, response) {
        const annotationList = await Annotations.find();

        return response.json(annotationList);
    },

    async create(request, response) {
        const {title, notes, priority} = request.body;
        console.log(request.body);
        if(!notes || !title) {
            return response.status(400).json({error: "Necessário um titulo/anotação!"});
        }

        const annotationCreated = await Annotations.create({
            title,
            notes,
            priority
        });

        return response.json(annotationCreated);
    },

    async delete(request, response) {
        const { id } = request.params;

        // Verifique se o id é um ObjectId válido
        if (!mongoose.Types.ObjectId.isValid(id)) {
            return response.status(400).json({ error: 'ID inválido!' });
        }

        const annotationDeleted = await Annotations.findOneAndDelete({ _id: id });

        if (annotationDeleted) {
            return response.json(annotationDeleted);
        }

        return response.status(404).json({ error: 'Registro não encontrado!' });
    }

}