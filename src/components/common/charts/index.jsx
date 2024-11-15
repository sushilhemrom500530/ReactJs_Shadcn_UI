import Chart from "react-apexcharts";
import { useEffect, useRef } from "react";
import ApexCharts from 'apexcharts';
import dayjs from "dayjs";

export function Overview({ chartData, userType="publisher" }) {
    const chartRef = useRef(null);

    useEffect(() => {
        // Parse and validate chartData
        const {
            clicks = [], conversions = [], revenues = [], payouts = [], profits = [], earnings = [], dates = []
        } = chartData;

        // Dynamic data based on userType (admin or publisher)
        const isPublisher = userType === 'publisher';

        // Parse data for both user types
        const clickData = clicks.map(value => Number(value));
        const conversionData = conversions.map(value => Number(value));
        const earnOrRevenueData = isPublisher ? earnings.map(value => Number(value)) : revenues.map(value => Number(value));
        const payoutData = isPublisher ? [] : payouts.map(value => Number(value));
        const profitData = isPublisher ? [] : profits.map(value => Number(value));

        // Convert date strings to formatted dates
        const categories = dates.map(d => dayjs(d).format('MMM D, YYYY'));

        // Define chart series dynamically based on userType
        const series = [
            {
                name: 'Clicks',
                data: clickData,
            },
            {
                name: 'Conversions',
                data: conversionData,
            },
            {
                name: isPublisher ? 'Earnings' : 'Revenues',
                data: earnOrRevenueData,
            }
        ];

        if (!isPublisher) {
            // Only for admin, add payouts and profits
            series.push(
                {
                    name: 'Payouts',
                    data: payoutData,
                },
                {
                    name: 'Profits',
                    data: profitData,
                }
            );
        }

        const options = {
            series: series,
            chart: {
                height: 350,
                type: 'area',
                id: 'chart',
                toolbar: {
                    show: false,
                },
            },
            dataLabels: {
                enabled: false,
            },
            stroke: {
                curve: 'smooth',
            },
            xaxis: {
                type: 'categories',
                categories: categories,
            },
            tooltip: {
                x: {
                    format: 'dd/MM/yy',
                },
            },
        };

        if (chartRef.current) {
            const chart = new ApexCharts(chartRef.current, options);
            chart.render();

            return () => {
                chart.destroy(); // Cleanup chart on component unmount
            };
        }
    }, [chartData, userType]);

    return (
        <div>
            <div ref={chartRef}></div>
        </div>
    );
}
