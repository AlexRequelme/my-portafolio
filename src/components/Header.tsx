import React from "react";

function Header(){
    return(
        <div className="w-full h-48 flex items-center justify-between bg-gray-800 mb-16 px-48">
            <div className="flex flex-col text-gray-300">
                <span>RESUME</span>
                <span className="my-1 text-4xl font-bold">ALEX REQUELME</span>
                <span>SOFTWARE ENGINEER</span>
            </div>
            <img src="https://img.icons8.com/cotton/64/000000/developer.png"/>
        </div>
    )
}

export default Header;