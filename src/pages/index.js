import Link from "next/link";

export default function Home() {
    return (
        <div className={'bg-slate-600'}>
            <Link href={'/blogs'}>به بلاگز</Link>
        </div>
    );
}