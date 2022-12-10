import React from 'react'
import "./MobOpt.css"

const MobOpt = () => {
    return (
        <>
            <div className='mob-container'>

                <div className='left-container'>
                <div>
                    <h1 className='heading-style'>
                        Best way to <span className='chng-clr'>manage your customers.</span>
                    </h1>
                </div>
                <div className='dummy-text'>
                    <p>
                    Lorem Ipsum is simply dummy text of the printing and setting indus orem Ipsum has been the industrys.
                    </p>
                </div>
                <div className='box-div'>
                    <p className='box'>
                        <img src="http://kalanidhithemes.com/live-preview/landing-page/apper/all-demo/01-app-landing-page-defoult/images/appstore_blue.png" alt="images"/>
                        <img src="http://kalanidhithemes.com/live-preview/landing-page/apper/all-demo/01-app-landing-page-defoult/images/appstore_white.png" alt="images"/>
                    </p>
                    <p className='box'>
                        <img src='http://kalanidhithemes.com/live-preview/landing-page/apper/all-demo/01-app-landing-page-defoult/images/googleplay_blue.png' alt='images'/>
                        <img src='https://kalanidhithemes.com/live-preview/landing-page/apper/all-demo/01-app-landing-page-defoult/images/googleplay_white.png' alt='images'/>
                    </p>
                </div>
                <div className="profile-logo-container">
                    <div className='profile-logo'>
                    <img className='logo-image1' src='http://kalanidhithemes.com/live-preview/landing-page/apper/all-demo/01-app-landing-page-defoult/images/used01.png' alt='imagelogo'/>
                    <img className='logo-image2' src='http://kalanidhithemes.com/live-preview/landing-page/apper/all-demo/01-app-landing-page-defoult/images/used02.png' alt='imagelogo'/>
                    <img className='logo-image3' src='http://kalanidhithemes.com/live-preview/landing-page/apper/all-demo/01-app-landing-page-defoult/images/used03.png' alt='imagelogo'/>
                    <img className='logo-image4' src='http://kalanidhithemes.com/live-preview/landing-page/apper/all-demo/01-app-landing-page-defoult/images/used04.png' alt='imagelogo'/>     
                    </div>
                    <p className='logo-text'>12M +<span>used this app</span></p>
                </div>
                </div>
                <div className='right-container'>
                <div className='circle-box'>

                </div>
                    <img src='http://kalanidhithemes.com/live-preview/landing-page/apper/all-demo/01-app-landing-page-defoult/images/mobile_frame_svg.svg'
                        alt='images'
                    />
                </div>
            </div>

        </>
    )
}

export default MobOpt