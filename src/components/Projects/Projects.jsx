import toyImg from '../../assets/toy.png';
import zestfulImg from '../../assets/zestful.png';
import pmImg from '../../assets/pm.png';
import { FcApproval } from "react-icons/fc";

const Projects = () => {

    const handlePMLive = () => {
        window.location.href = 'https://languageladder-b7cf6.web.app/';
    }
    const handlePMGitHub = () => {
        window.location.href = 'https://github.com/mdalaminfaraji/LanguageLadder-client';
    }
    const handleToyLive = () => {
        window.location.href = 'https://robotoysworld.web.app/';
    }
    const handleToyGitHub = () => {
        window.location.href = 'https://github.com/mdalaminfaraji/ToyRobotMarketPlace-client';
    }
    const handleZestfulLive = () => {
        window.location.href = 'https://ambitious-kitchen-262f3.web.app/';
    }
    const handleZestfulGitHub = () => {
        window.location.href = 'https://github.com/mdalaminfaraji/Amibitus-kitchen-client';
    }

    return (
        <div id='projects' className='mr-3'>
            <div className="border-t-4 border-b-4 w-1/2 md:w-1/3 py-3 mx-auto mb-12">
                <span className="text-2xl uppercase bg-gradient-to-r from-[#FFFFFF] via-[#54FFBB] to-[#FFFFFF] text-transparent bg-clip-text">Projects</span>
            </div>

            {/* precision martial website */}
            <div data-aos="fade-up" data-aos-duration="2000" className=" space-y-2 grid grid-cols-1 lg:grid-cols-2 gap-4 p-3 rounded-xl bg-[#54FFBB] hover:text-white  hover:bg-[#1e1546] border-2 border-[#3a2888]">
                <div className="w-full h-48 overflow-auto touch-auto">
                    <img className='rounded-xl w-[150%] max-w-none h-auto' src={pmImg} alt="" />
                </div>
                <div className=" text-start">
                    <h1 className='text-xl'>LanguageLadder (<span className='text-sm font-light'> Learning Platform </span>)</h1>
                    <div className="mt-2">
                        <div className="flex items-center gap-3">
                            <FcApproval></FcApproval>
                            <p className='font-light'>Responsive Design</p>
                        </div>
                        <div className="flex items-center gap-3">
                            <FcApproval></FcApproval>
                            <p className='font-light'>Student Dashboard</p>
                        </div>
                        <div className="flex items-center gap-3">
                            <FcApproval></FcApproval>
                            <p className='font-light'>Payment Integration</p>
                        </div>
                        <div className="flex items-center gap-3">
                            <FcApproval></FcApproval>
                            <p className='font-light'>Instructor Dashboard</p>
                        </div>
                        <div className="flex items-center gap-3">
                            <FcApproval></FcApproval>
                            <p className='font-light'>Admin Dashboard</p>
                        </div>
                        <div className="flex items-center gap-3">
                            <FcApproval></FcApproval>
                            <p className='font-light'>Exclusive User Management</p>
                        </div>
                        <div className="flex items-center gap-3">
                            <FcApproval></FcApproval>
                            <p className='font-light'>Social integration</p>
                        </div>
                    </div>
                </div>
            </div>

            <div className="flex justify-center gap-5 mt-8 mb-24">
                <button onClick={handlePMLive} className="text-white  border border-[#54FFBB] hover:bg-[#54FFBB] hover:text-black btn btn-primary rounded-md">Live Preview</button>
                <button onClick={handlePMGitHub} className="text-black btn btn-primary bg-[#54FFBB]  rounded-md hover:bg-inherit hover:text-white border border-[#54FFBB]">GitHub</button>
            </div>

            {/* toy-crate-x website */}
            <div data-aos="fade-up" data-aos-duration="2000" className=" space-y-2 grid grid-cols-1 lg:grid-cols-2 gap-4 p-3 rounded-xl bg-[#54FFBB]  hover:text-white hover:bg-[#1e1546] border-2 border-[#3a2888]">
                <div className="w-full h-48 overflow-auto touch-auto">
                    <img className='rounded-xl w-[150%] max-w-none h-auto' src={toyImg} alt="" />
                </div>
                <div className=" text-start">
                    <h1 className='text-xl'>RoboToysWorld (<span className='text-sm font-light'> A Toy Marketplace </span>)</h1>
                    <div className="mt-2">
                        <div className="flex items-center gap-3">
                            <FcApproval></FcApproval>
                            <p className='font-light'>User-friendly interface</p>
                        </div>
                        <div className="flex items-center gap-3">
                            <FcApproval></FcApproval>
                            <p className='font-light'>Secure seller accounts</p>
                        </div>
                        <div className="flex items-center gap-3">
                            <FcApproval></FcApproval>
                            <p className='font-light'>Toy management</p>
                        </div>
                        <div className="flex items-center gap-3">
                            <FcApproval></FcApproval>
                            <p className='font-light'>Exclusive seller access</p>
                        </div>
                        <div className="flex items-center gap-3">
                            <FcApproval></FcApproval>
                            <p className='font-light'>Comprehensive toy gallery</p>
                        </div>
                        <div className="flex items-center gap-3">
                            <FcApproval></FcApproval>
                            <p className='font-light'>Enhance toy details</p>
                        </div>
                        <div className="flex items-center gap-3">
                            <FcApproval></FcApproval>
                            <p className='font-light'>Interactive category section</p>
                        </div>
                    </div>
                </div>
            </div>

            <div className="flex justify-center gap-5 mt-8 mb-24">
                <button onClick={handleToyLive} className="text-white btn btn-primary border border-[#54FFBB] hover:bg-[#54FFBB] hover:text-black rounded-md">Live Preview</button>
                <button onClick={handleToyGitHub} className="text-black  bg-[#54FFBB] btn btn-primary rounded-md hover:bg-inherit hover:text-white border border-[#54FFBB]">GitHub</button>
            </div>

            {/* zestful website */}
            <div data-aos="fade-up" data-aos-duration="2000" className=" space-y-2 grid grid-cols-1 lg:grid-cols-2 gap-4 p-3 rounded-xl bg-[#54FFBB] hover:bg-[#1e1546]  hover:text-white border-2 border-[#3a2888]">
                <div className="w-full h-48 overflow-auto touch-auto">
                    <img className='rounded-xl w-[150%] max-w-none h-auto' src={zestfulImg} alt="" />
                </div>
                <div className=" text-start">
                    <h1 className='text-xl'>Ambitious kitchen (<span className='text-sm font-light'> Serve food by Master Chefs </span>)</h1>
                    <div className="mt-2">
                        <div className="flex items-center gap-3">
                            <FcApproval></FcApproval>
                            <p className='font-light'>Culinary expertise</p>
                        </div>
                        <div className="flex items-center gap-3">
                            <FcApproval></FcApproval>
                            <p className='font-light'>Interactive engagement</p>
                        </div>
                        <div className="flex items-center gap-3">
                            <FcApproval></FcApproval>
                            <p className='font-light'>Visual delight</p>
                        </div>
                        <div className="flex items-center gap-3">
                            <FcApproval></FcApproval>
                            <p className='font-light'>User-friendly interface</p>
                        </div>
                        <div className="flex items-center gap-3">
                            <FcApproval></FcApproval>
                            <p className='font-light'>Personalized experience</p>
                        </div>
                        <div className="flex items-center gap-3">
                            <FcApproval></FcApproval>
                            <p className='font-light'>Fresh and seasonal</p>
                        </div>
                        <div className="flex items-center gap-3">
                            <FcApproval></FcApproval>
                            <p className='font-light'>Social integration</p>
                        </div>
                    </div>
                </div>
            </div>

            <div className="flex justify-center gap-5 mt-8 mb-24">
                <button onClick={handleZestfulLive} className="text-white btn btn-primary border border-[#54FFBB] hover:bg-[#54FFBB] hover:text-black  rounded-md">Live Preview</button>
                <button onClick={handleZestfulGitHub} className="text-black  bg-[#54FFBB]  btn btn-primary rounded-md hover:bg-inherit hover:text-white border border-[#54FFBB]">GitHub</button>
            </div>
        </div>
    );
};

export default Projects;