import { Link, Route, Routes } from 'react-router-dom'
import { useState } from 'react'
import './App.css'

export default function App(){
  const [rate1, setRate1] = useState('rate') 
  const [rate2, setRate2] = useState('rate') 
  const [rate3, setRate3] = useState('rate') 
  const [rate4, setRate4] = useState('rate') 
  const [rate5, setRate5] = useState('rate')
  const [rateValue, setRateValue] = useState(0); 
  const handleRate1 = ()=>{
    if (rate1 === "rate" 
    && rate2 !=='rated' 
    && rate3 !=='rated' 
    && rate4 !=='rated' 
    && rate5 !=='rated' ){
      setRate1('rated')
      setRateValue(1)
    } else if (rate1 === "rate" 
    || rate2 ==='rated' 
    || rate3 ==='rated' 
    || rate4 ==='rated' 
    || rate5 ==='rated' ){
      setRate1('rated')
      setRate2('rate')
      setRate3('rate')
      setRate4('rate')
      setRate5('rate')
      setRateValue(1)
    } else{
      setRate1('rate')
      setRateValue(0)
    }
  }

  const handleRate2 = ()=>{
    if (rate2 === "rate" 
    && rate1 !=='rated' 
    && rate3 !=='rated' 
    && rate4 !=='rated' 
    && rate5 !=='rated'  ){
      setRate2('rated')
      setRateValue(2)
    }else if (rate2 === "rate" 
    || rate1 ==='rated' 
    || rate3 ==='rated' 
    || rate4 ==='rated' 
    || rate5 ==='rated' ){
      setRate2('rated')
      setRate1('rate')
      setRate3('rate')
      setRate4('rate')
      setRate5('rate')
      setRateValue(2)
    }  else{
      setRate2('rate')
      setRateValue(0)
    }
  }
  const handleRate3 = ()=>{
    if (rate3 === "rate" 
    && rate1 !=='rated' 
    && rate2 !=='rated' 
    && rate4 !=='rated' 
    && rate5 !=='rated' ){
      setRate3('rated')
      setRateValue(3)
    } else if (rate3 === "rate" 
    || rate1 ==='rated' 
    || rate2 ==='rated' 
    || rate4 ==='rated' 
    || rate5 ==='rated' ){
      setRate3('rated')
      setRate1('rate')
      setRate2('rate')
      setRate4('rate')
      setRate5('rate')
      setRateValue(3)
    }  else{
      setRate3('rate')
      setRateValue(0)
    }
  }
  const handleRate4 = ()=>{
    if (rate4 === "rate" 
    && rate1 !=='rated' 
    && rate2 !=='rated' 
    && rate3 !=='rated' 
    && rate5 !=='rated' ){
      setRate4('rated')
      setRateValue(4)
    } else if (rate4 === "rate" 
    || rate1 ==='rated' 
    || rate2 ==='rated' 
    || rate3 ==='rated' 
    || rate5 ==='rated' ){
      setRate4('rated')
      setRate5('rate')
      setRate3('rate')
      setRate2('rate')
      setRate1('rate')
      setRateValue(4)
    }  else{
      setRate4('rate')
      setRateValue(0)
    }
  }
  const handleRate5 = ()=>{
    if (rate5 === "rate" 
    && rate1 !=='rated' 
    && rate2 !=='rated' 
    && rate3 !=='rated' 
    && rate4 !=='rated' ){
      setRate5('rated')
      setRateValue(5)
    } else if (rate5 === "rate" 
    || rate1 ==='rated' 
    || rate2 ==='rated' 
    || rate3 ==='rated' 
    || rate4 ==='rated' ){
      setRate5('rated')
      setRate4('rate')
      setRate3('rate')
      setRate2('rate')
      setRate1('rate')
      setRateValue(5)
    } else{
      setRate5('rate')
      setRateValue(0)
    }
  }
  return <>
 <main>
  <Routes>
    <Route path='/' element={<Rate rate1={rate1}
    rate2={rate2}
    rate3={rate3}
    rate4={rate4}
    rate5={rate5} 
    handleRate1={handleRate1}
    handleRate2={handleRate2}
    handleRate3={handleRate3}
    handleRate4={handleRate4}
    handleRate5={handleRate5}
    rateValue={rateValue} />} />
    <Route path='/thank' element={<Thank rateValue={rateValue} />} />
  </Routes>
 </main>
  </>
}

function Rate ({rate1,
   rate2, 
   rate3, 
   rate4, 
   rate5, 
   handleRate1, 
   handleRate2, 
   handleRate3, 
   handleRate4, 
   handleRate5, 
   rateValue}){
  return <>
<div className='container'>
<img className='star' alt='star' />
<h2>How did we do?</h2>
<p>
  Please let us know how we did with your support request. All feedback is appreciated to help us improve pur offering!
</p>
<div className='rates'>
<button className={rate1} onClick={()=>handleRate1()}>1</button>
<button className={rate2} onClick={()=>handleRate2()}>2</button>
<button className={rate3} onClick={()=>handleRate3()}>3</button>
<button className={rate4} onClick={()=>handleRate4()}>4</button>
<button className={rate5} onClick={()=>handleRate5()}>5</button>
</div>
<Link to='/thank' className='link'><button className='submit'>SUBMIT</button></Link>
</div>
  </>
}

function Thank ({rateValue}){
  return <>
  <div className='container'>
    <div className='top'>
    <img className='other' alt='other' />
   <p className='up'>You selected {rateValue} out of 5</p>
    </div>
<div className='everything'>
<h2 className='thankh2'>Thank you!</h2>
<p className='thankp'>
  We appreciate you taking the time to give it a rating. If you ever need more support, don't hesitate to get in touch!
</p>
</div>
</div>
  </>
}