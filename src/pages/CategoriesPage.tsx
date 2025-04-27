import { useLoaderData } from "react-router";
import MainHeader from '@layouts/MainHeader';
import EditButton from '@components/EditButton';
import LinkButton from '@components/LinkButton';
import DeleteButton from '@components/DeleteButton';

export default function CategoriesPage() {

  const { data } = useLoaderData();  

  const listItems = data.map(item =>
    <li className="m-2 p-2 rounded-md bg-gray-50 flex flex-row" key={item.id}>
      <div className="flex-1">{item.name}</div>
      <div className="flex flex-row">
        <EditButton to={`/categories/${item.id}/edit`} className="mr-1">Edit</EditButton>
        <DeleteButton onClick={() => window.alert('clicked')}></DeleteButton>
      </div>
    </li>
  );

  return (
    <div>
      <MainHeader title="Categories">
        <div>
          <LinkButton to="/categories/new">Create new</LinkButton>
        </div>
      </MainHeader>
      <ul>{listItems}</ul>
    </div>
  );
}