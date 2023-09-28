import Posts from 'components/posts';
import Mobile from "components/category/mobile";
import axios from 'axios';
import SortBar from "components/sortBar";
import Desktop from "components/category/desktop";
import queryString from 'query-string';

export default function CategorySlug({blogs, postCategories}) {
    return (
        <div className={'bg-slate-600'}>
            <div className={'container mx-auto lg:max-w-screen-xl px-4 md:px-0'}>
                {/* mobile category */}
                <Mobile data={postCategories}/>
                <div
                    className={
                        'grid gap-4 md:grid-cols-12 md:grid-rows-[60px_minmax(30px,_1fr)] bg-gray-100 min-h-screen'
                    }
                >
                    {/* desktop category */}
                    <Desktop data={postCategories}/>
                    {/* desktop sort bar */}
                    <div className={'hidden md:block md:col-span-9'}>
                        <SortBar/>
                    </div>
                    {/* blogs section */}
                    <div className={'md:col-span-9 grid grid-cols-6 gap-8'}>
                        <Posts data={blogs}/>
                    </div>
                </div>
            </div>
        </div>
    );
}

export async function getServerSideProps(context) {
    const {query} = context;
    const {data: result} = await axios.get(
        `http://localhost:5000/api/posts?${queryString.stringify(query)}`
    );
    const {data: postCategories} = await axios.get(
        'http://localhost:5000/api/post-category'
    );
    const {data} = result;
    return {
        props: {
            blogs: data,
            postCategories: postCategories?.data,
        },
    };
}
