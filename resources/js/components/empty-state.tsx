import { ArchiveX } from "lucide-react";
import React from "react";

export default function EmptyState({
    message = "No data found!",
    actions,
    icon,
}) {
    return (
        <div
            className="flex items-center justify-center flex-1 rounded bg-muted/0 text-center"
        >
            <center>
                {icon ? icon : <ArchiveX size={50} className="mb-5" />}
                <h2 className="scroll-m-20 pb-5 text-xl font-bold tracking-tight first:mt-0">
                    {message}
                </h2>
                {actions}
            </center>
        </div>
    );
}
