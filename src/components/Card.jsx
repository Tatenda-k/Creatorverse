import React from 'react'
import {Link} from 'react-router-dom'
import infoIcon from '../assets/icons/information.png';
import instaIcon from '../assets/icons/instagram-icon.png'
import twitterIcon from '../assets/icons/twitter-icon.png'
import editIcon from '../assets/icons/edit.png'
import ytIcon from '../assets/icons/yt-icon.png'



const CreatorCard=(props)=>{

    

    const backgroundImg = {
        backgroundImage:`url(${props.imageURL})`,
        backgroundSize:'cover',
        backgroundPosition:'center',
        backgroundRepeat:'no-repeat'
    }
        const twitterUrl = `https://x.com/${props.twitterURL}`
        const instagramUrl =`https://www.instagram.com/${props.instagramURL}`
        const youtubeUrl =`https://www.youtube.com/${props.youtubeURL}`

    
return(
    <div className='card' style={backgroundImg}>
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
        {props.instagramURL &&
        <a href={instagramUrl} target="_blank">
            <img src={instaIcon}  />
        </a> 
        }
        {props.twitterURL &&
        <a href = {twitterUrl} target="_blank">
            <img src={twitterIcon}/>  
        </a>
        }
        {props.youtubeURL &&
        <a href={youtubeUrl} target="_blank">
             <img src={ytIcon}/>
        </a>
        }
     
     
    </div>    
    <div>
    <p>{props.description}</p>
    </div>


   </div >
)

}
export default CreatorCard