import React, { useState } from "react";

const Search = (props) => {
  const [searchValue, setSearchValue] = useState('');

  function inputChange(e) {
    setSearchValue(e.target.value)
  }

  function inputSubmit(e){
    e.preventDefault();
    props.search(searchValue);
    inputReset();
  }

  function inputReset(){
    setSearchValue("")
  }

  return (
    <div>
      <form className="search">
        <input value={searchValue} type='text' onChange={inputChange} className='form-control'></input>
        <input type='submit' onClick={inputSubmit} value="Search" className='btn btn-info'></input>
      </form>
    </div>
  )
}

export default Search;