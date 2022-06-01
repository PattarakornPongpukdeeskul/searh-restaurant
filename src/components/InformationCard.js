import { useRecoilValue } from 'recoil'

import { placeSelectedId } from '../recoil/atom'
import { mockData } from '../mock/example_data'
import { ReactComponent as IconRating } from '../asset/svg/icon-rating.svg'
import '../styles/information-card.css'

export const InformationCard = () => {
  const selectedIdPlace = useRecoilValue(placeSelectedId)
  const place = mockData.filter((place) => place.id === selectedIdPlace)[0]

  return (
    <div className="information-card">
      <img className="image" src={place.profile_image_url} />
      <div className="information-card-content">
        <div className="information-card-top">
          <div className="information-card-main-top">
            <div className="information-card-name">{place.name}</div>
            <div className="information-card-rating">
              <IconRating />
              <span>{place.rating}</span>
            </div>
          </div>
        </div>
        <div className="information-card-main">
          <div>
            <div className="information-card-main-address">
              <div className="address">Address : </div>
              <div>{place.address}</div>
            </div>
            <div className="information-card-main-operation-time">
              <div className="open-hour">Opening Hour : </div>
              <div className="operation-time-group">
                {place.operation_time.map((time) => {
                  return (
                    <span
                      key={time.day}>{`${time.day}: ${time.time_open}-${time.time_close}`}</span>
                  )
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
