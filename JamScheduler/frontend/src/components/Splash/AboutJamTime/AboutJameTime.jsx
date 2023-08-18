import './AboutJamTime.css'


const AboutJamTime = () => {


    return (
        <div className="mainpage-right-side-container">
            <div className='app-info-container'>
                <div className="app-info-title">About Jam Time</div>
                <div className="app-info">
                    Jam Time is a musicians social network used to find jam nights or meet fellow jammers!
                </div>
            </div>
            <div className="languages-container">
                <div className="languages-row">
                    <span className="language">Ruby</span>
                    <span className="language">Rails</span>
                </div>
                <div className="languages-row">
                    <span className="language">React</span>
                    <span className="language">Redux</span>
                    <span className="language">NPM</span>
                    <span className="language">Javascript</span>
                </div>
                <div className="languages-row">
                    <span className="language">HTML</span>
                    <span className="language">CSS</span>
                </div>
                <div className="languages-row">Hosted using Render</div>
                <div className="year-container">
                    <span className="ezconnex-year">Jam Time Corporation © 2023</span>
                </div>
            </div>
        </div>
    )
}

export default AboutJamTime;