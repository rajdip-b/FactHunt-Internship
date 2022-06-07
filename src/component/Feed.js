import { useState } from 'react';
import './css/Feed.css';
import { CSSTransition } from 'react-transition-group';

const Feed = (props) => {
    const[isMouseOver, setMouseOver] = useState(false);

    const toggleMouseOver = () => {
        setMouseOver(!isMouseOver);
    }
    // onMouseEnter={setMouseOver(true)} onMouseLeave={setMouseOver(false)} 
    const imgUrlParameter = 'url('+props.imgUrl+')';
    return <div onMouseLeave={toggleMouseOver} onMouseEnter={toggleMouseOver} className="feed">
        <div className={`${!isMouseOver ? 'feed__image' : 'feed__image_hover'}`} style={{ backgroundImage: imgUrlParameter }}></div>
        <div className={`${!isMouseOver ? 'feed__description' : 'feed__description_hover'}`}>{props.description}</div>
        <div className='feed__info'>
            <img className='feed__info__user_img' src={props.userAvatar} height={30}/>
            <span className='feed__info__user_name'>{props.username}</span>
            <span className='feed__info__published_on'>{props.publishedOn}</span>
        </div>
    </div>
}

export default Feed;