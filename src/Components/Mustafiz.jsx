import React from 'react';

const Mustafiz = () => {
    return (
        <div>
           
            <button  className="text-xl w-32 h-16 bg-black text-white relative overflow-hidden group z-10 rounded-lg"><span className="absolute bg-white rotate-12 -inset-8 group-hover:duration-300 duration-700 scale-x-0 group-hover:scale-x-100 origin-left transform transition-transform"></span><span className="absolute bg-sky-700 rotate-12 -inset-8 group-hover:duration-700 duration-500 scale-x-0 group-hover:scale-x-100 origin-left transform transition-transform"></span><span className="absolute bg-sky-900 rotate-12 -inset-8 group-hover:duration-500 duration-300 scale-x-0 group-hover:scale-x-50 origin-left transform transition-transform"></span><span className="absolute opacity-0 group-hover:opacity-100 duration-100 group-hover:duration-700 ease-out text-center z-10 text-white">Leave</span> Don't Hover </button>

        </div>
    );
};

export default Mustafiz;