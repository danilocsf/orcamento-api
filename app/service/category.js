const models = require('../models/index');


exports.findAll = async () => {
    return await models.Category.findAll({
        order: [
            ['name']
        ]
    });
}

exports.findById = async (id) => {
    return await models.Category.findByPK(id);
}

exports.findByName = async (name) => {
    return await models.Category.findOne({
        where: {
            name: name
        }
    });
}

exports.create = async (category) => {
    return await models.Category.create(category);
}

exports.update = async (id, category) => {
    return await models.Category.update({
        category
    }, {
        returning: true,
        where: {
            id: id
        }
    })
}