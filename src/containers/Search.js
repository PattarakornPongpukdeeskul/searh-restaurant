import { useRecoilState, useSetRecoilState } from 'recoil'

import { showPlaceCategories, searchState, paginationState } from '../recoil/atom'
import { ReactComponent as IconSearch } from '../asset/svg/icon-search.svg'
import '../styles/search.css'

export const Search = () => {
  const [search, setSearch] = useRecoilState(searchState)
  const setShowPlace = useSetRecoilState(showPlaceCategories)
  const setPagination = useSetRecoilState(paginationState)

  const submitSearch = () => {
    setShowPlace((prevState) => ({
      ...prevState,
      isSearch: true,
      valueSearch: search
    }))
    setPagination(1)
  }

  return (
    <div className="search-container">
      <input
        className="search-input"
        placeholder="Search name..."
        onChange={(e) => setSearch(e.target.value)}
        value={search}></input>
      <div className="icon-search" onClick={() => submitSearch()}>
        <IconSearch />
      </div>
    </div>
  )
}
