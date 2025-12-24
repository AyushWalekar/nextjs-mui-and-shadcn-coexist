import React from "react";
import { ThemeProvider as MuiThemeProvider, createTheme } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import { AppCacheProvider } from "@mui/material-nextjs/v15-pagesRouter";
import { Figtree } from "next/font/google";
import { ThemeProvider, useTheme } from "../contexts/ThemeContext";
import { ShadcnScope } from "../components/ShadcnScope";
import { Toaster } from "../components/ui/sonner";
import "../styles/styles.scss";
import "../styles/tailwind.css";

const figtree = Figtree({
    subsets: ["latin"],
    display: "swap",
    variable: "--font-figtree"
});

const getTheme = (mode) => {
    return createTheme({
        palette: {
            mode,
            primary: {
                main: "#7b2cbf", // Purple
                light: "#9d4edd",
                dark: "#5a189a",
            },
            background: {
                default: mode === "light" ? "#ffffff" : "#1a0a2e", // White for light, dark purple/black for dark
                paper: mode === "light" ? "#ffffff" : "#1a0a2e",
            },
            text: {
                primary: mode === "light" ? "#1a0a2e" : "#ffffff",
                secondary: mode === "light" ? "#5a189a" : "#c77dff",
            },
        },
        typography: {
            fontFamily: figtree.style?.fontFamily
                ? [figtree.style.fontFamily, "system-ui", "sans-serif"].join(",")
                : ["Figtree", "system-ui", "sans-serif"].join(",")
        },
        shape: {
            borderRadius: 12
        },
        components: {
            MuiButton: {
                defaultProps: {
                    variant: "contained"
                }
            }
        }
    });
};

function AppContent({ Component, pageProps }) {
    const { mode } = useTheme();
    const theme = React.useMemo(() => getTheme(mode), [mode]);

    React.useEffect(() => {
        if (figtree.className) {
            document.documentElement.classList.add(figtree.className);
        }
    }, []);

    React.useEffect(() => {
        document.documentElement.classList.toggle("dark", mode === "dark");
    }, [mode]);

    React.useEffect(() => {
        // Radix portals (Sheet/Dialog/Select/etc.) render into <body>. Our shadcn tokens are
        // scoped to `.shadcn-scope`, so we also apply that class to <body> only for shadcn pages
        // to ensure portaled content inherits the correct CSS variables.
        if (!Component) return;
        const enabled = Boolean(Component.useShadcn);
        document.body.classList.toggle("shadcn-scope", enabled);
        return () => {
            document.body.classList.remove("shadcn-scope");
        };
    }, [Component]);

    if (!Component) {
        return null;
    }

    const page = <Component {...pageProps} />;
    const content = Component.useShadcn ? <ShadcnScope>{page}</ShadcnScope> : page;

    return (
        <MuiThemeProvider theme={theme}>
            <CssBaseline />
            {content}
            <Toaster />
        </MuiThemeProvider>
    );
}

export default function App({ Component, pageProps }) {
    return (
        <AppCacheProvider>
            <ThemeProvider>
                <AppContent Component={Component} pageProps={pageProps} />
            </ThemeProvider>
        </AppCacheProvider>
    );
}

