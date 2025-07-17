import { Link } from '@inertiajs/react';
import { Button } from '../ui/button';

type Item = {
    title: string;
    image: string;
    description: string;
    date: any;
    event_date?: string;
    type: 'news' | 'events';
};

type ItemProps = {
    item: Item;
    className?: string;
    descriptionClass?: string;
};

function createSlug(sentence: string) {
    return sentence
        .toLowerCase()
        .replace(/[^\w\s-]/g, '')
        .replace(/\s+/g, '-')
        .replace(/-+/g, '-')
        .trim();
}

const BlogEventListItem = ({ item, className = 'max-h-[200px] min-h-[200px] h-full', descriptionClass = 'line-clamp-2' }: ItemProps) => {
    const slug = createSlug(item?.title);

    return (
        <Link href={route('news_or_events_details', { slug: slug, type: item.type })} prefetch>
            <div
                className={`hover:border-secondary/10 border-secondary/5 flex h-full w-full cursor-pointer flex-col justify-between overflow-hidden rounded-2xl border bg-white`}
            >
                <div className="relative">
                    <img src={item.image} alt={item.title} className={`w-full bg-gray-100 object-cover ${className}`} />
                    <span className="bg-primary absolute top-3 right-3 rounded-full px-[16px] py-[10px] text-sm text-white uppercase">
                        {item.type}
                    </span>
                    <div className="p-[20px]">
                        <p className="text-sm text-[#585858]">{item.date?.toDateString()}</p>
                        <h2 className="text-secondary text-md mt-[8px] line-clamp-1 lg:text-xl">{item.title}</h2>
                        <p className={`mt-[8px] text-[#585858] ${descriptionClass}`}>{item.description}</p>
                    </div>
                </div>

                <div className="pt-[12px] pb-[20px] pl-[20px]">
                    <Button className="border-primary text-primary hover:text-primary" variant={item.type == 'events' ? 'outline' : 'link'}>
                        {item.type == 'events' ? 'Register Now' : 'Read More'}
                    </Button>
                </div>
            </div>
        </Link>
    );
};

export default BlogEventListItem;
