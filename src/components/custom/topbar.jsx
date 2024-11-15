import { Button } from '@/components/custom/button'
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuGroup,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuShortcut,
    DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu'

import Cookies from "js-cookie";
import { Link, useNavigate } from "react-router-dom";
import { Avatar, AvatarFallback, AvatarImage } from '../ui/avatar';

export function Topbar({ isCollapsed,headerRef }) {

    const navigate = useNavigate();

    const handleLogout = () => {
        const impersonateAuthToken = Cookies.get("impersonateAuthToken");
        const impersonatedUser = Cookies.get("impersonateUser");

        if (impersonateAuthToken && impersonatedUser) {
            // Remove impersonation cookies only
            Cookies.remove("impersonateAuthToken");
            Cookies.remove("impersonateUser");
            navigate("/auth/login");
        } else {
            Cookies.remove("authToken");
            Cookies.remove("user");

            navigate("/auth/login");
        }
    };


    return (
        <div ref={headerRef} className="fixed top-0 left-0 right-0 z-[50]  hidden md:block">
            <div className={`${isCollapsed ? 'md:ml-14' : 'md:ml-64'
                } bg-[#FFFFFF] h-20 shadow-sm`}>
                <div className='flex justify-end px-4 py-4'>
                    <div className='ml-auto flex items-center space-x-4'>
                        {/*<Search/>*/}
                        <DropdownMenu>
                            <DropdownMenuTrigger asChild>
                                <Button variant='ghost' className='relative h-8 w-8 rounded-full'>
                                    <Avatar className='h-8 w-8'>
                                        <AvatarImage src={"logo"} alt='@shadcn' />
                                        <AvatarFallback>SN</AvatarFallback>
                                    </Avatar>
                                </Button>
                            </DropdownMenuTrigger>
                            <DropdownMenuContent className='w-56' align='end' forceMount>
                                <DropdownMenuLabel className='font-normal'>
                                    <div className='flex flex-col space-y-1'>
                                        <p className='text-sm font-medium leading-none'>user first_name </p>
                                        <p className='text-xs leading-none text-muted-foreground'>
                                            user email
                                        </p>
                                    </div>
                                </DropdownMenuLabel>
                                <DropdownMenuSeparator />
                                <DropdownMenuGroup>
                                </DropdownMenuGroup>
                                <DropdownMenuSeparator />
                                <DropdownMenuItem className="cursor-pointer" onClick={handleLogout}>
                                    Log out
                                    <DropdownMenuShortcut>⇧⌘Q</DropdownMenuShortcut>
                                </DropdownMenuItem>
                            </DropdownMenuContent>
                        </DropdownMenu>
                    </div>
                </div>
            </div>
        </div>

    )
}
