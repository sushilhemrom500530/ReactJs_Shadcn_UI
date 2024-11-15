import {FormControl, FormDescription, FormField, FormItem, FormLabel, FormMessage} from "@//components/ui/form.jsx";
import {Input} from "@//components/ui/input.jsx";
import {RadioGroup, RadioGroupItem} from "../ui/radio-group";
import {
    Select,
    SelectContent,
    SelectGroup,
    SelectItem,
    SelectTrigger,
} from "@/components/ui/select"
import {Popover, PopoverContent, PopoverTrigger} from "@//components/ui/popover.jsx";
import {Button} from "@//components/ui/button.jsx";
import {CalendarIcon, Check, ChevronsUpDown} from "lucide-react";
import {Calendar} from "@/components/ui/calendar"
import {
    Command,
    CommandEmpty,
    CommandGroup,
    CommandInput,
    CommandItem,
    CommandList
} from "@//components/ui/command.jsx";
import {format} from "date-fns"
import {cn} from "@//utils/shadcn.js";
import {useCallback, useEffect, useRef, useState} from "react";
import {useController, useFormContext} from 'react-hook-form';
import debounce from "lodash.debounce";
import {SelectLabel, SelectValue} from "@//components/ui/select";


export const FormInput = ({
                              className = null,
                              inputStyle,
                              defaultValue = null,
                              label,
                              name,
                              placeholder,
                              form,
                              type = 'text',
                              debounceDelay,
                              handleValueChange,
                              info,
                              group_name,
                          }) => {
    // Create a debounced version of the handleValueChange function
    const debouncedHandleChange = useCallback(debounce((value) => {
        if (handleValueChange) {
            handleValueChange(value);
        }
    }, debounceDelay), []);

    return (
        <FormItem className={className}>
            <FormLabel className="capitalize">{label}</FormLabel>
            <FormControl>
               <Input
               type={type}
               className={inputStyle}
               placeholder={placeholder}
               // value={value}
               defaultValue={defaultValue}
               {...form.register(name, {
                   onChange: (e) => {
                       const value = e.target.value;
                       debouncedHandleChange(value); // Call debounced handler
                   }
               })}
             
               />
            </FormControl>
            {
                info && <FormDescription>{info}</FormDescription>
            }
            <FormMessage>
                {form.formState.errors[name]?.message}
            </FormMessage>
        </FormItem>
    );
};
export const FormInputGroup = ({
                              className = null,
                              inputStyle,
                              defaultValue = null,
                              label,
                              name,
                              placeholder,
                              form,
                              type = 'text',
                              debounceDelay,
                              handleValueChange,
                              info,
                              group_name,
                          }) => {
    // Create a debounced version of the handleValueChange function
    const debouncedHandleChange = useCallback(debounce((value) => {
        if (handleValueChange) {
            handleValueChange(value);
        }
    }, debounceDelay), []);

    return (
        <FormItem className={className}>
            <FormLabel className="capitalize">{label}</FormLabel>
            <FormControl>
            <div className="flex h-fit justify-between w-full rounded-md border border-input placeholder:text-[13px] placeholder:font-medium  bg-background pl-3  text-sm  focus-visible:border-[#2684FF] ">
               <input
               type={type}
               className={"disabled:cursor-not-allowed pr-1 disabled:opacity-50 placeholder:text-muted-foreground focus-visible:outline-none w-full"}
               placeholder={placeholder}
               // value={value}
               defaultValue={defaultValue}
               {...form.register(name, {
                   onChange: (e) => {
                       const value = e.target.value;
                       debouncedHandleChange(value); // Call debounced handler
                   }
               })}
             
           />
           <span className="w-[40px] grid place-items-center text-sm py-2 text-gray-800 font-medium bg-gray-100">{group_name}</span>

                </div>

            </FormControl>
            {
                info && <FormDescription>{info}</FormDescription>
            }
            <FormMessage>
                {form.formState.errors[name]?.message}
            </FormMessage>
        </FormItem>
    );
};




