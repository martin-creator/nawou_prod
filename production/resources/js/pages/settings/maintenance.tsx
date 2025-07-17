import { Head, useForm, usePage } from "@inertiajs/react";
import HeadingSmall from "@/components/heading-small";
import { Label } from "@/components/ui/label";
import { Switch } from "@/components/ui/switch";
import AppLayout from "@/layouts/app-layout";
import SettingsLayout from "@/layouts/settings/layout";

const breadcrumbs = [
    {
        title: "Maintenance Mode",
        href: "/panel/settings/maintenance",
    },
];

export default function Maintenance() {
    const { isMaintenance } = usePage().props;    
    
    const { data, setData, post, processing } = useForm({
        checked: isMaintenance
    });    

    const toggleMaintenance = (checked:boolean) => {
        post(route('maintenance.toggle',{value:`${checked}`}), {
            preserveScroll: true,
        });
    };

    return (
        <AppLayout breadcrumbs={breadcrumbs}>
            <Head title="Maintenance Mode" />

            <SettingsLayout>
                <div className="space-y-6">
                    <HeadingSmall title="Maintenance Mode" description="Toggle website's maintenance mode" />
                    <div className="flex cursor-pointer items-center space-x-2">
                        <Switch
                            id="maintenance-mode"
                            className="cursor-pointer"
                            checked={isMaintenance}
                            onCheckedChange={toggleMaintenance}
                            disabled={processing} // Prevent multiple requests
                        />
                        <Label htmlFor="maintenance-mode" className="cursor-pointer">
                            {isMaintenance ? "Enabled" : "Disabled"}
                        </Label>
                    </div>
                </div>
            </SettingsLayout>
        </AppLayout>
    );
}
