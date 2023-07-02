import ProgressBar from 'react-animated-progress-bar';
import Marquee from "react-fast-marquee";
import myImage from "../../assets/avater.jpg";
import { FaBootstrap, FaCss3, FaGithub, FaHtml5, FaNodeJs, FaReact } from 'react-icons/fa';
import { SiExpress, SiFirebase, SiJavascript, SiMongodb, SiTailwindcss } from 'react-icons/si';
const AboutMe = () => {
    const handleHire = () => {
        window.location.href = '#contact';
    }
    return (
        <div id="about" className="py-24">
            <div className="text-center px-5">
                <div className="border-t-4 border-b-4 md:w-1/3 w-1/2 py-3 mx-auto mb-5">
                    <span className="text-2xl uppercase bg-gradient-to-r from-[#FFFFFF] via-[#54FFBB] to-[#FFFFFF] text-transparent bg-clip-text">About me</span>
                </div>
                <p className="text-base-200 opacity-80">Here you will find information about me, what i do, and my current skills mostly in terms of programming and technology</p>
            </div>
            <div className="text-white text-start mt-5 px-5">
                <h3 className="text-xl font-bold mb-2">Explore My Profile!</h3>
                <div className='grid grid-cols-1 md:grid-cols-2'>
                <p>
                     <img src={myImage} className='rounded-full p-5 '></img>
                    </p>
                  <p className="opacity-80 text-justify leading-relaxed">
                   Hi, My Name is Alamin Faraji. I am a junior Frontend Developer From Bangladesh. I have done developing many web projects with extensive experience and I enjoy making websites. Adept in user interface, Branding & creating attractive, Fully Responsive and Bringing forth expertise in design. I always strive to achieve the best results and Enhance my skills. <br /> <br />
                   Name: Md Alamin Faraji<br/>
                   Phone Number: +8801518420973<br/>
                   Address: Narail, Bangladesh<br/>
                   Email: alaminice1617@gmail.com<br/>
                   <button onClick={handleHire} className='btn-primary btn   my-5 py-3 rounded-3xl uppercase hover:text-[#54FFBB] hover:bg-inherit border border-[#54FFBB]'>Hire me!</button>
                </p>  
                </div>

            </div>

            <h3 className="text-xl text-white text-start font-bold mb-2 mt-12 px-5">Explore My Skills!</h3>

            <div data-aos="fade-up"
     data-aos-anchor-placement="top-bottom">
                <div className="grid md:grid-cols-2 gap-2">
                    <div className="grid grid-cols-2 items-center gap-4">
                        <p className='text-white opacity-90'>HTML5</p>
                        <ProgressBar
                            width="150px"
                            height="10px"
                            rect
                            fontColor="gray"
                            percentage="90"
                            rectPadding="1px"
                            rectBorderRadius="20px"
                            trackPathColor="transparent"
                            bgColor="#54FFBB"
                            trackBorderColor="grey"
                        />
                    </div>
                    <div className="grid grid-cols-2 items-center gap-4">
                        <p className='text-white opacity-90'>CSS3</p>
                        <ProgressBar
                            width="150px"
                            height="10px"
                            rect
                            fontColor="gray"
                            percentage="80"
                            rectPadding="1px"
                            rectBorderRadius="20px"
                            trackPathColor="transparent"
                            bgColor="#54FFBB"
                            trackBorderColor="grey"
                        />
                    </div>
                </div>
                <div className="grid md:grid-cols-2 gap-2">
                    <div className="grid grid-cols-2 items-center gap-4">
                        <p className='text-white opacity-90'>JavaScript</p>
                        <ProgressBar
                            width="150px"
                            height="10px"
                            rect
                            fontColor="gray"
                            percentage="80"
                            rectPadding="1px"
                            rectBorderRadius="20px"
                            trackPathColor="transparent"
                            bgColor="#54FFBB"
                            trackBorderColor="grey"
                        />
                    </div>
                    <div className="grid grid-cols-2 items-center gap-4">
                        <p className='text-white opacity-90'>ReactJS</p>
                        <ProgressBar
                            width="150px"
                            height="10px"
                            rect
                            fontColor="gray"
                            percentage="75"
                            rectPadding="1px"
                            rectBorderRadius="20px"
                            trackPathColor="transparent"
                            bgColor="#54FFBB"
                            trackBorderColor="grey"
                        />
                    </div>
                </div>
                <div className="grid md:grid-cols-2 gap-2">
                    <div className="grid grid-cols-2 items-center gap-4">
                        <p className='text-white opacity-90'>Bootstrap</p>
                        <ProgressBar
                            width="150px"
                            height="10px"
                            rect
                            fontColor="gray"
                            percentage="90"
                            rectPadding="1px"
                            rectBorderRadius="20px"
                            trackPathColor="transparent"
                            bgColor="#54FFBB"
                            trackBorderColor="grey"
                        />
                    </div>
                    <div className="grid grid-cols-2 items-center gap-4">
                        <p className='text-white opacity-90'>Tailwind CSS</p>
                        <ProgressBar
                            width="150px"
                            height="10px"
                            rect
                            fontColor="gray"
                            percentage="90"
                            rectPadding="1px"
                            rectBorderRadius="20px"
                            trackPathColor="transparent"
                            bgColor="#54FFBB"
                            trackBorderColor="grey"
                        />
                    </div>
                </div>
                <div className="grid md:grid-cols-2 gap-2">
                    <div className="grid grid-cols-2 items-center gap-4">
                        <p className='text-white opacity-90'>Firebase</p>
                        <ProgressBar
                            width="150px"
                            height="10px"
                            rect
                            fontColor="gray"
                            percentage="70"
                            rectPadding="1px"
                            rectBorderRadius="20px"
                            trackPathColor="transparent"
                            bgColor="#54FFBB"
                            trackBorderColor="grey"
                        />
                    </div>
                    <div className="grid grid-cols-2 items-center gap-4">
                        <p className='text-white opacity-90'>REST API</p>
                        <ProgressBar
                            width="150px"
                            height="10px"
                            rect
                            fontColor="gray"
                            percentage="60"
                            rectPadding="1px"
                            rectBorderRadius="20px"
                            trackPathColor="transparent"
                            bgColor="#54FFBB"
                            trackBorderColor="grey"
                        />
                    </div>
                </div>
                <div className="grid md:grid-cols-2 gap-2">
                    <div className="grid grid-cols-2 items-center gap-4">
                        <p className='text-white opacity-90'>Git & GitHub</p>
                        <ProgressBar
                            width="150px"
                            height="10px"
                            rect
                            fontColor="gray"
                            percentage="65"
                            rectPadding="1px"
                            rectBorderRadius="20px"
                            trackPathColor="transparent"
                            bgColor="#54FFBB"
                            trackBorderColor="grey"
                        />
                    </div>
                    <div className="grid grid-cols-2 items-center gap-4">
                        <p className='text-white opacity-90'>NodeJS</p>
                        <ProgressBar
                            width="150px"
                            height="10px"
                            rect
                            fontColor="gray"
                            percentage="40"
                            rectPadding="1px"
                            rectBorderRadius="20px"
                            trackPathColor="transparent"
                            bgColor="#54FFBB"
                            trackBorderColor="grey"
                        />
                    </div>
                </div>
                <div className="grid md:grid-cols-2 gap-2">
                    <div className="grid grid-cols-2 items-center gap-4">
                        <p className='text-white opacity-90'>Express.js</p>
                        <ProgressBar
                            width="150px"
                            height="10px"
                            rect
                            fontColor="gray"
                            percentage="40"
                            rectPadding="1px"
                            rectBorderRadius="20px"
                            trackPathColor="transparent"
                            bgColor="#54FFBB"
                            trackBorderColor="grey"
                        />
                    </div>
                    <div className="grid grid-cols-2 items-center gap-4">
                        <p className='text-white opacity-90'>MongoDB</p>
                        <ProgressBar
                            width="150px"
                            height="10px"
                            rect
                            fontColor="gray"
                            percentage="40"
                            rectPadding="1px"
                            rectBorderRadius="20px"
                            trackPathColor="transparent"
                            bgColor="#54FFBB"
                            trackBorderColor="grey"
                        />
                    </div>
                </div>
            </div>
            <div className='hidden md:flex'>
            <Marquee>
             <div className='border p-4 mr-2 rounded-full bg-[#54FFBB] text-black'>
                <FaHtml5></FaHtml5>
             </div>
             <div className='border p-4 mr-2 rounded-full bg-[#54FFBB] text-black'>
                <FaCss3></FaCss3>
             </div>
             <div className='border p-4 mr-2 rounded-full bg-[#54FFBB] text-black'>
                <FaReact></FaReact>
             </div>
             <div className='border p-4 mr-2 rounded-full bg-[#54bdff] text-black'>
                <FaNodeJs></FaNodeJs>
             </div>
             <div className='border p-4 mr-2 rounded-full bg-[#54FFBB] text-black'>
                <SiExpress></SiExpress>
             </div>
             <div className='border p-4 mr-2 rounded-full bg-[#54FFBB] text-black'>
                <SiMongodb></SiMongodb>
             </div>
             <div className='border p-4 mr-2 rounded-full bg-[#54FFBB] text-black'>
                <FaGithub></FaGithub>
             </div>
             <div className='border p-4 mr-2 rounded-full bg-[#54FFBB] text-black'>
                <SiJavascript></SiJavascript>
             </div>
             <div className='border p-4 mr-2 rounded-full bg-[#54FFBB] text-black'>
                <SiFirebase></SiFirebase>
             </div>
             <div className='border p-4 mr-2 rounded-full bg-[#54FFBB] text-black'>
                <FaBootstrap></FaBootstrap>
             </div>
             <div className='border p-4 mr-2 rounded-full bg-[#54FFBB] text-black'>
                <SiTailwindcss></SiTailwindcss>
             </div>
            </Marquee>
            </div>

        </div>
    );
};

export default AboutMe;