export default function MainHeader(props) {
    return (
      <div>
        <header className="p-4 border-slate-300 border-b-1">
            <h1 className="text-2xl font-bold w-100">{props.title}</h1>
        </header>
      </div>
    );
}