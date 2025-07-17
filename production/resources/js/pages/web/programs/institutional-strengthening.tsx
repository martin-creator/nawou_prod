import Testimonies from '@/components/web/home/testimonies';
import { TitleBanner } from '@/components/web/title-banner';
import WebLayout from '@/layouts/web/web-layout';
import { Head } from '@inertiajs/react';

export default function ProgramPage() {
    return (
        <WebLayout>
            <Head title={'Institutional Strengthening and Partnership'} />

            <TitleBanner title={'Institutional Strengthening and Partnership'} />

            <section className="px-[10px] pt-5 lg:px-[104px] lg:pt-5">
                <blockquote className="border-primary flex flex-col gap-[16px] border-l-[8px] py-5 pl-6">
                    <h2 className="text-secondary scroll-m-20 text-3xl font-semibold tracking-tight lg:text-4xl">
                        Institutional Strengthening and Partnership
                    </h2>
                    <p className="text-[20px] font-medium text-[#585858]">
                        NAWOU, as an umbrella organization for women-led and women-focused organizations, strengthens civil society organizations,
                        member institutions and district networks through mobilization, coordination and capacity building.
                    </p>
                </blockquote>
            </section>

            <div className="w-full overflow-hidden py-5 lg:py-10">
                <section className="flex flex-col items-center gap-10 px-[10px] py-5 lg:flex-row lg:px-[104px]">
                    {/* Left Side - Content */}
                    <div className="h-full w-full">
                        <h2 className="text-secondary mt-4 text-[30px] font-bold">About the program</h2>
                        <p className="mx-auto mt-5 text-[20px] font-medium text-[#585858] lg:text-justify">
                            This deliberate effort amplifies unified voices to champion and advance gender equality in Uganda.  <br />
                            1. Convener: Bringing together women-focused organizations to advocate and implement interventions that improve the lives
                            of women and girls in Uganda. This includes creating Communities of Practice (CoPs) for member organizations to share
                            experiences and expertise. <br />
                            2. Communicator: Advocating for women's and girls' issues, amplifying member organizations' work, and generating research
                            and evidence to inform policy makers and stakeholders. This involves organizing conferences, workshops, and virtual
                            meetings. <br />
                            3. Capacity Builder: Developing the capacity of member organizations to advance the gender agenda sustainably. This
                            includes conducting organizational capacity assessments, providing training, and supporting program strategy, design, and
                            implementation. <br />
                            To achieve these roles, NAWOU requires a strong secretariat with the right capacities to support its performance and
                            membership across Uganda.
                        </p>
                    </div>

                    {/* Right Side - Image */}
                    <div className="rounded-none">
                        <img src="/images/booth.jpg" className="w-full rounded-none bg-gray-100 object-contain lg:min-w-[570px]" />
                    </div>
                </section>
            </div>

            <Testimonies title='Impact Stories' simple subtitle='' />
        </WebLayout>
    );
}
