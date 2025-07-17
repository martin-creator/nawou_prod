import AnnualReport from '@/components/web/annual-report';
import FAQs from '@/components/web/faqs';
import Testimonies from '@/components/web/home/testimonies';
import { TitleBanner } from '@/components/web/title-banner';
import WebLayout from '@/layouts/web/web-layout';
import { Head } from '@inertiajs/react';

export default function donate() {
    return (
        <WebLayout>
            <Head title="Donation" />

            <TitleBanner title="Donation" />

            <section className="px-[10px] py-5 lg:px-[104px] lg:py-5">
                <blockquote className="border-primary flex flex-col gap-[16px] border-l-[8px] py-5 pl-6">
                    <h2 className="text-secondary scroll-m-20 text-3xl font-semibold tracking-tight lg:text-4xl">
                        Support Women's Empowerment in Uganda
                    </h2>
                    <p className="text-[20px] font-medium text-[#585858]">
                        Your contribution helps women gain skills, financial independence, and leadership opportunities.
                    </p>
                </blockquote>

                <div className="mx-auto w-full">
                    <div className="bg-secondary/5 mt-[40px] lg:h-[540px] w-full cursor-pointer">
                        <img src="/images/2.jpg" className="max-h-[540px] w-full rounded-none object-cover hover:opacity-90" alt="" />
                    </div>
                </div>
            </section>

            <section className="bg-primary mt-15 px-[10px] py-5 lg:px-[104px] lg:py-5">
                <blockquote className="flex flex-col gap-[16px] border-l-[8px] border-white py-5 pl-6">
                    <div>

                    <h2 className="mb-0 scroll-m-20 text-3xl font-semibold tracking-tight text-white lg:text-4xl">Donate via Bank Transfer</h2>
                    <p className="mt-0 text-[20px] font-medium text-white">Make a direct bank transfer using the details below:</p>
                    <div>
                    </div>

                    <p className="mt-3 text-[20px] font-medium text-white">Account Number: 23943901103</p>
                    <p className="mt-0 text-[20px] font-medium text-white">Account Name: NAWOU Uganda</p>
                    <p className="mt-0 text-[20px] font-medium text-white">Bank Name: Citi Bank</p>
                    </div>
                </blockquote>
            </section>

            <Testimonies subtitle='' title='Impact' />
            <section className="bg-white mt-15 px-[10px] py-5 lg:px-[104px] lg:py-5">

            <AnnualReport image={false} title='Annual Report' />
            </section>
            <FAQs  />
        </WebLayout>
    );
}
