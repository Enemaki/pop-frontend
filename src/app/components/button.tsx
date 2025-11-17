"use client"

interface Props {
    text: string;
    disabled?: boolean;
    handleSubmit: () => void;
}
export const Button = (props: Props) => {
    return (
        <button className="bg-green-400 font-bold font-inter text-3xl disabled:bg-gray-200
          rounded-md px-4 py-2 text-[#000C36] min-w-[320px] cursor-pointer 
          disabled:cursor-not-allowed hover:py-4 hover:px-5 duration-150 ease-out"
          disabled={!props.disabled} onClick={props.handleSubmit}
        >
          {props.text}
        </button>
    )
}