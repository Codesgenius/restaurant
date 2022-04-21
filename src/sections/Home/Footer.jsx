import React from 'react'
import '../css/footer.css'

const Footer = () => {
    return (
        <div className='footer'>
            <div className="container">
                <div className="footer-image"><img style={{ width: "100%", height: "100%" }} src="../../img/logo.png" alt="" /></div>

                <div className="footer-content">
                    <div className="support content-con">
                        <h3>Support</h3>
                        <a href="#"><p>Help</p></a>
                        <a href="#"><p>Advisories</p></a>
                        <a href="#"><p>Contact</p></a>
                        <a href="#"><p>Status</p></a>
                    </div>

                    <div className="company content-con">
                        <h3>Company</h3>
                        <a href="#"><p>About</p></a>
                        <a href="#"><p>Blog</p></a>
                        <a href="#"><p>Press</p></a>
                        <a href="#"><p>Team</p></a>
                    </div>

                    <div className="policies content-con">
                        <h3>Terms and Policies</h3>
                        <a href="#"><p>Policies</p></a>
                        <a href="#"><p>Terms of Use</p></a>
                        <a href="#"><p>Code of Conduct</p></a>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Footer