import React, {useState} from 'react';
import { supabase } from '../client';
import CreatorForm from '../components/CreatorForm'
import { useNavigate } from 'react-router-dom';

const AddCreator = ()=> {
    
            const navigate=useNavigate()
            const [buttonState,setButtonState]=useState(true)
            const [creator,setCreator]=useState({name:'',
                    instaURL:'',
                    twitterURL:'',
                    ytURL:'',
                    description:'',
                    imgURL:''})

        const handlechange=(e)=>{
        
        const name=e.target.name;
        const value=e.target.value;
        
        setCreator(prevCreator=>{
            return {
                ...prevCreator,
                [name]:value
            }
        })
        if(creator.name && 
            creator.imgURL &&
             creator.description &&
             (creator.instaURL ||creator.twitterURL ||creator.ytURL)
        ){
            setButtonState(false)
        }
        else{
            setButtonState(true)
        }
    }
        
    const  handleSubmit= async (e) =>{
        e.preventDefault()
        if(!buttonState)
            {
            try{
            await supabase.from('creators').insert({
                name:creator.name,
                description:creator.description,
                instagramURL:creator.instaURL,
                youtubeURL:creator.ytURL,
                twitterURL:creator.twitterURL,
                imageURL:creator.imgURL})
                setCreator({name:'',instaURL:'',twitterURL:'',ytURL:'',description:'',imgURL:''})
                navigate('/')
             
            }
            
            catch(error){
                navigate('/error')
            }
          
        }
    }

    const disabledStyle={
        backgroundColor:'#ccc',
        color:'#666',
        cursor:'not-allowed'

    }
    return(
        <>     
                <div className='form'>
                    <CreatorForm  creator={creator}  handlechange={handlechange}/>

                    <div className='form-control' >
                        <button disabled={buttonState}  style={buttonState ? disabledStyle: {}}
                         id='submit-btn' className='form-control' onClick={handleSubmit}  >                            
                            SUBMIT
                         </button>
                    </div>  
                </div>        
        </>
    )

}


export default AddCreator