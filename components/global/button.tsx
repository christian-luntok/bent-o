import clsx from "clsx";
import Link from "next/link";
import type { ButtonProps } from "@/types";

const ButtonVariant = {
    primary: "btn--primary",
    secondary: "btn--secondary",
    outline: "btn--outline",
    black: "btn--black",
    white: "btn--white",
    text: "btn--text"
};

export const Button = ({ children, href = "", action = "", variant = "primary", className = "", type = "link" }: ButtonProps) => {
    const Element = type === "button" ? "button" : Link;
    const attributes = {
        role: "button",
        ...(type === "button" && action ? { type: action } : {}),
        ...(type === "link" && href ? { href: href } : {}),
        className: clsx("btn", ButtonVariant[variant], className)
    };

    return <Element {...attributes}>{children}</Element>;
};
