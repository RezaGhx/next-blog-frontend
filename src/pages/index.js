import styles from 'styles/Home.module.css';
import {
  ChevronDownIcon,
  AdjustmentsHorizontalIcon,
} from '@heroicons/react/24/outline';
import Link from 'next/link';
import { useState } from 'react';

export default function Home() {
  const [open, setOpen] = useState(false);
  return (
    <div className={'bg-slate-600'}>
      <div className={'container mx-auto lg:max-w-screen-xl'}>
        <div
          className={
            'grid gap-4 md:grid-cols-12 md:grid-rows-[60px_minmax(30px,_1fr)] bg-gray-100 min-h-screen'
          }
        >
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
                  href="#"
                  className={'block pr-4 py-2 hover:bg-purple-50 mb-1'}
                >
                  همه مقالات
                </Link>
                <Link
                  href="#"
                  className={'block pr-4 py-2 hover:bg-purple-50 mb-1'}
                >
                  ریکت
                </Link>
                <Link href="#" className={'block pr-4 py-2 hover:bg-purple-50'}>
                  جاوااسکریپت
                </Link>
              </div>
            </div>
          </div>
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
          <div className={'md:col-span-9 grid grid-cols-6 gap-8'}>
            {[1, 2, 3, 4, 5, 6].map((index) => {
              return (
                <div
                  key={index}
                  className={
                    'col-span-6 md:col-span-3 lg:col-span-2 bg-white rounded-3xl p-2'
                  }
                >
                  <div className={'bg-gray-50 rounded-2xl'}>blog content</div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}
