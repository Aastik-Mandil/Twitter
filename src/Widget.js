import React from 'react'
import "./Widget.css"
import { Search } from '@material-ui/icons'
import { TwitterTweetEmbed, TwitterTimelineEmbed, TwitterShareButton } from 'react-twitter-embed';

function Widget() {
    return (
        <div className="widget">
            <div className="widget__input">
                <Search className="widget__searchIcon" />
                <input type="text" placeholder="Search Twitter" />
            </div>
            <div className="widget__widgetContainer">
                <h2>What's happening</h2>
                <TwitterTweetEmbed tweetId={"855855117786055040"} />
                <TwitterTimelineEmbed sourceType="profile" screenName="cleaverqazi" options={{ height: 400 }} />
                <TwitterShareButton url={""} options={{text:"Reactjs is awesome",via:"Cleaver Programming"}} />
            </div>
        </div>
    )
}

export default Widget
