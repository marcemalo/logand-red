import { useNavigate } from "react-router-dom";
import axios from "../../api/axios";
import { useState } from "react";

const Login = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

 const handleUserLogin = (e) => {
    e.preventDefault();

    axios.post("/auth/login/", {email, password})
    .then(response => {
      if(response.status === 201){
        localStorage.setItem("token", response.data.access_token)
        Toastify({
          text: "User loged sucssesufully",
          duration: 3000,
          destination: "https://github.com/apvarun/toastify-js",
          newWindow: true,
          close: true,
          gravity: "top", // `top` or `bottom`
          position: "left", // `left`, `center` or `right`
          stopOnFocus: true, // Prevents dismissing of toast on hover
          style: {
            background: "linear-gradient(to right, #00b09b, #96c93d)",
          },
          onClick: function(){} // Callback after click
        }).showToast();
       navigate("/profile")
      }
    })

 }



  const playSound = () => {
    const audio = new Audio('./src/mp3/sound-1-167181.mp3'); 
    audio.play();
}


  return (
    <div className="form__div">
       <form className='form' onSubmit={handleUserLogin}>
            <h1>Login</h1>
            <input type="email" placeholder='Enter your email'onChange={(e) =>setEmail(e.target.value)}/>
            <input type="password" placeholder='Enter your password' onChange={(e) =>setPassword(e.target.value)}/>
            <button  onClick={playSound} className='form__button' type='submit'>Login</button>
        </form>
    </div>
  )
}

export default Login