import MainHeader from '@layouts/MainHeader';
import Button from '@components/Button'
import TextInput from '@components/TextInput';
import SelectInput from '@components/SelectInput';
import { useLoaderData } from "react-router";
import React, { useState } from 'react';
import { useNavigate } from 'react-router';
import ErrorMessage from '@components/ErrorMessage';
import { ValidationError } from '@errors/ValidationError';
import TransactionCategoryApi from '@helpers/api/TransactionCategoryApi';

type Props = {
  transactionCategoryApi: TransactionCategoryApi;
  categories: any[]; // ideally type this properly
  onSubmit: (categoryApi : TransactionCategoryApi) => Promise<void>;
};


export default function TransactionCategoriesForm({ transactionCategoryApi, categories, onSubmit }: Props) {

  const [parentId, setParentId] = useState<number>(transactionCategoryApi.parentId || 0);
  const [name, setName] = useState<string>(transactionCategoryApi.name || '');
  const [error, setError] = useState<ValidationError | string | null>(null);

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>)
  {
    e.preventDefault();
    setError(null);

    transactionCategoryApi.name = name;
    transactionCategoryApi.parentId = parentId;
    
    try {
      await onSubmit(transactionCategoryApi);
    } catch (error) {
      if (error instanceof ValidationError){
        setError(error);
      } else {
        setError('An unknown error occurred');
      }
    }
    
  }

  return (
    <form className="flex flex-col p-4 max-w-2xl" onSubmit={handleSubmit}>
    <ErrorMessage error={error}></ErrorMessage>
    <div className="">
        <TextInput required label="Category Name" type="text" name="name" value={name} onChange={(e: React.ChangeEvent<HTMLInputElement>) => setName(e.target.value)}></TextInput>
    </div>
    <div className="mb-4">
        <SelectInput label="Parent" onChange={(e: React.ChangeEvent<HTMLInputElement>) => setParentId(e.target.value)} value={parentId} data={categories} dataKey="id" dataValue="path"></SelectInput>
    </div>
    <Button type="submit">Save</Button>
    </form>
  );
}