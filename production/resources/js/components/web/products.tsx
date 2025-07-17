import { Button } from '../ui/button';
import { ProductListItem } from './product-list-item';

export default function OurProducts() {
    const products = [
        {
            image: '/images/products/1.png',
            title: 'Woven Basket',
        },
        {
            image: '/images/products/2.png',
            title: 'Beaded Sandals',
        },
        {
            image: '/images/products/3.png',
            title: 'Ladies Bag',
        },
        {
            image: '/images/products/4.png',
            title: 'Raffia Basket',
        },
    ];
    return (
        <section className="w-full items-center bg-white pb-10 lg:pb-20">
            <div className="w-full px-5 lg:px-20">
                <div className="py-5">
                    <span className="bg-secondary/5 text-md text-secondary rounded-2xl px-4 py-3 font-medium uppercase">What We Make</span>
                    <h2 className="text-secondary mt-4 text-4xl font-bold">Products</h2>
                </div>

                <div className="mt-5 grid grid-cols-2 gap-5 md:grid-cols-3 lg:grid-cols-4">
                    {products.map((product, index) => (
                        <ProductListItem product={product} key={index} />
                    ))}
                </div>
                {/* <div className="w-full text-center">
                    <Button className="bg-primary hover:bg-primary/90 text-md mt-10 h-[42px] w-full cursor-pointer rounded-lg px-10 py-2 text-white lg:w-[152px]">
                        Go To Shop
                    </Button>
                </div> */}
            </div>
        </section>
    );
}
