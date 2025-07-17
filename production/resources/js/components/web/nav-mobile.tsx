import { Button } from '@/components/ui/button';
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from '@/components/ui/sheet';
import { Link } from '@inertiajs/react';
import { Menu } from 'lucide-react';
import AppLogoIcon from '../app-logo-icon';

type routeTypes = {
    routes: Array<{ route: string; title: string }>;
};

export default function MobileNav({ routes }: routeTypes) {
    return (
        <div className="lg:hidden">
            <Sheet>
                <SheetTrigger asChild>
                    <Button variant="outline" size="icon" className="mr-0 h-[34px] w-[34px]">
                        <Menu className="h-5 w-5" />
                    </Button>
                </SheetTrigger>
                <SheetContent side="left" className="bg-sidebar flex h-full w-64 flex-col items-stretch justify-between">
                    <SheetTitle className="sr-only">Navigation Menu</SheetTitle>
                    <SheetHeader className="flex justify-start text-left">
                        <AppLogoIcon className="h-6 w-10 fill-current text-black dark:text-white" />
                    </SheetHeader>
                    <div className="mt-6 flex h-full flex-1 flex-col space-y-4">
                        <div className="flex h-full flex-col justify-between text-sm">
                            <div className="flex flex-col space-y-4">
                                {routes?.map((item) => (
                                    <Link key={item.title} href={item.route} className="flex items-center space-x-2 font-medium">
                                        <span>{item.title}</span>
                                    </Link>
                                ))}
                            </div>
                        </div>
                    </div>
                </SheetContent>
            </Sheet>
        </div>
    );
}
