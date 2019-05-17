const models = require('../models/index');

exports.findAll = async () => {
    return await models.Card.findAll({
        order: [['cardOwner']]
    });
}

exports.findById = async (id) => {
    return await models.Card.findByPK(id);
}

exports.findByParams = async (params) => {

    if (params) {
        const where = await createDynamicWhereClause(params);
        return await models.Card.findAll({
            where: where,
            order: [['cardOwner']]
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
