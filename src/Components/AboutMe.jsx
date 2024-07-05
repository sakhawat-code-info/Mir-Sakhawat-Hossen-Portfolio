
import removeProfileBg from '../assets/A-55430-removebg-preview.png'

const AboutMe = () => {
    return (
        <div id='aboutMe' className='container mx-auto'>
            <section className="pt-10 overflow-hidden bg-gray-800 text-gray-100 dark:bg-gray-800 md:pt-0 sm:pt-16 2xl:pt-16">
                <div className="px-4 mx-auto sm:px-6 lg:px-8 max-w-7xl">
                    <div className="grid items-center grid-cols-1 md:grid-cols-2">

                        <div className="text-left pl-4">
                            <h2 className="text-3xl font-bold leading-tight text-gray-200 dark:text-white sm:text-4xl lg:text-5xl text-transparent bg-clip-text bg-gradient-to-tr to-cyan-500 from-blue-600">About Me
                            </h2>
                            <p className="max-w-lg mt-3 text-base leading-relaxed text-gray-300 dark:text-gray-300 md:mt-8">
                                I am a MERN-Stack WEB Developer. I am working with React, Node.js and MongoDB. I also have experience in developing static websites using HTML5, CSS3 and JavaScript (ES6). I am a quick learner. I believe in hard work and efficiency. That's why I am always ready to accomplish any task by working hard. I always focus on learning new technology. My goal is to become A World-Class Professional Web Developer.
                            </p>


                            <p className='my-2 underline'>Here are a few technologies I've been working with recently:</p>

                            <div className='space-y-2 my-3'>
                                <div>
                                    <h2 className="text-xl font-bold leading-tight text-gray-200 dark:text-white text-transparent bg-clip-text bg-gradient-to-tr to-cyan-500 from-blue-600">Front-End </h2>
                                    <ol className='flex gap-2'>
                                        <li>React.js</li>
                                        <li>JavaScript (ES6),</li>
                                        <li>TailwindCSS,</li>
                                        <li>React Bootstrap,</li>
                                        <li>CSS3,</li>
                                        <li>HTML5</li>
                                    </ol>
                                </div>
                                <div>
                                    <h2 className="text-xl font-bold leading-tight text-gray-200 dark:text-white text-transparent bg-clip-text bg-gradient-to-tr to-cyan-500 from-blue-600">Back-End </h2>
                                    <ol className='flex gap-2'>
                                        <li>Node.js</li>
                                        <li>Express.js,</li>
                                        <li>MongoDB</li>
                                    </ol>
                                </div>
                                <div>
                                    <h2 className="text-xl font-bold leading-tight text-gray-200 dark:text-white text-transparent bg-clip-text bg-gradient-to-tr to-cyan-500 from-blue-600">Tools</h2>
                                    <ol className='flex gap-2'>
                                        <li>VS Code</li>
                                        <li>GIT,</li>
                                        <li>Chrome Dev Tool,</li>
                                        <li>Firebase,</li>
                                        <li>Netlify</li>
                                    </ol>
                                </div>






                            </div>
                        </div>

                        <div className="relative">
                            <img className="absolute inset-x-0 bottom-0 -mb-48 -translate-x-1/2 left-1/2" src="https://cdn.rareblocks.xyz/collection/celebration/images/team/1/blob-shape.svg" alt="" />

                            <img className="relative w-full xl:max-w-lg xl:mx-auto 2xl:origin-bottom 2xl:scale-110" src={removeProfileBg} alt="" />
                        </div>

                    </div>
                </div>
            </section>
        </div>
    );
};

export default AboutMe;