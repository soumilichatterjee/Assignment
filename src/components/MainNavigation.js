import { NavLink } from "react-router-dom";
import classes from "./MainNavigation.module.css";

function MainNavigation() {
  return (
    <header className={classes.header}>
      <nav>
        <ul className={classes.list}>
          <li>
            <NavLink
              to="/"
              className={({ isActive }) =>
                isActive ? classes.active : undefined
              }
              // style={({isActive})=>({textAlign:isActive?'center':'left'})}
              end
            >
              SplashScreen
            </NavLink>
          </li>


      <li>
      <NavLink
        to="/authscreen"
        className={({ isActive }) =>
          isActive ? classes.active : undefined
        }
        
      >
      AuthScreen
      </NavLink>



      
    </li>
          <li>
          <NavLink
            to="/textscreen"
            className={({ isActive }) =>
              isActive ? classes.active : undefined
            }
            
          >
          TextScreen
          </NavLink>



          
        </li>

        <li>
        <NavLink
          to="/photoscreen"
          className={({ isActive }) =>
            isActive ? classes.active : undefined
          }
          
        >
        PhotoScreen
        </NavLink>



        
      </li>
      

      

        </ul>
      </nav>
    </header>
  );
}

export default MainNavigation;
