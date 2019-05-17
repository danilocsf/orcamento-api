const models = require('../models/index');


exports.findAll = async () => {
    return await models.Category.findAll({
        order: [['name']]
    });
}

exports.findById = async (id) => {
    return await models.Category.findByPK(id);
}

exports.findByName = async (name) => {
    return await models.Category.findAll({
        where: {name : name},
        order: [['name']]
    });
}
