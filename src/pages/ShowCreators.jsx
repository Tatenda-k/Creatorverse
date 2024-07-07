import React,{useState,useEffect} from 'react'
import CreatorCard from '../components/Card'
import { supabase } from '../client';
import { useNavigate } from 'react-router-dom';

function ShowCreator(){

        const navigate=useNavigate()
        const [creators,setCreators]=useState([])
    useEffect(()=>{
        const fetchCreators=async()=>{
            const{data,error}=await supabase.from('creators').select()
                setCreators(data)
            if(error){
                navigate('/error')
            }
             
        }
        fetchCreators()
    },[])
    
       return (
    
    <>

    {creators.length ? <div className='creators-list'>{
        creators.map((creator)=>{
            return(
                <CreatorCard key={creator.id} {...creator}></CreatorCard>
            )
        })
    }

    </div>: <div className='no-creators'>
        <p>NO CREATORS YET</p>
        </div>}

    
    </>)
}

export default ShowCreator