/* eslint-disable @typescript-eslint/no-unused-vars */
"use client"

import { Button } from "./button";
import { LoadingState } from "./logo";

interface Output {
    poster?: any;
    text: string;
    isloading?: boolean;
    handleViewChange: () => void;
}

export const MovieOutputView = ({poster, text, isloading, handleViewChange}: Output) => {
    return (
        <div className="flex flex-col justify-center items-center gap-3">
            {/* <div>{poster}</div> */}
            <div className="text-white text-base leading-relaxed whitespace-pre-wrap px-5 md:px-24 lg:px-48 overflow-y-auto">
                {isloading ? <LoadingState /> : text}
            </div>
            <Button text="Go Again" handleSubmit={handleViewChange} disabled={true} />
        </div>
    )
}