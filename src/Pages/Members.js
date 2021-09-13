import React from 'react';
import './Members.css';

function Members() {



  return (
    
    <div className="Members">
      <header className="Members-header">
         <h1>Members</h1>
         <h5>~ Always Be Active ~</h5>
         <i>This Is Our Members' Page & Now, You Can Add Memeber Using This Form</i>
         <br></br>
         Add Member Form
         <form>
           <label>
               Member_ID:
              <input type="text" name="Member_ID" />
            </label>
               <br></br>
            <label>
               Name:
              <input type="text" name="Name" />
            </label>
               <br></br>
            <label>
               Phone_Number:
               <input type="text" name="Phone_Number" />
            </label>
                <br></br>
            <label>
               Email:
                <input type="text" name="Email" />
            </label>
                <br></br>
            <input type="submit" value="Submit" />
         </form>

      </header>
    </div>
  );
}

export default Members;