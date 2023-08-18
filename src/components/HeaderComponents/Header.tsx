interface HeaderProps {
    search: string;
    setSearch: React.Dispatch<React.SetStateAction<string>>;
}

export function Header({ search, setSearch }: HeaderProps): JSX.Element {
    return (
        <header>
            <input
                value={search}
                onChange={(e) => setSearch(e.target.value)}
            ></input>
        </header>
    );
}
