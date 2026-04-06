"use client";

import { FiSearch } from "react-icons/fi";

export default function SearchHeader() {
    return (
        
            <div className="max-w-6xl mx-auto text-center py-8 mb-16 my-10">
                <div className="flex flex-col md:flex-row gap-3 relative">
                    <FiSearch className="absolute left-7 top-4" size={20}/>
                    <input
                        type="text"
                        placeholder="Find your next opportunity"
                        className="flex-1 text-center bg-[#191919] border-b pb-3 border-gray-600 px-4 py-4 text-sm text-white outline-none"
                    />
                </div>
            </div>
        
    );
}