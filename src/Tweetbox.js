import React, { useState } from 'react'
import "./Tweetbox.css"
import { Button, Avatar } from '@material-ui/core'
import db from './firebase';

function Tweetbox() {
    const [tweetMessage, setTweetMessage] = useState("");
    const [tweetImage, setTweetImage] = useState("")

    const sendTweet = (e) => {
        e.preventDefault();
        db.collection('posts').add({ displayName: "Rafeh Quazi", userName: "cleaverProgrammer", verified: true, text: tweetMessage, avatar: "", image: tweetImage });
        setTweetMessage("");
        setTweetImage("");
    }

    return (
        <div className="tweetbox">
            <form>
                <div className="tweetbox__input">
                    <Avatar src="" alt="" />
                    <input type="text" placeholder="What's happening" value={tweetMessage} onChange={e => setTweetMessage(e.target.value)} />
                </div>
                <input type="text" placeholder="Optional: Enter image url" className="tweetbox__imageInput" value={tweetImage} onChange={e => setTweetImage(e.target.value)} />
                <Button type="submit" onClick={sendTweet} className="tweetbox_tweetButton">Tweet</Button>
            </form>
        </div>
    )
}

export default Tweetbox
