import React from "react"

import Layout from "../components/layouts/layout"
import SEO from "../components/seo"

import ChartImg from '../assets/img/Chart-Animated-Fixed-Size.svg'
import As1 from '../assets/img/as1.svg'
import As2 from '../assets/img/as2.svg'
import As3 from '../assets/img/as3.svg'
import As4 from '../assets/img/as4.svg'
import As5 from '../assets/img/as5.svg'
import As6 from '../assets/img/as6.svg'
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import Video from '../assets/img/video.png'

const IndexPage = () => (
    <Layout>
        <SEO title="DMS"/>
        <div className="slide gray introSlide">
            <div className="mainContainer fluid">
                <div className="introSlideWrapper">
                    <div className="textPart">
                        <h2 className="slideTitle">Not sure if DMS Cloud will meet your requirements?</h2>
                        <p>
                            Get a 3-month trial license. Ask your distributor for 3-months free trial license and check it out.
                        </p>
                        <div className="btnHolder">
                            <Button variant="contained" color="primary">
                                Try free demo
                            </Button>
                            <Button color="primary">or get a 3-month trial</Button>
                        </div>
                    </div>
                    <div className="imgPart">
                        <img src={Video} alt="" className='introSlideImg'/>
                    </div>
                </div>
            </div>
        </div>
        <div className="slide aboutSlide">
            <div className="mainContainer fluid">
                <h2 className="slideTitle text-center">Start acquiring data and share with everybody</h2>
                <p className="subTitle text-center">It deosn’t matter what are you using, PC, Laptop or cellphone or even operating system. Just open your best internet browser and start watch in a minute with a few clicks. Easy as DMS.</p>
                <ul className="asList">
                    <li className="asListItem">
                        <div className="asListItemContent">
                            <div className="imgHolder">
                                <img src={As1} alt=""/>
                            </div>
                            <div className="title">Customer's account</div>
                            <div className="text">
                                Are you doing a well service and your customer wants to see the progress? Don't wait until he arrives to job location or don't let him wait until you are ready to start a job. Create an customer's account, send him credentials and let him stay at warm office or home and watch data online.
                            </div>
                        </div>
                    </li>
                    <li className="asListItem">
                        <div className="asListItemContent">
                            <div className="imgHolder">
                                <img src={As2} alt=""/>
                            </div>
                            <div className="title">Engineer's account</div>
                            <div className="text">
                                Are you having many jobs at a short time and your engineers cannot get to job location on time or you just don't have enough man power? You can postpone some jobs or let them sit at your company office taking control on all your jobs simultanously. With engineer's account your engineer will be able to create customer's accounts and staying in contact with operators remotely manage a job by downloading CSV job data and doing job designs or simulations, even with 3rd party software.
                            </div>
                        </div>
                    </li>
                    <li className="asListItem">
                        <div className="asListItemContent">
                            <div className="imgHolder">
                                <img src={As3} alt=""/>
                            </div>
                            <div className="title">One job password</div>
                            <div className="text">
                                Do you want to give an access to currently performing job but don't have a time or possibility to create an account now? Or maybe you don't want to create any account for that user? No problem, use One Job Password which is generated automatically after job start. Job operator can share that password by sending a message, picture or just call the end user.
                            </div>
                        </div>
                    </li>
                    <li className="asListItem">
                        <div className="asListItemContent">
                            <div className="imgHolder">
                                <img src={As4} alt=""/>
                            </div>
                            <div className="title">Data security</div>
                            <div className="text">
                                DMS Cloud is designed on Amazon AWS, the one of the most stable servers located in whole world. Separate customer databases and automatic backups ensure the security of your data. Additional account settings ensure that person who you share data has access only to this what is designated to him.
                            </div>
                        </div>
                    </li>
                    <li className="asListItem">
                        <div className="asListItemContent">
                            <div className="imgHolder">
                                <img src={As5} alt=""/>
                            </div>
                            <div className="title">Easy user interface</div>
                            <div className="text">
                                If you dont like to read user manuals this is for you. Very intuitive User Interface allows you to start working with DMS Cloud within a minute. With help of window templates users can start watching data in a few click.
                            </div>
                        </div>
                    </li>
                    <li className="asListItem">
                        <div className="asListItemContent">
                            <div className="imgHolder">
                                <img src={As6} alt=""/>
                            </div>
                            <div className="title">Easy setup process</div>
                            <div className="text">
                                Setup process is limited to two steps: online registration and selecting channels to be sent to DMS Cloud. No additional configuration or settings.
                            </div>
                        </div>
                    </li>
                </ul>
            </div>
        </div>
        <div className="slide howItWorksSlide">
            <div className="mainContainer fluid">
                <h2 className="slideTitle text-center">How it works</h2>
                <div className="howItWorksImg">
                    <img src={ChartImg} alt=""/>
                </div>
            </div>
        </div>
        <div className="slide formSlide">
            <div className="mainContainer fluid">
                <div className="formSlideWrapper">
                    <div className="textPart">
                        <h2 className="slideTitle">Not sure if DMS Cloud will meet your requirements?</h2>
                        <p>
                            Get a 3-month trial license. Ask your distributor for 3-months free trial license and check it out.
                        </p>
                        <p>
                            Still, have any questions? <a href="#">Just ask</a> or check <a href="#">DMS Cloud User Manual</a>
                        </p>
                    </div>
                    <div className="formPart">
                        <div className="formTitle">Apply for a 3-month free trial</div>
                        <form action="">
                            <TextField
                                label="Your name"
                                variant="outlined"
                                fullWidth
                                margin={'normal'}
                            />
                            <TextField
                                label="Company type"
                                variant="outlined"
                                fullWidth
                                margin={'normal'}
                            />
                            <TextField
                                label="Email"
                                variant="outlined"
                                fullWidth
                                margin={'normal'}
                            />
                            <div className="btnHolder">
                                <Button variant="contained" color="primary" fullWidth>
                                    Get license
                                </Button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
        <div className="manualBlock">
            <div className="mainContainer fluid">
                <a href="#" className="getManualLink">
                    <span className="icoManual"/>
                    <span className="caption">See our DMS Cloud User Manual</span>
                    <span className="icoArrow"/>
                </a>
            </div>
        </div>
    </Layout>
)

export default IndexPage
