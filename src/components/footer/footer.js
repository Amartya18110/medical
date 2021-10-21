import React from 'react'
import MailOutlineIcon from '@material-ui/icons/MailOutline';
import PhoneIcon from '@material-ui/icons/Phone';
import FacebookIcon from '@material-ui/icons/Facebook';
import "./footer.css"


const Footer=()=> {
    return (
        <div className="footerdiv">
            <div className="footerMain">
                <div className="footer_con">
                    <h3>Contact Us</h3>
                    <div className="emailDiv">
                    <MailOutlineIcon />
                    <p>clicksagnik@gmail.com</p>
                    </div>
                    <div className="phoneDiv">
                    <PhoneIcon />
                    <p>+91-7076103394</p>
                    </div>
                </div>
                <div className="footer_soci">
                    <h3>Social</h3>
                    <div className="facebookIcon">
                    <FacebookIcon />
                    <p><a href="https://meet.google.com/zcc-efce-stn" rel="noreferrer" target="_blank">facbook</a></p>
                    </div>
                </div>
                <div className="footer_team">
                    <h3>About Team</h3>
                    <p>Sagnik Biswas</p>
                    <p>Kajal Ghosh</p>
                    <p>Rahul Banik</p>
                    <p>Amartya Barman</p>
                </div>
            </div>
            <div className="copyIcon">
            <span>&#169;</span><p>All rights are reserved</p>
            </div>
        </div>
    )
}

export default Footer;