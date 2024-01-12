export type Site = {
    siteUrl: string;
    author: string;
    desc: string;
    title: string;
    ogImage: string;
    keywords: string;
};

export type ButtonProps = {
    href?: string;
    action?: string;
    variant?: string;
    className?: string;
    type?: string | "button" | "link";
    children?: React.ReactNode;
};
