import React from 'react'
import {Link} from 'react-router-dom'
import infoIcon from '../assets/icons/info.png';
import instaIcon from '../assets/icons/instagram-icon.png'
import twitterIcon from '../assets/icons/twitter-icon.png'
import editIcon from '../assets/icons/edit.png'
import ytIcon from '../assets/icons/yt-icon.png'



const CreatorCard=(props)=>{
   

    
return(
    <div className='card'>
    <div className='card-row-1' >
        <h3>{props.name}</h3>
        
        <Link to={`view/${props.id}`}>
            <img src={infoIcon}/>
        </Link>
        <Link to={`edit/${props.id}`}>
        <img src={editIcon }/>
        </Link>
        
    </div>
    <div className='social-media-icon'>
     <img src={instaIcon}/>
     <img src={twitterIcon}/>
     <img src={ytIcon}/>
     
    </div>    
    <div>
    <p>{props.description}</p>
    </div>


   </div >
)

}
export default CreatorCard