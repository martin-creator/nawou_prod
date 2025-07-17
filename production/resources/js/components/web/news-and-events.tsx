import { Deferred, usePage } from "@inertiajs/react";
import BlogEventListItem from "./blog-event-list-item";
import { Loader } from "lucide-react";

export default function NewsAndEvents() {
    const {news_and_events} = usePage().props;

    return (
        <section className="w-full items-center bg-primary/5 py-10 lg:py-20">
            <div className="w-full px-5 lg:px-20">
                <div className="py-5">
                    <span className="bg-secondary/5 text-md text-secondary rounded-2xl px-4 py-3 font-medium uppercase">What Is Happening</span>
                    <h2 className="text-secondary mt-4 text-4xl font-bold">News & Events</h2>
                </div>

                <Deferred data={'news_and_events'} fallback={<Loader className="animate-spin" />} >

                <div className="mt-5 grid gap-5 grid-cols-1 lg:grid-cols-3 w-full">
                    {news_and_events?.map((item, index) => (
                        <BlogEventListItem item={item} key={index} />
                    ))}
                </div>
                </Deferred>

            </div>
        </section>
    );
}
