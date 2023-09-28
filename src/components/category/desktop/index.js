import {
    ChevronDownIcon,
} from '@heroicons/react/24/outline';
import Link from 'next/link';
import {useState} from 'react';

const Desktop = ({data}) => {
    const [open, setOpen] = useState(false);
    return (
        <div className={'hidden md:block md:row-span-2 md:col-span-3'}>
            <div className={'bg-white rounded-3xl overflow-hidden'}>
                <div
                    className={
                        'flex items-center justify-between p-4 cursor-pointer bg-purple-400'
                    }
                    onClick={() => setOpen(!open)}
                >
                    <span>دسته بندی مقالات</span>
                    <ChevronDownIcon
                        className={`w-6 h-6 stroke-purple-700 transition-all duration-200 ${
                            open ? 'rotate-180' : 'rotate-0'
                        }`}
                    />
                </div>
                <div
                    className={`transition-all duration-200 ${
                        open ? 'block' : 'hidden'
                    }`}
                >
                    <Link
                        href={'/blogs'}
                        className={'block pr-4 py-2 hover:bg-purple-50 mb-1'}
                    >
                        همه مقالات
                    </Link>
                    {data?.map((category) => {
                        return (
                            <Link
                                href={`/blogs/${category?.englishTitle}`}
                                key={category?._id}
                                className={`block pr-4 py-2 hover:bg-purple-50 mb-1`}
                            >
                                {category?.title} - {category?.color}
                            </Link>
                        );
                    })}
                </div>
            </div>
        </div>
    );
};

export default Desktop;
