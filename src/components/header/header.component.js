import { Link } from "gatsby"
import React from "react"
import Logo from '../../assets/img/logo-mini.svg'
import Icon from '../../assets/img/round-manual-24px.svg'

const HeaderComponent = () => (
  <header className='mainHeader'>
      <div className="mainContainer fluid">
          <div className="headerWrapper">
              <div className="logoHolder">
                  <img src={Logo} alt="" className="logoImg"/>
                  <span className="logoText">DMS Cloud</span>
              </div>
              <div className="meinMenuHolder">
                  <ul className="mainMenu">
                      <li className="mainMenuItem hasIcon"><a href="#"><img src={Icon} alt=""/><span className="caption">User Manual</span></a></li>
                      <li className="mainMenuItem"><a href="#">Home</a></li>
                  </ul>
              </div>
          </div>
      </div>
  </header>
)

export default HeaderComponent
