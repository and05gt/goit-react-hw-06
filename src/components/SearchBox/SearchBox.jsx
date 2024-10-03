import style from "./SearchBox.module.css";

const SearchBox = ({ inputValue, onSearch }) => {
  return (
    <div className={style.searchWrapper}>
      <label className={style.label} htmlFor="search">
        <span>Find contacts by name</span>
        <input
          className={style.input}
          id="search"
          type="text"
          name="search"
          value={inputValue}
          onChange={onSearch}
        />
      </label>
    </div>
  );
};

export default SearchBox;
