import React, { useState } from 'react';
import Form from '../Components/Form';
import './Members.css';

import { initializeApp } from "firebase/app";

function Members() {
   return (
     <div className="Members">
       <header className="Members-header">
         <p>
              <h1>Members</h1>
              <h5>~ Always Be Active ~</h5>
                  <i>This is Our Members' Page & Now You Can Add Members Using This Form..</i>
         </p>
         <Form />
         
       </header>
     </div>
   );
 }
 
 
 export default Members;