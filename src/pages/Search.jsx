function Search({searchKeyword, setSearchKeyword}) {
  return (
    <>
      <div className="m-4">
        <input
          placeholder="Search"
          type="text"
          value={searchKeyword}
          onChange={(event) => setSearchKeyword(event.target.value)}
          className="border rounded-md w-full h-12 p-4"
        />
      </div>
    </> 
  );
}

export default Search;
