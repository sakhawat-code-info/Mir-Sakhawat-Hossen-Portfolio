import { FaFilePdf } from "react-icons/fa";
import profileImg from '../assets/A-55430.jpg'


const Navbar = () => {

    return (
        <div id="home" className="container mx-auto">
            <div className="w-full h-full bg-gray-900 dark:bg-gray-200">
                <header className="lg:px-16 px-4 flex flex-wrap items-center py-4 shadow-lg">
                    <div className="flex-1 flex justify-between items-center text-white font-extrabold text-4xl">
                        {/* <img className="sm:w-[10rem] xs:w-[7rem]"
                            src="https://techakim.com/sam/tg/7268/li/imgs/samlogo2.png" alt="Logo" /> */}
                        Mir Sakhawat Hossen
                    </div>
                    <label className="pointer-cursor md:hidden block">
                        <svg className="fill-current text-gray-200" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20">
                            <title>menu</title>
                            <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z"></path>
                        </svg>
                    </label>
                    <input className="hidden" type="checkbox" id="menu-toggle" />

                    <div className="hidden md:flex md:items-center md:w-auto w-full" id="menu">
                        <nav>
                            <ul className="md:flex items-center justify-between text-base text-gray-100 dark:text-gray-600 pt-4 md:pt-0">
                                <li><a className="md:p-4 py-3 px-0 block text-rose-500" href="#home">Home</a></li>
                                <li><a className="md:p-4 py-3 px-0 block" href="#aboutMe">About Me</a></li>
                                <li><a className="md:p-4 py-3 px-0 block" href="#myProjects">My Projects</a></li>
                                <li><a className="md:p-4 py-3 px-0 block" href="#education">Education</a></li>
                                <li><a className="md:p-4 py-3 px-0 block md:mb-0 mb-2" href="#contact">Contact</a></li>
                            </ul>
                        </nav>
                    </div>
                </header>

                <div
                    className="h-screen w-full mx-auto py-20 xl:px-16 xs:px-8 flex md:flex-row xs:flex-col gap-4 justify-center items-center pb-10 pt-4">
                    <div className="w-full">
                        <img className="rounded-full md:max-w-[70%] sm:max-w-[50%] xs:max-w-[60%] mx-auto" src={profileImg} alt="My Image" />
                    </div>
                    <div className="w-full flex flex-col justify-center gap-4 text-white dark:text-gray-800 md:mt-0 sm:mt-8 xs:mt-4">
                        <h1 className="text-3xl font-semibold font-serif">Hello, I'm Mir Sakhawat Hossen</h1>
                        <h3 className="capitalize text-rose-400">i'm <span className="typing text-green-500 dark:text-green-700">fullstack developer</span></h3>
                        <p className="text-justify">A self-motivated and enthusiastic web developer. To gain confidence and fame using my potential in the field of web development and express my innovative creative skills for self and company growth. I always like to learn new things and have experience with new stuff.</p>
                        <div className="sm:mt-4 xs:mt-2 flex items-center justify-center">
                            <a href="https://drive.google.com/file/d/1oNz9Ss-ZnRcHiWZLKM5H07AyaS7nGQSU/view?usp=sharing" target="_blank">
                                <button className="px-6 py-2 bg-rose-500 text-white rounded flex items-center justify-center gap-3">Resume <span><FaFilePdf size={20} /></span></button>
                            </a>

                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Navbar;