import useIsCollapsed from '@/hooks/use-Is-collpsed';
import { useEffect, useRef } from 'react';
import { Outlet } from 'react-router-dom';
import { Topbar } from '@/components/custom/topbar';
import Sidebar from '@/components/sidebar';


export default function CommonLayout() {
    const [isCollapsed, setIsCollapsed] = useIsCollapsed();
    const headerRef = useRef(null);

    useEffect(() => {
        const handleScroll = () =>
            headerRef.current.classList[window.scrollY > 0 ? "add" : "remove"](
                "shadow-md"
            );
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, [headerRef]);


    return (
        <div className='relative h-full overflow-hidden bg-background'>
            {/* sidebar  */}
            <Sidebar isCollapsed={isCollapsed} setIsCollapsed={setIsCollapsed} />
            {/* topbar  */}
            <Topbar headerRef={headerRef} isCollapsed={isCollapsed} />

            {/* dashboard body  */}
            <main id='content' className={`
            h-full overflow-x-hidden scrollbar-hide pt-16 transition-[margin] md:overflow-y-hidden md:m-10 px-5 md:pt-0
                     ${isCollapsed ? 'md:ml-14' : 'md:ml-64'}`}
            >
                <div className='mt-14'>
                    <Outlet />
                </div>
            </main>
        </div>
    );
}
