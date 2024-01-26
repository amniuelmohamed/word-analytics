type AnalyticsType = {
    children: React.ReactNode;
};

export default function Analytics({ children }: AnalyticsType) {
    return <div className="grid grid-cols-2 md:basis-1/3">{children}</div>;
}
