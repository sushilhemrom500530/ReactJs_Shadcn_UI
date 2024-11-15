import { Link, useLocation, useNavigate } from 'react-router-dom';
import { IconChevronDown } from '@tabler/icons-react';
import {
    Collapsible,
    CollapsibleContent,
    CollapsibleTrigger,
} from '@/components/ui/collapsible';
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuSeparator, DropdownMenuShortcut,
    DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import {
    Tooltip,
    TooltipContent,
    TooltipProvider,
    TooltipTrigger,
} from '@/components/ui/tooltip';
import { cn } from '../../lib/utils';
import { Button, buttonVariants } from '../ui/button';
import { useContext, useEffect, useState } from 'react';
// import {UserContext} from "@//context-api/user/index.jsx";
import Cookies from "js-cookie";
import { IconLogout2 } from '@tabler/icons-react';


export default function Nav({ links, isCollapsed, className, closeNav }) {
    const [activeIndex, setActiveIndex] = useState(null);

    useEffect(() => {
        if (isCollapsed) {
            setActiveIndex(null);
        }
    }, [isCollapsed]);

    const renderLink = ({ sub, ...rest }, index) => {
        const key = `${rest.title}-${rest.href}`;

        if (isCollapsed && sub) {
            return (
                <NavLinkIconDropdown
                    {...rest}
                    sub={sub}
                    key={key}
                    closeNav={closeNav}
                />
            );
        }
        if (isCollapsed) {

            return <NavLinkIcon {...rest} key={key} closeNav={closeNav} />;
        }

        if (sub) {
            return (
                <NavLinkDropdown
                    {...rest}
                    sub={sub}
                    key={key}
                    closeNav={closeNav}
                    isActive={activeIndex === index}
                    setActiveIndex={() => setActiveIndex(activeIndex === index ? null : index)}

                />
            );
        }
        return <NavLink
            onClick={() => {
                setActiveIndex(null);
                closeNav();
            }}
            {...rest}
            key={key}
            closeNav={closeNav}
        />
    }
    return (
        <div
            data-collapsed={isCollapsed}
            className={cn(
                'group border-b bg-background py-2 transition-[max-height,padding] duration-500 data-[collapsed=true]:py-2 md:border-none',
                className
            )}
        >
            <TooltipProvider delayDuration={0}>
                <nav
                    className='grid gap-1 group-[[data-collapsed=true]]:justify-center group-[[data-collapsed=true]]:px-2'>
                    {links.map((link, index) => renderLink(link, index))}
                    <div className={"text-3xl lg:hidden"}>
                        <Button className={"ml-2 gap-2 text-[#cfd3ec] bg-[#25293C]"}>
                            <IconLogout2 stroke={2} width={20} height={20} />     Log out
                        </Button>
                    </div>
                </nav>
            </TooltipProvider>
        </div>
    );
}


function NavLink({ title, icon, label, onClick, href, subLink }) {
    const location = useLocation();
    const isActive = location.pathname.startsWith(href);



    return (
        <Link
            onClick={onClick}
            to={href}
            className={cn(
                buttonVariants({
                    variant: isActive ? 'secondary' : 'ghost',
                    size: 'sm',
                }),
                'h-12 justify-start text-wrap rounded-none hover:bg-white px-6',
                isActive ? 'bg-[#ffffff] text-black ' : 'text-white',
                subLink && 'h-10 w-full border-l border-l-slate-500 px-2'
            )}
            aria-current={isActive ? 'page' : undefined}
        >
            <div className='mr-2 '>{icon}</div>
            <span className="">
                {title}
            </span>
            {label && (
                <div className='ml-2 rounded-lg bg-primary px-1 text-[0.625rem] text-primary-foreground'>
                    {label}
                </div>
            )}
        </Link>
    );
}


