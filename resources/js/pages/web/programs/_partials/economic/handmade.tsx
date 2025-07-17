import PhotoGallery from '@/components/photo-gallery';
import { Card, CardContent } from '@/components/ui/card';
import GrowthSteps from '@/components/web/growth-steps';
import Testimonies from '@/components/web/home/testimonies';

export default function HandMade() {
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

    return (
        <div>
            <section className="flex flex-col items-center gap-10 px-[10px] py-5 lg:flex-row lg:px-[104px]">
                {/* Left Side - Content */}
                <div className="h-full w-full">
                    <h2 className="text-secondary mt-4 text-[30px] font-bold">About the project</h2>
                    <p className="mx-auto mt-5 text-[20px] font-medium text-[#585858] lg:text-justify">
                        NAWOU Handmade empowers vulnerable women by providing opportunities to create and sell handmade crafts. This initiative helps
                        women gain skills, financial independence, and improved livelihoods. With training and market access, they turn creativity
                        into sustainable businesses, supporting their families and preserving Uganda’s cultural heritage.
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
                        src="/images/women.jpg"
                        alt="Women walking in the fields"
                        className="w-full rounded-none object-cover lg:h-[600px] lg:min-w-[570px]"
                    />
                </div>
            </section>

            <div className="mb-10 h-full w-full px-[10px] py-5 lg:px-[104px] lg:py-5">
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

            <Testimonies simple title="Impact Story" subtitle="" />
            <section className="bg-secondary/5 px-[10px] pb-10 lg:flex-row lg:px-[104px]">
                <GrowthSteps />
            </section>
            <section className="px-[10px] py-10 lg:flex-row lg:px-[104px]">
                <PhotoGallery />
            </section>
        </div>
    );
}
