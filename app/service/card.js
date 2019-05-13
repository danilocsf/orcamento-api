const Card = require('../models/card');

exports.findAll = async () => {
    return await Card.findAll({
        order: 'cardOwner'
    });
}

exports.findById = async (id) => {
    return await Card.findByPK(id);
}

exports.findByParams = async (params) => {

    if (params) {
        const where = await createDynamicWhereClause(params);
        return await Card.findAll({
            where: where,
            order: 'cardOwner'
        });
    }

    return await findAll();
}

async function createDynamicWhereClause(params) {
    let where = {};
    if (params) {
        Object.keys(params).forEach(function (item) {
            if (false == params[item] || params[item])
                where[item] = params[item];
        });
    }
    return where;
}
