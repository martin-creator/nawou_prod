import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { Card, CardContent } from '@/components/ui/card';
import GrowthSteps from '@/components/web/growth-steps';

export default function WomenAtWork() {
    const listItems = [
        {
            icon: '/images/Benefit.png',
            title: 'Financial Independence & Rights Awareness',
            description:
                'Training women in financial literacy, entrepreneurship, and legal rights to help them start businesses, access funding, and advocate for economic inclusion.',
        },
        {
            icon: '/images/Benefit.png',
            title: 'Advocacy for Policy Change',
            description:
                'Engaging policymakers and communities to promote women-friendly economic policies and ensure equal access to economic opportunities.',
        },
        {
            icon: '/images/Benefit.png',
            title: 'Sustainable Agriculture & Climate-Smart Initiatives',
            description:
                'Supporting women in climate-smart agriculture and eco-friendly businesses to improve livelihoods while protecting the environment.',
        },
        {
            icon: '/images/Benefit.png',
            title: 'Skills & Resources for Economic Participation',
            description:
                'Providing business training, mentorship, and market access to help women scale their enterprises and build sustainable incomes.',
        },
    ];

    const phases = [
        {
            year: '2015 - 2018',
            title: 'Phase I : Building',
            description:
                'Established the foundation, targeting economic participation and capacity building in initial communities, with a focus on education and networking for women in business.',
            icon: '/images/icons/wrench.png',
        },
        {
            year: '2019 - 2022',
            title: 'Phase II : Expanding',
            description:
                'Expanded support, advocacy, and training opportunities for women to access resources and build local networks, reinforcing skills in agri-business, entrepreneurship, and collective action.',
            icon: '/images/icons/graph.png',
        },
        {
            year: '2023 - 2027',
            title: 'Phase III : Scaling',
            description:
                "Focuses on scaling women's enterprises, climate-resilient business practices, and creating stronger policy advocacy networks, ensuring women's economic rights are protected and amplified.",
            icon: '/images/icons/leaf.png',
        },
    ];

    const globalGoals = [
        {
            goal: 1,
            title: 'No Poverty',
            description: "Increasing women's financial independence through skills and entrepreneurship.",
        },
        {
            goal: 2,
            title: 'Zero Hunger',
            description: 'Supporting women in sustainable agriculture and food security.',
        },
        {
            goal: 5,
            title: 'Gender Equality',
            description: 'Advocating for equal rights and economic opportunities for women.',
        },
        {
            goal: 6,
            title: 'Clean Water & Sanitation',
            description: 'Supporting communities with better water access through economic initiatives.',
        },
        {
            goal: 7,
            title: 'Affordable & Clean Energy',
            description: 'Promoting eco-friendly business models and energy-efficient solutions.',
        },
        {
            goal: 8,
            title: 'Decent Work & Economic Growth',
            description: 'Training women in financial literacy, entrepreneurship, and job creation.',
        },
        {
            goal: 13,
            title: 'Climate Action',
            description: 'Encouraging climate-smart farming and sustainability in business.',
        },
        {
            goal: 17,
            title: 'Partnerships for the Goals',
            description: 'Strengthening collaborations to drive impactful change.',
        },
    ];

    return (
        <div>
            <section className="flex flex-col items-center gap-10 px-[10px] py-5 lg:flex-row lg:px-[104px]">
                {/* Left Side - Content */}
                <div className="h-full w-full">
                    <h2 className="text-secondary mt-4 text-[30px] font-bold">About the project</h2>
                    <p className="mx-auto mt-5 text-[20px] font-medium text-[#585858] lg:text-justify">
                        The Women at Work Project, a collaboration between NAWOU, FIDA-Uganda, and FOKUS, is dedicated to closing economic gaps and
                        creating a sustainable future for women in Uganda. This initiative strengthens women’s financial independence by advocating
                        for fair access to resources, markets, and training—empowering them to build secure livelihoods and contribute meaningfully to
                        their families and communities.
                    </p>

                    <p className="mx-auto mt-5 text-[20px] font-medium text-[#585858] lg:text-justify">
                        By tackling longstanding economic injustices, the project supports women in becoming community leaders, entrepreneurs, and
                        change-makers. Through education, advocacy networks, and financial tools, it fosters resilience and enables women to take
                        collective action, shaping a more equitable and inclusive society for generations to come.
                    </p>
                </div>

                {/* Right Side - Image */}
                <div className="rounded-none bg-gray-100">
                    <img
                        src="/images/6.png"
                        alt="Women walking in the fields"
                        className="w-full rounded-none object-cover lg:h-[600px] lg:min-w-[570px]"
                    />
                </div>
            </section>

            <div className="h-full w-full px-[10px] pt-5 lg:px-[104px] lg:pt-5">
                <h2 className="text-secondary mt-4 text-[25px] font-bold lg:text-[30px]">
                    Our Approach - <span className="opacity-60">Empowering Women Through Economic Justice</span>
                </h2>
                <div className="mt-[20px] grid w-full gap-6 md:grid-cols-2">
                    {listItems.map((item, index) => (
                        <Card key={index} className="border-secondary/5 w-full border border-0 bg-white shadow-lg">
                            <CardContent className="space-y-4 px-6 py-0">
                                <img src={item.icon} className="h-[60px] w-[60px]" />
                                <div className="flex items-center space-x-3">
                                    <h3 className="text-secondary text-[24px] font-semibold">{item.title}</h3>
                                </div>
                                <p className="text-[20px] text-gray-600">{item.description}</p>
                            </CardContent>
                        </Card>
                    ))}
                </div>
            </div>

            <div className="bg-secondary/5 mt-15 w-full px-[10px] py-5 lg:px-[104px] lg:py-5">
                <h2 className="text-secondary mt-4 text-[25px] font-bold lg:text-[30px]">Project Phases - <span className="opacity-60">A Journey to Economic Justice</span></h2>

                <div className="mx-5 my-10 grid gap-10 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
                    {phases.map((phase, index) => (
                        <div key={index} className="bg-secondary/5 flex w-full flex-col items-center rounded-xl p-5 text-center">
                            <div className="relative flex w-full items-center">
                                <div className="z-n1 flex w-full flex-col items-center gap-5">
                                    <div className="mx-auto flex h-[64px] w-[64px] items-center justify-center rounded-full bg-white shadow">
                                        <img src={phase.icon} alt="icon" className="w-32px h-[32px]" />
                                    </div>
                                    <p className="text-xl font-bold">{phase.title}</p>
                                </div>
                                {index + 1 != phases.length && (
                                    <div className="absolute top-5 right-[-60px] flex hidden gap-1 md:block">
                                        <span className="border-b-secondary/5 flex w-full border-b-10 border-dashed px-10 pb-1 font-bold"> </span>
                                    </div>
                                )}
                            </div>
                            <p className="text-primary text-lg font-bold">{phase.year}</p>
                            <p className="mt-5 text-[17px] text-[#585858]">{phase.description}</p>
                        </div>
                    ))}
                </div>
            </div>

            <section className="flex flex-col items-center gap-10 px-[10px] py-15 lg:flex-row lg:px-[104px]">
                {/* Left Side - Content */}
                <div className="h-full w-full">
                    <h2 className="text-secondary mt-4 text-[30px] font-bold">Impact Story</h2>
                    <h2 className="text-secondary mt-4 text-[20px] font-bold">Kikyusa Development Association of the Blind</h2>
                    <p className="mx-auto mt-5 text-[20px] font-medium text-[#585858] lg:text-justify">
                        The Women at Work Project has made a significant impact on the Kikyusa Development Association of the Blind, a group of 30
                        women with visual impairments located in Kikyusa Sub County, Luweero District. Prior to the project's intervention, these
                        women faced numerous challenges, including low production capacity and limited business knowledge, which hindered their
                        ability to compete effectively in the market. Recognizing their potential, the project provided essential support that
                        empowered the group to transform their knitting enterprise.
                    </p>

                    <p className="mx-auto mt-5 text-[20px] font-medium text-[#585858] lg:text-justify">
                        With the addition of more knitting machines and tailored business coaching, the women significantly improved their production
                        capabilities. Through hands-on training in business operations, marketing strategies, and quality control, they went from
                        producing just 2 sweaters per day to an impressive 12. This increase not only enhanced their output but also boosted their
                        confidence and skills in running a successful business.
                    </p>
                </div>

                {/* Right Side - Image */}
                <div className="rounded-none bg-gray-100">
                    <img
                        src="/images/7.png"
                        alt="Women walking in the fields"
                        className="w-full rounded-none object-cover lg:h-[600px] lg:min-w-[570px]"
                    />
                </div>
            </section>
            <section className="px-[10px] lg:flex-row lg:px-[104px]">
                <GrowthSteps />
            </section>

            <div className="bg-secondary/5 mt-15 w-full px-[10px] py-5 lg:px-[104px] lg:py-5">
                <h2 className="text-secondary mt-4 text-[25px] font-bold lg:text-[30px]">Achieving Global Goals Through Local Impact</h2>
                <p className="mx-auto mt-0 text-[18px] font-medium text-[#585858] lg:text-justify">
                    The Women at Work Project aligns with key Sustainable Development Goals (SDGs), empowering women and fostering sustainable
                    development across Uganda.
                </p>

                <div className="flex flex-col py-10 lg:px-[50px]">
                    <Accordion type="single" collapsible className="w-full" defaultValue={'item-0'}>
                        {globalGoals.map((item, index) => (
                            <AccordionItem value={`item-${index}`} key={index}>
                                <AccordionTrigger className="mt-0 flex cursor-pointer items-center gap-1 text-[20px] font-semibold text-[#191919]">
                                    Goal {index+1}: {item.title}
                                </AccordionTrigger>
                                <AccordionContent className="mt-0 flex items-center gap-1 text-[18px] text-[#575757]">
                                    {item.description}
                                </AccordionContent>
                            </AccordionItem>
                        ))}
                    </Accordion>
                </div>
            </div>
        </div>
    );
}
