import "./Navebar.css";
import shooping_logo from '../Assects/shooping_logo.png'
import profileimg from '../Assects/profileimg.png'
import {useLocation} from 'react-router-dom'

const Navebar = () => {

  const userProfileName = useLocation()
  console.log("userProfileName!!!!!!!=>", userProfileName)

  return (
    <div>
      <nav className="navbar navbar-light bg-light">
        <a className="navbar-brand" href="../">
          <img
            src={shooping_logo}
            className="d-inline-block align-top shooping_logo"
            alt="no image"
          />
           Shooping 
        </a>

        <img src={profileimg} className="profileimg"/>  
        <span className="profilename">{userProfileName.state.profileName}</span>                                 
      </nav>
    </div>
  );
};

export default Navebar;
