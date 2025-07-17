import DonateBanner from '@/components/web/donate-banner';
import WebFooter from '@/components/web/footer';
import WebHeader from '@/components/web/header';
import { Toaster } from "@/components/ui/sonner"


interface AppLayoutProps {
    children: React.ReactNode;
}
export default function WebLayout({ children }: AppLayoutProps) {
    return (
        <div className="bg-background relative flex min-h-svh flex-col">
            <div className="border-grid flex flex-1 flex-col">
                <WebHeader />
                <main className="flex flex-1 flex-col">{children}</main>
                <Toaster richColors expand invert />
                <DonateBanner />
                <WebFooter />
            </div>
        </div>
    );
}
