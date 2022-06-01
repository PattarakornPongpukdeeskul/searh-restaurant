import { ReactComponent as IconNotification } from '../asset/svg/icon-notification.svg'
import { ReactComponent as IconArrowDown } from '../asset/svg/icon-arrow-down.svg'
import companyLogo from '../asset/image/company-logo.png'
import '../styles/header.css'

export const Header = () => {
  return (
    <header>
      <div className="logo-company mobile">
        <img src={companyLogo} />
      </div>

      <div className="header-content">
        <IconNotification className="icon-notification" />
        <div className="icon-profile"></div>
        <span className="user-name">Akkarapol</span>
        <IconArrowDown />
      </div>
    </header>
  )
}
