import FirstDiv from "./FirstDiv";

function Background() {
    return (
        <div className="w-full h-screen firstbg mt-8">
          <style jsx>{`
        .firstbg{
            background-image: url("/firstpage.svg");
        }
        }
      `}</style>  

      <FirstDiv/>
      
        </div>
    );
    
}

export default Background;