import React from 'react'
import css from './SearchBar.module.css'

interface ISearchBarProps {
  placeholder?: string
  data:
  {
    id: number,
    item: string,
  }[]


}

export const SearchBar: React.FC<ISearchBarProps> = (props: ISearchBarProps) => {
  const [filteredData, setFilteredData] = React.useState([] as ISearchBarProps['data'])
  const [searchValue, setSearchValue] = React.useState('')

  function handleFilter(e: React.ChangeEvent<HTMLInputElement>) {
    const value = e.target.value
    setSearchValue(value)
    const filteredData = props.data.filter(item => item.item.toLowerCase().includes(value.toLowerCase()))
    if (value === "") setFilteredData([])
    setFilteredData(filteredData)
  }


  return (
    <div className={css.search}>
      <div className={css.searchInputs}>
        <input type="text" placeholder={props.placeholder} value={searchValue} onChange={handleFilter} />
        <div className={css.searchIcon}></div>
      </div>
      {filteredData.length > 0 &&
        searchValue !== "" &&
        <div className={css.dataresults}>
          {filteredData.slice(0, 5).map((item, index) => {
            return (
              <a className={css.dataitem} key={index}>
                <p>{item.item}</p>
              </a>
            )
          })}
        </div>
      }


    </div>
  );
}