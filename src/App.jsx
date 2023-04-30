import { useState } from 'react'
import './App.css'
import laker from './assets/laker.jpg'

function getActiveClassName (activeArticle,currentArticle) {
  if (activeArticle === currentArticle){
    return 'show-article'
  }else {
    return 'hide-article'
  }
}

function App() {
  
 const [activeArticle, setActiveArticle] =useState('First Article')

  return (
   <>

   <div className={`active ${getActiveClassName(activeArticle,'First Article')}`}>

    <h1>About</h1>
    <p>is  Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
    is  Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
    is  Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
    is  Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
    </p>
    <img className= 'laker' src={laker} alt="" />

    
   </div>
   
   
   <div className={`active ${getActiveClassName(activeArticle,'Second Article')}`}>

    <h1>Idea</h1>
    <p> It was Tourism webbsite that i build html and css and it was my first project they call safari
    Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard 
    dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen 
    book. 
    It has survived not only five centuries,  ,</p>
   </div>




   <div className={`active ${getActiveClassName(activeArticle,'Third Article')}`}>

    <h1>Design</h1>
    <p> It was Tourism webbsite that i build html and css and it was my first project they call safari
    Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard 
    dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen 
    book. 
  

    It has survived not only five centuries,  ,</p>
   

  
   </div>



   <div className='article'>
        <button onClick={() => {
          if (activeArticle === 'First Article'){
            setActiveArticle('Second Article') ;
          } else  if(activeArticle === 'Second Article') {
            setActiveArticle('Third Article')
          } else{
            setActiveArticle('First Article') ;
           
          }
        }}>switch Article </button>
        
      </div>
   
   
   
   </>

   
    


    
  )
}

export default App
