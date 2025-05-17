import { useLoaderData } from "react-router";
import MainHeader from '@layouts/MainHeader';
import EditButton from '@components/EditButton';
import LinkButton from '@components/LinkButton';
import DeleteButton from '@components/DeleteButton';
import TransactionCategoryApi from '@helpers/api/TransactionCategoryApi';

export default function TransactionCategoriesPage() {

  const data = useLoaderData();  

  async function deleteCategory(category: TransactionCategoryApi) {
    try {
      await category.delete();
      window.location.reload(); //todo: improve this
    } catch (error) {
      console.log(error);
      alert("Failed to delete category.");
    }
  }

  function hierarchicalList(parentId = null){
    return data.filter(item => item.parentId === parentId).map(item => {
      return (
        <ul key={item.id} className={`${ item.parentId == null ? 'm-4' : '' }`}>
          <li className="pl-4 rounded-md bg-gray-50">
            <div className="m-2 p-2 flex flex-row">
              <div className={`flex-1 ${ item.parentId == null ? 'font-bold' : '' }`}>{item.name}</div>
              <div className="flex flex-row">
                <EditButton to={`/transaction-categories/${item.id}`} className="mr-1">Edit</EditButton>
                <DeleteButton onClick={() => deleteCategory(item)} />
              </div>
            </div>
            {hierarchicalList(item.id)}
          </li>
        </ul>
      );
    });
  }

  return (
    <div>
      <MainHeader title="Categories">
        <div>
          <LinkButton to="/transaction-categories/new">Create new</LinkButton>
        </div>
      </MainHeader>
      <div>{hierarchicalList()}</div>
    </div>
  );
}