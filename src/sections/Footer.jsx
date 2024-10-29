import { copyrightSign } from "../assets/icons";
import { footerLogo } from "../assets/images";
import { footerLinks, socialMedia } from "../constants";

const Footer = () => {
  return (
    <footer className="max-container">
      <div className="flex justify-between items-start gap-20 flex-wrap max-lg:flex-col">
        <div className="flex flex-col items-start">
          {/*  Logo + Paragraph + Icon  */}
          <a href="/">
            <img
              src={footerLogo}
              alt="logo"
              width={350}
              height={46}
              className="m-0"
            />
          </a>

          <p className="mt-10 text-base leading-7 font-montserrat text-white-400 sm:max-w-sm">
            Get shoes ready for the new term at your nearest Nike store. Find
            Your perfect Size In Store. Get Rewards
          </p>

          <div className="flex items-center gap-5 mt-8">
            {socialMedia.map((icon) => (
              <div
                className="flex justify-center items-center w-12 h-12 bg-white rounded-full"
                key={icon.alt}
              >
                <img src={icon.src} alt={icon.alt} width={24} height={24} />
              </div>
            ))}
          </div>
        </div>

        {/*  Footer Links */}
        <div className="flex flex-1 justify-evenly lg:gap-10 gap-20 text-slate-gray flex-wrap">
          {footerLinks.map((section) => (
            <div key={section.title}>
              <h4 className="font-montserrat text-xl leading-normal font-medium mb-6 text-white">
                {section.title}
              </h4>
              <ul>
                {section.links.map((link) => (
                  <li
                    className="mt-2 font-montserrat text-base leading-normal text-4xl text-white-400 text-slate-gray hover:text-coral-red"
                    key={link.name}
                  >
                    <a href={link.link}>{link.name}</a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      {/*  Copy write */}
      <div className="flex justify-between text-white-400 mt-20 max-sm:flex-col max-sm:items-center">
        <div className="flex flex-1 justify-start items-center font-montserrat cursor-pointer gap-2">
          <img
            src={copyrightSign}
            alt="copyright sign"
            width={30}
            height={30}
            className="rounded-full m-0"
          />
          <p>Copyright. All rights reserved.</p>
        </div>

        <p className="font-montserrat cursor-pointer">Terms & Conditions</p>
      </div>


      <div className="mt-10 text-center p-8 bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg shadow-lg transition-transform transform hover:scale-105">
        <h4 className="font-montserrat text-2xl text-white mb-2">
          Created by <span className="font-bold">Mahendra Kale</span>
        </h4>
        <p className="text-white text-md mb-4">Let’s connect!</p>
        <a
          href="https://www.linkedin.com/in/mahendra-kale/"
          className="bg-white text-blue-600 px-4 py-2 rounded-lg font-semibold hover:bg-gray-100 transition duration-300 shadow-md"
        >
          Visit my LinkedIn
        </a>
      </div>


    </footer>
  );
};

export default Footer;
