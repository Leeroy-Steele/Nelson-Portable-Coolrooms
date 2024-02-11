import { NavLink } from "react-router-dom";

//Logos
import homeLogo from "../Logos/homeLogo.svg";
import productsLogo from "../Logos/productsLogo.svg";
import contactLogo from "../Logos/contactLogo.svg";
import MainLogo from "../Components/MainLogo";
import facebookLogo from "../Logos/facebook.svg";

//Buttons
const navButtons = [
  {
    name: "Home",
    imageURL: homeLogo,
    href: "/",
    isExternal: false,
  },
  {
    name: "Products",
    imageURL: productsLogo,
    href: "/Products",
    isExternal: false,
  },
  {
    name: "Contact",
    imageURL: contactLogo,
    href: "/Contact",
    isExternal: false,
  },
  {
    name: "Facebook",
    imageURL: facebookLogo,
    href: "https://www.facebook.com/nelsonportablecoolrooms",
    isExternal: true,
  },
  {
    name: "Instagram",
    imageURL: "https://img.icons8.com/ios-filled/50/instagram-new--v1.png",
    href: "https://www.instagram.com/nelsonportablecoolrooms",
    isExternal: true,
  },
];

export default function HeaderNavbar() {
  return (
    <header>
      <div className="pt-2 py-1 bg-white">
        <h6 className="text-primary text-center">
          CALL FOR A FREE QUOTE: 020 4186 0544
        </h6>
      </div>

      <div className="px-3 py-2 text-bg-primary">
        <div className="d-flex flex-wrap align-items-center justify-content-center justify-content-lg-start">
          <div className="d-flex align-items-center my-2 my-lg-0 me-lg-auto text-white text-decoration-none">
            <MainLogo cName="headerMainLogo"></MainLogo>

            <h5 id="headerTitle" className="px-2 pt-2">
              NELSON PORTABLE COOLROOMS
            </h5>
          </div>

          <ul className="nav col-12 col-lg-auto my-2 justify-content-center my-md-0 text-small">
            {navButtons.map((button) =>
              button.isExternal ? (
                <li>
                  <a href={button.href}>
                    <div className="nav-link text-white">
                      <img
                        className="navLinkImg bi d-block mx-auto mb-1"
                        src={button.imageURL}
                        alt="logo"
                      ></img>
                      {button.name}
                    </div>
                  </a>
                </li>
              ) : (
                <li>
                  <NavLink to={button.href}>
                    <div className="nav-link text-white">
                      <img
                        className="navLinkImg bi d-block mx-auto mb-1"
                        src={button.imageURL}
                        alt="logo"
                      ></img>
                      {button.name}
                    </div>
                  </NavLink>
                </li>
              )
            )}

          
          </ul>
        </div>
      </div>
    </header>
  );
}
