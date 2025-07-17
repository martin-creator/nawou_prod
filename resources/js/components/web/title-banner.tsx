import { ReactNode } from "react";

type Props = {
    title: string;
    hasImage?: boolean;
    rightElement?: ReactNode
};

export const TitleBanner = ({ title, hasImage,rightElement }: Props) => {
    return (
        <div className="relative flex lg:h-[300px] h-[150px] mb-5 items-center justify-center bg-primary p-x-5">
            {hasImage && (
                <div
                    className="absolute inset-0 bg-[url(/images/contact.jpg)] bg-cover bg-center bg-no-repeat"
                />
            )}
            <div className="absolute inset-0 bg-primary/85" />
            <h2 className="relative z-10 scroll-m-20 text-4xl lg:text-5xl font-semibold tracking-tight text-white text-center">
                {title}
            </h2>
            {rightElement}
        </div>
    );
};
