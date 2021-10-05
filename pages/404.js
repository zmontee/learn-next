import Link from 'next/link';
import styles from '../styles/error.module.css';

export default function Custom404() {
    return (
        <>
            <h1 className={styles.error}>Page no found</h1>
            <Link href="/"><a>go home</a></Link>
        </>
    )
}