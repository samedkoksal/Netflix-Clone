import React, { useState } from 'react'
import '../index.css'
import netflix from '../assets/netflix.png'
import { logIn, signUp} from '../firebase'
import spinner from '../assets/netflix_spinner.gif'

function Login() {

  const [signState, setSignState] = useState("Sign In")
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);

  const user_auth = async (event) => {
    event.preventDefault();
    setLoading(true);
    if(signState ==="Sign In"){
      await logIn(email,password);
    } else {
      await signUp(name,email,password);
    }
    setLoading(false);
  }

  return (
    loading ?
    <div className='w-full h-screen flex items-center justify-center bg-dblack'>
      <img className='w-15' src={spinner} alt="Loading..." />
    </div> :
    <div className="h-screen bg-cover bg-center bg-no-repeat bg-[linear-gradient(rgba(0,0,0,0.49),rgba(0,0,0,0.49)),url('/public/Background_img.jpg')] p-5 px-[8%] font-head">
      <img className='h-10 w-36 -mx-6' src={netflix} />
      <div className="w-full max-w-[450px] bg-dblack/85 rounded-md p-[60px] m-auto">
        <h1 className="text-2xl font-medium mb-7">{signState}</h1>
        <form>
          {signState==="Sign Up" ? 
          <input className="w-full h-12 bg-neutral-600 text-black my-3 border-0 outline-none rounded-md py-4 px-5 text-base font-medium placeholder:text-base placeholder:font-medium" 
          value={name} 
          onChange={(e) => {setName(e.target.value)}} 
          type="text" 
          placeholder='Your name'/>:null}
          <input className="w-full h-12 bg-neutral-600 text-black my-3 border-0 outline-none rounded-md py-4 px-5 text-base font-medium placeholder:text-base placeholder:font-medium" 
          value={email} 
          onChange={(e) => {setEmail(e.target.value)}}
          type="email" 
          placeholder='Email' />
          <input className="w-full h-12 bg-neutral-600 text-black my-3 border-0 outline-none rounded-md py-4 px-5 text-base font-medium placeholder:text-base placeholder:font-medium" 
          value={password} 
          onChange={(e) => {setPassword(e.target.value)}}
          type="password" 
          placeholder='Password' />    
          <button className="w-full border-0 outline-none p-4 bg-red text-white rounded-md text-base font-medium mt-5 cursor-pointer" 
          onClick={user_auth} 
          type='submit'>{signState}</button>
          <div className="flex items-center justify-between text-grayy pt-1">
            <div className='flex items-center gap-1 h-8'>
              <input className='w-4 h-4' type="checkbox" />
              <label htmlFor="">Remember Me</label>
            </div>
            <p>Need Help ?</p>
          </div>
        </form>
        <div className="mt-10 text-grayyy">
          {signState==="Sign In" ? <p>New to Netflix ? <span onClick={() => {setSignState("Sign Up")}} className="ml-1.5 text-white font-medium cursor-pointer">Sign Up Now</span></p> :<p>Already have account <span onClick={() => {setSignState("Sign In")}} className="ml-1.5 text-white font-medium cursor-pointer">Sign In Now</span></p>
          }
        </div>
      </div>
    </div>
  )
}

export default Login