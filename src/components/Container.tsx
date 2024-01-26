import { useState } from "react";
import Analytics from "./Analytics";
import Stat from "./Stat";
import TextArea from "./TextArea";
import { FACEBOOK_MAX_CHARS, INSTAGRAM_MAX_CHARS } from "../lib/constants";

export default function Container() {
    const [textareaText, setTextareaText] = useState("");

    const charsCount = textareaText.length;
    const wordsCount = textareaText
        .split(" ")
        .filter((word) => word !== "").length;

    return (
        <main className="mt-16 flex flex-col md:flex-row shadow rounded-xl overflow-hidden">
            <TextArea
                textareaText={textareaText}
                setTextareaText={setTextareaText}
            />
            <Analytics>
                <Stat number={wordsCount} title="Words" />
                <Stat number={charsCount} title="Characters" />
                <Stat
                    number={INSTAGRAM_MAX_CHARS - charsCount}
                    title="Instagram"
                />
                <Stat
                    number={FACEBOOK_MAX_CHARS - charsCount}
                    title="Facebook"
                />
            </Analytics>
        </main>
    );
}