function NavLinkDropdown({ title, icon, label, sub, isActive, setActiveIndex, closeNav }) {

    return (
        <Collapsible open={isActive} onOpenChange={setActiveIndex}>
            <CollapsibleTrigger
                className={cn(
                    buttonVariants({ variant: 'ghost', size: 'sm' }),
                    'group h-12 w-full justify-start hover:bg-white hover:text-black text-white rounded-none px-6'
                )}
            >
                <div className='mr-2'>{icon}</div>
                <span className="">
                    {title}
                </span>
                {label && (
                    <div className='ml-2 rounded-lg bg-primary px-1 text-[0.625rem] text-primary-foreground'>
                        {label}
                    </div>
                )}
                <span
                    className={cn(
                        'ml-auto transition-all group-data-[state="open"]:-rotate-180'
                    )}
                >
                    <IconChevronDown stroke={1}  />
                </span>
            </CollapsibleTrigger>
            <CollapsibleContent className='collapsibleDropdown' asChild>
                <ul>
                    {sub.map((sublink) => (
                        <li key={sublink.title} className='my-1 ml-8 ' onClick={() => {
                            closeNav()
                        }}>
                            <NavLink {...sublink} subLink />
                        </li>
                    ))}
                </ul>
            </CollapsibleContent>
        </Collapsible>
    );
}


function NavLinkIcon({ title, icon, label, href }) {
    const location = useLocation();
    const isActive = location.pathname.startsWith(href);


    return (
        <Tooltip delayDuration={0}>
            <TooltipTrigger asChild>
                <Link
                    to={href}
                    className={cn(
                        buttonVariants({
                            variant: isActive ? 'secondary' : 'ghost',
                            size: 'icon',
                        }),
                        'h-12 w-12 hover:bg-white text-white  ',
                        isActive ? 'bg-white text-black ' : '',
                    )}
                >
                    <span className=""> {icon}</span>
                    <span className='sr-only '>{title}</span>
                </Link>
            </TooltipTrigger>
            <TooltipContent side='right' className='flex items-center gap-4'>
                <span className="">
                    {title}
                </span>
                {label && (
                    <span className='ml-auto text-muted-foreground text-[#cfd3ec]'>{label}</span>
                )}
            </TooltipContent>
        </Tooltip>
    );
}


function NavLinkIconDropdown({ title, icon, label, sub }) {
    const location = useLocation();
    const isChildActive = !!sub?.find((s) => location.pathname.startsWith(s.href));

    return (
        <DropdownMenu>
            <Tooltip delayDuration={0}>
                <TooltipTrigger asChild>
                    <DropdownMenuTrigger asChild>
                        <Button
                            variant={isChildActive ? 'secondary' : 'ghost'}
                            size='icon'
                            className={`h-12 w-12 text-white hover:text-black hover:bg-white ${isChildActive ? "bg-white" : ""}`}
                        >
                            <span className=" hover:text-black ">{icon}</span>
                        </Button>
                    </DropdownMenuTrigger>
                </TooltipTrigger>
                <TooltipContent side='right' className='flex items-center gap-4'>
                    <span className="">{title}</span>
                    {label && (
                        <span className='ml-auto text-muted-foreground '>{label}</span>
                    )}
                    <IconChevronDown size={18} className='-rotate-90  text-muted-foreground' />
                </TooltipContent>
            </Tooltip>
            <DropdownMenuContent side='right' align='start' className="bg-[#25293C]" sideOffset={4}>
                <DropdownMenuLabel className="text-[#cfd3ec]">
                    <span className="text-[#cfd3ec]">{title}</span> {label ? `(${label})` : ''}
                </DropdownMenuLabel>
                <DropdownMenuSeparator />
                {sub.map(({ title, icon, label, href }) => (
                    <DropdownMenuItem className="hover:bg-white hover:text-black text-white " key={`${title}-${href}`} asChild>
                        <Link
                            to={href}
                            className={`${isChildActive ? 'bg-white text-black' : ''}`}
                        >
                            {icon} <span className='ml-2 max-w-52 text-wrap'>{title}</span>
                            {label && <span className='ml-auto text-xs '>{label}</span>}
                        </Link>
                    </DropdownMenuItem>
                ))}
            </DropdownMenuContent>
        </DropdownMenu>
    );
}
