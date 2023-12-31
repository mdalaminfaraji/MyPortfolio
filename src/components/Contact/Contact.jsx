import { AiFillFacebook, AiFillGithub, AiFillLinkedin, } from 'react-icons/ai';


const Contact = () => {
    const getCurrentYear = () => {
        return new Date().getFullYear();
    };
    const currentYear = getCurrentYear();
    return (
        <div id="contact" >
            <div className="border-t-4 border-b-4 md:w-1/3 w-1/2 py-3 mx-auto mb-5">
                <span className="text-2xl uppercase bg-gradient-to-r from-[#FFFFFF] via-[#54FFBB] to-[#FFFFFF] text-transparent bg-clip-text">Contact</span>
            </div>
            <p className="text-base-200 opacity-80">Feel free to contact me by submitting the form below and I will get back to you as soon as possible</p>
            <div data-aos="fade-up"
                data-aos-duration="2000" className="my-12 flex justify-center">

                <form className="border rounded-lg p-12 lg:w-2/3 bg-[#1e1546] text-white shadow-2xl" action="https://formsubmit.co/alaminice1617@gmail.com" method="POST">
                    <p className="text-start text-xl mb-2">Name</p>
                    <input className="bg-base-200 text-black w-full px-5 py-3 rounded-md input input-bordered input-success" type="text" placeholder="Enter Your Name" name="name" id="" />
                    <p className="text-start text-xl mb-2 mt-8">Email</p>
                    <input className="bg-base-200 text-black w-full px-5 py-3 rounded-md input input-bordered input-success" type="email" placeholder="Enter Your Email" name="email" id="" />
                    <p className="text-start text-xl mb-2 mt-8">Message</p>
                    <textarea className="textarea textarea-success w-full text-black" placeholder="Enter Your Message" name="message"></textarea>
                    <div className="mt-12 flex lg:justify-end justify-center">
                        <button className="uppercase px-12 py-3 btn btn-primary rounded-lg">Submit</button>
                    </div>
                </form>
            </div>
            <div className="mb-24">
                <div className="flex gap-4 p-link justify-center">
                    <a className='border hover:border-[#54FFBB] p-3 rounded-full' href="https://github.com/mdalaminfaraji" target='blank'><AiFillGithub /></a>
                    <a className='border hover:border-[#54FFBB] p-3 rounded-full' href="https://www.linkedin.com/in/md-alamin-faraji-a65b8b18a/#" target='blank'><AiFillLinkedin /></a>
                    <a className='border hover:border-[#54FFBB] p-3 rounded-full' href="https://www.facebook.com/md.alaminfaraji.faraji/" target='blank'><AiFillFacebook /></a>
                   
                </div>
                <div>
                    <p className="text-gray-400 text-sm pt-5 d-none lg:block"><span>&copy; {currentYear} Md Alamin Faraji. All Right Reserved</span></p>
                </div>
            </div>
        </div>
    );
};

export default Contact;