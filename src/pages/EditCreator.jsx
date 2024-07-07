import React, {useState,useEffect} from 'react';
import { supabase } from '../client';
import { useParams,useNavigate,Link } from 'react-router-dom'
import CreatorForm from '../components/CreatorForm'


const EditCreator = ()=> {
        const navigate=useNavigate()
        const {creatorId}=useParams()
        const [buttonState,setButtonState]=useState(false)
        
        const [creator,setCreator]=useState({name:'',
                    instaURL:'',
                    twitterURL:'',
                    ytURL:'',
                    description:'',
                    imgURL:''})

        useEffect(()=>{
        async function fetchCreator(){
            try {
                let {data}=await supabase.from('creators').select().eq('id',Number(creatorId))
                
                if(!data.length){
                    navigate('/error')
                }  
                data=data[0]              
                const currentCreator={
                    name:data.name,
                    instaURL:data.instagramURL,
                    twitterURL:data.twitterURL,
                    ytURL:data.youtubeURL,
                    description:data.description,
                    imgURL:data.imageURL
                }
               setCreator(currentCreator)
                
            } catch (error) {
                navigate('/error')                
            }
           
        }
        fetchCreator()
    },[])
   
  
    
    const handlechange=(e)=>{
       
        const name=e.target.name;
        const value=e.target.value;
        
        const updatedCreator={...creator,[name]:value}
        setCreator(updatedCreator)

        if(updatedCreator.name && 
            updatedCreator.imgURL &&
             updatedCreator.description &&
             (updatedCreator.instaURL ||updatedCreator.twitterURL ||updatedCreator.ytURL)
        ){
            setButtonState(false)
        }
        else{
            setButtonState(true)
        }
       
        
    };
    const handleDelete=async(e)=>{
        e.preventDefault()
        try{
        await supabase.from('creators').delete().eq('id',creatorId)
        navigate("/")
        }
        catch(error){
           navigate('/error')
        }

    }
    
    const  handleSubmit= async (e) =>{
        e.preventDefault()
        if(!buttonState){
            try{
                await supabase
                .from('creators')
                .update({
                    name:creator.name,
                    description:creator.description,
                    instagramURL:creator.instaURL,
                    youtubeURL:creator.ytURL,
                    twitterURL:creator.twitterURL,
                    imageURL:creator.imgURL})
                    .eq('id',creatorId)
                    navigate(`/view/${creatorId}`)            
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

                    <div className='form-control'  id='submit-delete-btns'>
                    <button className='edit-btn'  onClick={handleSubmit}  disabled={buttonState}  style={buttonState ? disabledStyle: {}} >                          
                            SUBMIT               
                    </button>
                    <button  className='edit-btn' onClick={handleDelete} >
                        <Link to={`/view/${creatorId}`}>
                            DELETE
                        </Link>
                    </button>
                    </div>  
                </div>            
        </>
    )
}

export default EditCreator