import React from 'react'
import "./Task.css"

const Task = () => {
    return (
        <>
            <div className='task-main-container'>
                <div className='task-container'>
                    <div className='left-task-container'>
                        <div className='left'>
                            <img src='http://kalanidhithemes.com/live-preview/landing-page/apper/all-demo/01-app-landing-page-defoult/images/about-frame.png' alt='images' />
                            <img src='http://kalanidhithemes.com/live-preview/landing-page/apper/all-demo/01-app-landing-page-defoult/images/about-screen.png' alt='images' />
                        </div>
                    </div>
                    <div className='main-right-task-container'>

                        <div className='right-task-container'>
                            <h2>Some awesome words <span>about app.</span></h2>
                            <p className='task-para-style'>Lorem Ipsum is simply dummy text of the printing and typesetting industry lorem Ipsum has been the industrys standard dummy text ever since the when an unknown printer took a galley of type and. Lorem ipsum dolor sit amet.</p>
                        </div>

                        <ul className='task'>
                            <div>
                                <div>
                                    <img src='http://kalanidhithemes.com/live-preview/landing-page/apper/all-demo/01-app-landing-page-defoult/images/download.png' alt='images' />
                                </div>
                                <div>
                                    <li className='task-list'><span>17</span><span>M+</span>
                                        <p>Download</p>
                                    </li>
                                </div>
                            </div>

                            <div>
                                <div>
                                    <img src='http://kalanidhithemes.com/live-preview/landing-page/apper/all-demo/01-app-landing-page-defoult/images/followers.png' alt='images' />
                                </div>
                                <div>
                                    <li className='task-list'><span>8</span><span>M+</span>
                                        <p>Followers</p>
                                    </li>
                                </div>
                            </div>

                            <div>
                                <div>
                                    <img src='http://kalanidhithemes.com/live-preview/landing-page/apper/all-demo/01-app-landing-page-defoult/images/reviews.png' alt='images' />
                                </div>
                                <div>
                                    <li className='task-list'><span>2300</span><span>+</span>
                                        <p>Reviews</p>
                                    </li>
                                </div>
                            </div>
                            <div>
                            <div>
                                <img src='http://kalanidhithemes.com/live-preview/landing-page/apper/all-demo/01-app-landing-page-defoult/images/countries.png' alt='images' />
                            </div>
                            <div>
                                <li className='task-list'><span>150</span><span>+</span>
                                    <p>Countries</p>
                                </li>
                            </div>
                            </div>

                        </ul>

                        <div className='task-btn'>start free trail

                        </div>
                    </div>

                </div>

            </div>

        </>
    )
}

export default Task