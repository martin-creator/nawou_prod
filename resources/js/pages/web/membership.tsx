import { Button } from '@/components/ui/button';
import { TitleBanner } from '@/components/web/title-banner';
import WebLayout from '@/layouts/web/web-layout';
import { Head, Link } from '@inertiajs/react';

export default function Page() {
    return (
        <WebLayout>
            <Head title="NAWOU Membership Application" />

            <TitleBanner title="NAWOU Membership Application" />

            <section className="px-[10px] py-5 lg:px-[104px] lg:py-5">
                <div className="bg-primary/5 flex flex-col gap-[16px] rounded-xl py-5 pl-6">
                    <blockquote className="border-primary flex flex-col gap-[16px] border-l-[8px] py-5 pl-6">
                        <h2 className="text-secondary scroll-m-20 text-[30px] font-semibold tracking-tight">1. Submit Application Letter</h2>
                        <p className="text-[20px] font-medium text-[#585858]">
                            Express your interest to join NAWOU membership by submitting a letter accompanied by:
                        </p>
                        <ul className="ml-6 list-outside list-disc space-y-2">
                            <li className="text-[20px] font-medium text-[#585858]">Brief organization profile</li>
                            <li className="text-[20px] font-medium text-[#585858]">List of Board members with contact information</li>
                            <li className="text-[20px] font-medium text-[#585858]">Management team details</li>
                        </ul>
                    </blockquote>
                </div>

                <div className="bg-primary/5 mt-15 flex flex-col gap-[16px] rounded-xl py-5 pl-6">
                    <blockquote className="border-primary flex flex-col gap-[16px] border-l-[8px] py-5 pl-6">
                        <h2 className="text-secondary scroll-m-20 text-[30px] font-semibold tracking-tight">2. Secretariat Approval</h2>
                        <p className="text-[20px] font-medium text-[#585858]">
                            Wait for your application to be reviewed and approved by the NAWOU Secretariat.
                        </p>
                    </blockquote>
                </div>

                <div className="bg-primary/5 mt-15 flex flex-col gap-[16px] rounded-xl py-5 pl-6">
                    <blockquote className="border-primary flex flex-col gap-[16px] border-l-[8px] py-5 pr-3 pl-6">
                        <h2 className="text-secondary scroll-m-20 text-[30px] font-semibold tracking-tight">3. Complete Required Documentation</h2>
                        <p className="text-[20px] font-medium text-[#585858]">After approval, you'll need to:</p>
                        <ul className="ml-6 list-outside list-disc space-y-2">
                            <li className="text-[20px] font-medium text-[#585858]">
                                Fill in the NAWOU membership registration form{' '}
                                <Link href={route('membership_form')}>
                                <Button variant={'link'} className="p-0">
                                    from here
                                </Button>
                                </Link>
                            </li>
                            <li className="text-[20px] font-medium text-[#585858]">Complete the NAWOU membership Profile Form</li>
                            <li className="text-[20px] font-medium text-[#585858]">
                                Submit a copy of your organization's constitution or other supporting legal documents
                            </li>
                        </ul>
                        <p className="text-[20px] font-medium text-[#585858]">Send all documents to admin@nawouganda.ug or nawou@nawouganda.ug</p>

                        <div className="bg-primary gap-[16px] rounded-xl py-5 pl-6 lg:w-[80%]">
                            <h2 className="scroll-m-20 text-[30px] font-semibold tracking-tight text-white uppercase">Important Note</h2>
                            <p className="text-[20px] font-medium text-white">If you are a Membership Organization, please indicate:</p>
                            <ul className="ml-6 list-outside list-disc space-y-2">
                                <li className="text-[20px] font-medium text-white">The number of members in your organization (e.g., 50)</li>
                                <li className="text-[20px] font-medium text-white">Member category (individuals, groups, or organizations)</li>
                            </ul>
                        </div>
                    </blockquote>
                </div>

                <div className="bg-primary/5 mt-15 flex flex-col gap-[16px] rounded-xl py-5 pl-6">
                    <blockquote className="border-primary flex flex-col gap-[16px] border-l-[8px] py-5 pl-6">
                        <h2 className="text-secondary scroll-m-20 text-[30px] font-semibold tracking-tight">
                            4. Pay Membership Fees & Receive Certificate
                        </h2>
                        <p className="text-[20px] font-medium text-[#585858]">
                            Pay the membership fee of UGX 200,000 if your organization is a local or national:
                        </p>
                        <ul className="ml-6 list-outside list-disc space-y-2">
                            <li className="text-[20px] font-medium text-[#585858]">Faith-Based Organization (FBO)</li>
                            <li className="text-[20px] font-medium text-[#585858]">Non-Governmental Organization (NGO)</li>
                            <li className="text-[20px] font-medium text-[#585858]">Professional body</li>
                        </ul>
                        <p className="text-[20px] font-medium text-[#585858]">
                            After payment, a Membership Certificate will be issued by the Secretariat.
                        </p>
                    </blockquote>
                </div>

                <div className="mt-10 text-[20px] font-medium text-[#585858]">
                    Ready to apply, fill the{' '}
                    <Link href={route('membership_form')}>
                        <Button>Membership Form</Button>
                    </Link>
                </div>
            </section>
        </WebLayout>
    );
}
