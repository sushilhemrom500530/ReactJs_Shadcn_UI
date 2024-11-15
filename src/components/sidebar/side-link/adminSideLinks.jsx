import {
    IconBrandMastercard,
    IconChartHistogram,
    IconLayoutDashboard,
    IconRouteAltLeft,
    IconSettings,
    IconUsers,
    IconReportSearch,
    IconBox,
    IconListDetails,
    IconChartRadar
} from '@tabler/icons-react';
import {Mail} from "lucide-react";

const adminSideLinks = [
    {
        title: 'Dashboard',
        label: '',
        href: '/admin/dashboard',
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
                href: '/admin/report/performance',
                // icon: <IconChartDots2 size={18} />,
            },
            {
                title: 'Conversion',
                label: '',
                href: '/admin/report/conversion',
                //icon: <IconMessage size={18} />,
            },
            {
                title: 'Click Log',
                label: '',
                href: '/admin/report/click-Log',
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
        title: 'Publisher',
        href: '/admin/publisher/all',
        icon: <IconUsers size={18}/>,
    },
    {
        title: 'Advertiser',
        href: '/admin/advertiser/all',
        icon: <IconChartRadar size={18}/>,
    },
    {
        title: 'Offer',
        label: '',
        href: '/admin/offer/all',
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
                href: '/admin/tools/offerwall/all',
                // icon: <IconChartDots2 size={18} />,
            }
        ],
    },
    {
        title: 'Postback',
        label: '',
        href: '/admin/postback/all',
        icon: <IconRouteAltLeft size={18}/>,
    },
    {
        title: 'Payments',
        label: '',
        href: '/admin/payment/all',
        icon: <IconBrandMastercard size={18}/>,
    },
    {
        title: 'Support Ticket',
        label: '',
        href: '/admin/support-ticket/all',
        icon: <IconChartHistogram size={18}/>,
    },
    {
        title: 'Settings',
        label: '',
        href: '/admin/settings',
        icon: <IconSettings size={18}/>,
    },
    {
        title: 'Mailer',
        label: '',
        href: '',
        icon: <Mail size={18}/>,
        sub: [
            {
                title: 'Send',
                label: '',
                href: '/admin/mailer/send',
            },
            {
                title: 'Template',
                label: '',
                href: '/admin/mailer/template',

            },


        ],
    },
    {
        title: 'Integration',
        label: '',
        href: '',
        icon: <IconBox size={18}/>,
        sub: [
            {
                title: 'Offer Sync',
                label: '',
                href: '/admin/integration/offer-sync/all',
                // icon: <IconChartDots2 size={18} />,
            },
            {
                title: 'Fraud Detection',
                label: '',
                href: '/admin/integration/fraud-detection/all',
                // icon: <IconChartDots2 size={18} />,
            },
        ],
    },
];



export default  adminSideLinks