export const FormSelectOld = ({className = null, label, name, form, value, options, placeholder}) => {
    // additional added
    const currentValue = form.watch(name);
    return (
        <FormItem className={className}>
            <FormLabel>{label}</FormLabel>
            <FormControl>
                <Select
                    menuPlacement="auto"
                    options={options}
                    placeholder={placeholder}
                    onChange={(option) => form.setValue(name, option.value)}
                    onBlur={() => form.trigger(name)}
                    value={options?.find(option => option.value === currentValue) || value}
                />
            </FormControl>
            <FormMessage>
                {form.formState.errors[name]?.message}
            </FormMessage>
        </FormItem>
    );
};

export const FormMultiSelect = ({className = null, label, name, form, value, options, placeholder}) => {
    // additional added
    const currentValue = form.watch(name);
    return (
        <FormItem className={className}>
            <FormLabel>{label}</FormLabel>
            <FormControl>
                <Select
                    isMulti
                    menuPlacement="auto"
                    options={options}
                    placeholder={placeholder}
                    onChange={(options) => form.setValue(name, options.map(option => option.value))}
                    onBlur={() => form.trigger(name)}
                    value={options?.filter(option => currentValue?.includes(option.value))}
                />
            </FormControl>
            <FormMessage>
                {form.formState.errors[name]?.message}
            </FormMessage>
        </FormItem>
    );
}


export const FormRadioGroup = ({className = null, label, name, form, value, options}) => {
    return (
        <FormItem className={className}>
            <FormLabel>{label}</FormLabel>
            <FormControl>
                <RadioGroup
                    name={name}
                    options={options}
                    value={value}
                    onChange={(e) => form.setValue(name, e.target.value)}
                />
            </FormControl>
            <FormMessage>
                {form.formState.errors[name]?.message}
            </FormMessage>
        </FormItem>
    );
}

export const FormCheckbox = ({className = null, label, name, form}) => {
    const isChecked = form.watch(name); // Watch the checkbox value
    const checkboxId = `${name}-checkbox`; // Create a unique ID for the checkbox

    return (
        <FormItem className={className}>
            <FormControl className="flex items-center space-x-2">
                <div>
                    {/* Associate the checkbox and label using `id` and `htmlFor` */}
                    <input
                        type="checkbox"
                        id={checkboxId} // Unique ID for the checkbox
                        {...form.register(name)}
                        checked={isChecked}
                        onChange={(e) => form.setValue(name, e.target.checked)}
                        className="form-checkbox"
                    />
                    <FormLabel htmlFor={checkboxId}>{label}</FormLabel>
                </div>
            </FormControl>
            <FormMessage>
                {form.formState.errors[name]?.message}
            </FormMessage>
        </FormItem>
    );
};


