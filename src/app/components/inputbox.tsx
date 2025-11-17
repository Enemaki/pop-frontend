/* eslint-disable @typescript-eslint/no-explicit-any */
"use client"

interface Props {
    header: string;
    value: string;
    Qtype: string;
    handleValueChange: (itemType: string, item: string) => void;
    placeholder: string;
}
export const InputBox = ({header, value, Qtype, handleValueChange, placeholder}: Props) => {
    return (
        <div className="flex flex-col gap-1 items-center">
            <p className="font-normal text-base font-inter text-white">{header}</p>
            <textarea placeholder={placeholder}
              value={value} onChange={(e) => handleValueChange(Qtype, e.target.value)}
              className="font-light text-sm font-inter text-white 
              px-3 py-2 w-80 h-20 bg-[#3B4877] rounded-md outline-none 
              placeholder:text-xs overflow-y-auto"
            />
        </div>
    )
}