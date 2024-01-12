import clsx from "clsx";
import Link from "next/link";
import type { ButtonProps, ButtonVariant } from "@/types";

const ButtonVariant: ButtonVariant = {
    primary: "btn--primary",
    secondary: "btn--secondary",
    outline: "btn--outline",
    black: "btn--black",
    white: "btn--white",
    text: "btn--text"
};

export const Button: React.FC<ButtonProps> = ({ children, link = "", action = "button", variant = "primary", className = "", mode = "link", target = "_self" }: ButtonProps) => {
    const Element = mode === "button" ? "button" : Link;

    const commonAttributes = {
        role: "button",
        href: link ? link : "#",
        target: mode === "link" ? target : "_self",
        className: clsx("btn", ButtonVariant[variant], className)
    };

    const buttonAttributes = {
        ...(mode === "button" && action ? { type: action } : {})
    };

    const attributes = {
        ...commonAttributes,
        ...(mode === "button" ? buttonAttributes : {})
    };

    return <Element {...attributes}>{children}</Element>;
};
