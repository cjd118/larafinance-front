import { useLoaderData } from "react-router";
import MainHeader from './../layout/MainHeader';

export default function CategoriesPage() {

  const { data } = useLoaderData();  

  const listItems = data.map(item =>
    <li className="m-2 p-2 rounded-md bg-gray-50">{item.name}</li>
  );

  return (
    <div>
      <MainHeader title="Categories"></MainHeader>
      <ul>{listItems}</ul>
    </div>
  );
}