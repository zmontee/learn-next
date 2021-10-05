import Link from "next/link";
import Head from "next/head";

export const MainLayout = ({ children, title = "Next App" }) => {
    return (
        <>
            <Head>
                <title>{title}</title>
            </Head>
            <nav>
                <Link href={"/"}><a>Home</a></Link>
                <Link href={"/news"}><a>News</a></Link>
            </nav>
            {children}
            <style jsx>{`
              nav {
                display: flex;
                flex-direction: column;
              },
              nav a {
                text-decoration: none;
                font-size: 25px;
                color: #0070f3;
              }
              nav a:hover {
                color: aqua;
              }
            `}</style>
        </>
    )
}