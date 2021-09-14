import React from 'react';
import './Home.css';


function Home() {
  
  return (
    
    <div className="Home">
      <header className="Home-header">
        
        <p>
          <h1>WELLCOME TO LIBRARY MANAGEMENT SYSTEME</h1>
              <h5><i>~ Vist The Library .. Borrow The Beauty .. Keep The Knowladge ~</i></h5>
                <i>This Is Our Home Page </i>
        </p>
        
              <h5>Physically Open Days & Times(Hours)</h5>
        <table>
          <tr>
            <th>Open Days</th>
            <td>Every Week Days</td>
          </tr>
          <tr>
            <th>Open Times(Hourse)</th>
            <td>9.00 A.M - 5.00 P.M</td>
          </tr>
        </table>
             <i>Poya Days are Effect To Those Open Days & Times</i>
             
      </header>
    </div>
  );
}

export default Home;