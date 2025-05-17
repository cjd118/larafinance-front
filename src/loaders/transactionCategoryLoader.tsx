import TransactionCategoryApi from '@helpers/api/TransactionCategoryApi';
import type { LoaderFunctionArgs } from "react-router";

async function getCategory({ params }: LoaderFunctionArgs) {
  return TransactionCategoryApi.fromApi(Number(params.categoryId));
}

export async function transactionCategoryLoader(args: LoaderFunctionArgs) {
  const [category, categories] = await Promise.all([
    getCategory(args),
    TransactionCategoryApi.all()
  ]);

  return { category, categories };
}