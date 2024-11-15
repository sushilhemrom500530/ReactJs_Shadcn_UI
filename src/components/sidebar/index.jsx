import React, {useContext, useEffect, useState} from 'react';
import { IconChevronsLeft, IconMenu2, IconX } from '@tabler/icons-react';
import { Button } from '../ui/button';
import { Layout } from '../layout';
import Nav from '../navbar';
import { cn } from "../../lib/utils";
import { useLocation } from 'react-router-dom';
import adminSideLinks from './side-link/adminSideLinks';
import PublisherSideLinks from './side-link/publisherSideLinks';

export default function Sidebar({ className, isCollapsed, setIsCollapsed }) {
  const [navOpened, setNavOpened] = useState(false);
  const location = useLocation()
  const [sideItems, setSideItems] = useState([]);
  

  useEffect(() => {
    if (location.pathname.startsWith("/admin")) {
      setSideItems(adminSideLinks);
    } else if (location.pathname.startsWith("/publisher")) {
      setSideItems(PublisherSideLinks);
    } else {
      setSideItems([]);
    }
  }, [location.pathname]);


  // Make body not scrollable when navBar is opened
  useEffect(() => {
    if (navOpened) {
      document.body.classList.add('overflow-hidden');
    } else {
      document.body.classList.remove('overflow-hidden');
    }
  }, [navOpened]);

  return (
    <aside
      className={cn(
        `fixed bg-black  left-0 right-0 top-0 z-50 w-full border-r-2 border-r-muted transition-[width] md:bottom-0 md:right-auto md:h-svh ${isCollapsed ? 'md:w-14' : 'md:w-64'}`,
        className
      )}
    >
      {/* Overlay in mobile */}
      <div
        onClick={() => setNavOpened(false)}
        className={`absolute inset-0 transition-[opacity] delay-100 duration-700 ${navOpened ? 'h-svh opacity-50' : 'h-0 opacity-0'} w-full md:hidden`}
      />

      <Layout fixed className={navOpened ? 'h-svh' : ''}>
        {/* Header */}
        <Layout.Header
          sticky
          className='z-50  flex justify-between px-4 py-3  shadow-sm md:px-4'>
            <div className={`flex items-center ${!isCollapsed ? 'gap-2' : ''}`}>
                {
                    isCollapsed ?  
                     <h2 className='text-2xl font-bold text-white'>A</h2>
                      :
                        <h2 className='text-2xl font-bold text-white'>Affiliate</h2>
                }
                <div
                    className={`flex flex-col justify-end truncate ${isCollapsed ? 'invisible w-0' : 'visible w-auto'}`}
                >
                </div>
            </div>


            {/* Toggle Button in mobile */}
          <Button
            variant='ghost'
            size='icon'
            className='md:hidden  text-white'
            aria-label='Toggle Navigation'
            aria-controls='sidebar-menu'
            aria-expanded={navOpened}
            onClick={() => setNavOpened((prev) => !prev)}
          >
            {navOpened ? <IconX /> : <IconMenu2 />}
          </Button>
        </Layout.Header>

        {/* Navigation links */}
        <Nav
          id='sidebar-menu'
          className={`z-40  h-full bg-black flex-1 ${navOpened ? 'max-h-screen' : 'max-h-0 py-0 md:max-h-screen md:py-2'}`}
          closeNav={() => setNavOpened(false)}
          isCollapsed={isCollapsed}
          links={sideItems}
        />

        {/* Scrollbar width toggle button */}
        <Button
          onClick={() => setIsCollapsed((prev) => !prev)}
          size='icon'
          variant='outline'
          className='absolute -right-5 top-1/2 z-50 hidden hover:bg-[#929cd3] bg-[#6c739a] hover:text-white text-white rounded-full border-[#6c739a] hover:border-[#929cd3] md:inline-flex'
        >
          <IconChevronsLeft
            stroke={1.5}
            className={`h-5 w-5 ${isCollapsed ? 'rotate-180' : ''}`}
          />
        </Button>
      </Layout>
    </aside>
  );
}
