const SearchColor = ({ color, setColor }) => {
  return (
    <form onSubmit={(e) => e.preventDefault()}>
      <input
        type='text'
        placeholder='Add Color Name'
        value={color}
        onChange={(e) => setColor(e.target.value)}
      />
    </form>
  );
};

export default SearchColor;
