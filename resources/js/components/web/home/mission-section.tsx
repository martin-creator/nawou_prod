import { Button } from '@/components/ui/button';
import { Link } from '@inertiajs/react';

export default function MissionSection() {
    return (
        <section className="flex flex-col items-center justify-center gap-10 px-5 pt-25 lg:text-justify lg:flex-row">
            {/* Left Side - Content */}
            <div className="text-left lg:w-1/2">
                <span className="bg-secondary/5 text-md text-secondary rounded-2xl px-4 py-3 font-medium">WHAT WE ARE ABOUT</span>
                <h2 className="text-secondary mt-4 text-4xl font-bold">Our Mission</h2>
                <p className="mx-auto mt-10 max-w-4xl lg:text-justify text-[20px] font-medium text-gray-700">
                    At the National Association of Women’s Organizations in Uganda (NAWOU), we are dedicated to empowering women and girls in Uganda
                    to realize their full potential by promoting sustainable development and equal opportunities.
                </p>

                <p className='mx-auto mt-8 max-w-4xl lg:text-justify text-[20px] font-medium text-gray-700'>Our mission is simple yet impactful:</p>
                <ul className="mx-auto ml-5 lg:ml-15 list-outside list-disc space-y-2 text-[20px] font-medium text-gray-700">
                    <li className="lg:text-justify">
                        <>A Platform for Women:</> Bringing women together to unite, share knowledge, and advocate for their rights.
                    </li>
                    <li className="lg:text-justify">
                        <>Gender Equality:</> Striving for a society where women have equal opportunities to lead and succeed.
                    </li>
                    <li className="lg:text-justify">
                        <>Empowerment Through Action:</> Supporting women with programs and partnerships that promote sustainable growth and
                        development.
                    </li>
                </ul>
                <p className="mx-auto mt-4 max-w-4xl lg:text-justify text-[20px] font-medium text-gray-700">
                    We believe in a world where every woman and girl can realize her full potential and thrive. Together, we’re creating opportunities
                    for leadership, growth, and lasting change.
                </p>
                <Link href={route('donate')} className='w-full'>
                <Button className="bg-primary hover:bg-primary/90 text-md mt-6 h-[42px] w-full lg:w-[152px] cursor-pointer rounded-lg px-10 py-2 text-white w-full">
                    Donate Now
                </Button>
                </Link>
            </div>

            {/* Right Side - Image */}
            <div className="bg-primary hidden rounded-4xl lg:block">
                <img src="/images/1.jpg" alt="Women walking in the fields" className="h-[495px] w-[503px] rounded-3xl shadow-lg object-cover" />
            </div>
        </section>
    );
}
