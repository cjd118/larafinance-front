export default function ErrorMessage(props) {
    return (
        <div className={"rounded-md bg-red-50 border-red-400 border-1 border text-red-500 my-4 p-2 " + (props.className ?? '')}>
            {props.children}
        </div>
    );
}