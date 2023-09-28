import {
    ChatBubbleBottomCenterTextIcon,
    ClockIcon,
    BookmarkIcon as OutlineBookmarkIcon,
    HeartIcon as OutlineHeartIcon,
} from '@heroicons/react/24/outline';
import { BookmarkIcon, HeartIcon } from '@heroicons/react/24/solid';
import Link from "next/link";

const Mobile = ({ data }) => {
    return (
        <div className={'flex md:hidden gap-x-4 overflow-auto pb-5'}>
            {data?.map((category) => {
                return (
                    <Link
                        href={`/blogs/${category?.englishTitle}`}
                        key={category?._id}
                        className={`block border-gray-200 text-gray-400 bg-white rounded-3xl px-3 py-1 whitespace-nowrap text-sm`}
                    >
                        {category?.title}
                    </Link>
                );
            })}
        </div>
    );
};

export default Mobile;
