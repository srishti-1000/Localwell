import ContactOptions from './ContactOptions';
import profilePic from "../assets/ProfilePic.svg"

const AccountManager = () => {
  return (
    <div className="font-poppins mt-[-1rem]">

  <div className="p-6">
      <h2 className="text-xl font-semibold text-gray-800">My Account Manager</h2>
      <p className="text-gray-500 mb-4">Feel free to reach out to them for any queries</p>
      <p className="text-sm font-500 mb-4">LEVEL 1 MANAGER</p>
       <div className="flex flex-col ">
          <img src={profilePic} alt="Pallavi Rai" className="w-24 h-24 rounded-full object-cover" />
          <p className="font-semibold text-gray-800 mt-4">Pallavi Rai</p>
          <p className="text-gray-500 text-sm">Customer Excellence Officer</p>
          <p className="mt-3 text-sm font-medium">Hi, I'm Pallavi. Your L1 Account Manager</p>
          <p className="text-[#757575] text-sm mt-1">Talk to me on how to get the best out of LocalWell.</p>
          <p className="text-[#000000] text-sm mt-3 w-[22rem]">
            Since 2019, I've helped over 300 pharmacies across Andhra Pradesh, Telangana, and other regions digitize their daily operations.
          </p>
          <p className="text-[#000000] text-sm mt-3">Can speak: English and Hindi.</p>
          <p className="text-[#000000] text-sm">Available: 9:30 am to 7:30 pm (Mon-Sat)</p>
          <ContactOptions />
      </div>
    </div>


    </div>
  
  );
};

export default AccountManager;


// import profilePic from '../assets/ProfilePic.svg';
// // import MailIcon from '../assets/MailIcon.svg';
// // import CallIcon from '../assets/CallIcon.svg';

// const AccountManager = () => {
//   return (
//     <div className="p-8 bg-[#FAFAFA] min-h-screen">
//       <h2 className="text-xl font-semibold text-gray-800">My Account Manager</h2>
//       <p className="text-gray-500 mb-4">Feel free to reach out to them for any queries</p>
//       <p className="text-sm font-semibold mb-4">LEVEL 1 MANAGER</p>
      
//       <div className="flex gap-6">
//         <img src={profilePic} alt="Pallavi Rai" className="w-24 h-24 rounded-full object-cover" />
//         <div>
//           <p className="font-semibold text-gray-800">Pallavi Rai</p>
//           <p className="text-gray-500 text-sm">Customer Excellence Officer</p>
//           <p className="mt-3 text-sm font-semibold">Hi, I'm Pallavi. Your L1 Account Manager</p>
//           <p className="text-gray-500 text-sm mt-1">
//             Talk to me on how to get the best out of LocalWell.
//           </p>
//           <p className="text-gray-500 text-sm mt-3">
//             Since 2019, I've helped over 300 pharmacies across Andhra Pradesh, Telangana, and other
//             regions digitize their daily operations.
//           </p>
//           <p className="text-gray-500 text-sm mt-3">Can speak: English and Hindi.</p>
//           <p className="text-gray-500 text-sm mt-1">Available: 9:30 am to 7:30 pm (Mon-Sat)</p>

//           <div className="flex gap-4 mt-4">
//             <button className="flex items-center gap-2 bg-[#8E2DE2] text-white text-sm px-4 py-2 rounded-md">
//               {/* <img src={MailIcon} alt="Mail" className="w-4 h-4" /> */}
//               pallavi.rai@localwell.in
//             </button>
//             <button className="flex items-center gap-2 bg-[#8E2DE2] text-white text-sm px-4 py-2 rounded-md">
//               {/* <img src={CallIcon} alt="Call" className="w-4 h-4" /> */}
//               Call Now
//             </button>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default AccountManager;
