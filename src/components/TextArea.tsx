import { useState } from "react";
import Warning from "./Warning";

type TextAreaType = {
    textareaText: string;
    setTextareaText: React.Dispatch<React.SetStateAction<string>>;
};

export default function TextArea({
    textareaText,
    setTextareaText,
}: TextAreaType) {
    const [warningMessage, setWarningMessage] = useState("");

    const handleTextAreaChange = (
        e: React.ChangeEvent<HTMLTextAreaElement>
    ) => {
        let text: string = e.currentTarget.value;

        if (text.includes("<script>")) {
            setWarningMessage("No script tag allowed!");
            text = text.replace("<script>", "");
        } else if (text.includes("@")) {
            setWarningMessage("No @ symbol allowed!");
            text = text.replace("@", "");
        } else if (warningMessage) {
            setWarningMessage("");
        }

        setTextareaText(text);
    };

    return (
        <div className="md:basis-2/3 h-[20rem] md:h-[30rem] relative">
            <textarea
                value={textareaText}
                placeholder="Enter your text"
                spellCheck="false"
                className="w-full text-lg px-7 py-5 h-full resize-none outline-none "
                onInput={handleTextAreaChange}
            />
            {warningMessage ? (
                <Warning
                    warningMessage={warningMessage}
                    className="absolute bottom-1 left-3"
                />
            ) : null}
        </div>
    );
}
