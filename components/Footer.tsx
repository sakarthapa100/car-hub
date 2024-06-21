import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

const Navbar = () => {
  return (
    <footer>

  
    <nav className="flex justify-between items-center py-4 px-6 sm:px-16 border-b border-gray-100">
      <div className="flex flex-col justify-start items-start gap-6">
        <Image src="/logo.svg" alt="CarHub Logo" width = {100}  height={18} className="h-8 w-auto" />
    
    <p className='text-base text-gray-700'> Carhub 2023 <br /> All rights reserved   &copy;  </p>
      </div>
      
      <div className="flex space-x-12">
        <div className="flex flex-col items-start">
          <h3 className="font-semibold mb-2">About</h3>
          <a href="#" className="text-sm text-gray-600 hover:text-gray-900 mb-1">How it works</a>
          <a href="#" className="text-sm text-gray-600 hover:text-gray-900 mb-1">Featured</a>
          <a href="#" className="text-sm text-gray-600 hover:text-gray-900 mb-1">Partnership</a>
          <a href="#" className="text-sm text-gray-600 hover:text-gray-900">Business Relation</a>
        </div>
        
        <div className="flex flex-col items-start">
          <h3 className="font-semibold mb-2">Company</h3>
          <a href="#" className="text-sm text-gray-600 hover:text-gray-900 mb-1">Events</a>
          <a href="#" className="text-sm text-gray-600 hover:text-gray-900 mb-1">Blog</a>
          <a href="#" className="text-sm text-gray-600 hover:text-gray-900 mb-1">Podcast</a>
          <a href="#" className="text-sm text-gray-600 hover:text-gray-900">Invite a friend</a>
        </div>
        
        <div className="flex flex-col items-start">
          <h3 className="font-semibold mb-2">Socials</h3>
          <a href="#" className="text-sm text-gray-600 hover:text-gray-900 mb-1">Discord</a>
          <a href="#" className="text-sm text-gray-600 hover:text-gray-900 mb-1">Instagram</a>
          <a href="#" className="text-sm text-gray-600 hover:text-gray-900 mb-1">Twitter</a>
          <a href="#" className="text-sm text-gray-600 hover:text-gray-900">Facebook</a>
        </div>
      
      </div>
    </nav>    <div className='flex justify-between items-center flex-wrap mt-10 border-t border-gray-100 sm:px-16 px-6 py-10'>
          <p>@2023 CarHub.All Rights Reserved</p>
<div className='footer__copyrights-link'>
  <Link href='/' className='text-gray-500'>
  Privacy Policy</Link>

  <Link href='/' className='text-gray-500'>
  Terms of use</Link>

</div>
        </div>
    </footer>
  );
};

export default Navbar;