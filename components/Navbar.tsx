// import { getAuth, signInWithPopup, GoogleAuthProvider } from "firebase/auth";
// import { firebaseApp } from "../firebase-config";
// import { userAccessToken, fetchUser } from "../utils/fetchDetails";
import { useRouter } from "next/router";
// import Dropdown from './Dropdown'
import { useEffect, useState } from "react";
import Image from "next/image";
import Dropdown from "./Dropdown";

interface User {
  photoURL: string;
}

export default function Navbar() {
//   const firebaseAuth = getAuth(firebaseApp);
//   const provider = new GoogleAuthProvider();
//   const router = useRouter();

  // const [user, setUser] = useState<User | null>(null);
  const [user, setUser] = useState(null);

//   useEffect(() => {
//     const accessToken = userAccessToken();
//     if (!accessToken) return;
//     const [userInfo] = fetchUser();
//     console.log(userInfo);
//     setUser(userInfo);
//   }, []);

//   const signIn = async () => {
//     const { user } = await signInWithPopup(firebaseAuth, provider);
//     const { refreshToken, providerData } = user;
//     localStorage.setItem("user", JSON.stringify(providerData));
//     localStorage.setItem("accessToken", JSON.stringify(refreshToken));
//     setUser(user.providerData);
//     router.push("/");
//   };

//   const logout = () => {
//     localStorage.clear();
//     setUser(null);
//     router.push("/");
//   };

  return (
    <nav className='h-16 w-full shadow-md bg-white flex justify-between fixed z-10'>
      <div className='flex w-[40%] h-full'>
        <img className='h-16 w-auto  mb-4 mx-2  md:mx-10' src='/logo.png' alt='The Spot Events' />
        <div className="flex justify-center">
          <div className="flex">
            <div className="input-group flex md:w-[500px] mb-3 mt-2 md:shadow-md rounded-md">
              <button className="px-6 py-2.5 bg-white md:bg-[#F8F7FA] text-white font-medium text-xs leading-tight uppercase rounded-tl-md rounded-bl-md transition duration-150 ease-in-out flex items-center" type="button" id="button-addon2">
                <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="search" className="w-4" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                  <path fill="black" d="M505 442.7L405.3 343c-4.5-4.5-10.6-7-17-7H372c27.6-35.3 44-79.7 44-128C416 93.1 322.9 0 208 0S0 93.1 0 208s93.1 208 208 208c48.3 0 92.7-16.4 128-44v16.3c0 6.4 2.5 12.5 7 17l99.7 99.7c9.4 9.4 24.6 9.4 33.9 0l28.3-28.3c9.4-9.4 9.4-24.6.1-34zM208 336c-70.7 0-128-57.2-128-128 0-70.7 57.2-128 128-128 70.7 0 128 57.2 128 128 0 70.7-57.2 128-128 128z"></path>
                </svg>
              </button>
              <input type="search" className="form-control rounded-tr-md hidden rounded-br-md focus:outline-none relative md:block w-full px-3 py-1.5 text-sm font-normal text-gray-700 bg-[#F8F7FA]" placeholder="Search Requests" aria-label="Search" aria-describedby="button-addon2" />
            </div>
          </div>
        </div>
      </div>
      <div className={`md:flex justify-start ${user != null ? "w-[30%]" : "w-[35%]"} h-full text-sm hidden`}>
        <div className='py-3 px-2'>
          <Dropdown title='Organize' items={['Why The Spot', 'Pricing', 'Resources']} />
        </div>
        <div className='py-3 px-2'>
          <Dropdown title='Help' items={['Find your tickets', 'Contact an event organizer', 'Visit the help center']} />
        </div>
        <div className='py-3 px-2'>
          <Dropdown title='Create' chevron={false} items={[]}/>
        </div>
        {user != null ? null :
          <div className="flex">
            <div className='py-3 px-2'>
              <Dropdown title='Login' chevron={false} items={[]}/>
            </div>
            <div className='py-3 px-2'>
              <Dropdown title='Sign Up' chevron={false} items={[]}/>
            </div>
          </div>
        }
        {/* <div className="mt-2">
          {user != null ? <Image src={user?.photoURL} width={50} height={50} className="rounded-full cursor-pointer mt-2 mx-2 shadow-md" alt="User Photo" /> : <div></div>}
        </div> */}
      </div>
    </nav>
  );
}
