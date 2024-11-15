import {useCallback, useEffect, useState} from "react";
import { CalendarIcon } from "@radix-ui/react-icons"
import dayjs from "dayjs"
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button"
import { Calendar } from "@/components/ui/calendar"
import {
    Popover,
    PopoverContent,
    PopoverTrigger,
} from "@/components/ui/popover"


const daysOptions = [
    { label:"Today", value:"today" },
    { label:"Yesterday", value:"yesterday" },
    { label:"Last Week", value:"last_week" },
    { label:"This Week", value:"this_week" },
    { label:"Last Month", value:"last_month" },
    { label:"This Month", value:"this_month" },
    {label:"Last Year", value:"last_year"},
    {label:"This Year", value:"this_year"},
];

export function DateRangePicker2({ className, onDateChange }) {
    const [date, setDate] = useState({
        from: dayjs().startOf('month').toDate(),
        to: dayjs().endOf('month').toDate(),
    })

    const [popoverOpen, setPopoverOpen] = useState(false);


    useEffect(() => {
        if (onDateChange) {
            onDateChange(date)
        }
    }, [date, onDateChange])

    return (
        <div className={cn("grid gap-2", className)}>
            <Popover open={popoverOpen} onOpenChange={setPopoverOpen}>
                <PopoverTrigger asChild>
                    <Button
                        id="date"
                        variant={"outline"}
                        className={cn(
                            "lg:w-[330px] justify-start text-left font-normal",
                            !date && "text-muted-foreground"
                        )}
                        onClick={() => setPopoverOpen(true)}
                    >
                        <CalendarIcon className="mr-2 h-4 w-4" />
                        {date?.from ? (
                            date.to ? (
                                <>
                                    {dayjs(date.from).format("MMM D, YYYY")} -{" "}
                                    {dayjs(date.to).format("MMM D, YYYY")}
                                </>
                            ) : (
                                dayjs(date.from).format("MMM D, YYYY")
                            )
                        ) : (
                            <span>Select Date Range</span>
                        )}
                    </Button>
                </PopoverTrigger>
                <PopoverContent className="w-auto p-0" align="start">
                    <Calendar
                        initialFocus
                        mode="range"
                        defaultMonth={date?.from}
                        selected={date}
                        onSelect={(range) => {
                            setDate(range);
                            if (range?.from && range?.to) {
                                setPopoverOpen(false);
                            }
                        }}
                        numberOfMonths={2}
                    />
                </PopoverContent>
            </Popover>
        </div>
    )
}


export function DateRangePicker({ className, calendarStyle, onDateChange }) {
    const [selectedDaysRange, setSelectedDaysRange] = useState("this_month");
    const [date, setDate] = useState({
        from: dayjs().startOf('month').toDate(),
        to: dayjs().endOf('month').toDate(),
         daysRange:selectedDaysRange || "",
    });

    const [popoverOpen, setPopoverOpen] = useState(false);

    useEffect(() => {
        if (onDateChange) {
            onDateChange(date);
        }
    }, [date]);

    const handleDaysRangeSelect = useCallback((value) => {
        let newFrom, newTo;
        switch (value) {
            case 'today':
                newFrom = newTo = dayjs().toDate();
                break;
            case 'yesterday':
                newFrom = newTo = dayjs().subtract(1, 'day').toDate();
                break;
            case 'last_week':
                newFrom = dayjs().subtract(1, 'week').startOf('week').toDate();
                newTo = dayjs().subtract(1, 'week').endOf('week').toDate();
                break;
            case 'this_week':
                newFrom = dayjs().startOf('week').toDate();
                newTo = dayjs().endOf('week').toDate();
                break;
            case 'last_month':
                newFrom = dayjs().subtract(1, 'month').startOf('month').toDate();
                newTo = dayjs().subtract(1, 'month').endOf('month').toDate();
                break;
            case 'this_month':
                newFrom = dayjs().startOf('month').toDate();
                newTo = dayjs().endOf('month').toDate();
                break;
            case 'last_year':
                newFrom = dayjs().subtract(1, 'year').startOf('year').toDate();
                newTo = dayjs().subtract(1, 'year').endOf('year').toDate();
                break;
            case 'this_year':
                newFrom = dayjs().startOf('year').toDate();
                newTo = dayjs().endOf('year').toDate();
                break;
            default:
                return;
        }
        setSelectedDaysRange(value);
        setDate({ from: newFrom, to: newTo, daysRange: value });
        setPopoverOpen(false);
    }, []);

    const handleCalendarSelect = useCallback((range) => {
        if (range?.from && range?.to) {
            setDate({ ...range, daysRange: "" });
            setSelectedDaysRange("");
            setPopoverOpen(false);
        }
    }, []);

    return (
        <div className={cn("grid gap-2", className)}>
            <Popover open={popoverOpen} onOpenChange={setPopoverOpen}>
                <PopoverTrigger asChild>
                    <Button
                        id="date"
                        variant={"outline"}
                        className={cn(
                            "lg:w-full justify-start text-left font-normal",
                            !date && "text-muted-foreground"
                        )}
                    >
                        <CalendarIcon className="mr-2 h-4 w-4" />
                        {date?.from ? (
                            date.to ? (
                                <>
                                    {dayjs(date.from).format("MMM D, YYYY")} -{" "}
                                    {dayjs(date.to).format("MMM D, YYYY")}
                                </>
                            ) : (
                                dayjs(date.from).format("MMM D, YYYY")
                            )
                        ) : (
                            <span>Select Date Range</span>
                        )}
                    </Button>
                </PopoverTrigger>
                <PopoverContent className={cn("w-auto p-0", calendarStyle)} align="start">
                    <div className="flex">
                        <div className="py-5 px-3">
                            <ul>
                                <li className="text-sm font-medium mb-4">Date Range</li>
                                <ul className="space-y-3">
                                    {daysOptions?.map((option) => (
                                        <li 
                                            onClick={() => handleDaysRangeSelect(option.value)} 
                                            key={option.value} 
                                            className={`text-xs cursor-pointer ${selectedDaysRange === option.value ? "bg-primary text-primary-foreground" : ""} font-normal text-center rounded-sm border-gray-200`}
                                        >
                                            {option.label}
                                        </li>
                                    ))}
                                </ul>
                            </ul>
                        </div>
                        <Calendar
                            initialFocus
                            mode="range"
                            defaultMonth={date?.from}
                            selected={date}
                            onSelect={handleCalendarSelect}
                            numberOfMonths={2}
                        />
                    </div>
                </PopoverContent>
            </Popover>
        </div>
    );
}
