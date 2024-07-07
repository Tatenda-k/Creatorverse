

import instaIcon from '../assets/icons/instagram-icon.png'
import twitterIcon from '../assets/icons/twitter-icon.png'
import ytIcon from '../assets/icons/yt-icon.png'

const CreatorForm = ({creator,handlechange,setCreator})=> {
    
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
                    onChange={handlechange}
                    />
                </div>
                
                <div className='form-control' >
                    <h2>Image</h2>
                    <label htmlFor='imgURL'></label>
                    <p>Provide a link to an image of your creator.Be sure to include the http://</p>
                    <input
                    type='text'
                    id='imgURL'
                    name='imgURL'
                    value={creator.imgURL}
                    onChange={handlechange}
                    />
                </div>
                <div className='form-control' >
                    <h2>Description</h2>
                    <label htmlFor='description'></label>
                    <p>Provide a description of the creator. Who are they? What makes them interesting?</p>
                    <input
                    type='text'
                    id='description'
                    value={creator.description}
                    name='description'
                    onChange={handlechange}
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
                    onChange={handlechange}
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
                    onChange={handlechange}
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
                    onChange={handlechange}
                    />
                </div>
                               
                </div>        
            </form>
        
        </>
    )

}


export default CreatorForm