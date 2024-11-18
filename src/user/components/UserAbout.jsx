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
            <div className="flex items-center flex-col">
            <span>
            HeroHub is a unique platform designed to connect individuals in need
            with a superhero dedicated to addressing grievances and delivering
            justice. This website provides a secure and user-friendly space
            where people can submit their concerns and seek assistance for
            challenges they cannot resolve on their own. With a focus on
            accessibility and efficiency, HeroHub ensures every grievance is
            heard and given the attention it deserves.
            </span>
            <span className="mt-5">
            When a user submits a
            grievance, they receive a confirmation email directly from the
            superhero, acknowledging their submission and reassuring them that
            their concern is being reviewed. By streamlining the grievance
            process, HeroHub allows the superhero to review, categorize, and act
            on submissions with care and urgency, prioritizing fairness and
            timely responses. Whether it's a personal issue or a broader
            societal concern, HeroHub empowers individuals, fosters hope, and
            works toward creating a just and supportive community for all.
            </span>
            </div>
           
            
          </div>
        </div>
      </div>
    </>
  );
}

export default UserAbout;
