import React from 'react'
import "./feature.css"

const Feature = () => {
    return (
        <>
            <div className='feature-main-container'>
                <div className='feature-container'>
                    <div className='feature-heading'>
                        <h2><span className='feature-span'>Features </span>that makes app different!</h2>
                        <p className='feature-para'>Lorem Ipsum is simply dummy text of the printing and typese tting</p>
                        <p className='feature-para feature-para1'>indus orem Ipsum has beenthe standard dummy.</p>
                    </div>

                    <div className='feature-mobile-container'>
                        <div className='first-feature-box'>
                            <div>
                                <img src="http://kalanidhithemes.com/live-preview/landing-page/apper/all-demo/01-app-landing-page-defoult/images/secure_data.png" alt="images" />
                                <h4>Secure data</h4>
                                <p>Lorem Ipsum is simply dummy text of the printing and type setting indus ideas.</p>
                            </div>
                            <div>
                                <img src="http://kalanidhithemes.com/live-preview/landing-page/apper/all-demo/01-app-landing-page-defoult/images/functional.png" alt="images" />
                                <h4>Fully functional</h4>
                                <p>Simply dummy text of the printing and typesetting indus lorem Ipsum is dummy.</p>
                            </div>
                        </div>
                        <div className='feature-mobile'>
                            <img src='http://kalanidhithemes.com/live-preview/landing-page/apper/all-demo/01-app-landing-page-defoult/images/features_frame.png' alt='images' />
                        </div>
                        <div className='last-feature-box'>
                            <div>
                                <img src="http://kalanidhithemes.com/live-preview/landing-page/apper/all-demo/01-app-landing-page-defoult/images/live-chat.png" alt="images" />
                                <h4>Live chat</h4>
                                <p>Lorem Ipsum is simply dummy text of the printing and type setting indus ideas.</p>
                            </div>
                            <div>
                                <img src="http://kalanidhithemes.com/live-preview/landing-page/apper/all-demo/01-app-landing-page-defoult/images/support.png" alt="images" />
                                <h4>
                                    24-7 Support</h4>
                                <p>Simply dummy text of the printing and typesetting indus lorem Ipsum is dummy.</p>
                            </div>
                        </div>

                    </div>

                </div>

            </div>

        </>
    )
}

export default Feature