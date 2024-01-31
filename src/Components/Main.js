import React from "react";

const Main = () => {
    return (
        <div className="main">
            <div className="col col1">
                <h2>Your Movies</h2>
                <p>In here, You can select whatever movie you want to watch.<br/> If you want to select more, just click the button.</p>
                <button type="button">More</button>
                <div className="subscription-container">
                    <div className="subscription subscription1">
                        <h2>Super</h2><br/>
                        <ul>
                            <li>Video Quality : 1080p</li>
                            <li>Ads : Ad-free streaming</li>
                            <li>Audio Quality : Stereo</li>
                            <li>No of Screens : 2</li>
                        </ul>
                        <button type="button">$12</button>
                    </div>
                    <div className="subscription subscription2">
                        <h2>Premium</h2><br/>
                        <ul>
                            <li>Video Quality : 2160p</li>
                            <li>Ads : Ad-free streaming</li>
                            <li>Audio Quality : Dolby Atmos</li>
                            <li>No of Screens : 3</li>
                        </ul>
                        <button type="button">$17</button>
                    </div>
                </div>
            </div>
            <div className="col">
                <div className="card card1"></div>
                <div className="card card2"></div>
                <div className="card card3"></div>
                <div className="card card4"></div>
                <div className="card card5"></div>
                <div className="card card6"></div>
            </div>
        </div>
    );
}
export default Main;