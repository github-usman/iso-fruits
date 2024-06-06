import Head from "next/head";
import iso_404_img from "../assets/images/static/iso-fruits/page_404.jpeg";
import logo from "../assets/images/static/iso-fruits/header/logo.svg";
import Image from "next/image";
import Link from "next/link";


export default function Custom404() {
    return (
        <div className="page_not_found">
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
                <Image src={iso_404_img} alt='iso 404 image' className="not-found-image" />
                <p>The page you are looking for is unavailable. It might have been removed, had its name changed or moved.</p>
                <Link href='/'>
                 <Image
                        src={logo}
                        alt="iso Fruits"
                        objectFit="cover"
                        objectPosition="center"
                        className="iso-fruits-logo"
                    />
                </Link>
                
            </div>
        </div>
    )
}