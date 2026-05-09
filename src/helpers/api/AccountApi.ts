import {apiFetch} from '@helpers/fetch';
import AccountCategoryApi from './AccountCategoryApi';

export default class AccountApi {
    id: number;
    name: string;
    category: AccountCategoryApi;
    createdAt: Date;
    updatedAt: Date;

    constructor(
        id: number = 0,
        name: string = '', 
        category: AccountCategoryApi = new AccountCategoryApi(),
        createdAt: Date = new Date(),
        updatedAt: Date = new Date(),
    ) {
        this.id = id;
        this.name = name;
        this.category = category;
        this.createdAt = createdAt;
        this.updatedAt = updatedAt;
    }

    static async fromApi(accountId : number): Promise<AccountApi> {
        const data = await apiFetch(`/api/accounts/${accountId}`, {
            method: 'GET'
        });

        return AccountApi.map(data)
    }

    static map(data: any): AccountApi {
        return new AccountApi(
            data.id,
            data.name, 
            new AccountCategoryApi(
                data.accountCategory.id,
                data.accountCategory.name,
                data.accountCategory.type,
                new Date(data.accountCategory.createdAt),
                new Date(data.accountCategory.updatedAt),
            ),
            new Date(data.createdAt),
            new Date(data.updatedAt)
        );
    }

    async create(): Promise<boolean> {
        return await apiFetch('/api/accounts', {
            method: 'POST',
            body: JSON.stringify({
                name: this.name,
            })
        });
    }

    async update(): Promise<boolean> {
        return await apiFetch(`/api/accounts/${this.id}`, {
            method: 'PUT',
            body: JSON.stringify({
                name: this.name,
            })
        });
    }

    async delete(): Promise<boolean> {
        return await apiFetch(`/api/accounts/${this.id}`, {
            method: 'DELETE'
        });
    }

    static async all(): Promise<AccountApi[]> {
        const data = await apiFetch('/api/accounts', {
            method: 'GET'
        });

        return data.data.map((account: any) => AccountApi.map(account));
    }
}