interface AuthHeaderProps {
    title: string;
    children?: React.ReactNode;
}

export default function AuthHeader(props: AuthHeaderProps) {
    return (
      <div>
        <header className="py-2 mb-8 border-slate-300 border-b-1 flex flex-row">
            <h1 className="text-2xl font-bold flex-1">{props.title}</h1>
            {props.children}
        </header>
      </div>
    );
}