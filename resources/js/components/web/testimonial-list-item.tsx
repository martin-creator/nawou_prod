import { Card, CardContent, CardFooter } from '../ui/card';

type Testinony = {
    message: string;
    person_name: string;
    person_title: string;
    person_avatar: string;
};
type TestinonyType = {
    testimony: Testinony;
};
const TestimonialListLtem = ({ testimony }: TestinonyType) => {

    return (
        <Card className="w-full border-0 shadow-none min-w-[290px] min-h-[354px] justify-between">
            <CardContent className="space-y-4 px-6">
                <blockquote className="text-lg text-gray-600">"{testimony.message}"</blockquote>
            </CardContent>
            <CardFooter className="flex items-center space-x-3">
                <img src={testimony.person_avatar} className="h-[64px] w-[64px] rounded-xl object-cover" />
                <div>
                    <h3 className="text-secondary text-md m-0 font-semibold">{testimony.person_name}</h3>
                    <p className="m-0 text-sm text-gray-600">{testimony.person_title}</p>
                </div>
            </CardFooter>
        </Card>
    );
};

export default TestimonialListLtem;
