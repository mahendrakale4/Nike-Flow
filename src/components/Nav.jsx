import headerLogo from "../assets/images/header-logo.svg";
import hamburger from "../assets/icons/hamburger.svg";
import { navLinks } from "../constants";

const Nav = () => {
  return (
    <header className=" padding-x py-8 absoulte z-10 w-full">
      <nav className="flex justify-between items-center max-container">
        {/*  Nike logo */}
        <a href="/">
          <img src={headerLogo} alt="logo" width={130} height={29} />
        </a>
        {/* UL  */}
        <ul className=" flex-4 flex justify-center items-center gap-16 max-lg:hidden">
          {navLinks.map((item) => (
            <li key={item.label}>
              <a
                href={item.href}
                className=" fonts-montserrat leading-normal text-lg text-slate-gray "
              >
                {item.label}
              </a>
            </li>
          ))}
        </ul>
        <div className=" hidden max-lg:block">
          <img src={hamburger} alt="hamburger" width={25} height={25} />
        </div>
      </nav>
    </header>
  );
};
export default Nav;
