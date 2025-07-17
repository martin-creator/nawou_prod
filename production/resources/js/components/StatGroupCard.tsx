import React from "react";
import {
    Card,
    CardContent,
    CardDescription,
    CardHeader,
    CardTitle,
} from "./ui/card";

export default function StatGroupCard({ title, description, children }) {
    return (
        <Card className="p-0 shadow-none rounded-md">
            <CardHeader className="p-3 pb-0">
                <CardTitle>{title}</CardTitle>
                {description && (
                    <CardDescription>{description}</CardDescription>
                )}
            </CardHeader>
            <CardContent className="p-1">{children}</CardContent>
        </Card>
    );
}
