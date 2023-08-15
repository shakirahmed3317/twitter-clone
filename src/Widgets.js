import React from 'react';
import './Widgets.css'
import SearchIcon from '@mui/icons-material/Search';
import { 
    TwitterTimelineEmbed, 
    TwitterShareButton, 
    TwitterTweetEmbed 
} from 'react-twitter-embed';

function Widgets() {
    return (
        <div className='widgets'>
            <div className='widgets__input'>
                <SearchIcon className='widgets__searchIcon' />
                <input placeholder='Search Twitter' type='text'/>
            </div>

            <div className='widgets__widgetContainer'>
                <h2>What's happening</h2>

                <TwitterTweetEmbed tweetId={"1691194985813602304"} />

                <TwitterTimelineEmbed 
                sourceType='profile'
                screenName='NASA'
                options={{ height: 400 }}
                />

                <TwitterShareButton 
                url={'https://twitter.com'} 
                options={{ text: "react js project", via: "@shakir1738" }}
                />
            </div>
        </div>
    )
}

export default Widgets