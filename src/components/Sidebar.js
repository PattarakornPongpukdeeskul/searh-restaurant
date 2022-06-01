import '../styles/sidebar.css'
import { ReactComponent as IconPlace } from '../asset/svg/icon-place.svg'
import companyLogo from '../asset/image/company-logo.png'

export const Sidebar = () => {
  return (
    <div className="sidebar">
      <div className="logo-company">
        <img src={companyLogo} />
      </div>
      <div className="place">
        <IconPlace />
      </div>
    </div>
  )
}
