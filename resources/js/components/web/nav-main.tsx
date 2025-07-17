import { NavigationMenu, NavigationMenuItem, NavigationMenuList, NavigationMenuTrigger } from '@/components/ui/navigation-menu';
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from '@/components/ui/sheet';
import { cn } from '@/lib/utils';
import { Link, usePage } from '@inertiajs/react';
import { AccordionTrigger } from '@radix-ui/react-accordion';
import { ChevronDownIcon, Menu } from 'lucide-react';
import AppLogoIcon from '../app-logo-icon';
import { Accordion, AccordionContent, AccordionItem } from '../ui/accordion';
import { Button } from '../ui/button';
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from '../ui/dropdown-menu';

type routeTypes = {
    routes: Array<{ route: string; title: string; children?: Array<{ route: string; title: string }> }>;
};

const activeItemStyles = 'font-medium text-primary hover:bg-primary/5 hover:text-primary text-md cursor-pointer';

export default function NavMain({ routes }: routeTypes) {
    const page = usePage();
    return (
        <>
            <>
                <div className="w-full lg:hidden">
                    <Sheet>
                        <div className="flex w-full items-center justify-between">
                            <Link href={route('home')}>
                                <AppLogoIcon className="h-15 w-20" />
                            </Link>
                            <SheetTrigger asChild className="w-full">
                                <Button variant="outline" size="icon" className="mr-0 h-[42px] w-[42px]">
                                    <Menu className="text-primary size-6" />
                                </Button>
                            </SheetTrigger>
                        </div>
                        <SheetContent side="left" className="bg-sidebar flex h-full w-64 flex-col items-stretch justify-between">
                            <SheetTitle className="sr-only">Navigation Menu</SheetTitle>
                            <SheetHeader className="flex justify-start text-left">
                                <AppLogoIcon className="h-6 w-10 fill-current text-black dark:text-white" />
                            </SheetHeader>
                            <div className="mt-6 flex h-full flex-1 flex-col space-y-4">
                                <div className="text-md flex h-full flex-col justify-between">
                                    <div className="flex flex-col space-y-4 px-3">
                                        {routes?.map((item, index) => {
                                            // Check if the current route or its children are active
                                            const isActiveParent =
                                                page.url === item.route || item.children?.some((child) => page.url.startsWith(child.route));

                                            return item?.children ? (
                                                <Accordion
                                                    type="single"
                                                    collapsible
                                                    defaultValue={isActiveParent ? item.title : undefined}
                                                    className="space-x-2 p-2 px-2"
                                                    key={index}
                                                    orientation="horizontal"
                                                >
                                                    <AccordionItem value={item?.title} className="flex w-full flex-col">
                                                        <AccordionTrigger
                                                            className={cn(
                                                                'flex w-full justify-between rounded-md px-0 py-2 transition-colors',
                                                                isActiveParent && 'bg-primary/10 text-primary px-3 font-medium',
                                                            )}
                                                        >
                                                            <span>{item.title}</span>
                                                            <ChevronDownIcon
                                                                size={20}
                                                                className={cn(
                                                                    'transition-transform duration-300',
                                                                    'data-[state=open]:rotate-90',
                                                                    isActiveParent && 'text-primary',
                                                                )}
                                                                aria-hidden
                                                            />
                                                        </AccordionTrigger>
                                                        <AccordionContent>
                                                            <div className="flex w-full flex-col">
                                                                {item.children.map((child, indx) => {
                                                                    const isActiveChild = page.url === child.route;
                                                                    return (
                                                                        <Link
                                                                            href={child.route}
                                                                            key={indx}
                                                                            className={cn(
                                                                                'hover:bg-muted/70 rounded-md px-5 py-3 transition-colors',
                                                                                isActiveChild && 'text-primary font-medium',
                                                                            )}
                                                                        >
                                                                            {child.title}
                                                                        </Link>
                                                                    );
                                                                })}
                                                            </div>
                                                        </AccordionContent>
                                                    </AccordionItem>
                                                </Accordion>
                                            ) : (
                                                <Link
                                                    key={index}
                                                    href={item.route}
                                                    className={cn(
                                                        'flex items-center justify-between space-x-2 rounded-md p-2 px-2',
                                                        page.url === item.route && 'text-primary bg-primary/5 hover:text-primary font-medium',
                                                    )}
                                                >
                                                    <span>{item.title}</span>
                                                </Link>
                                            );
                                        })}
                                    </div>
                                </div>
                            </div>
                        </SheetContent>
                    </Sheet>
                </div>
                <Link href={route('home')} className="hidden lg:flex">
                    <AppLogoIcon className="max-h-13 w-full max-w-24" />
                </Link>
            </>

            {/* Desktop Navigation */}
            <div className="hidden h-full items-center space-x-6 lg:flex">
                <NavigationMenu className="flex h-full items-stretch">
                    <NavigationMenuList className="flex h-full items-stretch space-x-2">
                        {routes.map((item, index) => (
                            <NavigationMenuItem key={index} className="relative flex h-full items-center border-0">
                                {item?.children ? (
                                    <DropdownMenu>
                                        <DropdownMenuTrigger asChild>
                                            <NavigationMenuTrigger
                                                className={
                                                    page.url.startsWith(item.route)
                                                        ? activeItemStyles
                                                        : 'text-md hover:text-primary align-center cursor-pointer justify-center text-center'
                                                }
                                            >
                                                {item.title}
                                            </NavigationMenuTrigger>
                                        </DropdownMenuTrigger>
                                        <DropdownMenuContent className="mt-2 flex w-full min-w-50 flex-col gap-1 rounded-md bg-white shadow-md">
                                            {item.children.map((child, indx) => (
                                                <DropdownMenuItem
                                                    asChild
                                                    key={indx}
                                                    className={cn(
                                                        'group hover:bg-primary/5 hover:text-primary text-md inline-flex w-full cursor-pointer items-center justify-between rounded-md px-4 py-2 transition-[color,box-shadow] disabled:pointer-events-none disabled:opacity-50',
                                                        page.url === child.route && activeItemStyles,
                                                    )}
                                                >
                                                    <Link
                                                        href={child.route}
                                                        aschild={'true'}
                                                        key={indx}
                                                        cacheFor={['30s', '1m']}
                                                        className="w-full cursor-pointer items-center justify-between"
                                                    >
                                                        {child.title}
                                                        {/* <ChevronRight
                                                        size={15}
                                                        className={cn('hover:text-primary', page.url === child.route && activeItemStyles)}
                                                    /> */}
                                                    </Link>
                                                </DropdownMenuItem>
                                            ))}
                                        </DropdownMenuContent>
                                    </DropdownMenu>
                                ) : (
                                    <Link
                                        href={item.route}
                                        key={index}
                                        className={cn(
                                            'group hover:bg-primary/5 hover:text-primary data-[active=true]:bg-accent/50 data-[state=open]:bg-accent/50 data-[active=true]:text-accent-foreground ring-ring/10 dark:ring-ring/20 dark:outline-ring/40 outline-ring/50 text-md inline-flex h-9 w-max items-center justify-center rounded-md px-4 py-2 transition-[color,box-shadow] focus-visible:ring-4 focus-visible:outline-1 disabled:pointer-events-none disabled:opacity-50',
                                            page.url === item.route && activeItemStyles,
                                        )}
                                        cacheFor={['30s', '1m']}
                                    >
                                        {item.title}
                                    </Link>
                                )}
                                {(page.url === item.route || (page.url.startsWith(item.route) && item.children)) && (
                                    <div className="bg-primary absolute bottom-0 left-0 h-0.5 w-full translate-y-px dark:bg-white"></div>
                                )}
                            </NavigationMenuItem>
                        ))}
                    </NavigationMenuList>
                </NavigationMenu>
            </div>
        </>
    );
}
