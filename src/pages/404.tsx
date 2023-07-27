import type { NextPageWithLayout } from "@/types";
import { NextSeo } from "next-seo";
import { useRouter } from "next/router";
import { useIsMounted } from "@/lib/hooks/use-is-mounted";
import RootLayout from "@/layouts/_root-layout";
import ErrorDarkImage from "@/asset/images/404-dark.svg";
import AnchorLink from "@/components/functions/links/anchor-link";
import Button from "@/components/functions/button";
import routes from "@/config/routes";
import Image from "next/image";
import ErrorPic from "@/components/imgs/Error404.svg";

const ErrorPage: NextPageWithLayout = () => {
  const router = useRouter();
  const {
    query: { ...restQuery },
  } = router;

  const isMounted = useIsMounted();

  return (
    <>
      <NextSeo
        title="404 Not Found - ord.watcher.tools"
        description="Ordinals BRC-20 Watcher.tools BTC Bitcoin tools Coin BlockChain Analysis"
      />
      <div className="flex max-w-full flex-col items-center justify-center text-center">
        <div className="relative w-36 max-w-full sm:w-[200px] xl:w-[300px] 3xl:w-[400px]">
          {isMounted && <Image src={ErrorPic} alt="NotFound" />}
        </div>

        <h2 className="mb-2 mt-5 text-base font-coming font-bold uppercase tracking-wide text-gray-900 dark:text-white sm:mb-4 sm:mt-10 sm:text-xl 3xl:mt-12 3xl:text-2xl">
          Error! Not Found
        </h2>

        <p className="mb-4 max-w-full text-xs font-coming leading-loose tracking-tight text-gray-600 dark:text-gray-400 sm:mb-6 sm:w-[430px] sm:text-sm sm:leading-loose">
          Sorry, the page you are looking for might be renamed, removed, or
          might never exist.
        </p>
        <AnchorLink
          href={{
            pathname: routes.home,
            query: restQuery,
          }}
        >
          <Button shape="rounded">Back to Home</Button>
        </AnchorLink>
      </div>
    </>
  );
};

ErrorPage.getLayout = function getLayout(page) {
  return (
    <RootLayout contentClassName="flex items-center justify-center">
      {page}
    </RootLayout>
  );
};

export default ErrorPage;
