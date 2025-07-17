import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { Link } from "@inertiajs/react";

export default function StatsCard({ title, icon, value, description, link="#", color="" }) {
    return (
        <Link href={link} prefetch="mount" cacheFor={['5','10']}>
            <Card className="shadow-sm rounded-md border hover:shadow-primary/50 hover:border-primary/50 hover:text-primary">
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                    <CardTitle className="text-sm font-medium">
                        {title}
                    </CardTitle>
                    <span className="text-muted-foreground">{icon}</span>
                </CardHeader>
                <CardContent>
                    <div className="text-2xl font-bold">
                        {parseFloat(value || 0).toLocaleString()}
                    </div>
                    {description && (
                        <p className={"text-xs text-muted-foreground "+color} >
                            {description}
                        </p>
                    )}
                </CardContent>
            </Card>
        </Link>
    );
}
