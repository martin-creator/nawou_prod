import { Link } from '@inertiajs/react';
import { Button } from '../ui/button';

export default function DonateBanner() {
    return (
        <div className="bg-primary mx-auto px-6 py-16 text-center text-white sm:my-10 sm:rounded-3xl">
            <h2 className="font-sembold text-3xl md:text-4xl">Join Us in Making a Difference!</h2>
            <p className="mx-auto mt-4 max-w-4xl text-lg">
                We believe in a world where every woman and girl can realize her full potential and thrive. Together, we’re creating opportunities for
                leadership, growth, and lasting change.
            </p>
            <div className="mt-6 flex flex-col justify-center gap-4 sm:flex-row">
                <Link aschild="true" href={route('donate')} prefetch>
                    <Button className="text-primary h-[46px] cursor-pointer rounded-lg border-1 border-white bg-white px-8 py-3 w-full font-semibold hover:bg-white/90">
                        Donate
                    </Button>
                </Link>
                <Link  href={route('membership')} prefetch>
                    <Button className="h-[48px] cursor-pointer rounded-lg border-1 border-white px-8 py-3 font-semibold text-white w-full hover:bg-white/10">
                        Partner with us
                    </Button>
                </Link>
            </div>
        </div>
    );
}
