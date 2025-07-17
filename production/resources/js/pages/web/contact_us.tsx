import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { TitleBanner } from '@/components/web/title-banner';
import WebLayout from '@/layouts/web/web-layout';
import { Head, Link, useForm } from '@inertiajs/react';
import { ArrowRight, LoaderCircle } from 'lucide-react';
import { FormEventHandler } from 'react';
import { toast } from 'sonner';

export default function contact_us() {
    const quickLinks = [
        {
            title: 'Partnership',
            description: 'Collaborate with us to drive meaningful change. Together, we can create opportunities and transform lives.',
            icon: '/images/mdi_partnership.png',
            url: route('partner'),
            linkText: 'Partner with us',
        },
        {
            title: 'Donation',
            description: 'Your support creates real impact! Help us empower women through education, entrepreneurship, and advocacy.',
            icon: '/images/mdi_donation.png',
            url: route('donate'),
            linkText: 'Donate',
        },
        {
            title: 'Volunteer',
            description: 'Be the change! Join our passionate team and contribute your time, skills, and energy to uplift women and communities.',
            icon: '/images/mdi_volunteer.png',
            url: route('volunteer'),
            linkText: 'Volunteer',
        },
        {
            title: 'Membership',
            description: 'Join a growing network of change-makers committed to gender equality and women’s empowerment in Uganda.',
            icon: '/images/mdi_membership.png',
            url: route('membership'),
            linkText: 'See criteria',
        },
    ];

    const { data, setData, post, processing, errors, reset } = useForm({
        name: '',
        email: '',
        message: '',
    });

    const submit: FormEventHandler = (e) => {
        e.preventDefault();
        post(route('contact'), {
            onSuccess: () =>{                
                toast.success(`Message Sent`, {
                    description: 'Thank you for taking the time to contact us. Your message has been received.',
                    closeButton: true,
                })},
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
                reset();
            },
        });
    };

    return (
        <WebLayout>
            <Head title="Contact Us" />

            <TitleBanner title="Contact Us" hasImage />

            <section className="px-[10px] py-5 lg:px-[104px] lg:py-5">
                <blockquote className="border-primary flex flex-col gap-[16px] border-l-[8px] py-5 pl-6">
                    <h2 className="scroll-m-20 text-3xl font-semibold tracking-tight lg:text-4xl">Get in Touch with NAWOU</h2>
                    <p className="text-[20px] font-medium text-[#585858]">
                        Do you have questions? Want to partner with us? Reach out and let’s create impact together.
                    </p>
                </blockquote>

                {/* block items */}
                <div className="mt-20 grid w-full gap-6 md:grid-cols-2">
                    {quickLinks.map((item, index) => (
                        <Card key={index} className="bg-primary/5 w-full border-0 shadow-none">
                            <CardContent className="space-y-4 px-6 py-0">
                                <img src={item.icon} className="h-[40px] w-[40px]" />
                                <div className="flex items-center space-x-3">
                                    <h3 className="text-secondary text-2xl font-semibold">{item.title}</h3>
                                </div>
                                <p className="text-[16px] text-gray-600">{item.description}</p>
                                <Link href={item.url} preserveScroll preserveState prefetch="hover">
                                    <Button
                                        variant="link"
                                        className="text-primary flex cursor-pointer items-center space-x-1 p-0 hover:animate-pulse hover:no-underline"
                                    >
                                        <span>{item.linkText}</span> <ArrowRight />
                                    </Button>
                                </Link>
                            </CardContent>
                        </Card>
                    ))}
                </div>

                {/* get in touch */}
                <div className="mt-20 grid w-full gap-6 md:grid-cols-2">
                    <div className="h-full bg-white p-[48px]">
                        <h2 className="mt-4 text-[28px] font-semibold text-[#585858]">Get in touch</h2>

                        <div className="flex p-3">
                            <img src={'/images/location.png'} className="h-[40px] w-[40px]" />
                            <div className="ml-3 text-[#585858]">
                                <h4>Address</h4>
                                <p>Plot 1 Coronation Rd , Bakuli Old Kampala, off Hoima Road. </p>
                            </div>
                        </div>
                        <div className="flex p-3 text-[#585858]">
                            <img src={'/images/call.png'} className="h-[40px] w-[40px]" />
                            <div className="ml-3">
                                <h4>Phone number</h4>
                                <p>+256 (0) 414 258463, +256 (0) 752 21320</p>
                            </div>
                        </div>
                        <div className="flex p-3 text-[#585858]">
                            <img src={'/images/mail.png'} className="h-[40px] w-[40px]" />
                            <div className="ml-3">
                                <h4>Email</h4>
                                <p>nawou@nawouganda.ug</p>
                            </div>
                        </div>

                        <h2 className="mt-4 text-[20px] font-semibold text-[#585858]">Follow us</h2>
                        {/* Social Icons */}
                        <div className="mt-[8px] flex space-x-4">
                            <a href="#" className="hover:text-primary text-gray-600">
                                <img src="/images/facebook.png" className="w-6" />
                            </a>
                            <a
                                href="https://www.linkedin.com/company/national-association-of-women-s-organizations-in-uganda-nawou/"
                                className="hover:text-primary text-gray-600"
                            >
                                <img src="/images/linkedin.png" className="w-6" />
                            </a>

                            <a href="https://x.com/NAWOUga" className="hover:text-primary text-gray-600">
                                <img src="/images/x-twitter.png" className="w-6" />
                            </a>
                            <a href="#" className="hover:text-primary text-gray-600">
                                <img src="/images/youtube.png" className="w-6" />
                            </a>

                            <a href="https://www.instagram.com/nawouganda" className="hover:text-primary text-gray-600">
                                <img src="/images/instagram.png" className="w-6" />
                            </a>
                        </div>
                    </div>

                    {/* contact form */}
                    <div className="bg-primary h-full rounded-xl">
                        <form onSubmit={submit} className="flex flex-col items-center justify-between gap-4 p-[48px]">
                            <div className="text-center">
                                <h3 className="mb-0 text-[30px] font-semibold text-white">Send us a message</h3>
                                <p className="mb-3 text-white">Message us and let’s create impact together.</p>
                            </div>
                            <Input
                                type="text"
                                placeholder="Your Name"
                                className="border-primary/10 bg-white shadow-none dark:bg-gray-800"
                                required
                                autoComplete='name'
                                value={data.name}
                                onChange={(e) => setData('name', e.target.value)}
                                disabled={processing}
                            />
                            <Input
                                type="email"
                                placeholder="Your Email"
                                className="border-primary/10 bg-white shadow-none dark:bg-gray-800"
                                required
                                autoComplete='email'
                                value={data.email}
                                onChange={(e) => setData('email', e.target.value)}
                                disabled={processing}
                            />
                            <Textarea
                                placeholder="Message"
                                className="border-primary/10 h-[100px] bg-white shadow-none dark:bg-gray-800"
                                required
                                value={data.message}
                                onChange={(e) => setData('message', e.target.value)}
                                disabled={processing}
                            />
                            <Button type='submit' className="text-primary h-[42px] bg-white hover:bg-white/95" disabled={processing}>
                                {processing && <LoaderCircle className="h-4 w-4 animate-spin" />} Send
                            </Button>
                        </form>
                    </div>
                </div>

                {/* whistle blower */}
                <blockquote className="border-primary mt-20 flex flex-col gap-[16px] border-l-[8px] py-5 pl-6">
                    <h2 className="scroll-m-20 text-3xl font-semibold tracking-tight lg:text-4xl">Whistleblower Reporting</h2>
                    <p className="mt-0 text-[20px] font-medium text-[#585858]">
                        NAWOU is committed to fostering a safe, ethical, and transparent environment for all employees, members, and partners. If you
                        have witnessed or experienced *corruption, fraud, sexual harassment, discrimination, or any other form of misconduct, we
                        encourage you to report it through this confidential platform.
                    </p>

                    <h2 className="mt-4 scroll-m-20 text-lg font-semibold tracking-tight lg:text-xl">How to Report</h2>
                    <p className="mt-0 text-[20px] font-medium text-[#585858]">
                        Our whistleblower reporting system provides a secure and confidential channel to submit your concerns. Your identity will be
                        protected throughout the process.
                    </p>
                    <div>
                        <Link href={route('whistleblower')} prefetch>
                            <Button variant={'link'} className="m-0 p-0">
                                Report a Concern <ArrowRight />
                            </Button>
                        </Link>
                    </div>
                </blockquote>
            </section>
        </WebLayout>
    );
}
