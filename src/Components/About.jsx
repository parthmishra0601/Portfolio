import React from 'react';

const About = () => {
  return (
    <>
      <div className='bg-deeprich h-[1500px] flex flex-col justify-center items-center'>
        <h1 className='font-bold text-6xl text-white mb-20'>
          About Me
        </h1>
        
        <div className='bg-white p-6 shadow-md rounded-2xl flex w-[1000px] h-[1400px]'>
          <img
            className='rounded-full mt-[40px] h-[300px] w-[300px] mb-4'
            src='BackgroundImage3.jpg' // Replace with your image path
            alt='About Me'
          />
           <div className='absolute ml-[800px] text-blue-500 hover:underline flex justify-end items-end '>
            <p><a href="https://drive.google.com/file/d/19QWpG6IqMGji0p6kbZC53Pm4Cz95Rdqz/view?usp=drive_link">Visit my resume</a></p>
           </div>
         

          
          <div className='absolute top-4 right-4 flex justify-end items-end'>
            <a className='text-orange-500 mr-4 hover:underline' href="https://www.linkedin.com/in/parthmishra06/">Linkedin</a>
            <a className='text-orange-500 mr-4 hover:underline'href="https://github.com/parthmishra0601">Github</a>
            <a className='text-orange-500 hover:underline' href="https://www.instagram.com/mishra._.parth/">Instagram</a>
            
            
          </div>
          <div className="para flex flex-col absolute mt-[400px] justify-start items-start ">
            <h2 className='text-gray-400 font-semibold text-xl justify-start items-start'>Introduction:</h2>
            <div>
              <p>I am a student of SRM Institute Of Science And Technology.Currently,I am pursuing BTech in Computer Science in Cloud Computing <br />Specialization and I am in Third Year.
              I am a very passionate programmer and web developer enthusiast.I have keen interest in Web <br /> Development and along with that I love to code in C++ language. </p> 
              
              <h2 className='text-gray-400 font-semibold text-xl justify-start items-start mt-[20px]'>Education:</h2>
            <div>
              <p>I am a student of SRM Institute Of Science And Technology.Currently,I am pursuing BTech in Computer Science in Cloud Computing <br />Specialization and I am in Third Year.
              I completed my secondary education from The Khaitan School, Noida, securing 84% marks in 10th <br />standard. I then pursued my higher secondary education from Evergreen Public School, Delhi, where I achieved 80% marks in 12th <br />standard. </p> 
              
              <h2 className='text-gray-400 font-semibold text-xl justify-start items-start mt-[20px]'>Skills:</h2>
            <div>
              <p>My skills include proficiency in HTML,CSS,JavaScript along with experience in frameworks like ReactJS,Tailwind,Bootstrap.Along with this,I <br /> have some knowledge about firebase and AWS </p> 
             <div className="flex flex-row justify-start items-center mt-[20px]">
             <img  className="h-[150px] " src="HTML.png" alt="" />
             <img className=" h-[150px] " src="css.png" alt="" />
             <img className=" h-[150px] " src="js.png" alt="" />
             <img className=" h-[150px] " src="reactjs.png" alt="" />
             <img className=" h-[150px] " src="firebase.png" alt="" />
             <img className=" h-[150px] " src="aws.png" alt="" />
          

             </div>
             <h2 className='text-gray-400 font-semibold text-xl justify-start items-start mt-[20px]'>Experience:</h2>
            <div>
              <p>Web Development Intern, Zummit Infolabs</p>
              <ul>
                <li className='text-black-400 font-semibold'>Duration: 5 months</li>
                <li className='text-black-400 font-semibold'>Projects: Contributed to the development of innovative projects, including DigitalNexusAI and the Zummit Website, utilizing my skills  <br />in web development.</li>
                <li className='text-black-400 font-semibold'>Technologies: Gained hands-on experience with cutting-edge frameworks and tools, including ReactJS and Tailwind, to deliver high-<br />quality  solutions.</li>
              </ul> 
             </div>
             <h2 className='text-gray-400 font-semibold text-xl justify-start items-start mt-[20px]'>Projects:</h2>
             <div>
             <ul>
                <li className='text-black-400 font-semibold'>HomeFind</li>
                <p>It is a website where we can find the homes and pgs at a certain distance from us.Here,I used techstacks like ReactJS for making the <br /> frontend along with Google maps APIS for fetching the data and Tailwind and Firebase for Styling and Authentication respectively</p>
                <li className='text-black-400 font-semibold'>UniBy</li>
                <p>It is a college websites where we listed some of the major events that will be organized in our college campus.Along wht this,we have also <br /> specified the restaurants and cafes near me using the Zomato API for free.This is a fullstack project made with the help of ReactJS for <br />frontend,NodeJS for backend,MongoDB for database designing along with firebase for authentication and deployment purposes</p>
  
              </ul> 

             </div>
  
              
            </div>
  
              
            </div>
  
              
            </div>
        
          </div>
        
        
        </div>
     
        
      
      </div>
    </>
  );
};

export default About;