export const FormSelect = ({className = null, label, name, options = [], onClick, placeholder}) => {
    const {setValue, watch, formState: {errors}} = useFormContext();
    const [selectOpen, setSelectOpen] = useState(false);
    const [isReady, setIsReady] = useState(false);
    const selectedValue = watch(name); // Watch form value for changes
    const popoverRef = useRef(null); // To adjust popover size

    // Ensure that the value is correctly set when options load from API
    useEffect(() => {
        if (options.length) {
            setIsReady(true);
        }
    }, [options, selectedValue]);


    const handleSelect = (value) => {
        setValue(name, value);
        if (onClick) {
            onClick(value); // Call the onClick function if provided
        }
        setSelectOpen(false);  // Close the dropdown
    };

    const selectedLabel = selectedValue
        ? options.find((item) => item.value === selectedValue)?.label
        : placeholder;

    const sortedOptions = options.map((item) => ({
        ...item,
        isSelected: item.value === selectedValue,
    })).sort((a, b) => (a.isSelected ? -1 : b.isSelected ? 1 : 0));

    return (
        <FormItem className={className}>
            <FormLabel>{label}</FormLabel>
            <FormControl>
                <Popover open={selectOpen} onOpenChange={setSelectOpen}>
                    <PopoverTrigger asChild>
                        <Button
                            ref={popoverRef}
                            variant="outline"
                            role="combobox"
                            aria-expanded={selectOpen}
                            className={`w-full py-[18px] text-[#64748B] shadow-none text-[13px] justify-between ${className || ''}`}
                            onClick={() => setSelectOpen(!selectOpen)}
                        >
                            {selectedLabel || placeholder}
                            <ChevronsUpDown className="ml-2 h-4 w-4 shrink-0 opacity-50"/>
                        </Button>
                    </PopoverTrigger>
                    <PopoverContent
                        className="p-0"
                        style={{width: popoverRef.current ? `${popoverRef.current.offsetWidth}px` : 'auto'}} // Adjust size to input width
                    >
                        {isReady ? (
                            <Command>
                                <CommandInput placeholder={placeholder}/>
                                <CommandList>
                                    <CommandEmpty>No Data Found</CommandEmpty>
                                    <CommandGroup>
                                        {sortedOptions.map((item, index) => (
                                            <CommandItem
                                                key={index}
                                                onSelect={() => handleSelect(item.value)}
                                            >
                                                <Check
                                                    className={cn(
                                                        'mr-2 h-4 w-4',
                                                        selectedValue === item.value ? 'opacity-100' : 'opacity-0'
                                                    )}
                                                />
                                                {item.label}
                                            </CommandItem>
                                        ))}
                                    </CommandGroup>
                                </CommandList>
                            </Command>
                        ) : (
                            <div className="p-4">Data not found</div>
                        )}
                    </PopoverContent>
                </Popover>
            </FormControl>
            <FormMessage>
                {errors[name]?.message}
            </FormMessage>
        </FormItem>
    );
};


export const FormSelect2 = ({className = null, label, name, options = [], placeholder, setSelectValue}) => {
    const {setValue, watch, formState: {errors}} = useFormContext();
    const [selectOpen, setSelectOpen] = useState(false);
    const [isReady, setIsReady] = useState(false);
    const selectedValue = watch(name); // Watch form value for changes
    const popoverRef = useRef(null); // To adjust popover size

    // Ensure that the value is correctly set when options load from API
    useEffect(() => {
        if (options.length) {
            setIsReady(true);
        }
    }, [options, selectedValue]);


    const handleSelect = (value) => {
        setValue(name, value); // Set the value in the form
        setSelectOpen(false);  // Close the dropdown
    };

    const selectedLabel = selectedValue
        ? options.find((item) => item.value === selectedValue)?.label
        : placeholder;

    const sortedOptions = options.map((item) => ({
        ...item,
        isSelected: item.value === selectedValue,
    })).sort((a, b) => (a.isSelected ? -1 : b.isSelected ? 1 : 0));

    return (
        <FormItem className={className}>
            <FormLabel>{label}</FormLabel>
            <FormControl>
                <Popover open={selectOpen} onOpenChange={setSelectOpen}>
                    <PopoverTrigger asChild>
                        <Button
                            ref={popoverRef}
                            variant="outline"
                            role="combobox"
                            aria-expanded={selectOpen}
                            className={`w-full py-[18px] justify-between ${className || ''}`}
                            onClick={() => setSelectOpen(!selectOpen)}
                        >
                            {selectedLabel || placeholder}
                            <ChevronsUpDown className="ml-2 h-4 w-4 shrink-0 opacity-50"/>
                        </Button>
                    </PopoverTrigger>
                    <PopoverContent
                        className="p-0"
                        style={{width: popoverRef.current ? `${popoverRef.current.offsetWidth}px` : 'auto'}} // Adjust size to input width
                    >
                        {isReady ? (
                            <Command>
                                <CommandInput placeholder={placeholder}/>
                                <CommandList>
                                    <CommandEmpty>No Data Found</CommandEmpty>
                                    <CommandGroup>
                                        {sortedOptions.map((item) => (
                                            <CommandItem
                                                key={item.value}
                                                onSelect={() => {
                                                    handleSelect(item.value)
                                                    setSelectValue(item)
                                                }}
                                            >
                                                <Check
                                                    className={cn(
                                                        'mr-2 h-4 w-4',
                                                        selectedValue === item.value ? 'opacity-100' : 'opacity-0'
                                                    )}
                                                />
                                                {item.label}
                                            </CommandItem>
                                        ))}
                                    </CommandGroup>
                                </CommandList>
                            </Command>
                        ) : (
                            <div className="p-4">Loading...</div>
                        )}
                    </PopoverContent>
                </Popover>
            </FormControl>
            <FormMessage>
                {errors[name]?.message}
            </FormMessage>
        </FormItem>
    );
};


