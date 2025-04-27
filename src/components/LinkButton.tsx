import { Link } from "react-router";
import { LinkProps } from "react-router";

export type LinkButtonProps = LinkProps & {
  className?: string;
  children: React.ReactNode;
};

export default function LinkButton(props: LinkButtonProps) {
    return (
      <div>
        <Link to={props.to} className={"inline-block text-white shadow-md bg-gray-500 hover:bg-gray-700 focus:ring-4 font-medium rounded-md text-sm px-5 py-1.5 focus:outline-none cursor-pointer " + (props.className ?? '')} >
            {props.children}
        </Link>
      </div>
    );
}