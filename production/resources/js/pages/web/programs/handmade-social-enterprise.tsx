import { Card, CardContent } from '@/components/ui/card';
import { ProductListItem } from '@/components/web/product-list-item';
import SectionCard from '@/components/web/section-card';
import { TitleBanner } from '@/components/web/title-banner';
import WebLayout from '@/layouts/web/web-layout';
import { Head } from '@inertiajs/react';

export default function ProgramPage() {
    const listItems = [
        {
            icon: '/images/Benefit.png',
            title: 'Training & Skill Development',
            description:
                'NAWOU provides hands-on training to women, equipping them with essential skills in craftsmanship, design, and production. Through workshops and mentorship, these women gain the knowledge and confidence to create high-quality, marketable products that reflect their cultural heritage.',
        },
        {
            icon: '/images/Benefit.png',
            title: 'Product Design Support',
            description:
                'NAWOU guides women in developing unique designs that resonate with Uganda’s rich cultural identity. By offering design consultation, NAWOU helps transform creative ideas into stunning handmade products that appeal to a wide range of markets, ensuring both beauty and functionality.',
        },
        {
            icon: '/images/Benefit.png',
            title: 'Quality Production Assistance',
            description:
                'NAWOU emphasizes the importance of quality in every product. Women are taught techniques that enhance durability and craftsmanship, ensuring that each item meets high standards. This focus on quality not only boosts their marketability but also instills pride in their work.',
        },
        {
            icon: '/images/Benefit.png',
            title: 'Marketing & Sales Support',
            description:
                'NAWOU helps women showcase and sell their products by connecting them to local and international markets. Through exhibitions, online platforms, and retail partnerships, these artisans gain the exposure needed to turn their talents into sustainable income, securing brighter futures for their families.',
        },
    ];

    const products = [
        {
            image: '/images/products/5 (7).png',
            title: 'Muffler',
        },
        {
            image: '/images/products/5 (8).png',
            title: 'Honey',
        },
        {
            image: '/images/products/5 (5).png',
            title: 'Briquettes',
        },
        {
            image: '/images/products/5 (1).png',
            title: 'Wine',
        },
        {
            image: '/images/products/5 (4).png',
            title: 'Liquid Soap',
        },
        {
            image: '/images/products/5 (3).png',
            title: 'Woven Baskets',
        },
        {
            image: '/images/products/5 (2).png',
            title: 'Honey',
        },
        {
            image: '/images/products/5 (6).png',
            title: 'Juice',
        },
    ];

    return (
        <WebLayout>
            <Head title={'Handmade Social Enterprise'} />

            <TitleBanner title={'Handmade Social Enterprise'} />

            <section className="px-[10px] pt-5 lg:px-[104px] lg:pt-5">
                <blockquote className="border-primary flex flex-col gap-[16px] border-l-[8px] py-5 pl-6">
                    <h2 className="text-secondary scroll-m-20 text-3xl font-semibold tracking-tight lg:text-4xl">HandMade Social Enterprise</h2>
                    <p className="text-[20px] font-medium text-[#585858]">
                        For over 30 years, NAWOU’s Handmade Social Enterprise has empowered over 5,000 women artisans in Uganda with skills in crafts
                        and design. This initiative promotes economic empowerment, entrepreneurial skills, environmental conservation and cultural
                        heritage preservation through handmade products like the handmade traditional baskets made of local materials. NAWOU provides
                        market links for women’s crafts locally, regionally and internationally; exporting to countries like the US, UK, Australia and
                        Canada. The organization participates in trade fairs, exhibitions and other initiatives showcasing Uganda’s culture and
                        supporting women’s economic development.
                    </p>
                </blockquote>
            </section>

            <div className="w-full overflow-hidden py-5 lg:py-10">
                <section className="flex flex-col items-center gap-10 px-[10px] py-5 lg:flex-row lg:px-[104px]">
                    {/* Left Side - Content */}
                    <div className="h-full w-full">
                        <h2 className="text-secondary mt-4 text-[30px] font-bold">About the program</h2>
                        <p className="mx-auto mt-5 text-[20px] font-medium text-[#585858] lg:text-justify">
                            NAWOU Handmade empowers vulnerable women by providing opportunities to create and sell handmade crafts. This initiative
                            helps women gain skills, financial independence, and improved livelihoods. With training and market access, they turn
                            creativity into sustainable businesses, supporting their families and preserving Uganda’s cultural heritage.
                        </p>

                        <p className="mx-auto mt-5 text-[20px] font-medium text-[#585858] lg:text-justify">
                            Transform lives through handmade creations. Each NAWOU Handmade product embodies resilience and empowerment. By supporting
                            women artisans, we contribute to a sustainable future for vulnerable women and their communities. Together, we can create
                            change, one handmade piece at a time.
                        </p>
                    </div>

                    {/* Right Side - Image */}
                    <div className="rounded-none bg-gray-100">
                        <img
                            src="/images/8.png"
                            alt="Women walking in the fields"
                            className="w-full rounded-none object-cover lg:h-[600px] lg:min-w-[570px]"
                        />
                    </div>
                </section>

                <div className="h-full w-full px-[10px] py-5 lg:px-[104px] lg:py-5">
                    <h2 className="text-secondary mt-4 text-[25px] font-bold lg:text-[30px]">
                        Our Approach - <span className="opacity-60">Supporting Women in Crafting Their Future</span>
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

                <SectionCard className="bg-secondary/5 mt-10 flex flex-col items-center" title="Impact Story">
                    <section className="flex flex-col items-center gap-10 lg:flex-row">
                        {/* Left Side - Content */}
                        <div className="h-full w-full">
                            <h2 className="mt-2 text-[24px] font-bold text-[#585858]">Story of Daisy Namayanja</h2>
                            <p className="mx-auto mt-5 text-[20px] font-medium text-[#585858] lg:text-justify">
                                I live in Kinawa zone, in Kampala. I started weaving baskets when I was a young girl. In my culture, this is a skill
                                almost every girl would learn by the age of 15 years. I have 5 children whom I have brought up by myself and educated
                                them to University level which paved way to their self-reliance. I wouldn’t have managed to see this happen if I was
                                not involved in the NAWOU handmade social enterprise. My association with NAWOU dates way back to 2007. I have been
                                making baskets of all types and designs. The baskets are taken and sold in foreign countries. I am happy that my
                                basket has gone where I have not gone or will never travel.
                            </p>

                            <p className="mx-auto mt-5 text-[20px] font-medium text-[#585858] lg:text-justify">
                                Every month I am able to make 20 baskets, depending on the size and design. Some designs can be a bit complex and need
                                more time to perfect the quality needed. From my crafts, I make 250,000 Uganda shillings per month. This money has
                                helped me to look after my family. I am very grateful to NAWOU for working with a woman like me. I have learnt team
                                work through my artisans’ group as we carry out production activities together. My social capital and networks have
                                widened as a result of interacting with fellow producers and craft buyers.
                            </p>
                        </div>

                        {/* Right Side - Image */}
                        <div className="rounded-none bg-gray-100">
                            <img
                                src="/images/9.png"
                                alt="Women walking in the fields"
                                className="w-full rounded-none object-cover lg:h-[600px] lg:min-w-[570px]"
                            />
                        </div>
                    </section>
                </SectionCard>

                <SectionCard className="bg-white" title="Products">
                    <div className="w-full">
                        <div className="mt-5 grid grid-cols-2 gap-5 md:grid-cols-3 lg:grid-cols-4">
                            {products.map((product, index) => (
                                <ProductListItem product={product} key={index} />
                            ))}
                        </div>
                    </div>
                </SectionCard>
            </div>
        </WebLayout>
    );
}
