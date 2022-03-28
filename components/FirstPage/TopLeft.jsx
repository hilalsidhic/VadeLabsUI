import Appcontext from '../../Appcontext';
import {useContext} from 'react';
import Cta_active from './Cta_active';
import Cta_confirmed from './Cta_confirmed';

function TopLeft() {
    const value =useContext(Appcontext);
    function buttonclicked(){
        value.setstatus(true)
        console.log(value.status); 
    }
    return (
        <div className=" w-1/2 h-4/6 pl-40 ">
                <div className="firstboxtitle">Integrate APIs <br></br>In Minutes</div>
                <div className="mt-6 firstboxcontent">Get ridiculously creative with your products <br />and let us do the hard work for you!</div>
        {value.status==false?<Cta_active/>:<Cta_confirmed/>}        
        </div>
    );
}

export default TopLeft;