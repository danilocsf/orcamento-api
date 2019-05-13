const Category = require('../models/category');

exports.findAll = async () => {
    return await Category.findAll({
        order: 'name'
    });
}

exports.findById = async (id) => {
    return await Category.findByPK(id);
}

exports.findByName = async (name) => {
    return await Category.findAll({
        where: {name : name},
        order: 'cardOwner'
    });
}
