import { Link } from 'react-router-dom'

import { ImageCard, InformationCard } from '../components'
import '../styles/place-detail.css'

export const PlaceDetail = ({ id }) => {
  return (
    <main className="place-detail content">
      <div className="top">
        <Link to="/">
          <button className="button-back">Back</button>
        </Link>
      </div>
      <div className="main">
        <InformationCard />
        <ImageCard />
      </div>
    </main>
  )
}
