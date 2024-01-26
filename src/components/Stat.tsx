type StatProps = {
    number: number;
    title: string;
};

export default function Stat({ number, title }: StatProps) {
    return (
        <div className="flex flex-col justify-center items-center gap-2 bg-[#f3f6fb] text-gray-500 p-5 border border-gray-200 uppercase text-[0.75rem] font-medium">
            <span
                className={`font-semibold text-4xl ${
                    number < 0 ? "text-red-600" : ""
                }`}
            >
                {number}
            </span>
            {title}
        </div>
    );
}
