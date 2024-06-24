import React, {useState,useEffect} from 'react';
import instaIcon from '../assets/icons/instagram-icon.png'
import twitterIcon from '../assets/icons/twitter-icon.png'
import ytIcon from '../assets/icons/yt-icon.png'
import { supabase } from '../client';
import { useParams,useNavigate } from 'react-router-dom'

//add a button for save, and one for leave

const EditCreator = ()=> {
        const navigate=useNavigate()
        const {creatorId}=useParams()
        //i don't think we need useState here
        // const[data,setData]=useState(null)
        //a form with name, image, description.youtube link,twitter, instagram
        
        const [creator,setCreator]=useState({name:'',
                    instaURL:'',
                    twitterURL:'',
                    ytURL:'',
                    description:'',
                    imgURL:''})


        useEffect(()=>{
        async function fetchCreator(){
            try {
                let {data,error}=await supabase.from('creators').select().eq('id',Number(creatorId))
                
                data=data[0]
                console.log(data)
                
                //refactor the data we got so we can change it's state
                const currentCreator={
                    name:data.name,
                    instaURL:data.instagramURL,
                    twitterURL:data.twitterURL,
                    ytURL:data.youtubeURL,
                    description:data.description,
                    imgURL:data.imageURL

                }
               setCreator(currentCreator)
                // creator.name=c     
                // creator.instaURL=data.instagramURL     
                // creator.twitterURL=data.twitterURL     
                // creator.ytURL=data.youtubeURL     
                // creator.description=data.description     
                // creator.imgURL=data.imageURL  
                console.log(creator)   
            } catch (error) {
                console.log(error)
                throw new Error('failed to fetchdata')
            }
           
        }
        fetchCreator()
    },[])
   
  
    

    const handleChange=(e)=>{
        console.log(creator)
       
        const name=e.target.name;
        const value=e.target.value;
        setCreator({...creator,[name]:value})
    };
    const handleDelete=async(e)=>{
        e.preventDefault()
        try{
        const response=await supabase.from('creators').delete().eq('id',creatorId)
        navigate("/")
        }
        catch(error){
            console.log(error)
        }

        //redirect to home page
    }
    
    const  handleSubmit= async (e) =>{
        e.preventDefault()
        if(creator.name && 
            creator.imgURL &&
             creator.description &&
             (creator.instaURL ||creator.twitterURL ||creator.ytURL)
        ){
            try{
                const {error}=await supabase
                .from('creators')
                .update({
                    name:creator.name,
                    description:creator.description,
                    instagramURL:creator.instaURL,
                    youtubeURL:creator.ytURL,
                    twitterURL:creator.twitterURL,
                    imageURL:creator.imgURL})
                    .eq('id',creatorId)
            
            //  setCreator({name:'',instaURL:'',twitterURL:'',ytURL:'',description:'',imgURL:''})
            //updatae database
            //redirect to view creator
            navigate(`/creators/view/${creatorId}`)
            }
            
            catch(error){
                console.log('error updating to database')
                console.log(error)
            }
            //probably extract the id 0
            //route them to the newly created's page\
            
           
        }
    }
    return(
        <>
        
      
        
        <div className='form'>
            <form>
                <div className='form-control' >
                    <h3>Name</h3>
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
                    <h3>Image</h3>
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
                    <h3>Description</h3>
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
                <h2>SOCIAL MEDIA LINKS</h2>
                 <p>Provide at least one of the creator's social media links</p>
                </div>
               
                

                <div className='form-control' >
                    <div className='social-media-header'>   
                         <img src={ytIcon}/>                     
                         <h3>YouTube</h3>
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
                         <h3>Twitter</h3>
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
                         <h3>Instagram</h3>
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
                <div>
                    <button className='edit-btn' onClick={handleSubmit} >SUBMIT</button>
                    <button  className='edit-btn' onClick={handleDelete} >DELETE</button>
                </div>
                
               
                
            </form>

        </div>
        
        </>
    )

}


export default EditCreator