import { useEffect, useState } from 'react';
import './css/Discover.css';
import Feed from './Feed';
import jquery from 'jquery';
import { CSSTransition } from 'react-transition-group';

const Discover = (props) => {

    const classes = props.className+" p-4 discover__feeds";

    const[feeds, setFeeds] = useState([]);
    useEffect(() => {
        jquery.get({
            url: 'https://api.facthunt.in/fostergem/v1/post/list/public',
            success: (data) => {
                setFeeds(data.content);
            }
        });
    }, []);

    return <div className={classes}>
        <div className='discover_feeds__text'>Discover</div>
        
        <div className='discovery__feeds__display'>  
        {feeds.length == 0 && "Uh-oh! Can't find any data!"}   
        {feeds.length != 0 && feeds.map(d =>
            <Feed  imgUrl={d.coverImageUrl} description={d.title} userAvatar={d.user.profilePic} username={d.user.fname+' '+d.user.lname} publishedOn={new Date(d.date).toLocaleDateString('en-IN', { weekday: 'long', year: 'numeric', month: 'short', day: 'numeric' })}/>
        )}
        </div>
    </div>

}

export default Discover;