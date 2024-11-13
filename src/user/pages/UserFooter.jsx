import { faFacebook, faGithub, faInstagram, faSquareFacebook, faSquareInstagram, faSquareXTwitter, faTwitter, faXTwitter, faYoutube } from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
import { Link } from 'react-router-dom'



function UserFooter() {
  return (
   <>


<div className="flex flex-col md:flex-row justify-center items-start p-5 mt-5 bg-black ">
  
 
  <div className="mb-4 me-40 md:mb-0 md-me-0 max-w-[300px]">
    <Link to="/" className="text-white no-underline">
      <h5 className='text-lg font-semibold'>HERO HUB</h5>
    </Link>
    <p className="mt-3 text-gray-500 text-justify">
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod praesentium
      sapiente nesciunt soluta adipisci, vel quas sint, esse ex suscipit cum
      assumenda dicta voluptatum provident placeat eum? Inventore, autem maxime.
    </p>
  </div>

 
  <div className="mb-4 me-40 md:mb-0 md:ml-5 max-w-[400px]">
    <h5 className='text-lg text-white font-semibold'>Links</h5>
    <div className="flex flex-col mt-3">
      <Link to="/home" className="text-gray-500 hover:text-white mt-2">
        Home
      </Link>
      <Link to="/aboutus" className="text-gray-500 hover:text-white mt-2">
        About Us
      </Link>
      <Link to="/showmorewash" className="text-gray-500 hover:text-white mt-2">
      Add Grievance
      </Link>
     
    </div>
  </div>

 
  <div className="mb-4 me-40 md:mb-0 md:ml-4 max-w-[400px]">
    <h5 className='text-lg font-semibold text-white'>Send Message</h5>
    <div className="flex flex-col mt-3">
      <input
        type="text"
        className="border border-gray-300 p-2 rounded mb-2"
        placeholder="Text a message"
      />
      <button className="bg-red-700 text-white font-bold p-2 rounded hover:bg-red-600">
        SEND
      </button>
    </div>
  </div>

  
  <div className="md:ml-5 me-40 max-w-[400px]">
    <h5 className='text-lg text-white font-semibold'>Social</h5>
    <div className="flex mt-3 space-x-3 ">
      <Link to="/" className="text-white transition-transform duration-500 hover:scale-105">
        <FontAwesomeIcon icon={faSquareFacebook} size="2x" className='' />
      </Link>

    
      <Link to="/" className="text-white transition-transform duration-500 hover:scale-105">
      <FontAwesomeIcon icon={faSquareInstagram} size='2x' />
      </Link>

      <Link to="/" className="text-white transition-transform duration-500 hover:scale-105">
        <FontAwesomeIcon icon={faSquareXTwitter} size="2x" />
      </Link>
      
      
    </div>
  </div>
</div>
   
   
   </>
  )
}

export default UserFooter
