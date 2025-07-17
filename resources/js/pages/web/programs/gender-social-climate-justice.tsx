import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import Testimonies from '@/components/web/home/testimonies';
import { TitleBanner } from '@/components/web/title-banner';
import WebLayout from '@/layouts/web/web-layout';
import { Head } from '@inertiajs/react';

export default function ProgramPage() {
    return (
        <WebLayout>
            <Head title={'Gender, Social and Climate Justice'} />

            <TitleBanner title={'Gender, Social and Climate Justice'} />

            <section className="px-[10px] pt-5 lg:px-[104px] lg:pt-5">
                <blockquote className="border-primary flex flex-col gap-[16px] border-l-[8px] py-5 pl-6">
                    <h2 className="text-secondary scroll-m-20 text-3xl font-semibold tracking-tight lg:text-4xl">Economic Empowerment</h2>
                    <p className="text-[16px] font-medium text-[#585858]">
                        NAWOU’s Gender, Social and Climate Justice Program tackles issues to do with gender-based violence including violence against
                        women and girls, Female Genital Mutilation/ Cutting (FGM/C), Child Early and Forced Marriages (CEFM) and education. The
                        projects implemented by NAWOU and partners presented below highlight some of NAWOU’s core competencies and experiences. One of
                        NAWOU’s main specific objectives is Peace and Security. This objective aims to equip women and girls in Uganda to freely
                        defend their rights, which means that their rights are promoted and upheld, that they live a life free from violence and
                        discrimination, that they are treated equally, and have access to appropriate justice, education, healthcare and social
                        services. Peace and security is defined in terms of both person and property, and includes protection of women’s and girl’s
                        human rights and their property; realisation of gender equality in their households, communities, places of work and
                        education; and that they can equally access services, offices and officials that are responsible for maintaining and upholding
                        their rights and protection. The expected outcomes of the programme are that women and girls will realize better security and
                        safety in their daily lives and within their households and communities, they are treated more fairly, and as a result
                        register improvement in their overall human rights.
                        <br />
                        <br />
                        The Peace and Security programme addresses the underlying gender hierarchies and their relevance for shaping societal
                        practices that propagate discrimination against women and girls. The effects of these gender hierarchies present as
                        inequalities between women and men resulting in women and girls experiencing human insecurity differently from men and boys.
                        The key core competencies in Peace & Security include; <br />
                        1) Strategic design of training materials/manuals on gender equality, SGBV, FGM, CEFM, sexual and reproductive health; gender
                        law, amongst other thematic areas, based on situation analysis results
                        <br />
                        2) Developing of gender strategies and plans for NAWOU members
                        <br />
                        3) Interactive trainings including training of trainers
                        <br />
                        4) Establishment of community led mechanisms (COMBATs) for awareness raising and community action dialogues
                        <br />
                        5) Support monitoring and evaluation efforts of NAWOU members
                        <br />
                        6) Coordination and continuous dialogues with government entities as well as public and private sector stakeholders
                        <br />
                        7) Formation of human rights clubs in schools providing mentorship for girls
                        <br />
                        8) Community mobilization and outreach initiatives
                        <br />
                        9) referrals for legal aid services provision.
                        <br />
                    </p>
                </blockquote>

                <h2 className="text-secondary mt-10 text-[32px] font-bold">Projects</h2>
            </section>
            <Tabs defaultValue={'1'} className="w-full overflow-hidden py-15 lg:py-10">
                <div className="hide-scrollbar  px-3 lg:mb-0 lg:px-[10px] lg:px-[104px] lg:pt-5">
                    <TabsList className="flex w-full h-auto flex-col gap-2 bg-white p-2 lg:flex-row">
                        <TabsTrigger value="1" className={`min-h-[42px] w-full cursor-pointer text-xl`}>
                            Tipin and Kor’s Rights
                        </TabsTrigger>
                        <TabsTrigger value="2" className={`min-h-[42px] w-full cursor-pointer text-xl`}>
                            VAWG
                        </TabsTrigger>
                        <TabsTrigger value="3" className={`min-h-[42px] w-full cursor-pointer text-xl`}>
                            FGM & CEFM
                        </TabsTrigger>
                        <TabsTrigger value="4" className={`min-h-[42px] w-full cursor-pointer text-xl`}>
                            LEAP
                        </TabsTrigger>
                        <TabsTrigger value="5" className={`min-h-[42px] w-full cursor-pointer text-xl`}>
                            GEWE
                        </TabsTrigger>
                    </TabsList>
                </div>
                <TabsContent value="1" className="px-[10px] pt-5 lg:px-[104px]">
                    <section className="flex flex-col items-center gap-10 lg:flex-row">
                        {/* Left Side - Content */}
                        <div className="h-full w-full">
                            <h2 className="mt-2 text-[24px] font-bold text-[#585858]">About the project</h2>
                            <p className="mx-auto mt-5 text-[16px] font-medium text-[#585858] lg:text-justify">
                                Rising to Protect Tipin and Kor’s Rights 2017/2027 - Many communities in Uganda continue to practice FGM/C secretly
                                despite it being outlawed in 2010. FGM/C is a clear violation of the rights of women (Kor) and girls (Tippin)
                                preventing them from living independent and dignified lives free from injustice as well as substantially impacting the
                                achievement of their Sexual and Reproductive Health and Rights (SRHR).
                            </p>

                            <p className="mx-auto mt-5 text-[16px] font-medium text-[#585858] lg:text-justify">
                                The harmful practice is rooted in local and cultural perceptions and understandings of gender, women’s sexuality,
                                marriage and family, and prevents women from enjoying the peace and security that is key to realizing their rights and
                                the development of their households and communities. NAWOU’s Rising to Protect Tippin and Kor’s Rights in Amudat and
                                Moroto is project implemented in partnership with the two locally grown organizations Karamoja Women Umbrella
                                Organization (KAWUO) and Amudat Inter-religious Development Initiative (AIDI) and funded by Embassy of Ireland. The
                                project seeks to unpack, profile and leverage the contextual and social dynamics that would accelerate the abandonment
                                of female genital mutilation/cutting (FGM/C).
                            </p>
                            <p className="mx-auto mt-5 text-[16px] font-medium text-[#585858] lg:text-justify">
                                It challenges established gender stereotypes and uses established advocacy and lobbying institutions, community
                                engagement mechanisms, education and information initiatives, as well as training and capacity building platforms,
                                that all address the complex dynamics associated with the practice, in order to advance the abandonment of FGM/C. 
                            </p>
                        </div>

                        {/* Right Side - Image */}
                        <div className="rounded-none bg-gray-100">
                            <img
                                src="/images/10.png"
                                alt="Women walking in the fields"
                                className="w-full rounded-none object-cover lg:h-[600px] lg:min-w-[570px]"
                            />
                        </div>
                    </section>
                    <p className="mx-auto mt-10 text-[16px] font-medium text-[#585858] lg:text-justify">
                        This project has considered the assumption that when interventions are holistic, community-driven and incorporate women rights
                        deliberation, they create an environment that enables and supports positive and sustainable change in which transformation of
                        social norms and gender stereotypes can thrive. Due to the importance of ensuring projects are contextually grounded, all
                        interventions are informed by an extensively developed understanding and appreciation of the existing cultural, socio-economic
                        and political dynamics in Amudat, Moroto and Nakapiripirit district. 
                    </p>
                </TabsContent>
                <TabsContent value="2" className="px-[10px] pt-5 lg:px-[104px]">
                    <section className="flex flex-col items-center gap-10 lg:flex-row">
                        {/* Left Side - Content */}
                        <div className="h-full w-full">
                            <h2 className="mt-2 text-[24px] font-bold text-[#585858]">About the project</h2>
                            <p className="mx-auto mt-5 text-[16px] font-medium text-[#585858] lg:text-justify">
                                Combating Violence Against Women & Girls (VAWG) 2013/2016 - Gender Based Violence (GBV) constituted by domestic
                                violence, rape, defilement, economic exploitation and sexual harassment is a prevailing issue within Uganda.
                            </p>

                            <p className="mx-auto mt-5 text-[16px] font-medium text-[#585858] lg:text-justify">
                                In 2017, 15 325 cases of domestic violence were reported across Uganda (Uganda Police Annual Crime Report, 2017). This
                                number hides uncountable cases that are not reported as many women are unaware of their rights in relation to these
                                violations and have limited knowledge about and access to GBV referral pathways. GBV also prevents women from enjoying
                                the peace and security that is essential to upholding their rights and the development of their households and
                                communities.
                            </p>
                            <p className="mx-auto mt-5 text-[16px] font-medium text-[#585858] lg:text-justify">
                                The Combating Gender Based Violence Against Women & Girls project aimed to reduce violence against women and girls in
                                Apac and Mubende districts through sustainable community-based response systems. Its main specific objectives are the
                                formation and strengthening of community-based action teams to prevent and eliminate violence against women and girls
                                (VAWG); the increased access to appropriate legal, medical and counselling services and strengthened economic
                                independence for women and girls; and a strengthened community to better be able to participate in actions to prevent
                                and eliminate violence against women and girls. 
                            </p>
                        </div>

                        {/* Right Side - Image */}
                        <div className="rounded-none bg-gray-100">
                            <img
                                src="/images/11.png"
                                alt="Women walking in the fields"
                                className="w-full rounded-none object-cover lg:h-[600px] lg:min-w-[570px]"
                            />
                        </div>
                    </section>
                    <p className="mx-auto mt-10 text-[16px] font-medium text-[#585858] lg:text-justify">
                        To ensure ownership and community rooted and led project implementation the project adopted the Community Based Action Teams
                        (COMBAT)-model to raise awareness about women’s and girl’s rights at community level and hold duty-bearers accountable at
                        sub-county and district level. COMBATs are educated to do community outreach and advocacy using context relevant approaches
                        based on culture, tribe, religion, geography and traditional practices. The CBOs and COMBATs work in collaboration with the
                        justice law and other sector institutions, health centres and community development offices to ensure access to justice and
                        health services for survivors of GBV. Through the COMBAT-approach, community resource persons are used as linkages and
                        reference points to support women, girls, men and boys with the skills they need to address gender-based violence within their
                        communities. The project targets women and girls as direct beneficiaries, and local leaders (religious and cultural), men and
                        boys, and service providers such as community service officers, medical personnel and police as indirect beneficiaries.
                    </p>
                </TabsContent>
                <TabsContent value="3" className="px-[10px] pt-5 lg:px-[104px]">
                    <section className="flex flex-col items-center gap-10 lg:flex-row">
                        {/* Left Side - Content */}
                        <div className="h-full w-full">
                            <h2 className="mt-2 text-[24px] font-bold text-[#585858]">About the project</h2>
                            <p className="mx-auto mt-5 text-[16px] font-medium text-[#585858] lg:text-justify">
                                <b>
                                    Catalysing a New Generation of Activists to Challenge Female Genital Mutilation (FGM) and Child Marriage and
                                    Forced Marriage (CEFM) in Uganda, Kween District 2022/2023
                                </b>{' '}
                                - Along with FGM issues, many communities in Uganda also face Child Marriage and Forced Marriage (CEFM). Uganda is one
                                of the countries with the highest early and forced marriage where 10% of girls are married off before the age of 15
                                (UNICEF 2011).
                            </p>

                            <p className="mx-auto mt-5 text-[16px] font-medium text-[#585858] lg:text-justify">
                                CEFM is an inherent violation of women and children’s human rights as well as their security and deprives them of the
                                power to make decisions about their own lives and live free from injustice. CEFM often hinders women and children from
                                completing their education, which in turns limits their livelihoods opportunities in the future entrapping them in
                                cycles of poverty.
                            </p>
                            <p className="mx-auto mt-5 text-[16px] font-medium text-[#585858] lg:text-justify">
                                In partnership with Womankind Worldwide, NAWOU implemented the Catalyzing a New Generation of Activists to Challenge
                                Female Genital Mutilation (FGM) and Child Marriage and Forced Marriage (CEFM) in Uganda project which focused on
                                instilling girls with the confidence and leadership skills to be able to challenge FGM and CEFM by creating their own
                                campaigns to raise awareness and engage parents and leaders from a position of agency.
                            </p>
                        </div>

                        {/* Right Side - Image */}
                        <div className="rounded-none bg-gray-100">
                            <img
                                src="/images/12.png"
                                alt="Women walking in the fields"
                                className="w-full rounded-none object-cover lg:h-[600px] lg:min-w-[570px]"
                            />
                        </div>
                    </section>
                    <p className="mx-auto mt-10 text-[16px] font-medium text-[#585858] lg:text-justify">
                        The project was focused on a community response to challenging FGM and CEFM. Women, girls and men are trained in peer support
                        and mentorship, and safe space discussions are held in schools and community hubs offering information and support.  The key
                        intervention implemented under this project were; Providing shelter and safe spaces for girls who flee child marriage and
                        early unions; Expanding the COMBAT network; undertaking community outreach and mobilization initiatives; Establishing and
                        strengthening human rights clubs and empowerment of girls to actively demand for protection of their rights to sexual and
                        reproductive health.
                    </p>
                </TabsContent>
                <TabsContent value="4" className="px-[10px] pt-5 lg:px-[104px]">
                    <section className="flex flex-col items-center gap-10 lg:flex-row">
                        {/* Left Side - Content */}
                        <div className="h-full w-full">
                            <h2 className="mt-2 text-[24px] font-bold text-[#585858]">About the project</h2>
                            <p className="mx-auto mt-5 text-[16px] font-medium text-[#585858] lg:text-justify">
                                <b>
                                    Promoting Leadership, Empowerment, Access and Protection of women and girls affected by conflict, severe drought
                                    and forced displacement in Uganda (LEAP) project in Karamoja (Kaabong & Moroto) 2023/2024
                                </b>{' '}
                                - NAWOU with funding through OXFAM as the leading implementer under auspices of UN Women co-implemented the Promoting
                                Leadership, Empowerment, Access and Protection of women and girls affected by conflict, severe drought and forced
                                displacement in Uganda (LEAP) project in Karamoja (Kaabong- Kaabong T/C & Lombogia & Moroto- Lupa & Katikekile). 
                            </p>

                            <p className="mx-auto mt-5 text-[16px] font-medium text-[#585858] lg:text-justify">
                                NAWOU directly co-implements the project with the African Women and Youth Action for Development (AWYAD) with the role
                                of gender mainstreaming in all project activities to ensure that gender sensitivity and responsiveness is core in
                                project implementation. However, there were other partners accelerating interventions on legal and economic
                                strengthening, these included; Caritas Moroto, Joint Efforts to save the Environment (JESE) and Network of Public
                                Interest Lawyers (NETPIL). 
                            </p>
                            <p className="mx-auto mt-5 text-[16px] font-medium text-[#585858] lg:text-justify">
                                The project sought to contribute towards a gender responsive environment that supports the needs of women and girls in
                                the target regions, the project complemented the ongoing economic empowerment and skills building programmes being
                                implemented by Oxfam in the target regions aiming at improving livelihoods among women and youth. Key interventions
                                were designed to address social norms and cultural practices that perpetuate gender-based violence in the community.
                            </p>
                        </div>

                        {/* Right Side - Image */}
                        <div className="rounded-none bg-gray-100">
                            <img
                                src="/images/13.png"
                                alt="Women walking in the fields"
                                className="w-full rounded-none object-cover lg:h-[600px] lg:min-w-[570px]"
                            />
                        </div>
                    </section>
                    <p className="mx-auto mt-10 text-[16px] font-medium text-[#585858] lg:text-justify">
                        The project delivery approach mainly focused on strengthening the Disaster Risk Reduction (DRR); adoption of the Gender Action
                        Learning System (GALS) and strengthening Farmer Field Schools (FFS). In Kaabong district, the project was implemented in sub
                        counties of Lobongia and Kaabong Town Council and Moroto in Lupa and Katikekile Sub counties. <br />
                        LEAP project was intended to strengthen emergency protection, leadership, access to services and empowerment of women, men,
                        boys and girls through increased access to positive coping mechanisms for vulnerable refugees, host communities and drought
                        affected women, girls, men and boys in Uganda; and strengthened gender responsive emergency drought and displacement
                        prevention through the involvement of women leaders and key actors in Uganda  The project strengthened the capacity of women,
                        men, youth and GBV survivors to access emergency social protection and climate smart livelihoods opportunities to mitigate the
                        impact of drought and displacement; supported Refugee women and girls to access emergency protection services including legal
                        aid and psychosocial within the women empowerment centres in Uganda (WECs); enhanced skills for refugees and host community
                        members in Uganda to participate and lead in drought and displacement response and promoted positive gender norms in support
                        of women’s leadership and protection from SGBV among men, boys and key actors. 
                        <br />
                        <br />
                        NAWOU key interventions involved the; <br />
                        1. Printing, translation and simplification of standardized referral pathway (posters, flyers); <br />
                        2. Capacity building of referral pathway actors and male change agents on SGBV case management and referral; <br />
                        3, Facilitation of Para social workers to make SGBV referrals within the communities; <br />
                        4. Support women to participate in international campaigns e.g. 16 Days of activism, world refugee day and International
                        Women’s Day; <br />
                        5. Mobilisation and enrollment of male change agents on GEWE; <br />
                        6. Train 300 men and boys on the GALs Methodology to enhance male engagement towards GEWE and facilitate and support male
                        change agents to influence and scale up GEWE
                        <br />
                    </p>
                </TabsContent>
                <TabsContent value="5" className="px-[10px] pt-5 lg:px-[104px]">
                    <section className="flex flex-col items-center gap-10 lg:flex-row">
                        {/* Left Side - Content */}
                        <div className="h-full w-full">
                            <h2 className="mt-2 text-[24px] font-bold text-[#585858]">About the project</h2>
                            <p className="mx-auto mt-5 text-[16px] font-medium text-[#585858] lg:text-justify">
                                <b>Women Networks Working for Gender Equality and Women Empowerment (GEWE) 2019/2022</b> - NAWOU in partnership with
                                UN Women implemented a project titled; “Women Networks Working for Gender Equality and Women Empowerment.”  The
                                project was implemented in the districts of Tororo, Amudat and Kitgum under the EU-UN spotlight initiative to
                                eliminate violence against women and girls. The project was delivered through overarching strategies to achieve the
                                expected results and these included; 
                            </p>

                            <p className="mx-auto mt-5 text-[16px] font-medium text-[#585858] lg:text-justify">
                                Work with and through NAWOU district networks in the target districts to mobilise women and girls to participate in
                                advocating for protection and fulfillment of their rights, Using the Community Based Action Teams (COMBAT) model, a
                                pool of volunteers from the member organisation and networks as well as from the communities were identified to engage
                                in creative ways to raise awareness about dangers of VAWG and redress mechanisms.
                            </p>
                            <p className="mx-auto mt-5 text-[16px] font-medium text-[#585858] lg:text-justify">
                                Women and girls were empowered to resist violence and engage duty bearers for accountability. Their collective voice
                                and capabilities were harnessed through group formation and building mechanisms where their issues were brought to the
                                attention of authorities at local and national level.
                            </p>
                        </div>

                        {/* Right Side - Image */}
                        <div className="rounded-none bg-gray-100">
                            <img
                                src="/images/14.png"
                                alt="Women walking in the fields"
                                className="w-full rounded-none object-cover lg:h-[600px] lg:min-w-[570px]"
                            />
                        </div>
                    </section>
                    <p className="mx-auto mt-10 text-[16px] font-medium text-[#585858] lg:text-justify">
                        The project ensured Women’s networks and organisations are strengthened and effectively contribute to protection of women and
                        girls from violence. This resulted into favorable social norms, attitudes and behaviors being promoted at community and
                        individual levels to prevent VAWG and support SRHR; Women’s voice and agency strengthened to advocate for the development and
                        implementation of laws and policies on eliminating VAWG in Uganda; capacity of women rights organisations and NAWOU district
                        networks strengthened to advocate for women’s and girl’s SRHR and a violence free environment.  <br />
                        The project adopted strategies on Working with and through NAWOU district networks; using the Community Based Action Teams
                        (COMBAT) model and Empowerment of women and girls to resist violence and engage duty bearers.
                    </p>
                </TabsContent>
            </Tabs>
            <Testimonies title="Impact Stories" simple subtitle="" />
        </WebLayout>
    );
}
