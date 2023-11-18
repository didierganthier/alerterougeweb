// components/Header.tsx
import Link from 'next/link';
import React from 'react';

const Header: React.FC = () => {
  const headerImageStyle: React.CSSProperties = {
    backgroundImage: 'url("/header.jpeg")',
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    width: '100%',
    height: '544px', // Set your desired height
  };

  return (
    <div className='pt-16 relative' style={headerImageStyle}>
      {/* <div className='absolute md:top-24 md:left-32 right-0 bottom-0'>
        <img src="/background.png" alt="Alerte Rouge" className='md:w-[600px] md:h-[344px]' />
      </div> */}
      <div className='absolute top-96 left-[215px] right-0 bottom-0'>
        {/* Hide the button on mobile */}
        <button className='bg-red-500 text-white font-bold py-3 px-3 text-sm rounded-md justify-start hidden md:flex'>
          <Link href='/'>
            <p className='cursor-pointer'>
              Donate Blood
            </p>
          </Link>
        </button>
      </div>
    </div>
  );
};

export default Header;
