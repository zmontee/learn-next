import {useRouter} from "next/router";
import {MainLayout} from "../../components/MainLayout";

const New = () => {
    const router = useRouter();

    return (
        <MainLayout>
            {router.query.id && <p>New {router.query.id}</p>}
        </MainLayout>
    )
}

export default New;