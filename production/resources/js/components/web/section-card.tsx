import { cn } from '@/lib/utils';

export default function SectionCard({ title = '', smallText, className = 'bg-primary/5', children }) {
    return (
        <section className={cn('w-full px-5', className)}>
            <div className="items-center justify-center gap-10 py-15 lg:px-5 lg:px-20 lg:py-25">
                <div>
                    {smallText && (
                        <span className="bg-secondary/5 text-md text-secondary rounded-2xl px-4 py-3 font-medium uppercase">{smallText}</span>
                    )}
                    <h2 className="text-secondary mt-4 text-4xl font-bold">{title}</h2>
                </div>
                {children}
            </div>
        </section>
    );
}
