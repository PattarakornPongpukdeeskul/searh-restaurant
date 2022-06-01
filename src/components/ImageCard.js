import { useRecoilValue } from 'recoil'

import { placeSelectedId } from '../recoil/atom'
import { mockData } from '../mock/example_data'
import '../styles/image-card.css'

export const ImageCard = () => {
  const selectedIdPlace = useRecoilValue(placeSelectedId)
  const place = mockData.filter((place) => place.id === selectedIdPlace)
  const images = place[0].images || []

  return (
    <div className="image-card">
      <div className="title">images</div>
      <div className="image-group">
        {images.map((image, index) => {
          return <img className="image" src={image} alt="" key={`${index}-image`} />
        })}
      </div>
    </div>
  )
}
