import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { cn } from '@/lib/utils';
import { Link, useForm, usePage } from '@inertiajs/react';
import { LoaderCircle } from 'lucide-react';
import { FormEventHandler } from 'react';
import { toast } from 'sonner';
import AppLogoIcon from '../app-logo-icon';
import InputError from '../input-error';

export default function WebFooter() {
    const page = usePage();
    const footerRoutes = [
        {
            title: 'About',
            route: '/about',
        },
        {
            title: 'News and Events',
            route: '/news-and-events',
        },
        {
            title: 'Resources',
            route: '/resources',
        },
        {
            title: 'Donate',
            route: '/donate',
        },
        {
            title: 'Contact Us',
            route: '/contact-us',
        },
        {
            title: 'Whistleblower',
            route: '/contact-us/whistleblower',
        },
        {
            title: 'Partnership Form',
            route: '/forms/partnership',
        },
        {
            title: 'Membership Form',
            route: '/forms/membership',
        },
        {
            title: 'Volunteer Form',
            route: '/forms/volunteer',
        },
    ];

    const { data, setData, post, processing, errors, reset } = useForm({
        email: '',
        name: '',
    });

    const submit: FormEventHandler = (e) => {
        e.preventDefault();
        post(route('newsletters'), {
            onSuccess: () =>
                toast.success(`Added to newsletter`, {
                    description: 'Hi, thank you for subscribing to our newsletter.',
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
            onFinish: () => reset('email', 'name'),
        });
    };

    return (
        <footer className="bg-primary/5 border-primary/10 border-t pt-[60px] pb-[20px] text-gray-700 lg:pt-[30px] dark:bg-gray-900 dark:text-gray-300">
            <div className="mx-auto px-4 md:max-w-7xl">
                <div className="grid grid-cols-1 gap-0 sm:grid-cols-1 lg:grid-cols-4">
                    {/* Left Section - Logo and Contact Info (Spans 2 Columns on Large Screens) */}
                    <div className="lg:col-span-2">
                        <Link href={route('home')} as="a" className="w-full bg-red-500" prefetch={'hover'}>
                            <AppLogoIcon className="mb-4 h-[80px] w-[125px]" />
                        </Link>
                        <div className="flex flex-col gap-1">
                            <p className="text-[16px]">
                                <strong className="font-medium">Address:</strong> Plot 1 Coronation Rd, Bakuli Old Kampala, off Hoima Road.
                            </p>
                            <p className="text-[16px]">
                                <strong className="font-semibold">Phone:</strong> +256 (0) 414 258963, +256 (0) 752 312303 or 780 257961
                            </p>
                            <p className="text-[16px]">
                                <strong className="font-semibold">Postal Address:</strong> P.O.Box 1663, Kampala Uganda
                            </p>
                            <p className="text-[16px]">
                                <strong className="font-semibold">Email:</strong>{' '}
                                <a href="mailto:nawou@nawouganda.org" className="text-primary hover:underline">
                                    nawou@nawouganda.org
                                </a>
                            </p>
                        </div>

                        {/* Social Icons */}
                        <div className="mt-4 flex space-x-4">
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

                    {/* Middle Section - Links */}
                    <div className="pt-8 lg:pt-0">
                        <h3 className="mb-2 text-lg font-semibold">Quick Links</h3>
                        <ul className="space-y-2">
                            {footerRoutes.map((item, ind) => (
                                <li key={ind}>
                                    <Link
                                        href={item.route}
                                        className={cn('hover:text-primary text-[18px] hover:underline', page.url === item.route && 'text-primary')}
                                    >
                                        {item.title}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Right Section - Newsletter */}
                    <div className="pt-8 lg:pt-0">
                        <h3 className="mb-0 text-lg font-semibold">Subscribe to our Newsletter</h3>
                        <p className="mb-3 text-xs">To get updates delivered straight to your inbox</p>
                        <form className="space-y-3" onSubmit={submit}>
                            <Input
                                type="text"
                                required
                                placeholder="Your Name"
                                className="border-primary/10 h-[42px] bg-white shadow-none dark:bg-gray-800"
                                value={data.name}
                                onChange={(e) => setData('name', e.target.value)}
                                autoComplete="name"
                                disabled={processing}
                            />
                            <InputError message={errors.name} className="mt-[-10px]" />
                            <Input
                                type="email"
                                required
                                placeholder="Your Email"
                                className="border-primary/10 h-[42px] bg-white shadow-none dark:bg-gray-800"
                                value={data.email}
                                onChange={(e) => setData('email', e.target.value)}
                                autoComplete="email"
                            />
                            <InputError message={errors.email} className="mt-[-10px]" />
                            <Button type="submit" disabled={processing} className="bg-primary hover:bg-primary/90 h-[42px] w-full">
                                {processing && <LoaderCircle className="h-4 w-4 animate-spin" />}
                                Subscribe Now
                            </Button>
                        </form>
                    </div>
                </div>

                {/* Footer Bottom */}
                <div className="border-primary mt-8 border-t pt-4 text-center">
                    <p className="text-md font-medium">
                        &copy; Copyright {new Date().getFullYear()}. All rights reserved by{' '}
                        <Link href={route('home')} className="text-primary">
                            {page.props?.name}
                        </Link>
                    </p>
                </div>
            </div>
        </footer>
    );
}
