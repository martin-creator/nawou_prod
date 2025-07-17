import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import BlogEventListItem from '@/components/web/blog-event-list-item';
import WebLayout from '@/layouts/web/web-layout';
import { Head, usePage } from '@inertiajs/react';
import { Check } from 'lucide-react';
import { useState } from 'react';

const PostDetails = () => {
    const { post, related } = usePage().props;

    const [copied, setCopied] = useState(false);
    const url = route('news_or_events_details', { type: post?.type, slug: post?.slug });
    const copyToClipboard = async () => {
        try {
            await navigator.clipboard.writeText(url);
            setCopied(true);
            setTimeout(() => setCopied(false), 2000);
        } catch (err) {
            console.error('Failed to copy text: ', err);
        }
    };

    return (
        <WebLayout>
            <Head title={post?.title}>
                <meta name="description" content={post?.description?.substring(0, 160) || 'Default description'} />
                <meta name="keywords" content="NAWOU, women artisans, Uganda, crafts, social enterprise" />

                {/* Open Graph (Facebook, LinkedIn) */}
                <meta property="og:title" content={post?.title || 'Default Title'} />
                <meta property="og:description" content={post?.description?.substring(0, 160) || 'Default description'} />
                <meta property="og:image" content={post?.image || '/default-image.jpg'} />
                <meta property="og:type" content="article" />
                <meta property="og:url" content={route('news_or_events_details', { type: post?.type, slug: post?.slug })} />

                {/* Twitter Cards */}
                <meta name="twitter:card" content="summary_large_image" />
                <meta name="twitter:title" content={post?.title || 'Default Title'} />
                <meta name="twitter:description" content={post?.description?.substring(0, 160) || 'Default description'} />
                <meta name="twitter:image" content={post?.image || '/default-image.jpg'} />
            </Head>

            <section className="flex w-full flex-col items-center gap-2 px-[10px] py-5 lg:px-[104px] lg:py-10">
                <div className="mx-auto flex max-w-5xl flex-col gap-[20px] text-center lg:gap-[40px]">
                    <h1 className="text-secondary text-2xl font-semibold md:text-5xl">{post?.title}</h1>
                    <p className="mt-2 text-[20px] text-[#585858]">{new Date(post?.created_at)?.toDateString()}</p>
                </div>
                <div className="mt-[32px] lg:mt-[64px]">
                    <img
                        src={post?.image}
                        alt="Empowered Women Artisans"
                        className="w-full rounded-lg bg-gray-100 object-contain lg:h-[540px] lg:w-[1032px]"
                    />
                    <div className="mx-auto mt-6 max-w-4xl">
                        <div className="whitespace-pre-line">
                            <p className="text-[18px] text-[#585858] lg:text-[20px]">{post?.description}</p>
                        </div>

                        <div className="rounded-lg bg-primary/10 p-6 mt-[40px]">
                            <h2 className="mb-4 text-xl font-semibold">Share</h2>
                            <div className="flex flex-col gap-2 sm:flex-row bg-white p-3 rounded-lg">
                                <Input readonly className="flex-1 overflow-hidden rounded-md border-0 shadow-none bg-white p-3 overflow-ellipsis text-gray-700" value={url} />
                                <Button onClick={copyToClipboard} className="bg-primary whitespace-nowrap text-white hover:bg-primary-700">
                                    {copied ? <Check className="mr-1 h-4 w-4" /> : null}
                                    {copied ? 'Copied' : 'Copy Link'}
                                </Button>
                            </div>
                        </div>
                        {related?.length ? (
                            <h2 className="text-secondary mt-12 text-center text-[25px] font-semibold lg:text-[40px]">Related News</h2>
                        ) : (
                            <></>
                        )}
                    </div>
                </div>

                <div className="mt-2 grid w-full grid-cols-1 gap-5 lg:grid-cols-3">
                    {related?.map((item, index) => <BlogEventListItem item={item} key={index} />)}
                </div>
            </section>
        </WebLayout>
    );
};

export default PostDetails;
