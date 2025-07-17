import { Link, usePage } from '@inertiajs/react';
import React from 'react';
import { Button } from '../ui/button';
import YearSelect from '../year-select';

type AnnualReportProps = {
    className?: string;
    title?: string;
    subtitle?: string;
    image?: boolean;
};

export default function AnnualReport({
    className = 'bg-secondary/5',
    title = 'Annual Report',
    subtitle = 'What We Achieved',
    image = true,
}: AnnualReportProps) {
    const [selectedYear, setSelectedYear] = React.useState(null);
    return (
        <section className={`${className} flex w-full items-center justify-between overflow-hidden py-10 lg:max-h-[714px] lg:py-10`}>
            <div className="w-full items-center justify-center px-5  lg:px-20">
                <div className="py-5">
                    {subtitle && (
                        <span className="bg-secondary/5 text-secondary rounded-2xl px-4 py-3 text-[20px] font-medium uppercase">{subtitle}</span>
                    )}
                    <h2 className="text-secondary mt-4 text-[32px] font-bold">{title}</h2>
                </div>

                <div className={`flex flex-col w-full items-center ${image?'':'justify-between'} gap-6 lg:flex-row`}>
                {image && (<img src="/images/books.png" alt="" className="w-[360px]" />)}
                    <div className="flex flex-col lg:px-[80px]">
                        <h2 className="text-secondary mt-0 flex items-center gap-1 text-2xl font-medium">
                            Our impact in <YearSelect setYear={setSelectedYear} year={selectedYear} />
                        </h2>
                        <p className="text-secondary mt-4">See how we've transformed lives this past year.</p>

                        <div className="mt-6 flex flex-col justify-center gap-4 lg:flex-row">
                            <Link className="w-full" as="button" href={route('annual_report')} data={{report:selectedYear?.id}} prefetch>
                                <Button
                                    variant="outline"
                                    className="hover:bg-primary/2 border-primary hover:text-primary text-primary h-[42px] w-full rounded-lg bg-white px-10 py-2 lg:h-[46px]"
                                >
                                    View Full Report
                                </Button>
                            </Link>
                            <a href={selectedYear?.report_file} download={`${selectedYear?.year} Annual Report`} target="_blank" rel="noopener noreferrer" className='w-full'>
                            <Button className="h-[42px] w-full rounded-lg px-10 py-2 lg:h-[46px]">Download Report</Button>
                            </a>
                        </div>
                    </div>
                    {!image && (<img src="/images/books.png" alt="" className="w-[360px]" />)}
                </div>
            </div>
            {image && (
                <div className="hidden h-full w-[700px] items-center lg:block">
                    <img src="/images/report-bg.png" alt="" className="h-[700px] w-full object-cover" />
                </div>
            )}
        </section>
    );
}
