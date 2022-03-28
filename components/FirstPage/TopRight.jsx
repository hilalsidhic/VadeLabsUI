function TopRight() {
    return (
        <div className="w-5/12 h-5/6 ml-16  flex items-center toprightbox">
        <div className="w-11/12 h-5/6 topright ml-16 flex items-center justify-center ">
          <div className="bg-gray-500  toprightimage ml-6 flex flex-row justify-start">
            <div className="flex flex-row justify-evenly w-3/12">
              <img src="/fullscreen.png" className="icons" />
              <img src="/Settings.png" className="icons" />
              <img src="/mute.png" className="icons" />
              <img src="/share.png" className="icons" />
            </div>
            <div className="flex justify-start items-end takeatour -ml-28" >
                  TAKE A TOUR
            </div>
            <div className="flex flex-col-reverse items-end mb-4">
                <img src="/arrow.png" />
                <div className="flex bg-gray-500 justify-center items-center">
                    <img src="/playbutton.png" className="absolute"/>
                    <img src="/playimg.png"/>
                </div>
            </div>
          </div>
        </div>
      </div>
    );
}

export default TopRight;