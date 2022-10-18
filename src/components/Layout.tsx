import Head from "next/head";
import { ReactNode } from "react";
type Props = {
  children: ReactNode;
};

function Layout({ children }: Props) {
  return (
    <>
      <Head>
        <title>specto</title>
      </Head>
      <div>
        {/* <Navbar /> */}
        {children}
      </div>
    </>
  );
}

export default Layout;
