import { IoIosArrowRoundForward } from "react-icons/io";
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import './App.css'
import imgg from '/image.png';
import Button from '@mui/material/Button';
function App() {
  

  return (
    <>
     <div className="container">
      <div className="imge">
        <img src="" alt="logo" />
      </div>
      
        <ul className='nav'>
          <li><a href="">Link 1</a></li>
          <li><a href="">Link 2</a></li>
          <li><a href="">Link 3</a></li>
        </ul>
      
      <div className="butt"><button className='butto'>Login</button>
      <button className='button'>Make Appoinments</button></div>
     </div>
     <div className='app'>
     <div className="main">
      <div className='text'>
      <h4  className='health'>Health comes first</h4>
      <h1>Protect and take care of your Health by E-Patient </h1>
      <p>
        Your digital healthcare companion. Manage patient history, appointments,
        Health suggestions ,Insurances and medical records with ease.
      </p>
              <button className='dec'>Make Apointment</button>
      </div>
      <div className='doctor'>
        <img src={imgg} className='imgg' alt="doctor" />
      </div>
      
     </div>
  <div className="cards">
   <div className="small">
      <div className="head-row">
      <img src="/consultant.png" className="conn" alt="consultant" />
      <h2>Find Doctor's</h2>
      </div>
      <p className='pp'>Get most affordable doctor at your doorsteps. </p>
      <div className="l"><IoIosArrowRoundForward /></div>
    </div>
    <div className="small">
      <div className="head-row">
      <img src="/appointments.png" className="conn" alt="consultant" />
      <h2>Make Apointments</h2>
      </div>
      <p className='pp'>Make easy apointments in hospital for your convience.   </p>
      <div className="l"><IoIosArrowRoundForward /></div>
    </div>
    <div className="small">
      <div className="head-row">
  <img src="/healthy.png" className="conn" alt="consultant" />
  <h2>Healthy habbits </h2>
</div>
      <p className='pp'>Know the good habits for your life          </p>
      <div className="l"><IoIosArrowRoundForward /></div>
    </div>
  </div>

  <div className="making">
    <p>make easier way for your appointments ,it may take less than 5 minutes of time for your health</p>
    <span ><button className='decc'>Make Apointment</button></span>
  </div>

    <div className="history">
      <h2 className="nam">Patient Recent History</h2>
      <div className="hic">
        <div><h2>Fever</h2><span>1/10/2025 to 1/10/26</span></div>
        <p>Dr.Radhika mam </p>
      </div>
      <div className="hic">
        <div><h2>Fever</h2><span>1/10/2025 to 1/10/26</span></div>
        <p>Dr.Radhika mam </p>
      </div>
      <div className="hic">
        <div><h2>Fever</h2><span>1/10/2025 to 1/10/26</span></div>
        <p>Dr.Radhika mam </p>
      </div>
    </div>
   



  </div>
</>
  );}
export default App;
