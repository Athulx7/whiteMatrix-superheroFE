import React from "react";


function UserAbout() {
  return (
    <>
    
     <div className="container mx-auto flex flex-col  justify-center items-center mt-10  px-10">
            <h5 className="text-2xl font-bold text-red-700">ABOUT US</h5>
            <hr className="w-1/2 mt-5" />
        </div>
      <div className="container mx-auto flex flex-col md:flex-row justify-center items-center mt-5  px-10">
       
        <div className="md:w-1/2 flex justify-center mt-10 md:mt-0">
          <img
            src="https://img.freepik.com/premium-vector/cartoon-silhouette-superhero-flying_24381-366.jpg"
            alt="Hero Silhouette"
            className="max-w-full h-auto ms-10 transition-transform duration-500 hover:scale-105"
          />
        </div>

        <div className="md:w-1/2 flex flex-col items-center md:items-start text-center md:text-left">
          <div className="md:ml-8 lg:ml-16">
            <h5 className="font-bold">OUR VISION</h5>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat voluptatem doloremque commodi placeat aliquam fugit saepe, ipsam nihil quis consectetur odio tempore est libero modi laborum laboriosam rerum optio corporis.
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Unde ad totam exercitationem deleniti alias similique praesentium expedita modi quod labore, voluptatibus officia quos eligendi nulla magnam consequuntur harum reprehenderit iure.
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Accusantium ex ducimus eos exercitationem voluptatibus nihil unde incidunt tenetur impedit, accusamus doloremque minus esse, a neque, laborum facere earum ratione asperiores!
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Optio eius nostrum eos cupiditate quasi quas neque quaerat, et assumenda sint nisi magni quo ea sunt officia mollitia suscipit, qui quibusdam?
          </div>
        </div>
      </div>
      
    </>
  );
}

export default UserAbout;
