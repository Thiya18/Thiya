
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaFacebookF } from "react-icons/fa";

const Navbar = () => {
  return (
    <div>
      <nav className='mb-20 flex items-center justify-between py-6'>
        <div className='flex flex-shrink-0 items-center'>
           <h1 className="w-10 mx-2  text-6xl bg-gradient-to-r from-green-300 via-green-500  to-green-800 bg-clip-text tracking-tight text-transparent">T</h1>
        
        </div>
        <div className='m-8 items-center justify-center gap-4 text-2xl flex'>
          <a href="https://www.linkedin.com/in/thiyasenanayake/" target="_blank" rel="noopener noreferrer">
            <FaLinkedin />
          </a>
          <a href="https://github.com/Thiya18" target="_blank" rel="noopener noreferrer">
            <FaGithub />
          </a>
          <a href="https://www.facebook.com/profile.php?id=100083241086963&mibextid=LQQJ4d" target="_blank" rel="noopener noreferrer">
            <FaFacebookF />
          </a>
          <a href="https://www.instagram.com/_th1yaa_?igsh=aG52ejFyM2s3ajYw&utm_source=qr" target="_blank" rel="noopener noreferrer">
            <FaInstagram />
          </a>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;
