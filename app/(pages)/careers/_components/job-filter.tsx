"use client";
import { Minus, Plus } from "lucide-react";
import { useState } from "react";

interface Props {
    title: string;
    children: React.ReactNode;
}

export default function JobFilter({ title, children }: Props) {
    const [open, setOpen] = useState(false);

    return (
        <div className="border-b border-gray-700 py-4">
            <button
                onClick={() => setOpen(!open)}
                className="flex w-full items-center justify-between text-white"
            >
                <span>{title}</span>
                <span className="text-xl">{open ? <Minus/> : <Plus />}</span>
            </button>

            {open && <div className="mt-3 text-gray-300">{children}</div>}
        </div>
    );
}