export const FormMultipleSelect = ({className = null, label, name, options = [], placeholder, selectedText}) => {
    const {setValue, watch, formState: {errors}} = useFormContext();
    const [selectOpen, setSelectOpen] = useState(false);
    const [isReady, setIsReady] = useState(false);
    const selectedValue = watch(name) || []; // Watch form value for changes, ensure it's an array
    const popoverRef = useRef(null); // To adjust popover size

    // Ensure that the value is correctly set when options load from API
    useEffect(() => {
        if (options.length > 0) {
            setIsReady(true);
        }
    }, [options, selectedValue]);

    const handleSelect = (value) => {
        const isSelected = selectedValue.includes(value);
        if (isSelected) {
            setValue(name, selectedValue.filter((item) => item !== value));
        } else {
            setValue(name, [...selectedValue, value]);
        }
    };


    const sortedOptions = options.map((item, index) => {
        const isSelected = selectedValue.includes(item.value);
        if (index === 0 && selectedValue.includes(item.value)) {
            return {...item, isSelected: true};
        }
        return {...item, isSelected};
    }).sort((a, b) => (a.isSelected ? -1 : b.isSelected ? 1 : 0));


    return (
        <FormItem className={className}>
            <FormLabel>{label}</FormLabel>
            <FormControl>
                <Popover open={selectOpen} onOpenChange={setSelectOpen}>
                    <PopoverTrigger asChild>
                        <Button
                            ref={popoverRef}
                            variant="outline"
                            role="combobox"
                            aria-expanded={selectOpen}
                            className={`w-full py-[18px] text-[#64748B] shadow-none text-[13px] justify-between ${className || ''}`}
                            onClick={() => setSelectOpen(!selectOpen)}
                        >
                            {selectedValue?.length > 0 ? selectedValue?.length + " " + selectedText : placeholder}
                            <ChevronsUpDown className="ml-2 h-4 w-4 shrink-0 opacity-50"/>
                        </Button>
                    </PopoverTrigger>
                    <PopoverContent
                        className="p-0"
                        style={{width: popoverRef.current ? `${popoverRef.current.offsetWidth}px` : 'auto'}} // Adjust size to input width
                    >
                        {isReady ? (
                            <Command>
                                <CommandInput placeholder={placeholder}/>
                                <CommandList>
                                    <CommandEmpty>No Data Found</CommandEmpty>
                                    <CommandGroup>
                                        {sortedOptions?.map((item) => (
                                            <CommandItem
                                                key={item.value}
                                                onSelect={() => handleSelect(item.value)}
                                            >
                                                <Check
                                                    className={cn(
                                                        'mr-2 h-4 w-4',
                                                        selectedValue.includes(item.value) ? 'opacity-100' : 'opacity-0'
                                                    )}
                                                />
                                                {item.label}
                                            </CommandItem>
                                        ))}
                                    </CommandGroup>
                                </CommandList>
                            </Command>
                        ) : (
                            <div className="p-4">Loading...</div>
                        )}
                    </PopoverContent>
                </Popover>
            </FormControl>
            <FormMessage>
                {errors[name]?.message}
            </FormMessage>
        </FormItem>
    );
};


