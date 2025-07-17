import { Button } from '@/components/ui/button';
import Testimonies from '@/components/web/home/testimonies';
import { TitleBanner } from '@/components/web/title-banner';
import YearSelect from '@/components/year-select';
import WebLayout from '@/layouts/web/web-layout';
import { Head, usePage } from '@inertiajs/react';
import { Download } from 'lucide-react';
import React from 'react';

const AnnualReport = () => {
    const { report } = usePage().props;

    const [selectedYear, setSelectedYear] = React.useState(report);

    return (
        <WebLayout>
            <Head title="Annual Report" />

            <TitleBanner
                title={'Annual Report'}
                rightElement={
                    <div className="z-10 px-5">
                        <YearSelect setYear={setSelectedYear} year={selectedYear} className="p-0 text-2xl" />
                    </div>
                }
            />

            <section className="mb-10 px-[10px] py-5 text-center lg:px-[104px] lg:py-5">
                <blockquote className="flex flex-col gap-[16px] py-5 text-left">
                    <h2 className="text-secondary scroll-m-20 text-3xl font-semibold tracking-tight lg:text-4xl">
                        Key Impact Numbers
                    </h2>
                </blockquote>
                <div className="grid grid-cols-1 items-center justify-center gap-6 sm:grid-cols-1 md:grid-cols-3">
                    {selectedYear?.key_impacts?.map((stat, index) => (
                        <div
                            key={index}
                            className="bg-secondary/5 flex h-full w-full flex-col items-center justify-center rounded-[20px] px-6 py-5 text-center shadow-md"
                        >
                            <h2 className="text-secondary text-3xl font-semibold capitalize lg:text-4xl">{stat.title}</h2>
                            <p className="mt-2 w-full max-w-[251px] text-lg text-gray-600 sm:text-xl">{stat.description}</p>
                        </div>
                    ))}
                </div>

                <div className="mt-6 flex flex-col justify-center gap-4 lg:flex-row">
                    <a href={selectedYear?.report_file} target="_blank" download={`${selectedYear?.year} Annual Report`} rel="noopener noreferrer">
                        <Button className="h-[42px] rounded-lg px-10 py-2 lg:h-[46px]"><Download /> Download Report </Button>
                    </a>
                </div>
            </section>

            <Testimonies simple subtitle="" title="Success Stories" />

            <section className="bg-white px-[10px] py-5 lg:px-[104px] lg:py-5">
                <blockquote className="flex flex-col gap-[16px] py-5">
                    <h2 className="text-secondary scroll-m-20 text-3xl font-semibold tracking-tight lg:text-4xl">What’s Next</h2>
                </blockquote>

                <p className="text-[20px] font-medium tracking-tight text-[#585858]">
                    In 2021 we are going back to purposely reconnect with the communities and member organizations through outreach programmes and
                    advocacy, mentoring and working with our community-based structures (COMBATs). Women have continued to be economically challenged
                    due to the causation factors that often go unattended to. These include; low levels of education and exposure, limited access and
                    ownership to productive assets including land and finances, inadequate SGBV responses mechanisms among others.
                </p>
                <p className="mt-4 text-[20px] font-medium tracking-tight text-[#585858]">
                    We will therefore continue to strive to promote women’s access to economic justice, markets and value chain production; promote
                    and strengthen women’s participation and representation in leadership and decision making in democratic governance in Uganda:
                    promote peace and security in the lives of women, their families and communities and Improve on program and organizational
                    efficiency and effectiveness. We are committed to continuing to strategically partners and work with various and diverse
                    stakeholder both state and non-state as we strive to achieve our Vision and Mission.
                </p>
            </section>
        </WebLayout>
    );
};

export default AnnualReport;
