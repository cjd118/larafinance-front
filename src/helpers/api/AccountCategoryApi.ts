import {apiFetch} from '@helpers/fetch';

export default class AccountCategoryApi {
    id: number;
    name: string;
    type: string;
    createdAt: Date;
    updatedAt: Date;

    constructor(
        id: number = 0,
        name: string = '', 
        type: string = '',
        createdAt: Date = new Date(),
        updatedAt: Date = new Date(),
    ) {
        this.id = id;
        this.name = name;
        this.type = type;
        this.createdAt = createdAt;
        this.updatedAt = updatedAt;
    }

    static async fromApi(accountId : number): Promise<AccountCategoryApi> {
        const data = await apiFetch(`/api/account-categories/${accountId}`, {
            method: 'GET'
        });

        return AccountCategoryApi.map(data)

    }

    private static map(data: any): AccountCategoryApi {
        return new AccountCategoryApi(
            data.id,
            data.name, 
            data.type,
            new Date(data.createdAt),
            new Date(data.updatedAt)
        );
    }

    static async all(): Promise<AccountCategoryApi[]> {
        const data = await apiFetch('/api/account-categories', {
            method: 'GET'
        });

        return data.map((accountCategory: any) => AccountCategoryApi.map(accountCategory));
    }
}