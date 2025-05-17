import {apiFetch} from '@helpers/fetch';

export default class TransactionCategoryApi {
    id: number;
    parentId: number | null;
    name: string;
    path: string;
    createdAt: Date;
    updatedAt: Date;

    constructor(
        id: number = 0,
        parentId: number = 0,
        name: string = '', 
        path: string = '',
        createdAt: Date = new Date(),
        updatedAt: Date = new Date(),
    ) {
        this.id = id;
        this.parentId = parentId;
        this.name = name;
        this.path = path;
        this.createdAt = createdAt;
        this.updatedAt = updatedAt;
    }

    static async fromApi(categoryId : number): Promise<TransactionCategoryApi> {
        const data = await apiFetch(`/api/transaction-categories/${categoryId}`, {
            method: 'GET'
        });

        return new TransactionCategoryApi(
            data.id,
            data.parentId,
            data.name, 
            data.path,
            new Date(data.createdAt),
            new Date(data.updatedAt)
        );
    }

    async create(): Promise<boolean> {
        return await apiFetch('/api/transaction-categories', {
            method: 'POST',
            body: JSON.stringify({
                parent_id: this.parentId == 0 ? null : this.parentId,
                name: this.name
            })
        });
    }

    async update(): Promise<boolean> {
        return await apiFetch(`/api/transaction-categories/${this.id}`, {
            method: 'PUT',
            body: JSON.stringify({
                parent_id: this.parentId == 0 ? null : this.parentId,
                name: this.name
            })
        });
    }

    async delete(): Promise<boolean> {
        return await apiFetch(`/api/transaction-categories/${this.id}`, {
            method: 'DELETE'
        });
    }

    static async all(): Promise<TransactionCategoryApi[]> {
        const data = await apiFetch('/api/transaction-categories', {
            method: 'GET'
        });

        return data.map((category: any) => new TransactionCategoryApi(
            category.id,
            category.parentId,
            category.name, 
            category.path,
            new Date(category.createdAt),
            new Date(category.updatedAt)
        ));
    }
}