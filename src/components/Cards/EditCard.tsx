import React from "react";

type PropsType = {
    title?: string,
    children: React.ReactNode
}
const EditCard = ({title, children}: PropsType) => {
    return (
        <div className="flex flex-col">
            <div className="text-gray-800 text-2xl font-bold font-['Roboto']">{title}</div>
            <div
                className="w-[360px] h-full rounded-[40px] gap-4 p-8 bg-white  shadow flex-col items-start justify-between inline-flex">
                {title}
                {children}
            </div>
        </div>
    );
};

export default EditCard;