import { Link, Outlet, useLocation } from "react-router-dom";
export default function AuthLayout() {
   
    return (
        <>
        {/* <section className="w-full"> */}
            {/* header section  */}
             {/* <header className="w-full fixed h-[72px] inset-0 bg-indigo-400">
                <div className="w-10/12 flex justify-between mx-auto p-4">
                    <div className="flex items-end">
                        <img src={Logo} className="h-10 w-10" alt="logo" />
                        <h1 className="text-xl font-semibold text-white font-italic">Perkox</h1>
                    </div>
                    <Link to={linkTo} className="text-white text-xl font-semibold">{linkText}</Link>
                </div>
            </header> */}
           <div className="bg-gray-200 min-h-screen">
               <Outlet/>
           </div>
        {/* </section> */}
        </>
    );
}