export const ColorPicker = ({className = null, label, defaultColor, form, name}) => {
    const [color, setColor] = useState(defaultColor || '#000000');

    useEffect(() => {
        if (defaultColor && /^#[0-9A-F]{6}$/i.test(defaultColor)) {
            setColor(defaultColor);
            form.setValue(name, defaultColor);
        }
    }, [defaultColor, form, name]);

    const handleColorChange = (e) => {
        const newColor = e.target.value;
        setColor(newColor);
        form.setValue(name, newColor);
    };

    return (
        <>
            <FormItem className={className}>
                <FormLabel>{label}</FormLabel>
                <FormControl>
                    <div className="relative">
                        {/* Hidden color input */}
                        <input
                            type="color"
                            {...form.register(name)}
                            value={color}
                            onChange={handleColorChange}
                            className="absolute inset-0 h-full opacity-0 cursor-pointer"
                        />

                        {/* Custom round color preview */}
                        <div
                            className="w-16 h-16 border  shadow rounded-full"
                            style={{backgroundColor: color}}
                        ></div>
                    </div>
                </FormControl>
                <FormMessage>
                    {form.formState.errors[name]?.message}
                </FormMessage>
            </FormItem>
        </>
    );
};


export function CustomSelect({options, className, defaultValue, onChange}) {
    const [selectedValue, setSelectedValue] = useState(defaultValue);
    const popoverRef = useRef(null);

    const handleValueChange = (value) => {
        setSelectedValue(value);
        if (onChange) {
            onChange(value);
        }
    };

    return (
        <div ref={popoverRef} className="relative inline-block">
            <Select
                value={selectedValue}
                onValueChange={handleValueChange}
                className={className}
            >
                <SelectTrigger className="w-[70px]">
                    {options.find((option) => option.value === selectedValue)?.label}
                </SelectTrigger>
                <SelectContent
                    className="absolute z-10 w-fit bg-white shadow-lg max-h-fit min-w-fit"
                    style={{width: popoverRef.current ? `${popoverRef.current.offsetWidth}px` : 'auto'}}
                >
                    <SelectGroup>
                        {options?.map((option) => (
                            <SelectItem
                                className="px-4 py-2 w-full cursor-pointer hover:bg-gray-200"
                                key={option.value}
                                value={option.value}
                            >
                                {option.label}
                            </SelectItem>
                        ))}
                    </SelectGroup>
                </SelectContent>
            </Select>
        </div>
    );
}


// Form boolean value working correctly, and update fetch functioning properly
export const SelectFormField = ({control, name, label, placeholder, options}) => {
    const {
        field,
        fieldState: {error},
    } = useController({
        name,
        control,
    });

    return (
        <FormItem>
            <FormLabel>{label}</FormLabel>
            <FormControl>
                <Select
                    value={field.value} // Correct binding of value
                    onValueChange={field.onChange} // Correct binding of onChange
                    defaultValue={field.value || ""}
                >
                    <SelectTrigger
                        className="w-full  py-[18px] text-[#64748B] font-medium shadow-none text-[13px] justify-between">
                        <SelectValue placeholder={placeholder || "Select an option"}/>
                    </SelectTrigger>
                    <SelectContent>
                        <SelectGroup>
                            {options?.map((item, index) => (
                                <SelectItem key={index} value={item.value}>
                                    {item.label}
                                </SelectItem>
                            ))}
                        </SelectGroup>
                    </SelectContent>
                </Select>
            </FormControl>
            {error && <FormMessage>{error.message}</FormMessage>}
        </FormItem>
    );
};


export const DatePicker = ({control, name, label}) => {
    const popoverRef = useRef(null);
    return (
        <div>
            <div className="pb-[6px]"><FormLabel>{label}</FormLabel></div>
            <FormField
                control={control}
                name={name}
                render={({field}) => (
                    <FormItem className="flex flex-col">
                        <Popover>
                            <PopoverTrigger asChild>
                                <FormControl>
                                    <Button
                                        variant="outline"
                                        className={cn(
                                            "w-[240px] pl-3 text-left font-normal",
                                            !field.value && "text-muted-foreground"
                                        )}
                                    >
                                        {field.value ? (
                                            format(field.value, "PPP")
                                        ) : (
                                            <span>Pick a date</span>
                                        )}
                                        <CalendarIcon className="ml-auto h-4 w-4 opacity-50"/>
                                    </Button>
                                </FormControl>
                            </PopoverTrigger>
                            <PopoverContent
                                ref={popoverRef}
                                style={{width: popoverRef.current ? `${popoverRef.current.offsetWidth}px` : 'auto'}}
                                className="w-auto p-0"
                                align="start"
                            >
                                <Calendar
                                    mode="single"
                                    selected={field.value}
                                    onSelect={field.onChange}
                                    initialFocus
                                />
                            </PopoverContent>
                        </Popover>
                        <FormMessage/>
                    </FormItem>
                )}
            />
        </div>
    );
};


