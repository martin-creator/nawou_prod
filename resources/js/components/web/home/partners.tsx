import { PartnerLogos } from '../partners';

export default function OurPartners() {
    return (
        <section className="flex w-full items-center justify-between overflow-hidden bg-white py-15 lg:py-25">
            <div className="w-full px-5 lg:px-20">
                <div className="py-5">
                    <span className="bg-secondary/5 text-md text-secondary rounded-2xl px-4 py-3 font-medium uppercase">Who We Work With</span>
                    <h2 className="text-secondary mt-4 text-4xl font-bold">Our Partners</h2>
                </div>

                <div className="mt-5 grid grid-cols-6 gap-5">
                    <h2 className="text-secondary col-span-full text-2xl font-medium lg:col-span-1">Funding Partners</h2>
                    <div className="col-span-full lg:col-span-5">
                        <PartnerLogos parners />
                    </div>
                </div>
                <div className="mt-5 grid grid-cols-6 gap-5">
                    <h2 className="text-secondary col-span-full text-2xl font-medium lg:col-span-1">Members</h2>
                    <div className="col-span-full lg:col-span-5">
                        <PartnerLogos />
                    </div>
                </div>
            </div>
        </section>
    );
}
