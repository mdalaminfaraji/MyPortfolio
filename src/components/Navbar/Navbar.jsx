import { useState } from 'react';
import { AiOutlineHome, AiOutlineProject, AiOutlineUser } from 'react-icons/ai';
import { BiMessageSquareDetail } from 'react-icons/bi';
import './Navbar.css';
import Typed from 'react-typed';
import avatar from '../../../src/assets/avater.jpg';

const Navbar = () => {

    const [active, setActive] = useState('#');
    

    const handleHire = () => {
        window.location.href = '#contact';
    }

    return (
        <nav>
            <div className='bg-[#1e1546] inline-flex gap-8 px-16 py-5 z-20 fixed left-1/2 transform -translate-x-1/2 bottom-8 rounded-full shadow-lg lg:bottom-5 lg:left-2/3 space-x-10'>
                <a
                    className={active === '#' ? 'active icon-color' : ''}
                    href='#' title='Home'
                    onClick={() => setActive('#')}
                >
                    <AiOutlineHome />
                </a>
                <a
                    href='#about' title='About Me'
                    onClick={() => setActive('#about')}
                    className={active === '#about' ? 'active icon-color' : ''}
                >
                    <AiOutlineUser />
                </a>
                <a
                    href='#projects' title='Projects'
                    onClick={() => setActive('#projects')}
                    className={active === '#projects' ? 'active icon-color' : ''}
                >
                    <AiOutlineProject />
                </a>
                <a
                    href='#contact' title='Contact'
                    onClick={() => setActive('#contact')}
                    className={active === '#contact' ? 'active icon-color' : ''}
                >
                    <BiMessageSquareDetail />
                </a>
            </div>

            <div data-aos="fade-right"
                data-aos-offset="300"
                data-aos-easing="ease-in-sine" className="lg:fixed h-full lg:w-[350px] bg-[#1e1546]">
                <div className="card lg:h-full">
                    <div className="flex flex-col items-center">
                        <div>
                            <div className="text-white mt-5">
                                <Typed
                                    className='text-3xl bg-gradient-to-r from-[#FFFFFF] via-[#54FFBB] to-[#FFFFFF] text-transparent bg-clip-text'
                                    typeSpeed={70}
                                    backSpeed={40}
                                    loop
                                    strings={[
                                        'Frontend Developer ',
                                        'MERN Stack Developer ',
                                        'JavaScript Developer'
                                    ]}
                                />
                            </div>
                        </div>
                        <div className="p-4">
                            <img className='h-40 rounded-full' src={avatar} alt="" />
                        </div>
                        <h2 className='text-xl text-white'>Narail, Bangladesh</h2>
                        <h3 className='text-white'>alaminice1617@gmail.com</h3>

                        <button onClick={handleHire} className='btn-primary btn   my-5 py-3 rounded-3xl uppercase hover:text-[#54FFBB] hover:bg-inherit border border-[#54FFBB]'>Hire me!</button>

                        <div className="border-t-4 border-b-4 md:w-1/3 w-1/2 py-1 mx-auto mt-2 text-center">
                            <span className="text-xl uppercase bg-gradient-to-r from-[#FFFFFF] via-[#54FFBB] to-[#FFFFFF] text-transparent bg-clip-text">Academic</span>
                        </div>
                        <p className="text-white mt-4">B.Sc. in ICT</p>
                        <p className="text-white font-light text-sm">Islamic University of Bangladesh</p>

                        <div className="border-t-4 border-b-4 md:w-1/3 w-1/2 py-1 mx-auto text-center mt-4">
                            <span className="text-xl uppercase bg-gradient-to-r from-[#FFFFFF] via-[#54FFBB] to-[#FFFFFF] text-transparent bg-clip-text">Training</span>
                        </div>
                        <p className="text-white mt-4">Complete Web Development Course</p>
                        <p className="text-white font-light text-sm pb-3">Programming Hero</p>
                    </div>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;