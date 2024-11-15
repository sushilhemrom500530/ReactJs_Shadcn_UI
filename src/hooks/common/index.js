import {useMemo} from "react";
import countryList from "react-select-country-list";

// Status Options
export const useStatusOptions = () => {
    return useMemo(() => [
        {label: "Active", value: "active"},
        {label: "Inactive", value: "inactive"},
        {label: "Pending", value: "pending"},
        {label: "Suspended", value: "suspended"},
        {label: "Deleted", value: "deleted"},
    ], []);
};

// Country Options Hook
export const useCountryOptions = () => {
    const countries = useMemo(() => countryList().getData(), []);

    return useMemo(() => {
        return countries.map((country) => ({
            id: country.value,
            label: country.label,
            value: country.label,
        }));
    }, [countries]);
};


// model Options
export const useModelOptions = () => {
    return useMemo(() => [
        {value: "cpa", label: 'CPA'},
        {value: "cpc", label: 'CPC'},
        {value: "cpm", label: 'CPM'},
        {value: "cpi", label: 'CPI'},
    ], []);
};
// page options
export const usePageOptions = () => {
    return useMemo(() => [
        { value:10, label: "10" },
        { value:20, label: "20" },
        { value:30, label: "30" },
        { value:50, label: "50" },
        { value:100, label: "100" },
    ], []);
};

export const usePrivacyOptions = () => {
    return useMemo(() => [
        { value:"public", label: "Public" },
        { value:"private", label: "Private" },
        { value:"permission", label: "Permission" },
    ], []);
};




export const useTrackingParams= () => {
    return useMemo(() => [
        { id: 1, label: "{transaction_id}", desc: "Transaction ID" },
        { id: 2, label: "{offer_id}", desc: "The ID of the offer." },
        { id: 3, label: "{pub_id}", desc: "The ID of the publisher" },
        { id: 5, label: "{ip}", desc: "The IP address from the click." },
        { id: 6, label: "{browser}", desc: "The browser used in the click." },
        { id: 7, label: "{sub1}", desc: "Sub ID 1 (additional tracking parameter)." },
        { id: 8, label: "{sub2}", desc: "Sub ID 2 (additional tracking parameter)." },
        { id: 9, label: "{sub3}", desc: "Sub ID 3 (additional tracking parameter)." },
        { id: 10, label: "{sub4}", desc: "Sub ID 4 (additional tracking parameter)." },
        { id: 11, label: "{sub5}", desc: "Sub ID 5 (additional tracking parameter)." },
        { id: 12, label: "{click_id}", desc: "Click ID (tracking click identifier)." },
        { id: 13, label: "{device_model}", desc: "The model of the device used in the click." },
        { id: 14, label: "{device_type}", desc: "The type of device (e.g., mobile, desktop)." },
        { id: 15, label: "{device_vendor}", desc: "The vendor/manufacturer of the device." },
        { id: 16, label: "{browser_name}", desc: "The name of the browser used." },
        { id: 17, label: "{browser_version}", desc: "The version of the browser used." },
        { id: 18, label: "{platform_name}", desc: "The operating system or platform name." },
        { id: 19, label: "{platform_version}", desc: "The version of the operating system or platform." },
        { id: 20, label: "{continent}", desc: "The continent from which the click originated." },
        { id: 21, label: "{country}", desc: "The country from which the click originated." },
        { id: 22, label: "{state}", desc: "The state from which the click originated." },
        { id: 23, label: "{city}", desc: "The city from which the click originated." },
        { id: 24, label: "{isp}", desc: "The Internet Service Provider (ISP) of the click." },
        { id: 25, label: "{source}", desc: "The source from which the click came." },
        { id: 26, label: "{user_agent}", desc: "The full user agent string from the click." },
        { id: 27, label: "{event_name}", desc: "The name of the event associated with the conversion." },
        { id: 28, label: "{event_slug}", desc: "The slug (URL-friendly version) of the event name." },
        { id: 29, label: "{player_id}", desc: "The ID of the player who triggered the conversion." },
        { id: 30, label: "{player_internal_id}", desc: "The internal system ID of the player." },
        { id: 31, label: "{player_name}", desc: "The name of the player." },
        { id: 32, label: "{player_email}", desc: "The email address of the player." },
        { id: 33, label: "{player_username}", desc: "The username of the player." },
        { id: 34, label: "{player_phone}", desc: "The phone number of the player." },
        { id: 36, label: "{click_datetime}", desc: "The date and time of the click in 'Y-m-d H:i:s' format." },
    ], []);
};


