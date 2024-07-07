import React,{useState,useEffect} from 'react'
import {supabase} from '../client'
import {Link} from 'react-router-dom'
import instaIcon from '../assets/icons/instagram-icon.png'
import twitterIcon from '../assets/icons/twitter-icon.png'
import ytIcon from '../assets/icons/yt-icon.png'
import { useParams,useNavigate } from 'react-router-dom'


function ViewCreator(){
        const navigate=useNavigate()
           
        const {creatorId}=useParams()
        let [creator,setCreator]=useState({})
    
        useEffect(()=>{
        async function fetchCreator(){
            try {
                let {data}=await supabase.from('creators').select().eq('id',Number(creatorId))
                
               setCreator(data[0])
               
                
               if(!data[0]){
                    navigate('/error')
               }

            } catch (error) {
                
                navigate('/error')
                
            }
           
        }
        fetchCreator()
    },[]) 

       async  function deleteCreator(){
            await supabase.from('creators').delete().eq('id',creatorId)

        }
        
        const twitterUrl = `https://x.com/${creator.twitterURL}`
        const instagramUrl =`https://www.instagram.com/${creator.instagramURL}`
        const youtubeUrl =`https://www.youtube.com/${creator.youtubeURL}`
  
    return(
    <>

    <div id='view-creator-div' >
        <div id='picture-and-info'>   
            <img id='view-creator-img'src={creator.imageURL}/>
            
            <div id='view-info'>
                <h1>{creator.name}</h1>
                <p>{creator.description}</p>

                {creator.instagramURL &&
                <div className='icon-and-handle'>
                    <img src={instaIcon}/>
                    <a href={instagramUrl}
                    target="_blank">
                        <p>{creator.instagramURL}</p>
                    </a>
                </div>
                }

                {creator.youtubeURL &&
                <div className='icon-and-handle'>
                    <img src={ytIcon}/>
                    <a href ={youtubeUrl}>                   
                    <p>{creator.youtubeURL}</p>
                    </a>
                </div>
                }

                        {creator.twitterURL &&
                <div className='icon-and-handle'>


                    <img src={twitterIcon}/>
                    <a href ={twitterUrl}>
                    <p>{creator.twitterURL}</p>
                </a>
                </div>
                }

            </div>
        </div>
        <div id='view-btns'>
            <button >
                <Link to={`/edit/${creatorId}`}>       
                EDIT
                </Link>
            </button>
            <button>
                <Link onClick={deleteCreator} to={`/`}>
                DELETE
                </Link>
            </button>
    </div>
        </div>        
    </>
    )
}

export default ViewCreator