"use client"

import React from "react";

export const Primarybutton = ({
  children,
  onclick,
}: {
  children: React.ReactNode;
  onclick: () => void;
}) => {
    return(
        <button
        type="button"
        onClick={onclick}
        className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2"
      >
        {children}
      </button>
    )
};

export const SecondaryButton = ({children, onClick, prefix}: {
    children: React.ReactNode,
    onClick: () => void,
    prefix?: React.ReactNode
}) => {
    return <button onClick={onClick} type="button" className="text-white bg-blue-500 hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-6 py-3 me-2 mb-2 flex">
    <div>
        {prefix}
    </div>
    <div>
        {children}
    </div>
</button>
}
