import Link from "next/link";

const Component = () => {
    return (
        <div>
            <div>Hello</div>
            <p><Link href={"/news"}><a>News</a></Link></p>
        </div>
    )
}

export default Component;