import { Link } from "gatsby"
import React from "react"
import Logo from '../../assets/img/logo-big.svg'

const FooterComponent = () => (
    <footer className='mainFooter'>
        <div className="mainContainer fluid">
            <div className="footerWrapper">
                <div className="footerBlock">
                    <div className="footerLogo">
                        <img src={Logo} alt=""/>
                    </div>
                </div>
                <div className="footerBlock">
                    <div className="fbTitle">Frac Controls</div>
                    <a href="www.fraccontrols.com">www.fraccontrols.com</a>
                </div>
                <div className="footerBlock">
                    <div className="fbTitle">United States</div>
                    <div className="fbAddressBlock">
                        <p>1544 Sawdust Rd, Ste 301</p>
                        <p>The Woodlands, TX, USA</p>
                        <p>77380</p>
                    </div>
                    <div className="fbAddressBlock">
                        <p>Call (866) 203-7744</p>
                        <p>info@fraccontrols.com</p>
                    </div>
                </div>
                <div className="footerBlock">
                    <div className="fbTitle">Canada</div>
                    <div className="fbAddressBlock">
                        <p>9903 – 209 Street NW, Ste 2</p>
                        <p>Edmonton, Alberta, Canada</p>
                        <p>T5T 5X9</p>
                    </div>
                    <div className="fbAddressBlock">
                        <p>Call (780) 499-5716</p>
                        <p>info@fraccontrols.com</p>
                    </div>
                </div>
            </div>
            <div className="copyrightWrapper">
                <p className="copyright">&copy; 2020 Prime WSI Ltd.</p>
                <ul className="footerMenu">
                    <li className="footerMenuItem">
                        <a href="#">Terms</a>
                    </li>
                    <li className="footerMenuItem">
                        <a href="#">Privacy</a>
                    </li>
                    <li className="footerMenuItem">
                        <a href="#">Support</a>
                    </li>
                </ul>
            </div>
        </div>
    </footer>
)

export default FooterComponent