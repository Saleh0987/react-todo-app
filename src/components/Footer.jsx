import React from 'react';
import {
  FaGithub,
  FaFacebookF,
  FaLinkedin,
  FaTwitter,
  FaYoutube
} from 'react-icons/fa';
import {FiInstagram, FiMail, FiSend} from 'react-icons/fi'

const Footer = () => {
  return (
    <div>
      <p className='text-sm text-gray-400 text-center'>Copyright
      All Reserved Rights 2023 <br />
      <span className='font-semibold text-orange-600'>
          ELSALEH&copy;</span> DEVELOPER</p>
      
      <div className='flex justify-center gap-2 mt-3'>
        <span className='footerIcon'>
          <FaGithub/>
        </span>
        <span className='footerIcon'>
          <FaLinkedin/>
        </span>
        <span className='footerIcon'>
          <FaYoutube/>
        </span>
        <span className='footerIcon'>
          <FaFacebookF/>
        </span>
        <span className='footerIcon'>
          <FiInstagram/>
        </span>
        <span className='footerIcon'>
          <FaTwitter/>
        </span>
        <span className='footerIcon'>
          <FiSend/>
        </span>
        <span className='footerIcon'>
          <FiMail/>
        </span>
      </div>
    </div>
  )
}

export default Footer;