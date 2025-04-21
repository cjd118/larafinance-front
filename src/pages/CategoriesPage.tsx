import { useLoaderData } from "react-router";
import MainHeader from '@layouts/MainHeader';
import ButtonLink from '@components/ButtonLink';
import DeleteButton from '@components/DeleteButton';

export default function CategoriesPage() {

  const { data } = useLoaderData();  

  const listItems = data.map(item =>
    <li className="m-2 p-2 rounded-md bg-gray-50 flex flex-row" key={item.id}>
      <div className="flex-1">{item.name}</div>
      <div className="flex flex-row">
        <ButtonLink text="Edit" link={`/categories/${item.id}/edit`} className="mr-2"></ButtonLink>
        <DeleteButton></DeleteButton>
      </div>
    </li>
  );

  return (
    <div>
      <MainHeader title="Categories">
        <div>
          <ButtonLink text="Create new" link="/categories/new"></ButtonLink>
        </div>
      </MainHeader>
      <ul>{listItems}</ul>
    </div>
  );
}