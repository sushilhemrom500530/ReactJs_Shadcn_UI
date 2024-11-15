import {Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle} from "@//components/ui/card.jsx";
import React from "react";

export default function CustomCard({ className, title, action, description, children, footer }) {
    return (
        <Card className={className}>
            <CardHeader>
                <CardTitle>
                    <div className="flex items-center justify-between">
                        {title}
                        {action && (
                            <div>
                                {action}
                            </div>
                        )}
                    </div>
                </CardTitle>
                {description && (
                    <CardDescription>{description}</CardDescription>
                )}
            </CardHeader>
            <CardContent>
                {children}
            </CardContent>
            {
                footer && (
                    <CardFooter className="flex justify-end">
                        {footer}
                    </CardFooter>
                )
            }
        </Card>
    );
}
