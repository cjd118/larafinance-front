import AccountApi from '@helpers/api/AccountApi';
import AccountCategoryApi from '@helpers/api/AccountCategoryApi';

export async function accountsLoader() {
    const [accounts, categories] = await Promise.all([
        AccountApi.all(),
        AccountCategoryApi.all()
    ]);

    return { accounts, categories };
}