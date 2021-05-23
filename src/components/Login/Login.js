import React, { useState } from "react";
import { Link, useHistory } from "react-router-dom";
import { auth } from "../../Firebase/firebase";
import "./login.css";

const Login = () => {

    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const history = useHistory()

    const handleChangeEmail = (e) => {
        setEmail(e.target.value)
    }
    const handleChangePassword = (e) => {
        setPassword(e.target.value)
    }

    const signIn = (e) => {
        e.preventDefault()
        auth.signInWithEmailAndPassword(email, password)
        .then(auth => {
            history.push("/")
        })
        .catch(error => alert(error.message))
    }
    const register = (e) => {
        e.preventDefault()
        auth.createUserWithEmailAndPassword(email, password)
        .then((auth) => {
            //it successfully created a new user with email and password
            console.log(auth)
            if (auth){
                history.push('/')
            }
        })
        .catch(error => alert(error.message))
    }
  return (
    <div className="login">
      <Link to="/">
        <img
          className="login__logo"
          src="https://marka-logo.com/wp-content/uploads/2020/04/Amazon-Logo.png"
        />
      </Link>
      <div className="login__container">
        <h1>Sign-in</h1>
        <form>
          <h5>E-mail</h5>
          <input 
            type="text"
            value={email}
            onChange={handleChangeEmail} />

          <h5>Password</h5>
          <input 
            type="password"
            value={password}
            onChange={handleChangePassword} />

          <button 
            className="login__signInButton"
            type="submit"
            onClick={signIn}>
            Sign In
          </button>

          
        </form>
        <p>
            Oturum açarak, Amazon'un Kullanım ve Satış Koşulları'nı kabul etmiş
            olursunuz. Kişisel verilerinizin Amazon tarafından nasıl işlendiğine
            ilişkin detaylı bilgi için Gizlilik Bildirimi, Çerez Bildirimi ve
            İlgi Alanına Dayalı Tanıtımları inceleyebilirsiniz. Yardıma mı
            ihtiyacınız var?
          </p>

          <button onClick={register} className="login__registerButton">Create Your Amazon Account</button>
      </div>
    </div>
  );
};

export default Login;
