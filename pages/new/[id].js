import {useRouter} from "next/router";

const New = () => {
    const router = useRouter();

    return (
        <div>
            {router.query.id && <p>New {router.query.id}</p>}
        </div>
    )
}

export default New;