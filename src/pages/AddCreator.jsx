import React, {useState} from 'react';
import instaIcon from '../assets/icons/instagram-icon.png'
import twitterIcon from '../assets/icons/twitter-icon.png'
import ytIcon from '../assets/icons/yt-icon.png'
import { supabase } from '../client';



const AddCreator = ()=> {
  
    //a form with name, image, description.youtube link,twitter, instagram
    const [creator,setCreator]=useState({name:'',instaURL:'',twitterURL:'',ytURL:'',description:'',imgURL:''})
    //fetch the creators from the database
    const[creators,setCreators]=useState([])

    const handleChange=(e)=>{
       
        const name=e.target.name;
        const value=e.target.value;
        setCreator({...creator,[name]:value})
    };
    
    const  handleSubmit= async (e) =>{
        e.preventDefault()
        if(creator.name && 
            creator.imgURL &&
             creator.description &&
             (creator.instaURL ||creator.twitterURL ||creator.ytURL)
        ){
            try{
            const{data,error}=await supabase.from('creators').insert({
                name:creator.name,
                description:creator.description,
                instagramURL:creator.instaURL,
                youtubeURL:creator.ytURL,
                twitterURL:creator.twitterURL,
                imageURL:creator.imgURL})
             setCreator({name:'',instaURL:'',twitterURL:'',ytURL:'',description:'',imgURL:''})
            }
            
            catch(error){
                console.log('error submitting to database')
                console.log(error)
            }
            //probably extract the id 0
            //route them to the newly created's page\
            
           
        }
    }
    return(
        <>
        
      
        
        
            <form>
                <div className='form'>
                <div className='form-control' >
                    <h2>Name</h2>
                    <label htmlFor='name'></label>
                    <input
                    type='text'
                    id='name'
                    name='name'
                    value={creator.name}
                    onChange={handleChange}
                    />
                </div>
                
                <div className='form-control' >
                    <h2>Image</h2>
                    <label htmlFor='description'></label>
                    <p>Provide a link to an image of your creator.Be sure to include the http://</p>
                    <input
                    type='text'
                    id='description'
                    name='description'
                    value={creator.description}
                    onChange={handleChange}
                    />
                </div>
                <div className='form-control' >
                    <h2>Description</h2>
                    <label htmlFor='imgURL'></label>
                    <p>Provide a description of the creator. Who are they? What makes them interestin?</p>
                    <input
                    type='text'
                    id='imgURL'
                    value={creator.imgURL}
                    name='imgURL'
                    onChange={handleChange}
                    />
                </div>
                <div className='form-control'>
                <h1>SOCIAL MEDIA LINKS</h1>
                 <p>Provide at least one of the creator's social media links</p>
                </div>
               
                

                <div className='form-control' >
                    <div className='social-media-header'>   
                         <img src={ytIcon}/>                     
                         <h2>YouTube</h2>
                    </div>
                    <label htmlFor='ytURL'></label>
                    <p>The creator's YouTube handle (without the @)</p>
                    <input
                    type='text'
                    id='ytURL'
                    value={creator.ytURL}
                    name='ytURL'
                    onChange={handleChange}
                    />
                </div>

                <div className='form-control' >
                    <div className='social-media-header'>   
                         <img src={twitterIcon}/>                     
                         <h2>Twitter</h2>
                    </div>
                    <label htmlFor='twitterURL'></label>
                    <p>The creator's Twitter handle (without the @)</p>
                    <input
                    type='text'
                    id='twitterURL'
                    value={creator.twitterURL}
                    name='twitterURL'
                    onChange={handleChange}
                    />
                </div>
                <div className='form-control' >
                    <div className='social-media-header'>   
                         <img src={instaIcon}/>                     
                         <h2>Instagram</h2>
                    </div>
                    <label htmlFor='instaURL'></label>
                    <p>The creator's Instagram handle (without the @)</p>
                    <input
                    type='text'
                    id='instaURL'
                    value={creator.instaURL}
                    name='instaURL'
                    onChange={handleChange}
                    />
                </div>
                 <div className='form-control' >
                <button id='submit-btn' className='form-control' onClick={handleSubmit} >SUBMIT</button>
                </div>
               
                </div>        
            </form>

        
        
        </>
    )

}


export default AddCreator