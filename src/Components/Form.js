import React, { useState,useEffect } from 'react';

import { db } from '../firebase';
import { initializeApp } from "firebase/app";
import { collection, addDoc } from "firebase/firestore"; 

const Form = () => {
    const [Member_ID, setMember_ID] = useState("");
    const [Name, setName] = useState("");
    const [Phone_Number, setPhone_Number] = useState("");
    const [Email, setEmail] = useState("");
    
    const [loader, setLoarder] = useState(false);

    const handleSubmit = (e) => {
      e.preventDefault();
  
      addDoc(collection(db, "Members"), {
        Member_ID: Member_ID,
        Name:Name,
        Phone_Number: Phone_Number,
        Email:Email,
      })
      .then(() => {
        alert('New Member Has Been Added' );
      })
      .catch((error) => {
        alert(error.message);
      });
  
      setMember_ID("");
      setName("");
      setPhone_Number("");
      setEmail("");
    };


    return(
        <form className="form" onSubmit={ handleSubmit }>
        <u><i>Member Adding Form</i></u>
        <br></br>
        <lable>Member_ID:</lable>
        <input placeholder="Member_ID" value={Member_ID} onChange={(e)=> setMember_ID(e.target.value)}/>
        <br></br>
        <lable>Name:</lable>
        <input placeholder="Name"value={Name} onChange={(e)=> setName(e.target.value)}/>
        <br></br>
        <lable>Phone_Number:</lable>
        <input placeholder="Phone_Number"value={Phone_Number} onChange={(e)=> setPhone_Number(e.target.value)}/>
        <br></br>
        <lable>Email:</lable>
        <input placeholder="Email"value={Email} onChange={(e)=> setEmail(e.target.value)}/>
        <br></br>
        <button type="Submit">SUBMIT</button>
        </form>
    );
};

export default Form;