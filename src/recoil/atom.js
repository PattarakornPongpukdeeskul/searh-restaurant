import { atom } from 'recoil'
import { recoilPersist } from 'recoil-persist'

const { persistAtom } = recoilPersist({
  key: 'recoil-persist',
  storage: localStorage
})

export const placeSelectedId = atom({
  key: 'placeSelectedId',
  default: '',
  effects_UNSTABLE: [persistAtom]
})

export const showPlaceCategories = atom({
  key: 'showPlaceCategories',
  default: {
    isSearch: false,
    value: 'Restaurant',
    valueSearch: ''
  },
  effects_UNSTABLE: [persistAtom]
})

export const searchState = atom({
  key: 'searchState',
  default: '',
  effects_UNSTABLE: [persistAtom]
})

export const paginationState = atom({
  key: 'paginationState',
  default: 1,
  effects_UNSTABLE: [persistAtom]
})
