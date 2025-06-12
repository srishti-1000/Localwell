
import dashicons_email from "../assets/dashicons_email.svg";
import ic_roundphone from "../assets/ic_round-phone.svg";

const ContactOptions = () => {
  return (
    <div className="flex  gap-4 mt-4 flex-col">
     
      <div className="flex items-center ">
      
        <div className=" p-1.5 rounded">
          <img src={dashicons_email} alt="email" className="w-4 h-4" />
        </div>
        
        <p className="text-black font-semibold text-base">pallavi.rai@localwell.in</p>
      </div>

     

       <button className="flex items-center gap-2 bg-[#660066] text-white font-semibold text-base px-5 py-2 rounded-xl w-[9rem]">
        <img src={ic_roundphone} alt="call" className="w-4 h-4" />
        Call Now
      </button>
    </div>
  );
};

export default ContactOptions;

