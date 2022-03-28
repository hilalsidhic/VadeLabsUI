import AppContext from "../../Appcontext";
import {useContext} from 'react';
function Cta_confirmed() {
    const value =useContext(AppContext);
    function buttonclicked(){
        value.setstatus(false)
        console.log(value.status); 
    }
    return (
        <div className="flex flex-col w-full rounded-lg mt-16">
          <button className="h-14 w-full text-white rounded-lg font-bold text-2xl bg-blue-600  hover:shadow-xl"
          >
          Thank you for your interest!
        </button>  
        <div className=" flex flex-row justify-between">
        <span className="font-semibold"><i className="fa fa-check text-green-600" aria-hidden="true"></i>An Email has been sent to your inbox</span>
        <span className="font-semibold">Didn&apos;t Receive?</span>
        </div>
        <button className="flex justify-end text-red-600 font-bold" onClick={buttonclicked}><i className="fa fa-repeat mt-1 mr-1" aria-hidden="true"></i> Resend</button>
        
        </div>
    );
}

export default Cta_confirmed;