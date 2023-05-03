import Head from "next/head";
import Link from "next/link";

import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

/** @todo
 * 1. SEO 관련 셋팅
 */
export default function Home() {
  return (
    <div className={inter.className}>
      <Head>
        <title>Hackney's Blog</title>
      </Head>
      <Link href="/blog">Blog</Link>
    </div>
  );
}
