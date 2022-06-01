import { useRecoilValue, useRecoilState } from 'recoil'

import { showPlaceCategories, paginationState } from '../recoil/atom'
import { Card } from '../components'
import { Search, Select } from '../containers'
import { mockData } from '../mock/example_data'
import { ReactComponent as IconArrowPrev } from '../asset/svg/icon-arrow-prev.svg'
import { ReactComponent as IconArrowNext } from '../asset/svg/icon-arrow-next.svg'

import '../styles/place-list.css'

export const PlaceList = () => {
  const [pagination, setPagination] = useRecoilState(paginationState)
  const showPlaceCategory = useRecoilValue(showPlaceCategories)
  const filterCategory = (arrayData) => {
    if (showPlaceCategory.value.toLowerCase() === 'all') {
      return mockData
    }

    return arrayData.filter((data) =>
      data.categories.includes(showPlaceCategory.value.toLowerCase())
    )
  }

  const mockDataSearch = mockData.filter((data) =>
    data.name.toLowerCase().includes(showPlaceCategory.valueSearch.toLowerCase())
  )

  const mockDataUsed = showPlaceCategory.isSearch
    ? filterCategory(mockDataSearch)
    : filterCategory(mockData)
  const dataForPage = mockDataUsed.slice(9 * (pagination - 1), 9 * pagination)

  const getOperationTimeOpen = (operationTimeArray) => {
    const operationTime = operationTimeArray.filter(
      (operationTime) => operationTime.time_open !== 'closed'
    )
    return operationTime[0].time_open
  }

  const getOperationTimeClose = (operationTimeArray) => {
    const operationTime = operationTimeArray.filter(
      (operationTime) => operationTime.time_open !== 'closed'
    )
    return operationTime[0].time_close
  }

  return (
    <main className="place-list content">
      <div className="top">
        <p className="title-page">Place List</p>
        <div className="search">
          <Select className="s" />
          <Search className="s" />
        </div>
      </div>
      <div className="main">
        {dataForPage.map((restaurant) => {
          return (
            <Card
              id={restaurant.id}
              key={`card-${restaurant.id}`}
              name={restaurant.name}
              time={`${getOperationTimeOpen(restaurant.operation_time)}-${getOperationTimeClose(
                restaurant.operation_time
              )}`}
              profileImage={restaurant.profile_image_url}
              rating={restaurant.rating}
              images={restaurant.images}
            />
          )
        })}
      </div>
      <div className="pagination">
        <button
          className="button-pagination"
          onClick={() => setPagination(pagination - 1)}
          disabled={pagination === 1 ? true : false}>
          <IconArrowPrev />
        </button>
        <div className="pagination-number">{pagination}</div>
        <button
          className="button-pagination"
          onClick={() => setPagination(pagination + 1)}
          disabled={pagination === Math.ceil(mockDataUsed.length / 9) ? true : false}>
          <IconArrowNext />
        </button>
      </div>
    </main>
  )
}
