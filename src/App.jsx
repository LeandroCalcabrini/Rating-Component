import { useState } from 'react';
import './App.css'
import ThankImg from '../src/assets/img/illustration-thank-you.svg'
import star from '../src/assets/img/icon-star.svg'



function App() {

  const [number, setNumber] = useState(0);
  const [submit,setSubmit] = useState(false)

  const renderButtons = ()=>{  //funcion para hacer los 5 botones
    const btn = [];
    for(let i = 1; i <=5; i++){
      btn.push(
        <button 
        key={i}
        className='button'
        onClick={()=>handdleNumber(i)}>
          {i}
        </button>
      )
    }
    return btn
  }

  const handdleNumber = (i)=>{  // funcion para manejar el estado Number
    setNumber(i)
  }

  const handleSubmit = ()=>{ // funcion para manejar el estado submit de false a true
    if(number > 0 ){
      setSubmit(true)
    }

    console.log(number)
    console.log(submit)
  }


  return(
    <article className='container-card'>
      <div className='card-ranked'> 
        <div className='icon-container'>
        <img src={star} alt="icono de estrella" className='icon-star' />
        </div>
        <h1 className='title'>How did we do?</h1>
        <p className='text'>Please let us know we did with your support request. All feedback is appreciated to help us improve out offering!</p>
        <div className='buttons-container' >
          {renderButtons()}   
        </div>
        <button 
        className='submit'
        onClick={()=>handleSubmit()}>
          SUBMIT
        </button>
      </div>
      <div className='card-sucess'>
        <div className="card-success">
          <img src={ThankImg} alt="" />
          <span className="card-sucess-span">You selected {number} out of 5</span>
          <strong className="card-sucess-thankmessage">Thank You!</strong>
          <p className="card-sucess-text">We appreciate you taking the time to give a rating. If you ever need more support, don't hesitate to get in touch</p>
        </div>
        </div>

      
    </article>
  )


}

export default App
