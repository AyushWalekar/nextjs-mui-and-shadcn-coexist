import React from "react";
import { ThemeProvider as MuiThemeProvider, createTheme } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import { AppCacheProvider } from "@mui/material-nextjs/v15-pagesRouter";
import { Figtree } from "next/font/google";
import { ThemeProvider, useTheme } from "../contexts/ThemeContext";
import "../styles/styles.scss";

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

    if (!Component) {
        return null;
    }

    return (
        <MuiThemeProvider theme={theme}>
            <CssBaseline />
            <Component {...pageProps} />
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

