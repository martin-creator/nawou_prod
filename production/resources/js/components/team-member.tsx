import { Card, CardContent } from './ui/card';

type Member = {
    name: string;
    title: string;
    avatar: string;
    description?: string;
    isTopAdmin?: boolean;
};

type TeamMember = {
    member: Member;
};

export const TeamMember = ({ member }: TeamMember) => {
    return (
        <Card className="border-none bg-transparent w-full shadow-none cursor-pointer h-full">
            <CardContent className="flex flex-col lg:flex-row gap-10 items-center p-0 h-full">
                <img src={member.avatar} className="w-full lg:w-[196px] h-[300px] lg:h-full object-cover bg-white rounded-xl object-top" />
                <div className="flex flex-col">
                    <h3 className="text-secondary text-[24px] font-semibold">{member.name}</h3>
                    <p className="text-primary text-[20px] font-semibold">{member.title}</p>
                    <div className='border my-3' />
                    <p className="text-left text-[14px] font-medium text-[#585858]">{member.description}</p>
                </div>
            </CardContent>
        </Card>
    );
};
