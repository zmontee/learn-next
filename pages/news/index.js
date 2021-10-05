import Router from "next/router";
import Link from "next/link";
import {MainLayout} from "../../components/MainLayout";
import {useEffect, useState} from "react";

const News = ({news}) => {
/*    const [news, setNews] = useState([]);

    useEffect(() => {
        async function load() {
            const responce = await fetch('http://localhost:4200/news');
            const json = await responce.json();

            setNews(json);
        }

        load()
    }, [])*/
    return (
        <MainLayout>
            <ul>
                {news.map(({id, title, body}) => {
                    return (<li key={id}>
                        <Link href={`/new/[id]`} as={`/new/${id}`}><a>{title}</a></Link>
                        <p>{body}</p>
                    </li>)
                })}
            </ul>
{/*            <pre>{JSON.stringify(news, null, 2)}</pre>*/}
            <button onClick={() => {
                Router.push('/')
            }}>HOME</button>
        </MainLayout>

    )
}

News.getInitialProps = async () => {
    const responce = await fetch('http://localhost:4200/news');
    const news = await responce.json();
    return {
        news
    }
}

export default News;