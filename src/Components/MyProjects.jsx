

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
                        <img className="w-full"
                            src="https://images.pexels.com/photos/61180/pexels-photo-61180.jpeg?auto=compress&amp;cs=tinysrgb&amp;dpr=1&amp;w=500"
                            alt="Sunset in the mountains" />
                        <div
                            className="hover:bg-transparent transition duration-300 absolute bottom-0 top-0 right-0 left-0 bg-gray-900 opacity-25">
                        </div>
                    </a>
                        <a href="#!">
                            <div
                                className="text-xs absolute top-0 right-0 bg-indigo-600 px-4 py-2 text-white mt-3 mr-3 hover:bg-white hover:text-indigo-600 transition duration-500 ease-in-out">
                                Live
                            </div>
                        </a>
                    </div>
                    <div className="px-6 py-4 mb-auto">
                        <a href="#"
                            className="font-medium text-lg  hover:text-indigo-600 transition duration-500 ease-in-out inline-block mb-2">Simplest
                            Salad Recipe ever</a>
                        <p className="text-gray-500 text-sm">
                            Lorem Ipsum is simply dummy text of the printing and typesetting industry.
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

                        <span href="#" className="py-1 text-xs font-regular text-gray-900 mr-1 flex flex-row items-center">
                            <svg className="h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">



                            </svg>
                            <span className="ml-1 text-indigo-600">GitHub Link</span>
                        </span>
                    </div>
                </div>

                {/* one  */}
                <div className="rounded overflow-hidden shadow-lg flex flex-col ">
                    <a href="#"></a>
                    <div className="relative"><a href="#">
                        <img className="w-full"
                            src="https://images.pexels.com/photos/61180/pexels-photo-61180.jpeg?auto=compress&amp;cs=tinysrgb&amp;dpr=1&amp;w=500"
                            alt="Sunset in the mountains" />
                        <div
                            className="hover:bg-transparent transition duration-300 absolute bottom-0 top-0 right-0 left-0 bg-gray-900 opacity-25">
                        </div>
                    </a>
                        <a href="#!">
                            <div
                                className="text-xs absolute top-0 right-0 bg-indigo-600 px-4 py-2 text-white mt-3 mr-3 hover:bg-white hover:text-indigo-600 transition duration-500 ease-in-out">
                                Live
                            </div>
                        </a>
                    </div>
                    <div className="px-6 py-4 mb-auto">
                        <a href="#"
                            className="font-medium text-lg  hover:text-indigo-600 transition duration-500 ease-in-out inline-block mb-2">Simplest
                            Salad Recipe ever</a>
                        <p className="text-gray-500 text-sm">
                            Lorem Ipsum is simply dummy text of the printing and typesetting industry.
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

                        <span href="#" className="py-1 text-xs font-regular text-gray-900 mr-1 flex flex-row items-center">
                            <svg className="h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">



                            </svg>
                            <span className="ml-1 text-indigo-600">GitHub Link</span>
                        </span>
                    </div>
                </div>

                {/* one  */}
                <div className="rounded overflow-hidden shadow-lg flex flex-col ">
                    <a href="#"></a>
                    <div className="relative"><a href="#">
                        <img className="w-full"
                            src="https://images.pexels.com/photos/61180/pexels-photo-61180.jpeg?auto=compress&amp;cs=tinysrgb&amp;dpr=1&amp;w=500"
                            alt="Sunset in the mountains" />
                        <div
                            className="hover:bg-transparent transition duration-300 absolute bottom-0 top-0 right-0 left-0 bg-gray-900 opacity-25">
                        </div>
                    </a>
                        <a href="#!">
                            <div
                                className="text-xs absolute top-0 right-0 bg-indigo-600 px-4 py-2 text-white mt-3 mr-3 hover:bg-white hover:text-indigo-600 transition duration-500 ease-in-out">
                                Live
                            </div>
                        </a>
                    </div>
                    <div className="px-6 py-4 mb-auto">
                        <a href="#"
                            className="font-medium text-lg  hover:text-indigo-600 transition duration-500 ease-in-out inline-block mb-2">Simplest
                            Salad Recipe ever</a>
                        <p className="text-gray-500 text-sm">
                            Lorem Ipsum is simply dummy text of the printing and typesetting industry.
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

                        <span href="#" className="py-1 text-xs font-regular text-gray-900 mr-1 flex flex-row items-center">
                            <svg className="h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">



                            </svg>
                            <span className="ml-1 text-indigo-600">GitHub Link</span>
                        </span>
                    </div>
                </div>








            </div>

        </div>
    );
};

export default MyProjects;