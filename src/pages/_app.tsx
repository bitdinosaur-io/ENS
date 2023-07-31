import "regenerator-runtime/runtime";
import "@/styles/globals.css";
import type { AppProps } from "next/app";
import type { NextPageWithLayout } from "@/types";
import Head from "next/head";
import { useRouter } from "next/router";

import { ThemeProvider } from "@material-tailwind/react";

type AppPropsWithLayout = AppProps & {
  Component: NextPageWithLayout;
};

export default function App({ Component, pageProps }: AppPropsWithLayout) {
  const getLayout = Component.getLayout ?? ((page) => page);
  const router = useRouter();
  const pageKey = router.asPath;

  const theme = {
    tooltip: {
      styles: {
        base: {
          bg: "bg-indigo-100",
          color: "text-black",
          font: "font-body",
          font_weight: "font-medium",
        },
      },
    },
    input: {
      styles: {
        base: {
          container: {
            position: "relative",
            width: "w-calc-table-search",
            minWidth: "min-w-[200px]",
          },
        },
      },
    },
  };
  return (
    <>
      <Head>
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1 maximum-scale=1"
        />
        <title>ENS - Watcher.tools</title>
      </Head>
      <ThemeProvider value={theme}>
        {getLayout(<Component key={pageKey} {...pageProps} />)}
      </ThemeProvider>
    </>
  );
}
