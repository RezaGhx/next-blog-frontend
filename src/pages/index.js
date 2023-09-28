import {
  ChevronDownIcon,
  AdjustmentsHorizontalIcon,
} from '@heroicons/react/24/outline';
import Link from 'next/link';
import { useState } from 'react';
import Posts from 'components/posts';
import Mobile from "components/category/mobile";
import axios from 'axios';

export default function Home({ blogs, postCategories }) {
  const [open, setOpen] = useState(false);
  return (
    <div className={'bg-slate-600'}>
      <div className={'container mx-auto lg:max-w-screen-xl px-4 md:px-0'}>
        <div
          className={
            'grid gap-4 md:grid-cols-12 md:grid-rows-[60px_minmax(30px,_1fr)] bg-gray-100 min-h-screen'
          }
        >
          {/* desktop category */}
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
                {postCategories?.map((category) => {
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
          {/* mobile category */}
            <Mobile data={postCategories} />
          {/* desktop sortbar */}
          <div className={'hidden md:block md:col-span-9'}>
            <div className={'bg-white rounded-3xl px-4 flex items-center'}>
              <div className={'flex gap-x-2 items-center ml-4'}>
                <AdjustmentsHorizontalIcon className={'w-6 h-6'} />
                <span>مرتب سازی</span>
              </div>
              <ul className={'flex gap-x-4 items-center'}>
                <li className={'cursor-pointer text-gray-700 py-4'}>
                  پربازدیدترین
                </li>
                <li className={'cursor-pointer text-gray-700 py-4'}>
                  محبوبترین
                </li>
                <li className={'cursor-pointer text-gray-700 py-4'}>
                  جدیدترین
                </li>
              </ul>
            </div>
          </div>
          {/* blogs section */}
          <div className={'md:col-span-9 grid grid-cols-6 gap-8'}>
            <Posts data={blogs} />
          </div>
        </div>
      </div>
    </div>
  );
}

export async function getServerSideProps(context) {
  const { data: result } = await axios.get(
    'http://localhost:5000/api/posts?page=1&limit=10'
  );
  const { data: postCategories } = await axios.get(
    'http://localhost:5000/api/post-category'
  );
  const { data } = result;
  return {
    props: {
      blogs: data,
      postCategories: postCategories?.data,
    },
  };
}
