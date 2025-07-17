export default function GrowthSteps() {
    const listItems = [
        {
            title: 'Production Growth',
            description: 'Sweaters produced per day increased from 2 → 12.',
        },
        {
            title: 'Income Growth',
            description: 'Daily earnings rose from UGX 40,000 → UGX 240,000.',
        },
        {
            title: 'Skills Acquired',
            description: 'Training in record-keeping, marketing, and strategic planning.',
        },
        {
            title: 'Community Visibility',
            description: 'Increased recognition and new partnership opportunities.',
        },
    ];

    return <div className="grid grid-cols-1 items-center justify-center gap-4 md:grid-cols-4">
    {listItems.map((item, index) => (
        <div
            key={index}
            className="bg-secondary/5 flex h-full w-full flex-col items-center justify-center rounded-2xl px-6 py-5 text-center shadow-md"
        >
            <h2 className="text-secondary text-xl font-semibold lg:text-2xl">{item.title}</h2>
            <p className="mt-2 w-full text-lg text-[#585858] sm:text-xl">{item.description}</p>
        </div>
    ))}
</div>
}
