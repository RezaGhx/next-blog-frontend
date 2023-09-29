import axios from 'axios';

export default function PostSlug({post}) {
    return (
        <div>{post?.text}</div>
    );
}

export async function getServerSideProps(context) {
    const {query} = context;
    const {data} = await axios.get(
        `http://localhost:5000/api/posts/${query?.postSlug}`
    );
    return {
        props: {
            post: data?.data
        },
    };
}
