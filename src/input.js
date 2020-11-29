import React,{useState} from 'react'

function Input({ searchTerm, setSearchTerm, ...restProps }) {
    const [searchActive, setSearchActive] = useState(false);
    return (
        <input
        className="header__searchInput"
        type="text"
        value={searchTerm}
        onChange={({ target }) => setSearchTerm(target.value)}
        placeholder="Search for products"
        active={searchActive}
        data-testid="search-input"
    />
    )
}

export default Input
