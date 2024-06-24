import React,{useState,useEffect} from 'react'
import {supabase} from '../client'

import {Link} from 'react-router-dom'
import infoIcon from '../assets/icons/info.png';
import instaIcon from '../assets/icons/instagram-icon.png'
import twitterIcon from '../assets/icons/twitter-icon.png'
import editIcon from '../assets/icons/edit.png'
import ytIcon from '../assets/icons/yt-icon.png'
import fraser from '../assets/icons/fraser.jpg'
import { useParams,useNavigate } from 'react-router-dom'

//clicking on the information button should take you hear
//handling user input, apostrophes, escape characters



function ViewCreator(){
           
             const {creatorId}=useParams()
    //          let  creator=null
    // //why was usseeffect not working
    //     // useEffect(()=>{
    //     // console.log('useeffect')
    // //     async function fetchCreator(){
    // //         try {
    // //             let {data,error}=await supabase.from('creators').select().eq('id',Number(creatorId))
                
    // //             data=data[0]
    // //             console.log('data')
    // //             console.log(data)
    // //         } catch (error) {
    // //             console.log(error)
    // //             throw new Error('failed to fetchdata')
    // //         }
           
    // //     }
    // //     fetchCreator()
    // // },[]) 
            
    //         async function fetchCreator(){
    //             try{
    //             let {data,error}=await supabase.from('creators').select().eq('id',Number(creatorId))
    //             creator=data[0]
    //             console.log(creator)
                
    //             }
    //             catch(error){
    //                 console.log('error')
    //                 console.log(error)
    //             }
                
    //         }
    //         fetchCreator()
    //    console.log(creator)
       const creator={
                name:'Brooke Fraser',
                description:'n 2005, prior to writing and preparing her follow-up album, Fraser went to Rwanda before visiting her World Vision sponsor children in Tanzania. Fraser wrote the song "Albertine" about a young genocide victim (named Albertine), whom she met while in Rwanda. This song became her second album',
                instagramURL:'@brooke',
                youtubeURL:'@brooke',
                twitterURL:'@brooke',
                imageURL:''}
    return(
    <>

    <div id='view-creator-div'>
        <div id='picture-and-info'>   
            <img id='view-creator-img'src={fraser}/>
            
            <div id='view-info'>
                <h1>{creator.name}</h1>
                <p>{creator.description}</p>
                {creator.instagramURL &&
                <div>
                    <img src={instaIcon}/>
                    <p>{creator.instagramURL}</p>
                </div>
                }

                        {creator.youtubeURL &&
                <div>
                    <img src={ytIcon}/>
                    <p>{creator.youtubeURL}</p>
                </div>
                }

                        {creator.twitterURL &&
                <div>
                    <img src={twitterIcon}/>
                    <p>{creator.twitterURL}</p>
                </div>
                }

            </div>
        </div>
        <div id='view-btns'>
            <button >
                EDIT
            </button>
            <button>
                DELETE
            </button>
    </div>


        

        </div>
    
    
    </>
    )
}

export default ViewCreator