export const WapperSelect = ({className = '', label, name, options = [], onClick, placeholder}) => {
    const [selectOpen, setSelectOpen] = useState(false);
    const [isReady, setIsReady] = useState(false);
    const [selectedValue, setSelectedValue] = useState(null); // Manage selected value
    const popoverRef = useRef(null); // To adjust popover size

    useEffect(() => {
        if (options.length) {
            setIsReady(true);
        }
    }, [options]);

    const handleSelect = (value) => {
        setSelectedValue(value);
        if (onClick) {
            onClick(value); // Call the onClick function if provided
        }
        setSelectOpen(false); // Close the dropdown
    };

    const selectedLabel = selectedValue
        ? options.find((item) => item.value === selectedValue)?.label
        : placeholder;

    return (
        <div className={className}>
            {label && <label>{label}</label>}
            <Popover open={selectOpen} onOpenChange={setSelectOpen}>
                <PopoverTrigger asChild>
                    <Button
                        ref={popoverRef}
                        variant="outline"
                        role="combobox"
                        aria-expanded={selectOpen}
                        className={`w-full py-[18px] text-[#64748B] shadow-none text-[13px] justify-between ${className}`}
                        onClick={() => setSelectOpen(!selectOpen)}
                    >
                        {selectedLabel || placeholder}
                        <span className="ml-2 h-4 w-4 shrink-0 opacity-50">&#9662;</span> {/* Replace with your icon */}
                    </Button>
                </PopoverTrigger>
                <PopoverContent
                    className="p-0"
                    style={{width: popoverRef.current ? `${popoverRef.current.offsetWidth}px` : 'auto'}}
                >
                    {isReady ? (
                        <Command>
                            <CommandInput placeholder={placeholder}/>
                            <CommandList>
                                <CommandEmpty>No Data Found</CommandEmpty>
                                <CommandGroup>
                                    {options.map((item, index) => (
                                        <CommandItem key={index} onSelect={() => handleSelect(item.value)}>
                                            <Check
                                                className={`mr-2 h-4 w-4 ${selectedValue === item.value ? 'opacity-100' : 'opacity-0'}`}/>
                                            {item.label}
                                        </CommandItem>
                                    ))}
                                </CommandGroup>
                            </CommandList>
                        </Command>
                    ) : (
                        <div className="p-4">Loading...</div>
                    )}
                </PopoverContent>
            </Popover>
        </div>
    );
};


export const FileInput = ({label, form, onChange, className, ...props}) => (
    <FormItem className={className}>
        {label && <FormLabel className="capitalize">{label}</FormLabel>}
        <FormControl>
            <Input
                type="file"
                className="h-10 file:bg-gray-200 file:text-gray-900 file:cursor-pointer cursor-pointer file:border-none file:rounded-sm"
                onChange={(e) => onChange(e.target.files[0])}
                {...props}
            />
        </FormControl>
        <FormMessage>
            {form.formState.errors[name]?.message}
        </FormMessage>
    </FormItem>
);


export const FormTextArea = ({label, form, name, className, ...props}) => (
    <FormItem className={className}>
        {label && <FormLabel className="capitalize">{label}</FormLabel>}
        <FormControl>
            <textarea
                className="w-full p-3 border border-gray-300 rounded-sm"
                {...form.register(name)}
                {...props}
            />
        </FormControl>
        {
            props.info && <FormDescription>{props.info}</FormDescription>
        }
        <FormMessage>
            {form.formState.errors[name]?.message}
        </FormMessage>
    </FormItem>
);
