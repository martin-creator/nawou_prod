import { Card, CardContent } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import Testimonies from '@/components/web/home/testimonies';
import { TitleBanner } from '@/components/web/title-banner';
import WebLayout from '@/layouts/web/web-layout';
import { Head } from '@inertiajs/react';

export default function ProgramPage() {
    const initiatives = [
        {
            title: 'Create Inclusive, Feminist Spaces',
            description:
                'Establish platforms where more women, including those from diverse backgrounds, can meaningfully and consistently participate, leading to the development of transformational and inclusive feminist leaders.',
        },
        {
            title: 'Feminist Knowledge Base',
            description:
                'Strengthening of a wellbeing-centered inclusive feminist approach and knowledge base that is in support of the pursuit of women’s rights and gender equality.',
        },
        {
            title: 'Collaborative Advocacy',
            description:
                'Advocacy efforts for policy change and legal reform at local, national and regional level, driven by women’s movement actors working in collaboration.',
        },
    ];

    return (
        <WebLayout>
            <Head title={'Governance and Leadership'} />

            <TitleBanner title={'Governance and Leadership'} />

            <section className="px-[10px] pt-5 lg:px-[104px] lg:pt-5">
                <blockquote className="border-primary flex flex-col gap-[16px] border-l-[8px] py-5 pl-6">
                    <h2 className="text-secondary scroll-m-20 text-3xl font-semibold tracking-tight lg:text-4xl">Governance and Leadership</h2>
                    <p className="text-[16px] font-medium text-[#585858]">
                        Although the Uganda Constitution of 1995 provides for the right to participation with affirmative provision for women and
                        other disadvantaged marginalized groups, women and youth do not equally participate in decision making as they are excluded
                        from decision making process and opportunities. Women in Uganda also significantly lack information on their civic rights and
                        lack in access to civic education. This prevents women’s ability to not only participate in decision making and thus influence
                        national laws and policies, but also in understanding their rights and their ability to hold duty bearers accountable. The
                        patriarchal society of Uganda has marginalized women and led women themselves to believe they are second class citizens in
                        comparison to men and do not recognize their right to political participation and representation. The low participation of
                        women in positions of leadership and decision making in the public sphere further perpetuates the gender discrimination
                        experienced in Uganda as well as further prevents women and girls’ ability to live dignified lives free from injustice and
                        violence.
                        <br />
                        <br />
                        Governance & Leadership is one of the main specific objectives of NAWOU. The umbrella organization aims to strengthen women’s
                        engagement for government accountability, strengthen women participation and representation, and improve access to information
                        and civic education. NAWOU seeks to empower and encourage women to participate in public gatherings, to vote, to run for
                        positions of leadership, to demand accountability from duty-bearers by informing them of the mechanisms that exist to hold
                        these accountable, to run for political office, and to recognize other women as leaders. NAWOU understands that strengthening
                        citizen engagement for government accountability is facilitated by strengthening youth and women participation and
                        representation and improved access to information and civic (voter) education for women, youth, other vulnerable groups and
                        entire communities.
                    </p>
                </blockquote>

                <h2 className="text-secondary mt-10 text-[32px] font-bold">Projects</h2>
            </section>
            <Tabs defaultValue={'1'} className="w-full overflow-hidden py-15 lg:py-10">
                <div className="hide-scrollbar px-3 lg:mb-0  lg:px-[10px]  lg:px-[104px] lg:pt-5">
                    <TabsList className="flex w-full gap-2 bg-white flex-col  lg:flex-row h-auto p-2">
                        <TabsTrigger value="1" className={`lg:min-h-[42px] w-full cursor-pointer text-xl`}>
                            WAVE Project
                        </TabsTrigger>
                        <TabsTrigger value="2" className={`lg:min-h-[42px] w-full cursor-pointer text-xl`}>
                            Movement Strengthening Project
                        </TabsTrigger>
                        <TabsTrigger value="3" className={`lg:min-h-[42px] w-full cursor-pointer text-xl`}>
                            Democratic Accountability Project
                        </TabsTrigger>
                        <TabsTrigger value="4" className={`lg:min-h-[42px] w-full cursor-pointer text-xl`}>
                            HWYP
                        </TabsTrigger>
                        {/* <TabsTrigger value="5" className={`min-h-[42px] w-full cursor-pointer text-xl`}>
                            RISE-K Project
                        </TabsTrigger> */}
                    </TabsList>
                </div>
                <TabsContent value="1" className="px-[10px] pt-5 lg:px-[104px]">
                    <section className="flex flex-col items-center gap-10 lg:flex-row">
                        {/* Left Side - Content */}
                        <div className="h-full w-full">
                            <h2 className="mt-2 text-[24px] font-bold text-[#585858]">About the project</h2>
                            <p className="mx-auto mt-5 text-[16px] font-medium text-[#585858] lg:text-justify">
                                The Women's Advocacy for Voice and Empowerment (WAVE) through inclusive platforms in Uganda Phase 2 project is
                                implemented by NAWOU in partnership with 5 partner organizations with funding from Womankind Worldwide. The project
                                seeks to hold inclusive, collective and participatory feminist spaces among the diverse backgrounds of the{' '}
                                <b>50 women network groups and 30 feminist leaders</b> (local and national) spread across the different regions of the
                                country.  
                            </p>

                            <p className="mx-auto mt-5 text-[16px] font-medium text-[#585858] lg:text-justify">
                                These spaces enlighten and highlight the different aspects of power relations within their communities and empower
                                them to collectively organize strong women’s movements to challenge gender inequality, build solidarity, create
                                oneness and protect one another. They will have the opportunity to recognize the leadership potential in themselves
                                and also be liaised with influential women’s movement actors to inspire them to make change in their communities.
                                Documentation and sharing of the women’s experiences and stories of overcoming adversaries in relation to achieving
                                gender equality will be crucial.
                            </p>
                            <p className="mx-auto mt-5 text-[16px] font-medium text-[#585858] lg:text-justify">
                                The project seeks to promote a vibrant women’s movement platform giving diverse women the ability to participate
                                equally in decision making processes to widen their access to and control over productive resources, access to decent
                                work, control over their own time, lives and bodies; and increased voice, agency and meaningful participation in
                                economic decision-making at all levels from the household through to national government. To ensure that the Ugandan
                                Women’s Movement (WM) is more resilient, inclusive, effective and provides a diverse group of women including the most
                                marginalized with more opportunities and spaces for meaningful and equitable participation, leadership and influence
                                in local to global advocacy mechanisms.
                            </p>
                        </div>

                        {/* Right Side - Image */}
                        <div className="rounded-none bg-gray-100">
                            <img
                                src="/images/18.png"
                                alt="Women walking in the fields"
                                className="w-full rounded-none object-cover lg:h-[600px] lg:min-w-[570px]"
                            />
                        </div>
                    </section>

                    <div className="mt-10">
                        <h2 className="mt-2 text-[24px] font-bold text-[#585858]">Our Pillars</h2>
                        <div className="grid w-full gap-6 md:grid-cols-3">
                            {initiatives.map((item, index) => (
                                <Card key={index} className="w-full border-0">
                                    <CardContent className="space-y-4 px-6 py-0">
                                        <img src={'/images/icons/benefit.png'} className="h-[64px] w-[64px]" />
                                        <div className="gap- flex flex-col space-x-3">
                                            <h3 className="text-secondary text-[20px] font-semibold">{item.title}</h3>
                                            <p className="text-[16px] font-medium text-[#585858]">{item.description}</p>
                                        </div>
                                    </CardContent>
                                </Card>
                            ))}
                        </div>
                    </div>
                </TabsContent>
                <TabsContent value="2" className="px-[10px] pt-5 lg:px-[104px]">
                    <section className="flex flex-col items-center gap-10 lg:flex-row">
                        {/* Left Side - Content */}
                        <div className="h-full w-full">
                            <h2 className="mt-2 text-[24px] font-bold text-[#585858]">About the project</h2>
                            <p className="mx-auto mt-5 text-[16px] font-medium text-[#585858] lg:text-justify">
                                NAWOU with support from Womankind Worldwide implemented a project titled “Strengthening Capacities of Women Networks
                                for Enhanced Movement Building”. The project targeted NAWOU members including local & National NGOs; grassroots
                                district networks some of which are informal groups of women.  The hierarchical relationship between the district
                                networks and self-help women’s groups at grassroots presents an opportunity for inclusivity i.e. ease in mobilising
                                the women at the base of the pyramid. The project directly reached out to 250 network leaders countrywide who then
                                disseminated the information to other members in their regions.
                            </p>

                            <p className="mx-auto mt-5 text-[16px] font-medium text-[#585858] lg:text-justify">
                                The project involved conducting regional member engagements on mobilisation, organisation, power analysis,
                                transformational feminism leadership and movement building to foster an environment where all voices are heard and
                                valued. Through these fora, the atmosphere of mutual respect and understanding while acknowledging each other’s unique
                                contribution and experience was cultivated. The trainings enabled continuous learning about gender equity and
                                inclusion to foster understanding for generating issues affecting all genders for advocacy and effective collective
                                action.
                            </p>
                        </div>

                        {/* Right Side - Image */}
                        <div className="rounded-none bg-gray-100">
                            <img
                                src="/images/17.png"
                                alt="Women walking in the fields"
                                className="w-full rounded-none object-cover lg:h-[600px] lg:min-w-[570px]"
                            />
                        </div>
                    </section>
                    <p className="mx-auto mt-10 text-[16px] font-medium text-[#585858] lg:text-justify">
                        The project brought on board NAWOU members from the District Networks which are diverse, informal and inclusive some of whom
                        include; grassroots minority tribes like Nubian women, Community Based Organizations, Faith Based Women’s Organizations,
                        groups of women living with disabilities, women living with HIV/AIDs, the elderly, Adolescent girls and other persons of
                        concern.  These interactions presented an opportunity to strengthen and grow the women’s movement by carrying out joint
                        activities, including advocacy and communications work, women’s rights programming, awareness raising, knowledge sharing,
                        opportunities for research initiatives, capacity development and fundraising. There was also cross learning between regional
                        networks because of the unique issues faced in different regions.  NAWOU adopted multi-faceted approaches like education and
                        skills building around diversity, equity and inclusion. Emphasis was made on leadership development for marginalized groups
                        such as women living with disability and HIV/AIDS, creating safe spaces for dialogue and promoting inclusive decision-making
                        processes to foster a more equitable movement. 
                        <br />
                        The project contributed to revitalization of 25 networks to actively coordinate, network and contribute within their regional
                        spaces to strengthen women’s movement from grassroots to national level.  The project ignited the spirit of transformational
                        feminist leadership in the movement which improved mobilisation, organising and power relations among actors.
                    </p>
                </TabsContent>
                <TabsContent value="3" className="px-[10px] pt-5 lg:px-[104px]">
                    <section className="flex flex-col items-center gap-10 lg:flex-row">
                        {/* Left Side - Content */}
                        <div className="h-full w-full">
                            <h2 className="mt-2 text-[24px] font-bold text-[#585858]">About the project</h2>
                            <p className="mx-auto mt-5 text-[16px] font-medium text-[#585858] lg:text-justify">
                                The implementation of the Democratic Accountability Project in Kamuli District was implemented by NAWOU in partnership
                                with local district women’s associations such as Kamuli District Women's Development Association (KADIWODA) and the
                                Kaberamaido Women’s Forum.  The intervention was delivered through the provision of civic education, training in
                                community mobilization, participatory methodologies, advocacy skills, the use of media, and IEC materials, amongst
                                other inputs.  This approach has created lasting knowledge and skills development for women who have in turn
                                influenced the human rights conditions and development in their districts.
                            </p>

                            <p className="mx-auto mt-5 text-[16px] font-medium text-[#585858] lg:text-justify">
                                The women’s associations were empowered to apply various methodologies to demand services and accountability.
                                Furthermore, they were able to influence planning and budgeting to influence gender priorities at sub-county and
                                district level. Moreover, the district women’s associations continue to work independently of the Secretariat to
                                execute other interventions. 
                            </p>
                            <p className="mx-auto mt-5 text-[16px] font-medium text-[#585858] lg:text-justify">
                                While strengthening government accountability, this project strengthened civic awareness amongst the associations and
                                their communities and also influenced the participation of women and youth in decision making.  The project
                                beneficiaries, largely women, influenced the inclusion and execution of projects that targeted vulnerability as well
                                as the rights of women and entire communities.  NAWOU partnered with Uganda NGO Forum to train and mentor younger
                                women in leadership across the country, in regional clusters.
                            </p>
                        </div>

                        {/* Right Side - Image */}
                        <div className="rounded-none bg-gray-100">
                            <img
                                src="/images/16.png"
                                alt="Women walking in the fields"
                                className="w-full rounded-none object-cover lg:h-[600px] lg:min-w-[570px]"
                            />
                        </div>
                    </section>
                </TabsContent>
                <TabsContent value="4" className="px-[10px] pt-5 lg:px-[104px]">
                    <section className="flex flex-col items-center gap-10 lg:flex-row">
                        {/* Left Side - Content */}
                        <div className="h-full w-full">
                            <h2 className="mt-2 text-[24px] font-bold text-[#585858]">About the project</h2>
                            <p className="mx-auto mt-5 text-[16px] font-medium text-[#585858] lg:text-justify">
                                In partnership with We Effect, a Swedish NGO that works with cooperative development and gender equality, NAWOU
                                implemented a five-year project called Harnessing Women and Youth Potential (HWYP). This project was aimed at
                                empowering Ugandan women and youth through the practice of gender mainstreaming. Its objective is to build gender
                                responsiveness within NAWOU and We Effect partner organizations. The goal was to increase the active participation of
                                women and young people in decision-making processes within the organizations and communities involved, but also to
                                empower partner organizations to claim their rights from duty bearers on issues that concern gender sensitization.
                            </p>

                            <p className="mx-auto mt-5 text-[16px] font-medium text-[#585858] lg:text-justify">
                                HWYP’s focus was largely on capacity building within the sphere of gender equality. The initial phase of the project,
                                focused on ‘the basics. This means, introducing newly recruited Community Based Action Teams (COMBATs) to key gender
                                concepts and tools in order to raise awareness on and analyze the gender inequalities taking place within society and
                                their communities at large.  The second phase of the project comprised of Training of Trainers (TOTs).
                            </p>
                            <p className="mx-auto mt-5 text-[16px] font-medium text-[#585858] lg:text-justify">
                                In this phase, NAWOU held participatory gender trainings with members of farming and housing cooperatives as well as
                                district networks under NAWOU. The women and men who were trained received further support to pass on their knowledge
                                about gender and gender equality to their families, communities and organizations.
                            </p>
                        </div>

                        {/* Right Side - Image */}
                        <div className="rounded-none bg-gray-100">
                            <img
                                src="/images/15.png"
                                alt="Women walking in the fields"
                                className="w-full rounded-none object-cover lg:h-[600px] lg:min-w-[570px]"
                            />
                        </div>
                    </section>
                    <p className="mx-auto mt-10 text-[16px] font-medium text-[#585858] lg:text-justify">
                        Through this approach, communities are strengthened from the grassroots level and get tools as well as their capacities built
                        to discuss, analyze and overcome challenges or barriers to gender equality according to their local setting and conditions.{' '}
                        <br />
                        One of the most important aspects of the project is that it was built upon participatory approaches. This means that NAWOU
                        works together with the training participants in the training to generate knowledge that is already existing within the
                        communities. This generated knowledge is then used to formulate the strategies needed for the participants and their
                        respective communities to overcome the barriers to gender equality identified. NAWOU strongly believes empowerment from the
                        bottom to the top is the most sustainable approach to achieving gender equality as they help communities help themselves. 
                        <br />
                        HWYP falls under NAWOU’s mission of strengthening and promoting women’s participation and representation within democratic
                        governance in Uganda.
                    </p>
                </TabsContent>
                {/* <TabsContent value="5" className="px-[10px] pt-5 lg:px-[104px]">
                    5
                </TabsContent> */}
            </Tabs>
            <Testimonies title='Impact Stories' simple subtitle='' />
        </WebLayout>
    );
}
