
export const Button = ({
    className = "",
    size,
    children,
}) => {
    const baseClasses = "relative overflow-hidden rounded-full font-medium focus:outline-none focus-visible:ring-2 focus-visible:ring-primary bg-primary text-primary-foreground transition-all duration-300 ease-in-out hover:bg-primary/90 shadow-lg shadow-primary/25 ";

    const sizeClasses = {
        lg: "py-4 px-8 text-lg",
        default: "py-3 px-6 text-base",
        sm: "py-2 px-4 text-sm",
    }[size || "default"];

    const classes = `${baseClasses} ${sizeClasses} ${className}`;
    return (
        <button className={classes}>
            <span className="relative flex items-center justify-center gap-2">{children}</span>
        </button>
    )
}