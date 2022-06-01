import { useState } from 'react'
import { Link } from 'react-router-dom'

import { ImageCard, InformationCard } from '../components'
import '../styles/place-detail.css'

export const PlaceDetail = () => {
  const [showTab, setShowTab] = useState(true)

  return (
    <main className="place-detail content">
      <div className="top">
        <Link to="/">
          <button className="button-back">{`< Back`}</button>
        </Link>
      </div>
      <div className="main">
        <div className="place-detail-mobile">
          <div className="tab-group">
            <div
              className={showTab ? 'tab information selected' : 'tab information'}
              onClick={() => setShowTab(true)}>
              INFORMATION
            </div>
            <div
              className={showTab ? 'tab image' : 'tab image selected'}
              onClick={() => setShowTab(false)}>
              IMAGE
            </div>
          </div>
          {showTab ? <InformationCard /> : <ImageCard />}
        </div>
        <div className="place-detail-desktop">
          <InformationCard />
          <ImageCard />
        </div>
      </div>
    </main>
  )
}
