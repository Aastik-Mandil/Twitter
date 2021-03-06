import React, { useState, useEffect } from 'react'
import "./Feed.css"
import Tweetbox from './Tweetbox'
import Post from './Post'
import db from './firebase';
import FlipMove from 'react-flip-move';

function Feed() {
    const [posts, setPosts] = useState([]);
    useEffect(() => {
        db.collection('posts').onSnapshot(snapshot => {
            setPosts(snapshot.docs.map(doc => doc.data()));
        });
    }, [posts]);
    return (
        <div className="feed">
            <div className="feed__header">
                <h2>Home</h2>
            </div>
            <Tweetbox />
            <FlipMove>
                {posts.length !== 0 && posts.map(post => (
                    <Post displayName={post.displayName} username={post.username} verified={true} text={post.text} avatar={post.avatar} image={post.image} key={post.text} />
                ))}
                <Post displayName="Sonny Sangh" username="ssssangha" verified={true} text="YOOO. its working" avatar="" image="" />
                <Post displayName="Sonny Sangh" username="ssssangha" verified={true} text="YOOO. its working" avatar="" image="" />
                <Post displayName="Sonny Sangh" username="ssssangha" verified={true} text="YOOO. its working" avatar="" image="" />
                <Post displayName="Sonny Sangh" username="ssssangha" verified={true} text="YOOO. its working" avatar="" image="" />
                <Post displayName="Sonny Sangh" username="ssssangha" verified={true} text="YOOO. its working" avatar="" image="" />
                <Post displayName="Sonny Sangh" username="ssssangha" verified={true} text="YOOO. its working" avatar="" image="" />
            </FlipMove>
        </div>
    )
}

export default Feed
