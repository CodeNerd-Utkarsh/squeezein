import React from "react"


export default function SearchBar() {
    return (
        <div className="w-full h-[5rem] border-[4px] border-[#d3d3d3]  bg-[#fff] rounded-[5rem] pr-16 pl-16  text-[1.25rem] text-[#253d4e] uppercase flex "  >
            <input
                type="text"
                placeholder="Search for technicians, painters, etc."
                className="h-[4.5rem] focus:border-none flex-1  uppercase focus:outline-none" />
            <input
                type=""
                placeholder="city or zip code"
                className="h-[4.5rem] focus:border-none flex-1 uppercase focus:outline-none" />
            <input
                type=""
                placeholder="date"
                className="h-[4.5rem] focus:border-none flex-1 uppercase focus:outline-none" />
            <input
                type=""
                placeholder="time"
                className="h-[4.5rem] focus:border-none flex-1 uppercase focus:outline-none" />
            <button
                className="flex-1 uppercase bg-[#5bc0e8] rounded-full mt-2 mb-2 text-[#fff]"
            >get started</button>
        </div>
    )
}

