const Card = require('../models/card');

exports.findAll = async (req, res) => {
    const cards = await Card.findAll({
        order: 'cardOwner'
    });
    res.status(200).json({
        data: cards
    });
}

exports.findAllByActiveStatus = async (req, res) => {
    const active = req.params.active;
    const cards = await Card.findAll({
        order: 'cardOwner',
        where: {
            active: active
        }
    });
    res.status(200).json({
        data: cards
    });
}