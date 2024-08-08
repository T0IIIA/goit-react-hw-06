import s from './SearchBox.module.css'



const SearchBox = ({ value, setSearch }) => {
  const onSearch = (e) => {
    setSearch(e.target.value)
  }

  return (
      <div className={s.container}>
        <label>Find contacts by name:</label>
        <input 
          type='text' 
          name='search' 
          onChange={onSearch} 
          value={value} 
          placeholder="Search" 
          className={s.input} 
        />
      </div>
  )
}

export default SearchBox