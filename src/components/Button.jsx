const Button = ({
    label,
    iconURL,
    backgroundColor,
    borderColor,
    textColor,
    fullWidth,
}) => {
    return (
        <button
            className={`flex justify-center items-center gap-2 px-7 py-4 font-montserrat text-lg leading-none  rounded-full ${
                backgroundColor
                    ? `${backgroundColor} ${textColor} ${borderColor}`
                    : "btn-primary border border-coral-red"
            } ${fullWidth && "w-full"}`}
        >
            {label}{" "}
            {iconURL && (
                <img
                    src={iconURL}
                    alt="arrow right icon"
                    className="ml-2 rounded-full w-5 h-5"
                />
            )}
        </button>
    );
};

export default Button;
