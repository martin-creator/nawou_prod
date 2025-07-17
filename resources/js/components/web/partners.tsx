import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from '../ui/tooltip';

export const PartnerLogos = ({parners=false}) => {

    const parnersList = [
        {
            title: 'Enhanced Integrated Framework',
            logo: '/images/partners/eif.png',
        },
        {
            title: 'Ugandan Crafts',
            logo: '/images/partners/crafts.png',
        },
        {
            title: 'We Effect',
            logo: '/images/partners/we-effect.png',
        },
        {
            title: 'Fokus',
            logo: '/images/partners/fokus.png',
        },
        {
            title: 'OXFAM',
            logo: '/images/partners/oxfarm.png',
        },
        {
            title: 'Irish Aid',
            logo: '/images/partners/irish-aid.png',
        },
        {
            title: 'Spotlight Initiative',
            logo: '/images/partners/spotlight.png',
        },
        {
            title: 'Woman Kind World Wide',
            logo: '/images/partners/woman-kind.png',
        },
        {
            title: 'Ministry Of Tourism, Wildlife And Antiquities',
            logo: '/images/partners/ministry-of-tourism.png',
        },
        {
            title: 'Un Women',
            logo: '/images/partners/un-women.png',
        },
    ];

    const membersList = [
        { title: 'Albinism Umbrella', logo: '/images/members/Albinism Umbrella Logo.png' },
        { title: 'ANSWERID MPIGI', logo: '/images/members/ANSWERID MPIGI.png' },
        { title: 'AWAGO', logo: '/images/members/AWAGO LOGO.png' },
        { title: 'AWARE Uganda', logo: '/images/members/AWARE Uganda.png' },
        { title: 'BID TUKOLE', logo: '/images/members/BID TUKOLE LOGO.png' },
        { title: 'CESA UGANDA', logo: '/images/members/CESA UGANDA.png' },
        { title: 'CEWIGO LOGO', logo: '/images/members/CEWIGO LOGO.png' },
        { title: 'CEWOKCHR LOGO', logo: '/images/members/CEWOCHR LOGO.png' },
        { title: 'EPHWOR LOGO', logo: '/images/members/EPHWOR LOGO.png' },
        { title: 'FIDA Uganda', logo: '/images/members/FIDA Uganda.png' },
        { title: 'Gals Forum International', logo: '/images/members/gals forum international.png' },
        { title: 'Girls to Lead Africa', logo: '/images/members/GIRLS TO LEAD AFRICA LOGO.png' },
        { title: 'Inner Wheel Club of Kampala', logo: '/images/members/INNER WHEEL CLUB OF KAMPALA.png' },
        { title: 'IWO', logo: '/images/members/IWO.png' },
        { title: 'KAWOU', logo: '/images/members/KAWOU LOGO.png' },
        { title: 'Nabagereka Development Foundation', logo: '/images/members/nabagereka development foundation.png' },
        { title: 'NAWAD', logo: '/images/members/NAWAD LOGO.png' },
        { title: 'NDF', logo: '/images/members/NDF.png' },
        { title: 'NUDIPU', logo: '/images/members/NUDIPU LOGO.png' },
        { title: 'NUWODU', logo: '/images/members/NUWODU LOGO.png' },
        { title: 'NVIWODA', logo: '/images/members/NVIWODA LOGO.png' },
        { title: 'PRO LIFE CAMPAIGN Uganda', logo: '/images/members/PRO LIFE COMPAIGN Uganda logo.png' },
        { title: 'PROJLIFE', logo: '/images/members/PROJLIFE LOGO.png' },
        { title: 'RUWONET', logo: '/images/members/RUWONET.png' },
        { title: 'THRIVE GULU', logo: '/images/members/THRIVE GULU.png' },
        { title: 'UGANDA Girl Guides Association', logo: '/images/members/UGANDA girl guides association.png' },
        { title: 'UWOPA', logo: '/images/members/UWOPA LOGO.png' },
        { title: 'VOWU', logo: '/images/members/VOWU Logo.png' },
        { title: 'WEGCDA', logo: '/images/members/WEGCDA LOGO.png' },
        { title: 'WILDF Uganda', logo: '/images/members/WILDF Uganda.png' },
    ];

    return (
        <div className="mb-5 grid grid-cols-2 items-center md:grid-cols-3 lg:grid-cols-5 lg:gap-5">
            {(parners?parnersList:membersList).map((partner, ind) => (
                <TooltipProvider key={ind}>
                    <Tooltip>
                        <TooltipTrigger asChild>
                            <img className="aspect-3/2 border hover:border-primary/10 border-white bg-white p-2 h-[90px] w-full object-contain cursor-pointer rounded-xl " src={partner.logo} alt={partner.logo} key={ind} />
                        </TooltipTrigger>
                        <TooltipContent>
                            <p>{partner.title}</p>
                        </TooltipContent>
                    </Tooltip>
                </TooltipProvider>
            ))}
        </div>
    );
};
