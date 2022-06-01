import '../styles/header.css'
import { ReactComponent as IconNotification } from '../asset/svg/icon-notification.svg'
import { ReactComponent as IconArrowDown } from '../asset/svg/icon-arrow-down.svg'

export const Header = () => {
  return (
    <header>
      <div className="header-content">
        <IconNotification className="icon-notification" />
        <div className="icon-profile"></div>
        <span className="user-name">Akkarapol</span>
        <IconArrowDown />
      </div>
    </header>
  )
}
