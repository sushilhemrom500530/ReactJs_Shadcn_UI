import Lottie from "lottie-react";
import animation from "@//assets/Animation - 1727346529677.json";
import {Link} from "react-router-dom";
import {Button} from "@//components/ui/button.jsx";
import React from "react";

export default function RegisterSuccess({message}){


    return (
        <div>
            <div className="w-1/3 mx-auto">
                <div className="w-full mx-auto">
                    <Lottie
                        animationData={animation}
                        style={{width: 600, height: 500}}
                    />
                </div>

                <p className="text-center font-semibold text-2xl"> {message}</p>

                <p className="text-center  mt-6 text-xl">
                    Thank you for being interested, we received your application.
                </p>
                <Link to="/auth/login">
                    <Button className='mt-6 w-1/2 flex  mx-auto' type="submit">
                        Login
                    </Button>
                </Link>
            </div>
        </div>
    )
}
