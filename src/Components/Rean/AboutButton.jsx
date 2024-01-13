
const AboutButton = () => {
    return (
        <div>
            {/* Open the modal using document.getElementById('ID').showModal() method */}
<button className="btn text-xl font-bold btn-primary" onClick={()=>document.getElementById('my_modal_5').showModal()}>About Rean</button>
<dialog id="my_modal_5" className="modal modal-bottom sm:modal-middle">
  <div className="modal-box">
    <h3 className="font-bold  text-4xl">Hi! <br /> I am Rezuan Alam Rean</h3>
    <p className="py-4"> I'm a passionate Front-End Developer  with a solid foundation in React, JavaScript, HTML, and CSS. And familiar with  Node.js,Express & MongoDB </p>
    
   
    <div className="modal-action">
      <form method="dialog">
        {/* if there is a button in form, it will close the modal */}
        <button className="btn">Close</button>
      </form>
    </div>
  </div>
</dialog>
        </div>
    );
};

export default AboutButton;