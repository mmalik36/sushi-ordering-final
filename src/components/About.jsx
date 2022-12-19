import aboutImg from "../assets/aboutImg.svg";

export const About = () => {

    return (

        <div className="bg-white pt-20">
            <div className="p-24 grid grid-cols-2">
                <div className="">
                    <h2 id = {"about"} className="text-2xl font-medium">About Us</h2>
                    <br></br>
                    <p className="font-medium">
                        Japanese Resturant with a modern twist! Offering your authentic Japanese cuisene at an affordable price!

                    </p>
                    <br></br>
                    <p className="text-lg font-bold">
                    CONTACT INFORMATION
                    </p>
                        <br></br>

                        <p className="font-light">
                        Email: bumblebeecuisine@gmail.com
                            </p>
                        <br></br>
                        <p className="font-light">
                        Phone #: (347)-555-4294
                            </p>
                        <br></br>
                    <p className="font-light">
                        Resturant Location:
                        <br></br>
                        111 Mcdougal Street
                        <br></br>
                        Manhattan, NY
                        <br></br>
                        10012
                    </p>

                </div>
                <div className="flex items-center justify-center">
                    <img src={aboutImg} alt="" className="w-[400px] h-[400px] object-cover" />
                </div>
            </div>
        </div>

       
    )
}