import { useState } from 'react'
import { useSetRecoilState } from 'recoil'
import { Link } from 'react-router-dom'

import { placeSelectedId } from '../recoil/atom'
import { ReactComponent as IconCalendar } from '../asset/svg/icon-calendar.svg'
import { ReactComponent as IconRating } from '../asset/svg/icon-rating.svg'
import { ReactComponent as IconArrowPrev } from '../asset/svg/icon-arrow-prev.svg'
import { ReactComponent as IconArrowNext } from '../asset/svg/icon-arrow-next.svg'
import '../styles/card.css'

export const Card = ({ id, name, time, profileImage, rating, images }) => {
  const [slider, setSlider] = useState(0)
  const setSelectedId = useSetRecoilState(placeSelectedId)
  console.log('slider', slider)
  const slideNext = () => {
    console.log('tessssssss')
    if (slider === 0) {
      setSlider(1)
    }
    if (slider === 1) {
      setSlider(2)
    }
    if (slider === 2) {
      setSlider(0)
    }
  }

  const slidePrev = () => {
    if (slider === 0) {
      setSlider(2)
    }
    if (slider === 1) {
      setSlider(0)
    }
    if (slider === 2) {
      setSlider(1)
    }
  }

  return (
    <div className="card">
      <div className="top-card">
        <img className="image-profile" src={profileImage} />
        <div className="top-card-right">
          <div className="name-card">
            <Link to="/place-detail" onClick={() => setSelectedId(id)}>
              {name}
            </Link>
          </div>
          <div className="card-description">
            <div className="card-time-operation">
              <IconCalendar />
              {time}
            </div>
            <div className="card-rating">
              <IconRating />
              {rating}
            </div>
          </div>
        </div>
      </div>
      <div className="main-card">
        <div className="group-image-foods">
          {images.map((img) => {
            return <img src={img} key={img} with="120" height="120" />
          })}
        </div>
        <div className="group-image-foods-mobile">
          {[images.at(slider)].map((img) => {
            return (
              <div className="image-foods-mobile" key={img}>
                <img src={img} />
                <button className="button-pagination prev" onClick={() => slideNext()}>
                  <IconArrowPrev />
                </button>
                <button className="button-pagination next" onClick={() => slidePrev()}>
                  <IconArrowNext />
                </button>
              </div>
            )
          })}
        </div>
      </div>
    </div>
  )
}
