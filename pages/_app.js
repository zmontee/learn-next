import '../styles/main.css';

export default function MyApp({ Component, pageProps }) {
    return (
        <>
            <Component {...pageProps} />
{/*            <style jsx global>{`
              body {
                font-family: 'Gemunu Libre', sans-serif;
              }
            `}</style>*/}
        </>
    )
}