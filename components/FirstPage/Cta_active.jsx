import AppContext from "../../Appcontext";
import {useContext} from 'react';
function Cta_active() {
    const value =useContext(AppContext);
    function buttonclicked(){
        value.setstatus(true)
        console.log(value.status); 
    }
  return (
    <div className="flex w-fit rounded-lg mt-16">
      <input
        type="text"
        class="h-14 w-72 pl-10 pr-20  border-r-0 rounded-lg z-0 border-2 border-blue-600 rounded-r-none  focus:shadow focus:outline-blue-500"
        placeholder="email@example.com..."
      />
      <div>
        <button
          class="h-14 w-48 text-white rounded-lg font-normal text-lg bg-blue-700 rounded-l-none hover:shadow-xl"
          onClick={buttonclicked}
        >
          Get Early Access
        </button>
      </div>
    </div>
  );
}

export default Cta_active;
