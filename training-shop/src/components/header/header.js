import HeaderContact from "../header-contact/headerContact";
import HeaderNav from "../header-nav/headerNav";

const Header = () => {
  return  (
    <div className="header" data-test-id='header'>
      <HeaderContact/> 
      <HeaderNav/>
    </div>
  )
}
export default Header;