type Product = {
    title: string;
    image: string;
};

type ProductProps = {
    product: Product;
};
export const ProductListItem = ({ product }: ProductProps) => {
    return (
        <div className="flex hover:border-secondary/10 border-secondary/5 w-full cursor-pointer flex-col overflow-hidden rounded-2xl border bg-white">
            <img src={product.image} alt={product.title} className="max-h-[318px] w-full object-cover" />
            <div className="px-3 py-2">
                <h2 className="text-secondary text-md lg:text-xl">{product.title}</h2>
            </div>
        </div>
    );
};
