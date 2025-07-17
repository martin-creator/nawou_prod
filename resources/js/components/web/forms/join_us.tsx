import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Checkbox } from '@/components/ui/checkbox';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { useForm } from '@inertiajs/react';
import { Loader } from 'lucide-react';
import { toast } from 'sonner';

function NawouForm({ type = 'membership' }) {
    const { data, setData, post, processing, reset } = useForm({
        engagement_type: '',
        full_name: '',
        contact_person: '',
        email: '',
        phone: '',
        location: '',
        ...(type === 'membership' && {
            member_type: '',
            organization_reg_number: '',
            number_of_members: '',
            legal_docs: null,
            reason_for_joining: '',
        }),
        ...(type === 'volunteer' && {
            preferred_role: '',
            availability: '',
            skills_experience: '',
            cv: null,
            volunteering_reason: '',
        }),
        ...(type === 'partnership' && {
            organization_type: '',
            partnership_area: '',
            mission_focus: '',
            proposal: null,
            collaboration_method: '',
        }),
        information_accurate: false,
    });

    const validate = () => {
        const errors: string[] = [];

        const requiredFields = {
            engagement_type: 'Engagement type',
            full_name: 'Full name',
            email: 'Email address',
            phone: 'Phone number',
            location: 'Location',
        };

        if (type === 'membership') {
            Object.assign(requiredFields, {
                member_type: 'Type of member',
                reason_for_joining: 'Reason for joining',
                legal_docs: 'Upload Legal Docs',
            });
        }

        if (type === 'volunteer') {
            Object.assign(requiredFields, {
                preferred_role: 'Preferred role',
                availability: 'Availability',
                skills_experience: 'Skills & experience',
                volunteering_reason: 'Reason for volunteering',
                cv: 'CV',
            });
        }

        if (type === 'partnership') {
            Object.assign(requiredFields, {
                organization_type: 'Organization type',
                partnership_area: 'Partnership area',
                mission_focus: 'Mission focus',
                collaboration_method: 'Collaboration method',
                proposal: 'Upload Partnership Proposal',
            });
        }

        for (const key in requiredFields) {
            const val = data[key];
            if (!val || (typeof val === 'string' && val.trim() === '')) {
                errors.push(requiredFields[key]);
            }
        }

        if (!data.information_accurate) {
            errors.push('Confirm that the information given above is correct.');
        }

        if (errors.length > 0) {
            toast.error('Missing required fields', {
                description: errors.join(', '),
                closeButton: true,
            });
            return false;
        }

        return true;
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        if (!validate()) return;

        const commonOptions = {
            onSuccess: () => {
                reset();
                toast.success(`Form submission received!`, {
                    description: `Thank you for submitting your ${type} form. We'll get back to you soon.`,
                });
            },
            onError: (errors) => {
                for (const key in errors) {
                    toast.error(`${key} error`, {
                        description: errors[key],
                        className: 'capitalize',
                    });
                }
            },
        };

        const routeMap = {
            membership: 'membership_form.save',
            volunteer: 'volunteer_form.save',
            partnership: 'partner_form.save',
        };

        post(route(routeMap[type]), commonOptions);
    };

    const RLabel = ({ children }) => (
        <Label>
            {children} <span className="text-red-500">*</span>
        </Label>
    );

    const renderCommonFields = () => (
        <>
            <RLabel>How would you like to engage with NAWOU?</RLabel>
            <Input className="flex h-[42px]" value={data.engagement_type} onChange={(e) => setData('engagement_type', e.target.value)} />

            <RLabel>Full Name / Organization Name</RLabel>
            <Input className="flex h-[42px]" value={data.full_name} onChange={(e) => setData('full_name', e.target.value)} />

            <Label>Contact Person (if org)</Label>
            <Input className="flex h-[42px]" value={data.contact_person} onChange={(e) => setData('contact_person', e.target.value)} />

            <RLabel>Email Address</RLabel>
            <Input type="email" className="flex h-[42px]" value={data.email} onChange={(e) => setData('email', e.target.value)} />

            <RLabel>Phone Number</RLabel>
            <Input className="flex h-[42px]" value={data.phone} onChange={(e) => setData('phone', e.target.value)} />

            <RLabel>Location/Address</RLabel>
            <Input className="flex h-[42px]" value={data.location} onChange={(e) => setData('location', e.target.value)} />
        </>
    );

    const renderMembershipFields = () => (
        <>
            <RLabel>Type of Member</RLabel>
            <Input className="flex h-[42px]" value={data.member_type} onChange={(e) => setData('member_type', e.target.value)} />

            <Label>Organization Registration Number (if org)</Label>
            <Input
                className="flex h-[42px]"
                value={data.organization_reg_number}
                onChange={(e) => setData('organization_reg_number', e.target.value)}
            />

            <Label>Number of Members (if group)</Label>
            <Input
                type="number"
                min={1}
                className="flex h-[42px]"
                value={data.number_of_members}
                onChange={(e) => setData('number_of_members', e.target.value)}
            />

            <RLabel>Upload Legal Docs / Constitution</RLabel>
            <Input type="file" className="flex h-[42px]" onChange={(e) => setData('legal_docs', e.target.files[0])} />

            <RLabel>Reason for joining NAWOU</RLabel>
            <Textarea value={data.reason_for_joining} onChange={(e) => setData('reason_for_joining', e.target.value)} />
        </>
    );

    const renderVolunteerFields = () => (
        <>
            <RLabel>Preferred Volunteering Role</RLabel>
            <Input className="flex h-[42px]" value={data.preferred_role} onChange={(e) => setData('preferred_role', e.target.value)} />

            <RLabel>Availability</RLabel>
            <Input className="flex h-[42px]" value={data.availability} onChange={(e) => setData('availability', e.target.value)} />

            <RLabel>Skills & Experience</RLabel>
            <Textarea value={data.skills_experience} onChange={(e) => setData('skills_experience', e.target.value)} />

            <RLabel>Upload CV / Resume</RLabel>
            <Input type="file" className="flex h-[42px]" onChange={(e) => setData('cv', e.target.files[0])} />

            <RLabel>Why do you want to volunteer?</RLabel>
            <Textarea value={data.volunteering_reason} onChange={(e) => setData('volunteering_reason', e.target.value)} />
        </>
    );

    const renderPartnershipFields = () => (
        <>
            <RLabel>Organization Type</RLabel>
            <Input className="flex h-[42px]" value={data.organization_type} onChange={(e) => setData('organization_type', e.target.value)} />

            <RLabel>Area of Partnership</RLabel>
            <Input className="flex h-[42px]" value={data.partnership_area} onChange={(e) => setData('partnership_area', e.target.value)} />

            <RLabel>Mission or Area of Focus</RLabel>
            <Textarea value={data.mission_focus} onChange={(e) => setData('mission_focus', e.target.value)} />

            <RLabel>Upload Partnership Proposal / Documents</RLabel>
            <Input type="file" className="flex h-[42px]" onChange={(e) => setData('proposal', e.target.files[0])} />

            <RLabel>How do you wish to collaborate with NAWOU?</RLabel>
            <Textarea value={data.collaboration_method} onChange={(e) => setData('collaboration_method', e.target.value)} />
        </>
    );

    return (
        <section className="px-[10px] pt-5 lg:px-[104px] lg:pt-5">
            <Card className="mx-auto border-0 shadow-none">
                <CardHeader>
                    <CardTitle>
                        <blockquote className="border-primary flex flex-col gap-[16px] border-l-[8px] py-4 pl-6">
                            <h2 className="text-secondary scroll-m-20 text-xl font-semibold tracking-tight lg:text-[40px]">
                                Join us! Get involved with NAWOU
                            </h2>
                        </blockquote>
                    </CardTitle>
                </CardHeader>
                <CardContent>
                    <form onSubmit={handleSubmit} className="space-y-4">
                        {renderCommonFields()}
                        {type === 'membership' && renderMembershipFields()}
                        {type === 'volunteer' && renderVolunteerFields()}
                        {type === 'partnership' && renderPartnershipFields()}

                        <div className="flex items-center space-x-2">
                            <RLabel>
                                <Checkbox
                                    id="infoAccurate"
                                    checked={data.information_accurate}
                                    onCheckedChange={(val) => setData('information_accurate', val)}
                                />
                                <span className="ml-2 cursor-pointer">I confirm that all information provided is accurate</span>
                            </RLabel>
                        </div>

                        <div className="flex flex-col items-end">
                            <Button type="submit" disabled={processing} className="mt-4 h-[52px] w-full text-right lg:w-40">
                                {processing && <Loader className="animate-spin" />}
                                Submit
                            </Button>
                        </div>
                    </form>
                </CardContent>
            </Card>
        </section>
    );
}

export default NawouForm;
