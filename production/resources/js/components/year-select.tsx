import { Deferred, usePage } from '@inertiajs/react';
import { Loader } from 'lucide-react';
import React from 'react';
import { Button } from './ui/button';
import { Select, SelectContent, SelectItem, SelectTrigger } from './ui/select';


type YearSelectProps = {
    year?: string;
    setYear?: (year: string) => void;
    className?: string;
};

const YearSelect = ({ year, setYear, className }: YearSelectProps) => {
    const { reports } = usePage().props;
    const [selectedYear, setSelectedYear] = React.useState(year);

    React.useEffect(() => {
        if (reports?.[0] && !selectedYear) {
            setSelectedYear(reports?.[0]);
            setYear(reports?.[0])
        }
    }, [reports, selectedYear, setYear]);

    return (
        <Deferred data={'reports'} fallback={<Loader className="animate-spin" />}>
            {
                reports?.length>0?
            <Select
                onValueChange={(val: string) => {
                    setSelectedYear(val);
                    if (setYear) {
                        setYear(val);
                    }
                }}
                defaultValue={selectedYear?.year}
            >
                {className ? (
                    <SelectTrigger
                        className={`m-0 w-auto cursor-pointer border-none p-0 text-4xl font-semibold text-white shadow-none hover:opacity-90 lg:text-5xl`}
                    >
                        {selectedYear?.year}
                    </SelectTrigger>
                ) : (
                    <Button variant={'ghost'} asChild className={`text-primary hover:text-primary/90 active:text-primary/60'} items-center gap-1`}>
                        <SelectTrigger className={`text-primary m-0 w-auto border-none p-0 shadow-none`}>{selectedYear?.year}</SelectTrigger>
                    </Button>
                )}
                <SelectContent>
                    {reports?.map((item, index) => {
                        return (
                            <SelectItem value={item} key={index} className="cursor-pointer">
                                {item?.year}
                            </SelectItem>
                        );
                    })}
                </SelectContent>
            </Select>:<span className='text-primary'>-N/A-</span>
            }
        </Deferred>
    );
};

export default YearSelect;
