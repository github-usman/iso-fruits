import Head from "next/head";

export default function Custom404() {
    return (
        <div className="main-404">
            <Head>
                <title>Page Not Found | RegisterKaro</title>
                <meta name="description" content="The Official RegisterKaro" />
                <link rel="icon" href="/favicon.ico" />
                <link rel="canonical" href="https://www.registerkaro.in/404" />
                <meta property="og:title" content="Page Not Found | RegisterKaro" />
                <meta property="og:description" content="The Official RegisterKaro" />
            </Head>
            <div>
                <h1>404 Page Not Found</h1>
                <p>The page you are looking for is unavailable. It might have been removed, had its name changed or moved.</p>
            </div>
        </div>
    )
}