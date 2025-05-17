import TransactionCategoryApi from '@helpers/api/TransactionCategoryApi';

export function transactionCategoriesLoader() {
    return TransactionCategoryApi.all();
}