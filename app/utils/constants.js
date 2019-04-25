const TableNames = {
    CARD: "card",
    CARD_TRANSACTION: "card_transaction",
    CATEGORY: "category",
    SUB_CATEGORY: "sub_category",
    INCOME: "income_record",
    SAVINGS: "savings",
    SAVINGS_TRANSACTION: "savings_transaction"
}

const TableConstraints = {
    UNIQUE_SUB_CATEGORY: "sub_category_unique",    
}

Object.freeze(TableNames);
Object.freeze(TableConstraints);

module.exports.TableNames=TableNames;
module.exports.TableConstraints=TableConstraints;