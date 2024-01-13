import React from 'react';

const Myself = () => {
    return (
        <div>
            <button className="btn text-xl font-bold btn-primary" onClick={() => document.getElementById('my_modal_6').showModal()}>AriFuL</button>
            <dialog id="my_modal_6" className="modal modal-bottom sm:modal-middle">
                <div className="modal-box">
                    <h3 className="font-bold  text-4xl">Md. Ariful Islam </h3>
                    <p className="py-4"> I'm a passionate Front-End Developer  with expertise on React, JavaScript, Tailwind CSS, HTML and CSS. And familiar with Node.js,Express.js & MongoDB </p>


                    <div className="modal-action">
                        <form method="dialog">
                            <button className="btn btn-outline btn-error">Close</button>
                        </form>
                    </div>
                </div>
            </dialog>
        </div>
    );
};

export default Myself;