import { FaCss3, FaHtml5, FaReact, FaNodeJs, FaDownload } from 'react-icons/fa';
import { SiExpress, SiMongodb } from 'react-icons/si';
import './Header.css';
import ReactTyped from 'react-typed';

const Header = () => {
    const handleResume = () => {
        window.location.href = 'https://drive.google.com/file/d/1bOkcqmWOO-bT6Vn3WNxGSzyuE6V9dnim/view?usp=sharing';
    }

    // const handleProject = () => {
    //     window.location.href = '#projects';
    // }
    return (
        <div className="md:h-[100vh] pt-16 lg:mb-10">
            <div className="px-5" data-aos="fade-down" data-aos-duration="2000">
                <h1 className="text-white text-5xl uppercase">Hey, I&apos;m <br /><span className='bg-gradient-to-r from-[#FFFFFF] via-[#54FFBB] to-[#FFFFFF] text-transparent bg-clip-text'> <ReactTyped
                                    className='text-3xl bg-gradient-to-r from-[#FFFFFF] via-[#54FFBB] to-[#FFFFFF] text-transparent bg-clip-text'
                                    typeSpeed={90}
                                    backSpeed={70}
                                    loop
                                    strings={[
                                        'Md Alamin Faraji',
                                        
                                    ]}
                                /></span></h1>
                <p className="text-white py-4">
                    A Frontend focused Web Developer building the Frontend of Websites and Web Applications that leads to the success of the overall product
                </p>
            </div>

            <div data-aos="fade-up"
                data-aos-anchor-placement="top-bottom" data-aos-duration="2000" className="flex justify-center gap-5 pt-4">
                <button onClick={handleResume} className="text-white py-4 border border-[#54FFBB] hover:bg-[#54FFBB] hover:text-black px-8 rounded-md">My Resume<FaDownload className='inline-flex ml-1'></FaDownload> </button>
                {/* <button onClick={handleProject} className="text-black py-4 bg-[#54FFBB] px-8 rounded-md hover:bg-inherit hover:text-white border border-[#54FFBB]">Projects</button> */}
            </div>
            <div className="bg-circle mx-auto mt-5">
                
            <div className="flex justify-center pt-8">
                    <div className='-mt-4'>
                        <div className="flex flex-row text-white ms-32 ">
                            <div data-aos="fade-down" data-aos-duration="2000" className="border p-4  rounded-full bg-[#54FFBB] text-black">
                                <FaCss3 />
                            </div>
                        </div>
                        <div className="flex flex-row text-white gap-56 mt-8">
                            <div data-aos="fade-right" data-aos-duration="2000" className="border p-4 rounded-full bg-[#54FFBB] text-black">
                                <FaHtml5 />
                            </div>
                            <div data-aos="fade-left" data-aos-duration="2000" className="border p-4 rounded-full bg-[#54FFBB] text-black">
                                <FaReact />
                            </div>
                        </div>
                        <div className="flex flex-row text-white gap-48 ms-5 mt-16">
                            <div data-aos="fade-up-right" data-aos-duration="2000" className="border p-4 rounded-full bg-[#54FFBB] text-black">
                                <FaNodeJs />
                            </div>
                            <div data-aos="fade-up-left" data-aos-duration="2000" className="border p-4 rounded-full bg-[#54FFBB] text-black">
                                <SiExpress />
                            </div>
                        </div>
                        <div className="flex flex-row text-white mt-2 ms-36">
                            <div data-aos="fade-up" data-aos-duration="2000" className="border p-4 rounded-full bg-[#54FFBB] text-black">
                                <SiMongodb />
                            </div>
                        </div>
                    </div>
                </div>
            </div>





  
        </div>
    );
};

export default Header;