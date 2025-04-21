import { Link } from "react-router";

export default function ButtonLink({text, link}) {
    return (
      <div>
        <Link to={link} className="inline-block text-white bg-gray-500 hover:bg-gray-700 focus:ring-4 font-medium rounded-md text-sm px-5 py-1.5 focus:outline-none cursor-pointer" >
            {text}
        </Link>
      </div>
    );
}