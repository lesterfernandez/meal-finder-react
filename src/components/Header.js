import StyledHeader from "./styled/Header.styled";

const Header = ({ search, handleChange, input, clear, randomSearch }) => {
  return (
    <>
      <StyledHeader onSubmit={search}>
        <h1>Meal Finder made with React</h1>
        <div>
          <input
            placeholder="Enter text here..."
            onChange={handleChange}
            value={input}
          />
          <button type="submit">
            <i className="fas fa-search" />
          </button>
          <button onClick={randomSearch}>
            <i className="fas fa-random" />
          </button>
          <button onClick={clear}>
            <i className="fas fa-ban" />
          </button>
        </div>
      </StyledHeader>
    </>
  );
};

export default Header;
