export default function MainHeader(props) {
    return (
      <div>
        <header className="p-4 border-slate-300 border-b-1 flex flex-row">
            <h1 className="text-2xl font-bold flex-1">{props.title}</h1>
            {props.children}
        </header>
      </div>
    );
}