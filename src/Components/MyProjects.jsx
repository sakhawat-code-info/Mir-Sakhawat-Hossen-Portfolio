import { IoLogoGithub } from "react-icons/io";


const MyProjects = () => {
    return (
        <div className="container mx-auto p-5 sm:p-10 md:p-16 bg-gray-900 text-gray-100">

            <div className="my-20">
                <h2 className="text-3xl font-bold leading-tight text-gray-200 dark:text-white sm:text-4xl lg:text-5xl text-transparent bg-clip-text bg-gradient-to-tr to-cyan-500 from-blue-600">Some of My Projects</h2>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10 pb-20">

                {/* one  */}
                <div className="rounded overflow-hidden shadow-lg flex flex-col ">
                    <a href="#"></a>
                    <div className="relative"><a href="#">
                        <img className="w-full h-[220px]"
                            src="https://images.unsplash.com/photo-1503220317375-aaad61436b1b?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                            alt="Sunset in the mountains" />
                        <div
                            className="hover:bg-transparent transition duration-300 absolute bottom-0 top-0 right-0 left-0 bg-gray-900 opacity-25">
                        </div>
                    </a>
                        <a href="https://b9a10-client-side.web.app/" target="_blank">
                            <div
                                className="text-xs absolute top-0 right-0 bg-indigo-600 px-4 py-2 text-white mt-3 mr-3 hover:bg-white hover:text-indigo-600 transition duration-500 ease-in-out">
                                Live
                            </div>
                        </a>
                    </div>
                    <div className="px-6 py-4 mb-auto">
                        <a href="#"
                            className="font-medium text-lg  hover:text-indigo-600 transition duration-500 ease-in-out inline-block mb-2">Tourism Management website [Full Stack]</a>
                        <p className="text-gray-500 text-sm text-left">
                            This is a Travel agency site it offers tours and services for tourists and enthusiasts, fulfilling their travel needs.. <br />
                            Travelers explore rooms through various routes, accessing detailed info and a gallery of halls. <br />

                            To ensure the utmost security and privacy of users' data, JSON Web Tokens (JWT) and private routes create role-
                            based access control, enhancing data protection and user experience.
                        </p>
                        <div className="grid grid-cols-2 gap-3 my-2">
                            <p className="bg-gray-600 px-3 py-1 rounded">React.js</p>
                            <p className="bg-gray-600 px-3 py-1 rounded">React Bootstrap</p>
                            <p className="bg-gray-600 px-3 py-1 rounded">Node.js</p>
                            <p className="bg-gray-600 px-3 py-1 rounded">Express.js</p>
                            <p className="bg-gray-600 px-3 py-1 rounded">MongoDB</p>
                        </div>
                    </div>
                    <div className="px-6 py-3 flex flex-row items-center justify-between bg-gray-100">
                        <span href="#" className="py-1 text-xs font-regular text-gray-900 mr-1 flex flex-row items-center">
                            <svg height="13px" width="13px" version="1.1" id="Layer_1"
                                x="0px" y="0px" viewBox="0 0 512 512">
                                <g>
                                    <g>
                                        <path
                                            d="M256,0C114.837,0,0,114.837,0,256s114.837,256,256,256s256-114.837,256-256S397.163,0,256,0z M277.333,256 c0,11.797-9.536,21.333-21.333,21.333h-85.333c-11.797,0-21.333-9.536-21.333-21.333s9.536-21.333,21.333-21.333h64v-128 c0-11.797,9.536-21.333,21.333-21.333s21.333,9.536,21.333,21.333V256z">
                                        </path>
                                    </g>
                                </g>
                            </svg>
                            <span className="ml-1">7 days</span>
                        </span>

                        <a className="py-1 text-xs font-regular text-gray-900 mr-1 flex flex-row items-center">
                            <IoLogoGithub size={15} />
                            <a href="https://github.com/programming-hero-web-course-4/B9A10-client-side-sakhawat-code-info" target="_blank" className="ml-1 text-red-800 font-extrabold">Clint</a>

                            <a href="https://github.com/programming-hero-web-course-4/b9a10-server-side-sakhawat-code-info" target="_blank" className="ml-1 text-green-800 font-extrabold">Server</a>
                        </a>
                    </div>
                </div>


                {/* two  */}
                <div className="rounded overflow-hidden shadow-lg flex flex-col ">
                    <a href="#"></a>
                    <div className="relative"><a href="#">
                        <img className="w-full h-[220px]"
                            src="https://st.depositphotos.com/1158045/3013/i/950/depositphotos_30136073-stock-photo-confused-businessman-trying-to-make.jpg"
                            alt="Sunset in the mountains" />
                        <div
                            className="hover:bg-transparent transition duration-300 absolute bottom-0 top-0 right-0 left-0 bg-gray-900 opacity-25">
                        </div>
                    </a>
                        <a href="https://b9a11-client-side.web.app/" target="_blank">
                            <div
                                className="text-xs absolute top-0 right-0 bg-indigo-600 px-4 py-2 text-white mt-3 mr-3 hover:bg-white hover:text-indigo-600 transition duration-500 ease-in-out">
                                Live
                            </div>
                        </a>
                    </div>
                    <div className="px-6 py-4 mb-auto">
                        <a href="#"
                            className="font-medium text-lg  hover:text-indigo-600 transition duration-500 ease-in-out inline-block mb-2">Alternative Product Information System [Full Stack]</a>
                        <p className="text-gray-500 text-sm text-left">
                            A wide range of products across various categories such as food, clothing, household items, personal care, and
                            technology. <br />
                            Users can search for products using keywords, categories, or specific criteria such as organic, vegan, cruelty-free, or
                            locally produced. <br />
                            Users can read reviews and ratings from other consumers to make informed decisions.
                        </p>
                        <div className="grid grid-cols-2 gap-3 my-2">
                            <p className="bg-gray-600 px-3 py-1 rounded">React.js</p>
                            <p className="bg-gray-600 px-3 py-1 rounded">React Bootstrap</p>
                            <p className="bg-gray-600 px-3 py-1 rounded">Node.js</p>
                            <p className="bg-gray-600 px-3 py-1 rounded">Express.js</p>
                            <p className="bg-gray-600 px-3 py-1 rounded">MongoDB</p>
                        </div>
                    </div>
                    <div className="px-6 py-3 flex flex-row items-center justify-between bg-gray-100">
                        <span href="#" className="py-1 text-xs font-regular text-gray-900 mr-1 flex flex-row items-center">
                            <svg height="13px" width="13px" version="1.1" id="Layer_1"
                                x="0px" y="0px" viewBox="0 0 512 512">
                                <g>
                                    <g>
                                        <path
                                            d="M256,0C114.837,0,0,114.837,0,256s114.837,256,256,256s256-114.837,256-256S397.163,0,256,0z M277.333,256 c0,11.797-9.536,21.333-21.333,21.333h-85.333c-11.797,0-21.333-9.536-21.333-21.333s9.536-21.333,21.333-21.333h64v-128 c0-11.797,9.536-21.333,21.333-21.333s21.333,9.536,21.333,21.333V256z">
                                        </path>
                                    </g>
                                </g>
                            </svg>
                            <span className="ml-1">7 days</span>
                        </span>

                        <a className="py-1 text-xs font-regular text-gray-900 mr-1 flex flex-row items-center">
                            <IoLogoGithub size={15} />
                            <a href="https://github.com/Porgramming-Hero-web-course/b9a11-client-side-sakhawat-code-info" target="_blank" className="ml-1 text-red-800 font-extrabold">Clint</a>

                            <a href="https://github.com/Porgramming-Hero-web-course/b9a11-server-side-sakhawat-code-info" target="_blank" className="ml-1 text-green-800 font-extrabold">Server</a>
                        </a>
                    </div>
                </div>









            </div>

        </div>
    );
};

export default MyProjects;