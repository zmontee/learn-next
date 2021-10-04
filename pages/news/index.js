import Router from "next/router";

const News = () => {
    return (
        <>
            <ul>
                <li>1</li>
                <li>1</li>
                <li>1</li>
                <li>1</li>
            </ul>
            <button onClick={() => {
                Router.push('/')
            }}>HOME</button>
        </>

    )
}

export default News;