import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Link } from '@inertiajs/react';
import { ArrowRight } from 'lucide-react';

export default function WhatWeDo() {
    const programs = [
        {
            title: 'Economic Empowerment',
            description:
                'NAWOU’s Economic Empowerment program focuses on equipping women with the skills, resources, and networks necessary to achieve financial independence. A key initiative under this program is the NAWOU Handmade project, which supports women artisans in creating and marketing handmade products, thereby contributing to their household incomes.',
            icon: '/images/Benefit.png',
            url: '/programs/economic-empowerment',
        },
        {
            title: 'Governance and Leadership',
            description:
                'Governance & Leadership is one of the main specific objectives of NAWOU. The umbrella organization aims to strengthen women’s engagement for government accountability, strengthen women participation and representation, and improve access to information and civic education.',
            icon: '/images/PoliticalPublicSpeaking.png',
            url: '/programs/advocacy-leadership',
        },
        {
            title: 'Gender, Social and Climate Justice',
            description:
                'NAWOU’s Gender, Social and Climate Justice Program tackles issues to do with gender-based violence including violence against women and girls, Female Genital Mutilation/ Cutting (FGM/C), Child Early and Forced Marriages (CEFM) and education.',
            icon: '/images/Hospital.png',
            url: '/programs/health-wellbeing',
        },
        {
            title: 'Institutional Strengthening and Partnership',
            description:
                'NAWOU, as an umbrella organization for women-led and women-focused organizations, strengthens civil society organizations, member institutions and district networks through mobilization, coordination and capacity building.',
            icon: '/images/Hospital.png',
            url: '/programs/health-wellbeing',
        },
        {
            title: 'HandMade Social Enterprise',
            description:
                'NAWOU, as an umbrella organization for women-led and women-focused organizations, strengthens civil society organizations, member institutions and district networks through mobilization, coordination and capacity building.',
            icon: '/images/EmployeeTraining.png',
            url: '/programs/education-skills',
            featured: true,
        },
    ];

    // Check if we have an odd number of items
    const isOddCount = programs.length % 2 !== 0;

    // If odd, separate the last item
    const gridItems = isOddCount ? programs.slice(0, -1) : programs;
    const lastItem = isOddCount ? programs[programs.length - 1] : null;

    return (
        <section className="bg-primary/5 mt-20 flex w-full px-5">
            <div className="items-center justify-center gap-10 py-15 lg:px-5 lg:px-20 lg:py-25">
                <div>
                    <span className="bg-secondary/5 text-md text-secondary rounded-2xl px-4 py-3 font-medium uppercase">What We Do</span>
                    <h2 className="text-secondary mt-4 text-4xl font-bold">Programs and Initiatives</h2>
                </div>

                <div className="mt-8 grid w-full gap-6 md:grid-cols-2">
                    {gridItems.map((program, index) => (
                        <Card key={index} className="w-full border-0 shadow-none">
                            <CardContent className="space-y-4 px-6 py-0">
                                <img src={program.icon} className="h-[64px] w-[64px]" />
                                <div className="flex items-center space-x-3">
                                    <h3 className="text-secondary text-2xl font-semibold">{program.title}</h3>
                                </div>
                                <p className="text-[16px] text-gray-600">{program.description}</p>
                                <Link href={program.url} preserveScroll preserveState prefetch="hover">
                                    <Button
                                        variant="link"
                                        className="text-primary flex cursor-pointer items-center space-x-1 p-0 hover:animate-pulse hover:no-underline"
                                    >
                                        <span>Learn more</span> <ArrowRight />
                                    </Button>
                                </Link>
                            </CardContent>
                        </Card>
                    ))}
                </div>
                {/* Last item centered if odd count */}
                {lastItem && (
                    <div className="mx-auto mt-8 max-w-xl">
                        <Card className="w-full border-0 shadow-none">
                            <CardContent className="space-y-4 px-6 py-0">
                                <img src={lastItem.icon} className="h-[64px] w-[64px]" />
                                <div className="flex items-center space-x-3">
                                    <h3 className="text-secondary text-2xl font-semibold">{lastItem.title}</h3>
                                </div>
                                <p className="text-[16px] text-gray-600">{lastItem.description}</p>
                                <Link href={lastItem.url} preserveScroll preserveState prefetch="hover">
                                    <Button
                                        variant="link"
                                        className="text-primary flex cursor-pointer items-center space-x-1 p-0 hover:animate-pulse hover:no-underline"
                                    >
                                        <span>Learn more</span> <ArrowRight />
                                    </Button>
                                </Link>
                            </CardContent>
                        </Card>
                    </div>
                )}
            </div>
        </section>
    );
}
