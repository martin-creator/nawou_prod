import { SVGAttributes } from 'react';

export default function AppLogoIcon(props: SVGAttributes<SVGElement>) {
    return (
        <svg {...props} xmlns="http://www.w3.org/2000/svg">
            <image href="/logo.svg" width={"100%"} height={"100%"} />
        </svg>
    );
}
