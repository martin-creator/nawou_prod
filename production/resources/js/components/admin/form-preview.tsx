import { Sheet, SheetContent, SheetDescription, SheetFooter, SheetHeader, SheetTitle, SheetTrigger } from '@/components/ui/sheet';
import { Link } from '@inertiajs/react';
import { ExternalLink, Eye, Loader, Trash } from 'lucide-react';
import { useState } from 'react';
import { Button } from '../ui/button';
import { toast } from 'sonner';

export default function FormPreview({ data, type = '', title = '' }) {
    const [openSheet, setOpenSheet] = useState(false);
    const [loading, setLoading] = useState(false);

    return (
        <Sheet open={openSheet} onOpenChange={setOpenSheet}>
            <SheetTrigger asChild>
                <Button size={'sm'}>
                    <Eye />
                </Button>
            </SheetTrigger>
            <SheetContent side="left" className="min-w-[50%]">
                <SheetHeader className="border-b">
                    <SheetTitle>{title}</SheetTitle>
                    <SheetDescription>Here's a summary of what was submited.</SheetDescription>
                </SheetHeader>
                <div className="max-h-[80vh] space-y-3 overflow-y-auto p-4">
                    {Object.entries(data).map(([key, value]) => {
                        if (key == 'id') {
                            return;
                        }

                        // Format files and booleans
                        const label = key.replace(/_/g, ' ').replace(/\b\w/g, (c) => c.toUpperCase());
                        let displayValue = value;

                        if (typeof value === 'boolean') {
                            displayValue = value ? 'Yes' : 'No';
                        } else if (value instanceof File) {
                            displayValue = value.name;
                        } else if (typeof value === 'string' && /^\d{4}-\d{2}-\d{2}T\d{2}:\d{2}:\d{2}(?:\.\d+)?Z?$/.test(value)) {
                            const dateObj = new Date(value);
                            displayValue = dateObj.toLocaleString();
                        } else if (typeof value === 'string' && value.startsWith('http')) {
                            displayValue = (
                                <a href={value} target="_blank" rel="noopener noreferrer">
                                    <Button variant={'outline'} size={'sm'}>
                                        Open File <ExternalLink />
                                    </Button>
                                </a>
                            );
                        } else if (value === '' || value == null) {
                            displayValue = '-';
                        }

                        return (
                            <div key={key} className="flex justify-between border-b pb-1">
                                <span className="font-medium">{label}</span>
                                <span className="text-muted-foreground text-right">{displayValue}</span>
                            </div>
                        );
                    })}
                </div>
                <SheetFooter className="border-t">
                    <div className="flex justify-end">
                        <Link
                            href={route('form_submission_destroy', { type: type, id: data?.id })}
                            as="button"
                            method="delete"
                            onBefore={() => setLoading(true)}
                            onFinish={() => setLoading(false)}
                            onSuccess={()=>{
                                setOpenSheet(false)
                                toast.success("Operation successful!")
                            }}
                        >
                            <Button disabled={loading}>{loading ? <Loader className='animate-spin' /> : <Trash />} Trash this one</Button>
                        </Link>
                    </div>
                </SheetFooter>
            </SheetContent>
        </Sheet>
    );
}
