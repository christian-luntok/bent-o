import type { Metadata } from "next";
import "@styles/globals.scss";
import { SITE } from "@/config";
import { Header } from "@components/global/header";
import { Footer } from "@components/global/footer";

export const metadata: Metadata = {
    title: SITE.title || "Your Title",
    description: SITE.desc || "Your company description.",
    keywords: SITE.keywords || "Your company keywords",
    icons: {
        icon: [
            { url: "/favicon-16x-16.png", sizes: "16x16", type: "image/png" },
            { url: "/favicon-32x-32.png", sizes: "32x32", type: "image/png" }
        ],
        shortcut: "/android-chrome-192x192.png",
        apple: "/apple-touch-icon.png",
        other: {
            rel: "apple-touch-icon",
            url: "/apple-touch-icon.png"
        }
    },
    openGraph: {
        title: SITE.title || "Your Title",
        description: SITE.desc || "Your company description.",
        authors: SITE.author || "Your Author",
        images: [
            {
                url: SITE.ogImage || "https://nextjs.org/og.png", // Must be an absolute URL
                width: 1200,
                height: 630
            }
        ]
    },
    alternates: {
        canonical: SITE.siteUrl || "Canonical URL"
    },
    manifest: "site.webmanifest",
    robots: {
        index: false,
        follow: true,
        nocache: true,
        googleBot: {
            index: true,
            follow: false,
            noimageindex: true,
            "max-video-preview": -1,
            "max-image-preview": "large",
            "max-snippet": -1
        }
    }
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
    return (
        <html lang="en">
            <body className="bg-neutral-200">
                <Header />
                <main className="main grid gap-8">{children}</main>
                <Footer />
            </body>
        </html>
    );
}
