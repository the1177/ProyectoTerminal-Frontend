import { set } from 'date-fns';
import React, { useEffect, useState } from 'react'
import './EditarUser.css';
import "bootstrap/dist/css/bootstrap.css";

import PerfilImage from "./perfilImage"




export default function  EditUser  ({}) {

    const [users, setUser] = useState([])
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [mobile, setMobile] = useState("");
    const [photo, setPhoto] = useState();
    const [nickName,setNickName]=useState(null)
    const [userId,setUserId]=useState(null)
    const[imagen,setImagen]=useState([])
    const url="http://localhost:3001/data"
    useEffect(() => {
      getUsers();
      fecthImages(url);
    }, [])

    function getUsers() {
      fetch("http://localhost:3001/data").then((result) => {
        result.json().then((resp) => {
          // console.warn(resp)
          setUser(resp)
          setName(resp[0].name)
          setMobile(resp[0].mobile)
          setEmail(resp[0].email)
          setUserId(resp[0].id)
          setPhoto(resp[0].photo)
          setNickName(resp[0].nickName)
        })
      })
    }

    function updateUser()
    {
      let item={name,email,userId,nickName,mobile,photo}
      console.warn("item",item)
      fetch(`http://localhost:3001/data/${userId}`, {
        method: 'PUT',
        headers:{
          'Accept':'application/json',
          'Content-Type':'application/json'
        },
        body:JSON.stringify(item)
      }).then((result) => {
        result.json().then((resp) => {
          console.warn(resp)
          getUsers()
        })
      })
    }
    const fecthImages = ((url)=>{
      //peticion a la api para imagenes
      fetch(url)
        .then(response => response.json())
        .then(data=> setImagen(data[0].photo))
        .catch(error => console.log(error))
    })
    return (
      <div className="App">
        <h1>Actualiza tu perfil </h1>
        <div className='change-perfil'>
            <div className='imagen-size'>
                <PerfilImage list={imagen}/>
            </div>
            <div>
              <label htmlFor="nombre">URL IMAGEN NUEVA:</label>
              <input type="text" value={photo}  onChange={(e)=>{setPhoto(e.target.value)}} /> <br /><br />
            </div>
            <div>
              <label htmlFor="nombre">NickName:</label>
              <input type="text" value={name}  onChange={(e)=>{setName(e.target.value)}} /> <br /><br />
            </div>
            <div>
              <label htmlFor="nombre">:Telefono</label>
              <input type="text" value={email} onChange={(e)=>{setEmail(e.target.value)}} /> <br /><br />
            </div>
            <div>
              <label htmlFor="nombre">Description:</label>
              <input type="text" value={mobile}  onChange={(e)=>{setMobile(e.target.value)}} /> <br /><br />
            </div>          
              <button onClick={updateUser} >Update User</button>  
        </div>
      </div>
    );
}