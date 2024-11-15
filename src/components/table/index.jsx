import {TableBody, TableCell, TableRow} from "@//components/ui/table.jsx";
import {Skeleton} from "@//components/ui/skeleton.jsx";
import React from "react";
import { cn } from "@//utils/shadcn";


export const TableSkeleton = ({colSpan, length = 10}) => {
    return (
        <TableRow>
            <TableCell colSpan={colSpan}>
                <div className="space-y-3">
                    {[...Array(length).keys()]?.map((item, index) => (
                        <Skeleton key={index} className="h-[50px] w-full rounded-sm"/>
                    ))}
                </div>
            </TableCell>
        </TableRow>
    )
}


export const TableNoData = ({title, colSpan,className}) => {
    return (
        <TableRow>
            <TableCell colSpan={colSpan} className='text-center'>
                <div className={cn("py-24 text-center",className)}>
                    <svg
                        className="mx-auto h-12 w-12 text-gray-400"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        aria-hidden="true"
                    >
                        <path
                            vectorEffect="non-scaling-stroke"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M9 13h6m-3-3v6m-9 1V7a2 2 0 012-2h6l2 2h6a2 2 0 012 2v8a2 2 0 01-2 2H5a2 2 0 01-2-2z"
                        />
                    </svg>
                    <h3 className="text-sm font-medium text-gray-400">{title}</h3>
                </div>
            </TableCell>
        </TableRow>
    );
}
