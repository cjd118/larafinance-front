import MainHeader from '@layouts/MainHeader';
import { useLoaderData } from "react-router";
import { useNavigate } from 'react-router';
import TransactionCategoriesForm from '@forms/TransactionCategoriesForm';
import TransactionCategoryApi from '@helpers/api/TransactionCategoryApi';

export default function TransactionCategoriesNewPage() {

  const navigate = useNavigate();
  const categories = useLoaderData();  

  async function save(category : TransactionCategoryApi)
  {
    await category.create();
    navigate('/transaction-categories');    
  }

  return (
    <div>
      <MainHeader title="New category"></MainHeader>
      <TransactionCategoriesForm transactionCategoryApi={new TransactionCategoryApi} categories={categories} onSubmit={save} ></TransactionCategoriesForm>
    </div>
  );
}