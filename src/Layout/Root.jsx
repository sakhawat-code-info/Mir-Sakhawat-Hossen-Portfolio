
import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";
import { Outlet } from "react-router-dom";

const Root = () => {

    return (
        <div className="bg-gray-600">
            <div className=" max-w-[1920px] lg:w-[90%] w-[98%] mx-auto font-mont">
                <Navbar />

                <div className="">
                    <Outlet></Outlet>
                </div>
                <Footer />


            </div>
        </div>
    );
};

export default Root;