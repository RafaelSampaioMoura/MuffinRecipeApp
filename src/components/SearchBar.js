function SearchBar() {
  return (
    <div>
      <label htmlFor="ingredient-search-radio">
        Ingredient
        <input
          type="radio"
          name="ingredient-search-radio"
          data-testid="ingredient-search-radio"
        />
      </label>
      <label htmlFor="name-search-radio">
        Name
        <input
          type="radio"
          name="name-search-radio"
          data-testid="name-search-radio"
        />
      </label>
      <label htmlFor="first-letter-search-radio">
        First letter
        <input
          type="radio"
          name="first-letter-search-radio"
          data-testid="first-letter-search-radio"
        />
      </label>
      <button
        type="button"
        name="exec-search-btn"
        data-testid="exec-search-btn"
      >
        Search
      </button>
    </div>
  );
}

export default SearchBar;
