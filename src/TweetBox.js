import React, { useState } from 'react';
import './TweetBox.css'
import Button from '@mui/material/Button';
import Avatar from '@mui/material/Avatar';
import db from './firebase'

function TweetBox() {
    const [tweetMessage, setTweetMessage] = useState('');
    const [tweetImage, setTweetImage] = useState('');

    const sendTweet = (e) => {
        e.preventDefault();

        db.collection('posts').add({
            displayName: 'Shakir Ahmed',
            username: 'shakir1738',
            verified: true,
            text: tweetMessage,
            image: tweetImage,
            avatar: "https://m.media-amazon.com/images/I/51llCzz+FEL._AC_UF894,1000_QL80_.jpg"
        })
        setTweetMessage("");
        setTweetMessage("");
    }

    return (
        <div className='tweetBox'>
            <form>
                <div className='tweetBox__input'>
                    <Avatar />
                    <input 
                        onChange={(e) => setTweetMessage(e.target.value)}
                        value={tweetMessage} 
                        placeholder="What's happening?" 
                        type='text'>
                    </input>
                </div>
                <input 
                onChange={(e) => setTweetImage(e.target.value)}
                value={tweetImage} 
                placeholder="Optional: Enter image URL" type='text' 
                className='tweetBox__imageInput' />
                <Button onClick={sendTweet} type='submit' className='tweetBox__tweetButton'>Tweet</Button>
            </form>
        </div>
    )
}

export default TweetBox