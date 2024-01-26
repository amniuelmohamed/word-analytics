type WarningProps = React.ComponentPropsWithoutRef<"p"> & {
    warningMessage: string;
};

export default function Warning({ warningMessage, ...rest }: WarningProps) {
    return (
        <p {...rest} style={{ color: "red", fontSize: "14px" }}>
            {warningMessage}
        </p>
    );
}
