import MainHeader from '@layouts/MainHeader';
import { useLoaderData } from "react-router";
import { useNavigate } from 'react-router';
import TransactionCategoriesForm from '@forms/TransactionCategoriesForm';
import TransactionCategoryApi from '@helpers/api/TransactionCategoryApi';

export default function TransactionCategoriesEditPage() {

  const navigate = useNavigate();
  const {category, categories} = useLoaderData();  

  async function save(category : TransactionCategoryApi)
  {
    await category.update();
    navigate('/transaction-categories');    
  }

  return (
    <div>
      <MainHeader title="Edit category"></MainHeader>
      <TransactionCategoriesForm transactionCategoryApi={category} categories={categories} onSubmit={save} ></TransactionCategoriesForm>
    </div>
  );
}