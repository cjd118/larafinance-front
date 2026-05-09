import { useLoaderData } from "react-router";
import AccountApi from "@helpers/api/AccountApi";
import AccountCategoryApi from "@helpers/api/AccountCategoryApi";
import EditButton from "@components/EditButton";
import DeleteButton from "@components/DeleteButton";

import MainHeader from '@layouts/MainHeader';

export default function AccountsPage() {

  const data : { accounts: AccountApi[], categories: AccountCategoryApi[] } = useLoaderData();

  function AccountCategoryList({category, accounts} : {category: AccountCategoryApi, accounts: AccountApi[]}) {
    return (
      <div className="m-4">
        <h1 className="font-bold text-xl mb-4">{category.name}</h1>
        <ul className="my-2 rounded-md bg-gray-50">
          {accounts.map((account) => (
            <li key={account.id} className="">
              <div className="p-4 flex flex-row">
                <div className="flex-1">{account.name}</div>
                <div className="flex flex-row">
                  {<EditButton to={`/accounts/${account.id}`} className="mr-1">Edit</EditButton>}
                  {<DeleteButton onClick={() => deleteAccount(account)} />}
                </div>
              </div>
            </li>
          ))}
        </ul>
      </div>
    );
  }

  return (
    <>
      <MainHeader title="Accounts"></MainHeader>
      {data.categories.map((category) => (
        <AccountCategoryList key={category.id} category={category} accounts={data.accounts.filter(account => account.category.id === category.id)} />
      ))}
    </>
  );
}