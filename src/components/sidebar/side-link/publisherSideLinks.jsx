import {
    IconBrandMastercard,
    IconChartHistogram,
    IconLayoutDashboard,
    IconRouteAltLeft,
    IconSettings,
    IconReportSearch,
    IconListDetails,
    IconBox,
    IconMessageOff,
    IconClick,
    IconMessage,
    IconChartDots2
} from '@tabler/icons-react';


const PublisherSideLinks = [
    {
        title: 'Dashboard',
        label: '',
        href: '/publisher/dashboard',
        icon: <IconLayoutDashboard size={18}/>,
    },
    {
        title: 'Reports',
        label: '',
        href: '',
        icon: <IconReportSearch size={18}/>,
        sub: [
            {
                title: 'Performance',
                label: '',
                href: '/publisher/report/performance',
                // icon: <IconChartDots2 size={18} />,
            },
            {
                title: 'Conversation',
                label: '',
                href: '/publisher/report/conversion',
                //icon: <IconMessage size={18} />,
            },
            {
                title: 'Click Log',
                label: '',
                href: '/publisher/report/click-Log',
                // icon: <IconClick size={18} />,
            },
            // {
            //     title: 'Conversation Log',
            //     label: '',
            //     href: '/admin/report/conversion-log',
            //     // icon: < IconMessageOff size={18} />,
            // }
        ],
    },
    {
        title: 'Offer',
        label: '',
        href: '/publisher/offer/all',
        icon: <IconListDetails size={18}/>,
    },
    {
        title: 'Tools',
        label: '',
        href: '',
        icon: <IconBox size={18}/>,
        sub: [
            {
                title: 'Offerwall',
                label: '',
                href: '/publisher/tools/offerwall/all',
            },
            // {
            //     title: 'Link Locker',
            //     label: '',
            //     href: '/publisher/tools/link-locker/all',
            // },
        ],
    },
    {
        title: 'Postback',
        label: '',
        href: '/publisher/postback/all',
        icon: <IconRouteAltLeft size={18}/>,
    },
    {
        title: 'Billing',
        label: '',
        href: '/publisher/billing/all',
        icon: <IconBrandMastercard size={18}/>,
    },
    {
        title: 'Support Ticket',
        label: '',
        href: '/publisher/support-ticket/all',
        icon: <IconChartHistogram size={18}/>,
    },
    {
        title: 'Settings',
        label: '',
        href: '/publisher/settings',
        icon: <IconSettings size={18}/>,
    },
];

// sub menu demo---
// {
//   title: 'Authentication',
//   label: '',
//   href: '',
//   icon: <IconUserShield size={18} />,
//   sub: [
//     {
//       title: 'Sign In (email + password)',
//       label: '',
//       href: '/sign-in',
//       icon: <IconHexagonNumber1 size={18} />,
//     },
//     {
//       title: 'Sign In (Box)',
//       label: '',
//       href: '/sign-in-2',
//       icon: <IconHexagonNumber2 size={18} />,
//     },
//     {
//       title: 'Sign Up',
//       label: '',
//       href: '/sign-up',
//       icon: <IconHexagonNumber3 size={18} />,
//     },
//     {
//       title: 'Forgot Password',
//       label: '',
//       href: '/forgot-password',
//       icon: <IconHexagonNumber4 size={18} />,
//     },
//     {
//       title: 'OTP',
//       label: '',
//       href: '/otp',
//       icon: <IconHexagonNumber5 size={18} />,
//     },
//   ],
// },


export default PublisherSideLinks