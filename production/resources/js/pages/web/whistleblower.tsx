import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Switch } from '@/components/ui/switch';
import { Textarea } from '@/components/ui/textarea';
import { TitleBanner } from '@/components/web/title-banner';
import WebLayout from '@/layouts/web/web-layout';
import { Head, useForm } from '@inertiajs/react';
import { LoaderCircle, UploadCloud } from 'lucide-react';
import React, { FormEventHandler } from 'react';
import { toast } from 'sonner';

export default function Page() {
    const [anon, setAnon] = React.useState(true);

    const { data, setData, post, processing, errors, reset } = useForm({
        name: '',
        email: '',
        what_happened: '',
        where_it_happened: '',
        who_was_involved: '',
        evidence_file: null,
    });

    const submit: FormEventHandler = (e) => {
        e.preventDefault();
        post(route('whistleblowers'), {
            onSuccess: () =>
                toast.success(`Whistle Blown!`, {
                    description: 'Thank you for taking the time to report this. We have received your submission and will take appropriate action.',
                    closeButton: true,
                }),
            onError: (errors) => {
                for (const key in errors) {
                    toast.error(`${key} error`, {
                        description: errors[key],
                        closeButton: true,
                        className: 'capitalize',
                    });
                }
            },
            onFinish: () => {
                reset()
                setAnon(true)
            },
        });
    };

    return (
        <WebLayout>
            <Head title="Whistleblower" />

            <TitleBanner title="Whistleblower" />

            <section className="px-[10px] py-5 lg:px-[104px] lg:py-5">
                <blockquote className="border-primary flex flex-col gap-[16px] border-l-[8px] py-5 pl-6">
                    <h2 className="text-secondary scroll-m-20 text-3xl font-semibold tracking-tight lg:text-4xl">Whistleblower Reporting</h2>
                    <p className="text-[20px] font-medium text-[#585858]">
                        NAWOU is committed to fostering a safe, ethical, and transparent environment for all employees, members, and partners. If you
                        have witnessed or experienced corruption, fraud, sexual harassment, discrimination, or any other form of misconduct, we
                        encourage you to report it through this confidential platform.
                    </p>
                </blockquote>

                <div className="bg-primary/5 my-20 flex flex-col gap-[16px] rounded-xl py-5 pl-6">
                    <h2 className="text-secondary scroll-m-20 text-[30px] font-semibold tracking-tight">What You Can Report</h2>
                    <p className="text-[20px] font-medium text-[#585858]">You may report any of the following concerns:</p>
                    <ul className="ml-6 list-outside list-disc space-y-2">
                        <li className="text-[20px] font-medium text-[#585858]">
                            Corruption & Fraud: Misuse of funds, bribery, embezzlement, procurement fraud, or any unethical financial dealings.
                        </li>
                        <li className="text-[20px] font-medium text-[#585858]">
                            Sexual Harassment & Misconduct: Unwelcome sexual advances, inappropriate comments, requests for favors, or any form of
                            sexual exploitation.
                        </li>
                        <li className="text-[20px] font-medium text-[#585858]">
                            Discrimination & Abuse: Unfair treatment based on gender, race, ethnicity, disability, or any form of workplace bullying
                            and intimidation.
                        </li>
                        <li className="text-[20px] font-medium text-[#585858]">
                            Conflict of Interest: Undisclosed personal or financial relationships that may impact organizational decisions.
                        </li>
                        <li className="text-[20px] font-medium text-[#585858]">
                            Breach of Organizational Policies: Any other violations that compromise NAWOU’s mission, integrity, or values.
                        </li>
                    </ul>
                </div>

                <blockquote className="border-primary flex flex-col gap-[16px] border-l-[8px] py-5 pl-6">
                    <h2 className="text-secondary scroll-m-20 text-3xl font-semibold tracking-tight lg:text-4xl">How to Report</h2>
                    <p className="text-[20px] font-medium text-[#585858]">We offer multiple confidential channels for reporting</p>
                </blockquote>

                <div className="mt-20 grid w-full gap-6 md:grid-cols-2">
                    <div className="flex h-full flex-col justify-center gap-[40px] px-[48px]">
                        <div className="bg-primary/5 flex flex-col gap-[16px] rounded-xl py-5 pl-6">
                            <h2 className="text-secondary scroll-m-20 text-[30px] font-semibold tracking-tight">Email</h2>
                            <p className="text-[20px] font-medium text-[#585858]">
                                Send an anonymous email to <b>[Whistleblower Email]</b>.{' '}
                            </p>
                        </div>

                        <div className="bg-primary/5 flex flex-col gap-[16px] rounded-xl py-5 pl-6">
                            <h2 className="text-secondary scroll-m-20 text-[30px] font-semibold tracking-tight">In-Person Report</h2>
                            <p className="text-[20px] font-medium text-[#585858]">
                                Schedule a meeting with the Whistleblower Protection Officer at NAWOU’s office.
                            </p>
                        </div>

                        <div className="bg-primary/5 flex flex-col gap-[16px] rounded-xl py-5 pl-6">
                            <h2 className="text-secondary scroll-m-20 text-[30px] font-semibold tracking-tight">Hotline</h2>
                            <p className="text-[20px] font-medium text-[#585858]">
                                Call our confidential reporting line at <b>[Phone Number]</b>.
                            </p>
                        </div>
                    </div>

                    {/* contact form */}
                    <form onSubmit={submit} className="bg-primary h-full rounded-xl">
                        <div className="flex flex-col items-center justify-between gap-4 p-[48px]">
                            <div className="text-left">
                                <h3 className="mb-0 text-[30px] font-semibold text-white">Online Form</h3>
                                <p className="mb-3 text-white">Submit a secure report by filling this form</p>
                            </div>

                            <div className="flex w-full items-center justify-between">
                                <h3 className="mb-0 text-[24px] font-semibold text-white">Anonymous</h3>
                                <Switch className="cursor-pointer border border-white" defaultChecked={anon} onCheckedChange={setAnon} />
                            </div>
                            {!anon && (
                                <div className="flex w-full flex-col gap-4">
                                    <div>
                                        <Label className="text-[18px] text-white">Name</Label>
                                        <Input
                                            type="text"
                                            required
                                            placeholder="Your Name"
                                            className="border-primary/10 bg-white shadow-none dark:bg-gray-800"
                                            value={data.name}
                                            onChange={(e) => setData('name', e.target.value)}
                                            disabled={processing}
                                        />

                                    </div>
                                    <div>
                                        <Label className="text-[18px] text-white">Email</Label>
                                        <Input
                                            type="email"
                                            required
                                            placeholder="Your Email"
                                            className="border-primary/10 bg-white shadow-none dark:bg-gray-800"
                                            value={data.email}
                                            onChange={(e) => setData('email', e.target.value)}
                                            disabled={processing}
                                        />
                                    </div>
                                </div>
                            )}
                            <div className="w-full">
                                <Label className="text-[20px] text-white">What happened?</Label>
                                <Textarea
                                    placeholder="What happened?"
                                    className="border-primary/10 h-[100px] bg-white shadow-none dark:bg-gray-800"
                                    required
                                    value={data.what_happened}
                                    onChange={(e) => setData('what_happened', e.target.value)}
                                    disabled={processing}
                                />
                            </div>
                            <div className="w-full">
                                <Label className="text-[20px] text-white">Where did it happen?</Label>
                                <Input
                                    type="text"
                                    placeholder="Where did it happen?"
                                    className="border-primary/10 bg-white shadow-none dark:bg-gray-800"
                                    required
                                    value={data.where_it_happened}
                                    onChange={(e) => setData('where_it_happened', e.target.value)}
                                    disabled={processing}
                                />
                            </div>
                            <div className="w-full">
                                <Label className="text-[20px] text-white">Who is involved?</Label>
                                <Input
                                    type="text"
                                    placeholder="Who is involved?"
                                    className="border-primary/10 bg-white shadow-none dark:bg-gray-800"
                                    required
                                    value={data.who_was_involved}
                                    onChange={(e) => setData('who_was_involved', e.target.value)}
                                    disabled={processing}
                                />
                            </div>

                            <div className="w-full">
                                <Label className="text-[20px] text-white">Upload Evidence (if any)</Label>
                                <Label className="hover:text-primary relative inline-flex h-[140px] w-full cursor-pointer items-center justify-center rounded-md bg-white text-[#1E1E1E] shadow-md transition-colors duration-200">
                                    <UploadCloud className="font-medium" />
                                    {
                                        data.evidence_file?data.evidence_file?.fileName:""
                                    }
                                    <input
                                        type="file"
                                        className="absolute inset-0 h-full w-full cursor-pointer opacity-0"
                                        onChange={(e) => setData('evidence_file', e.target.files[0])}
                                        disabled={processing}
                                    />
                                </Label>
                            </div>
                            <Button type='submit' className="text-primary mt-[64px] h-[59px] w-[127px] bg-white hover:bg-white/95">
                            {processing && <LoaderCircle className="h-4 w-4 animate-spin" />}
                            Send</Button>
                        </div>
                    </form>
                </div>
            </section>

            <section className="bg-secondary/5 my-10 px-[10px] py-5 lg:px-[104px] lg:py-5">
                <div className="flex flex-col gap-[16px] rounded-xl py-5 pl-6">
                    <h2 className="text-secondary scroll-m-20 text-[30px] font-semibold tracking-tight">Your Protection & Confidentiality</h2>
                    <ul className="ml-6 list-outside list-disc space-y-2">
                        <li className="text-[20px] font-medium text-[#585858]">
                            Reports can be anonymous, but providing your contact information will help us conduct a thorough investigation.
                        </li>
                        <li className="text-[20px] font-medium text-[#585858]">
                            NAWOU has a strict non-retaliation policy – no whistleblower will face punishment or discrimination for making a
                            good-faith report.
                        </li>
                        <li className="text-[20px] font-medium text-[#585858]">
                            All reports are reviewed by an independent ethics committee to ensure fairness and due process.
                        </li>
                    </ul>
                </div>
            </section>

            <section className="px-[10px] py-5 lg:px-[104px] lg:py-5">
                <blockquote className="border-primary flex flex-col gap-[16px] border-l-[8px] py-5 pl-6">
                    <h2 className="text-secondary scroll-m-20 text-3xl font-semibold tracking-tight lg:text-4xl">What Happens After You Report</h2>
                    <ul className="ml-6 list-outside list-disc space-y-2">
                        <li className="text-[20px] font-medium text-[#585858]">
                            Acknowledgment: You will receive a confirmation (if contact details are provided).
                        </li>
                        <li className="text-[20px] font-medium text-[#585858]">
                            Investigation: Our internal team will assess and investigate the issue.
                        </li>
                        <li className="text-[20px] font-medium text-[#585858]">
                            Action & Resolution: Appropriate steps will be taken to address the concern, ensuring justice and accountability.
                        </li>
                        <li className="text-[20px] font-medium text-[#585858]">
                            Feedback: If possible, we will provide updates on the case outcome while maintaining confidentiality.
                        </li>
                    </ul>
                </blockquote>
            </section>
        </WebLayout>
    );
}
