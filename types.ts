import { HTMLAttributeAnchorTarget } from "react";

export type Site = {
    siteUrl: string;
    author: string;
    desc: string;
    title: string;
    ogImage: string;
    keywords: string;
};

export type ButtonProps = {
    link?: string;
    action?: "button" | "submit" | "reset" | undefined;
    variant?: string;
    className?: string;
    mode?: "button" | "link";
    target?: HTMLAttributeAnchorTarget | undefined;
    children?: React.ReactNode;
};

export type ButtonVariant = {
    primary: string;
    secondary: string;
    outline: string;
    black: string;
    white: string;
    text: string;
    [key: string]: string; // This is the index signature
};
