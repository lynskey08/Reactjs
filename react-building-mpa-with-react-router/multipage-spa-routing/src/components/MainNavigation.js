import { NavLink } from "react-router-dom";
import classes from './MainNavigation.module.css';

function MainNavigation() {
  return (
    <header className={classes.header}>
      <nav>
        <ul className={classes.list}>
          <li>
            {/* is active is a boolean that is  true if this link is currently active*/}
            {/* end prop indicated that this link should only be considered active if the currently active route ends with this path after the URL.
             This link will only be considered active if we are on our domain  "/"  */}
            <NavLink to="/" className={({isActive}) => isActive ? classes.active : undefined} end>Home</NavLink>
          </li>
          <li>
            <NavLink to="/products" className={({isActive}) => isActive ? classes.active : undefined}>Products</NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
}
export default MainNavigation;
