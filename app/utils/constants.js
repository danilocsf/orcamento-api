const TableNames = {
    CARD: 'card',
    CARD_TRANSACTION: 'card_transaction',
    CATEGORY: 'category',
    SUB_CATEGORY: 'sub_category',
    INCOME: 'income_record',
    SAVINGS: 'savings',
    SAVINGS_TRANSACTION: 'savings_transaction',
    FIXED_EXPENSE: 'fixed_expense',
    EXPENSE_RECORD: 'expense_record'
}

const TableConstraints = {
    UNIQUE_SUB_CATEGORY: 'sub_category_unique'
}

const Ids = {
    CATEGORY_ALIMENTACAO: -1,
    CATEGORY_ROUPAS_CALCADOS_JOIAS: -2,
    CATEGORY_CUIDADOS_PESSOAIS: -3,
    CATEGORY_CASA: -4,
    CATEGORY_SAUDE: -5,
    CATEGORY_ANIMAIS: -6,
    CATEGORY_VEICULOS: -7,
    CATEGORY_TRANSPORTE: -8,
    CATEGORY_ESTUDO: -9,
    CATEGORY_LAZER: -10,
    CATEGORY_CONTA: -11,
    CATEGORY_OUTROS: -12,
    CATEGORY_DOACAO: -13
}

Object.freeze(TableNames);
Object.freeze(TableConstraints);
Object.freeze(Ids);

module.exports.TableNames=TableNames;
module.exports.TableConstraints=TableConstraints;
module.exports.Ids=Ids;