export const usePostbackUrlParams= () => {
    return useMemo(() => [
        { id: 1, label: "{offer_id}", desc: "The ID of the offer." },
        { id: 2, label: "{payout}", desc: "The payout amount for the conversion." },
        { id: 3, label: "{status}", desc: "The status of the conversion (e.g., approved, pending)." },
        { id: 4, label: "{event}", desc: "The event name associated with the conversion." },
        { id: 5, label: "{ip}", desc: "The IP address from the click." },
        { id: 6, label: "{browser}", desc: "The browser used in the click." },
        { id: 7, label: "{sub1}", desc: "Sub ID 1 (additional tracking parameter)." },
        { id: 8, label: "{sub2}", desc: "Sub ID 2 (additional tracking parameter)." },
        { id: 9, label: "{sub3}", desc: "Sub ID 3 (additional tracking parameter)." },
        { id: 10, label: "{sub4}", desc: "Sub ID 4 (additional tracking parameter)." },
        { id: 11, label: "{sub5}", desc: "Sub ID 5 (additional tracking parameter)." },
        { id: 12, label: "{click_id}", desc: "Click ID (tracking click identifier)." },
        { id: 13, label: "{device_model}", desc: "The model of the device used in the click." },
        { id: 14, label: "{device_type}", desc: "The type of device (e.g., mobile, desktop)." },
        { id: 15, label: "{device_vendor}", desc: "The vendor/manufacturer of the device." },
        { id: 16, label: "{browser_name}", desc: "The name of the browser used." },
        { id: 17, label: "{browser_version}", desc: "The version of the browser used." },
        { id: 18, label: "{platform_name}", desc: "The operating system or platform name." },
        { id: 19, label: "{platform_version}", desc: "The version of the operating system or platform." },
        { id: 20, label: "{continent}", desc: "The continent from which the click originated." },
        { id: 21, label: "{country}", desc: "The country from which the click originated." },
        { id: 22, label: "{state}", desc: "The state from which the click originated." },
        { id: 23, label: "{city}", desc: "The city from which the click originated." },
        { id: 24, label: "{isp}", desc: "The Internet Service Provider (ISP) of the click." },
        { id: 25, label: "{source}", desc: "The source from which the click came." },
        { id: 26, label: "{user_agent}", desc: "The full user agent string from the click." },
        { id: 27, label: "{event_name}", desc: "The name of the event associated with the conversion." },
        { id: 28, label: "{event_slug}", desc: "The slug (URL-friendly version) of the event name." },
        { id: 29, label: "{player_id}", desc: "The ID of the player who triggered the conversion." },
        { id: 30, label: "{player_internal_id}", desc: "The internal system ID of the player." },
        { id: 31, label: "{player_name}", desc: "The name of the player." },
        { id: 32, label: "{player_email}", desc: "The email address of the player." },
        { id: 33, label: "{player_username}", desc: "The username of the player." },
        { id: 34, label: "{player_phone}", desc: "The phone number of the player." },
        { id: 36, label: "{click_datetime}", desc: "The date and time of the click in 'Y-m-d H:i:s' format." },
        { id: 37, label: "{conversion_datetime}", desc: "The date and time of the conversion in 'Y-m-d H:i:s' format." }

    ], []);
};

// Method options

export const useMethodOptions= () => {
    return useMemo(() => [
        { id: 1, label: 'get', value: 'get' },
        { id: 2, label: 'post', value: 'post' },
    ], []);
};

export const useThemeOptions= () => {
    return useMemo(() => [
        { id: 1, label: "Yes", value: true }, { id: 2, label: "No", value: false },
    ], []);
};

export const usePlatforms= () => {
    return useMemo(() => [
        { name: "iOS", icon: "📱" }, { name: "Android", icon: "📱" }, { name: "Web", icon: "💻" }
    ], []);
};



export const useDemoPostbackUrl= () => {
    return useMemo(() => [
        'payout',
        'currency',
        'status',
        'ip',
        'country',
        'device',
        'os',
        'browser',
        'sub1',
        'sub2',
        'sub3',
        'sub4',
        'sub5',
    ], []);
};

export const FrequentQuestions=()=>{
    return useMemo(()=>[
        {
            question: "What is Perkox Offerwall for Publishers?",
            answer: "Perkox Offerwall is a monetization solution for publishers, allowing you to integrate engaging offers into your app or website. Users can complete tasks (such as app installs, surveys, and video ads) in exchange for rewards, and you earn revenue from their engagement."
        },
        {
            question: "How can I integrate Perkox Offerwall into my platform?",
            answer: "Integration is simple and can be done via our Iframe or API and SDK. Detailed instructions are available in our developer documentation, which supports multiple platforms for ease of use."
        },
        {
            question: "What types of offers are available on Perkox Offerwall?",
            answer: "Perkox provides a wide range of offers, including: App installs, Level play, Surveys, Free trials and sign-ups, In-app purchases, Video ads. The offers are optimized to match your users’ demographics and geographic region."
        },
        {
            question: "How do I track user engagement and earnings?",
            answer: "You can monitor performance through the publisher dashboard, where real-time data on user engagement, offer completion rates, and earnings are provided. Analytics help you optimize the offerwall for better performance."
        },
        {
            question: "How is my revenue calculated?",
            answer: "Revenue is based on completed offers. The amount varies depending on the type of offer and advertiser payout. Higher-value offers and better user experiences lead to higher earnings."
        },
        {
            question: "How do I receive payments?",
            answer: "You can choose from several payment methods, including PayPal, Payoneer, and bank transfers. Payments are processed monthly, provided the minimum payout threshold is met."
        },
        {
            question: "How can I optimize my offerwall performance?",
            answer: "To maximize earnings: Customize the look of the offerwall to fit your app or site design. Promote high-performing offers. Engage your users with seasonal incentives or rewards to drive more participation."
        },
        {
            question: "How do I get technical support?",
            answer: "For any integration or performance issues, you can reach our support team directly via the publisher dashboard or email help@perkox.com."
        }
    ]

)
}
