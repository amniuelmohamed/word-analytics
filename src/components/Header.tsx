import Background from "./Background";

export default function Header() {
    return (
        <header className="mt-[5rem]">
            <Background />
            <h1 className="uppercase text-center text-white text-[2.75rem] sm:text-6xl font-thin tracking-wide">
                <span className="font-semibold">Word</span>Analytics
            </h1>
        </header>
    );
}
