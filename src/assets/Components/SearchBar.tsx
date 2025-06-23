import type { Dispatch, SetStateAction } from "react";

interface SearchBarProps {
	search: string;
	setSearch: Dispatch<SetStateAction<string>>;
}
function SearchBar({ search, setSearch }: SearchBarProps) {
    return (
        <input
            value={search}
            onInput={(event) => setSearch((event.target as HTMLInputElement).value)}
            className="SearchBar"
            type="text" />
    )
}

export default SearchBar;