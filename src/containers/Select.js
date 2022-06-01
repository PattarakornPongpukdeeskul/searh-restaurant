import { useState } from 'react'
import { useRecoilState } from 'recoil'

import { ReactComponent as IconDropdown } from '../asset/svg/icon-dropdown.svg'
import { showPlaceCategories } from '../recoil/atom.js'
import '../styles/select.css'

export const Select = () => {
  const [showOption, setShowOption] = useState('hide')
  const [showPlaceCategory, setShowPlaceCategory] = useRecoilState(showPlaceCategories)
  const allCategory = ['Restaurant', 'Bakery', 'Cafe']
  const selectCategory = (category) => {
    setShowPlaceCategory((prevState) => ({
      ...prevState,
      value: category
    }))
    if (showOption === 'hide') {
      setShowOption('show')
    } else {
      setShowOption('hide')
    }
  }

  return (
    <div>
      <button
        className="dropdown-button"
        onClick={showOption === 'hide' ? () => setShowOption('show') : () => setShowOption('hide')}>
        {showPlaceCategory.value}
        <IconDropdown />
      </button>
      <ul className={`dropdown-content ${showOption}`}>
        {allCategory.map((category) => {
          return (
            <li
              className={`category-option ${
                category === showPlaceCategory.value ? 'selected' : ''
              }`}
              key={category}
              onClick={() => selectCategory(category)}>
              {category}
            </li>
          )
        })}
      </ul>
    </div>
  )
}
