"use client"
import { useRef, useEffect } from 'react';
import { Chart, ChartConfiguration, ChartTypeRegistry } from 'chart.js/auto';

interface DoughnutChartProps {
    percentages: number[];
    labels?: string[];
    showPercentage?: boolean;
    height?: number;
    width?: number;
}

//By default, the chart will have two labels: Wins and Losses
export default function DoughnutChart({percentages, labels=["Wins", "Losses"], showPercentage=true, height=150, width=150}: DoughnutChartProps) {
    const chartRef = useRef<HTMLCanvasElement | null>(null);
    const chartInstance = useRef<Chart<'doughnut', number[], string> | null>(null);
    
    useEffect(() => {
        if (chartRef.current) {
            if (chartInstance.current) {
                chartInstance.current.destroy();
            }
            const context = chartRef.current.getContext('2d');

            const config: ChartConfiguration<'doughnut', number[], string> = {
                type: 'doughnut',
                data: {
                    labels: labels,
                    datasets: [{
                        data: percentages,
                        backgroundColor: [
                            '#FF5931',
                            '#1A1A1A'
                        ],
                        borderWidth: 5,
                        borderColor: '#E3E3E3',
                        hoverBorderColor: '#E3E3E3',
                        hoverBorderWidth: 2,
                    }]
                },
                options: {
                    cutout: '70%',
                    responsive: true,
                    maintainAspectRatio: false,
                    layout: {
                        padding: 0
                    },
                    plugins: {
                        legend: {
                            display: false
                        },
                        tooltip: {
                            displayColors: false,
                        }
                    },
                },
                //ads a percentage label to the center of the chart
                plugins: (showPercentage && percentages.length === 2) ? [{
                    id: 'custom_percentage_label',
                    beforeDraw: (chart) => {
                        const width = chart.width,
                            height = chart.height,
                            ctx = chart.ctx,
                            percent = Math.round((percentages[0] / (percentages[0] + percentages[1])) * 100);
                        ctx.restore();
                        const fontSize = (height / 114).toFixed(2);
                        ctx.font = `${fontSize}em system-ui`;
                        ctx.textBaseline = "middle";
                        ctx.fillStyle = "#FF5931";

                        const text = `${percent}%`,
                            textX = Math.round((width - ctx.measureText(text).width) / 2),
                            textY = height / 2;
                        
                        //to use the custom font we dont need this
                        //ctx.fillText(text, textX, textY);
                        ctx.save();
                    }
                }] : []
            };

            if (context) {
                chartInstance.current = new Chart(context, config);
            }
        }
    }, [percentages, labels, showPercentage]); 

    return (
        <div>
            <canvas height={height} width={width} ref={chartRef} />
        </div>
    );
}