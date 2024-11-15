import React from 'react';
import { Button } from "@/components/ui/button.jsx";

const Pagination = ({ pagination, onPageChange }) => {
    // Helper function to get page numbers to show
    const getPageNumbers = () => {
        const pages = [];
        const maxPagesToShow = 5;
        let startPage = Math.max(1, pagination.currentPage - Math.floor(maxPagesToShow / 2));
        let endPage = Math.min(pagination.lastPage, startPage + maxPagesToShow - 1);

        if (endPage - startPage + 1 < maxPagesToShow) {
            startPage = Math.max(1, endPage - maxPagesToShow + 1);
        }

        for (let i = startPage; i <= endPage; i++) {
            pages.push(i);
        }

        return pages;
    };

    return (
        <div className="lg:flex justify-between items-center lg:w-full gap-1">
            <div className="text-xs text-muted-foreground">
                Showing <strong>{(pagination.currentPage - 1) * 10 + 1}-{Math.min(pagination.currentPage * 10, pagination.total)}</strong> of <strong>{pagination.total || 0}</strong> items
            </div>
            <div className="flex items-center justify-center md:gap-2 md:mt-2 mt-3 lg:mt-0 gap-2">
                <Button
                    className="bg-gray-500 h-7 md:w-full w-14 text-xs md:text-sm"
                    disabled={!pagination.prevPageUrl}
                    onClick={() => onPageChange(pagination.currentPage - 1)}
                >
                    Previous
                </Button>
                {getPageNumbers().map((page) => (
                    <Button
                        className="h-7 w-2 md:w-full"
                        key={page}
                        variant={page === pagination.currentPage ? "default" : "outline"}
                        onClick={() => onPageChange(page)}
                    >
                        {page}
                    </Button>
                ))}
                {pagination.currentPage < pagination.lastPage && (
                    <Button
                        className="bg-gray-500 h-7 md:w-full w-12 text-xs md:text-sm"
                        onClick={() => onPageChange(pagination.currentPage + 1)}
                    >
                        Next
                    </Button>
                )}
            </div>
        </div>
    );
};

export default Pagination;
