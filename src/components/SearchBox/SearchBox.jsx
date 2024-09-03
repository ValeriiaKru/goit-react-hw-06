import css from './SearchBox.module.css';

function Searchbox({ value, handleFilter }) {
    return (
        <label className={css.searchContainer}>
            <span className={css.label}>Find contacts by name</span>
            <input
                className={css.searchBarInput}
                type="text"
                name="searchBar"
                placeholder="type..."
                value={value}
                onChange={handleFilter}
            />
        </label>
    );
}

export default Searchbox;