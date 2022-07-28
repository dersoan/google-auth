import { useState } from 'react';
import { GoogleLogo } from 'phosphor-react';

import { GoogleAuthProvider, signInWithPopup, User } from "firebase/auth";
import { auth } from '../../services/firebase';

import "./styles.scss"

export function SignIn(){
const [user, setUser] = useState<User>({} as User)


  function handleGoogleSignin(){
    const provider = new GoogleAuthProvider();

    signInWithPopup( auth, provider)
    .then((result) =>{
      setUser(result.user);
    })
    .catch((error) =>{
      console.log(error);
    })
  }
  return (
    <div className="container">

<div className='user'>
  {user.photoURL && <img src={user.photoURL} alt="Avatar do Ususario"/>}
    <strong>{user.displayName}</strong>
    <small>{user.email}</small>
</div>

    <h1>Acesse sua Conta</h1>
    <span>Utilizando a autenticação social, por exemplo autenticação com o Google você
      facilita a vida do usuário permitindo utilizar sua aplicaçõa sem fazer cadastro. 
    </span>
    <button className="button" type='button' onClick={handleGoogleSignin}>
      <GoogleLogo />
       Entrar com Google</button>
    
    </div>
  )
}