import { usePage } from '@inertiajs/react';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '../ui/accordion';

type FAQsProps = {
    className?: string;
    title?: string;
    subtitle?: string;
};
export default function FAQs({ className = 'bg-white', title = 'Frequently Asked Questions', subtitle = '' }: FAQsProps) {
    const {faqs:faqData} = usePage().props;
    return (
        <section className={`${className} flex w-full items-center justify-between overflow-hidden py-5 lg:py-15`}>
            <div className="w-full items-center justify-center px-5 lg:max-w-7xl lg:px-20">
                <div className="py-5">
                    {subtitle && (
                        <span className="bg-secondary/5 text-md text-secondary rounded-2xl px-4 py-3 font-medium uppercase">{subtitle}</span>
                    )}
                    <h2 className="text-secondary mt-4 text-3xl lg:text-4xl font-bold">{title}</h2>
                </div>

                    <div className="flex flex-col lg:px-[30px]">
                        <Accordion type="single" collapsible className="w-full" defaultValue={'item-0'}>
                            {faqData?.map((item, index) => (
                                <AccordionItem value={`item-${index}`}  key={index}>
                                    <AccordionTrigger className="text-[#191919] whitespace-pre-line mt-0 flex items-center gap-1 text-[20px] font-semibold cursor-pointer">{item.question}</AccordionTrigger>
                                    <AccordionContent className="text-[#575757] whitespace-pre-line mt-0 flex items-center gap-1 text-[18px]">{item.answer}</AccordionContent>
                                </AccordionItem>
                            ))}
                        </Accordion>
                    </div>
            </div>
        </section>
    );
}
