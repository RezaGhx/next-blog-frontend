import {
  ChatBubbleBottomCenterTextIcon,
  ClockIcon,
} from '@heroicons/react/24/outline';
import { BookmarkIcon, HeartIcon } from '@heroicons/react/24/solid';

const Posts = () => {
  return (
    <>
      {[
        'nextjs.png',
        'react.png',
        'vuejs.png',
        'react-native.png',
        'nextjs.png',
        'react.png',
      ].map((item, index) => {
        return (
          <div
            key={index}
            className={
              'col-span-6 md:col-span-3 lg:col-span-2 bg-white rounded-3xl p-2'
            }
          >
            <div className={'aspect-w-16 aspect-h-9'}>
              {/* <Image src={`/images/${item}`} alt={'course image'} className={'rounded-2xl'} width={1000} height={1000}/> */}
              <img
                src={`/images/${item}`}
                alt={'course image'}
                className={
                  'rounded-2xl w-full h-full object-center object-cover'
                }
              />
            </div>
            <div className={'bg-gray-50 rounded-2xl p-2'}>
              <h2 className={'mb-4'}>بررسی کامل ریکت و ریکت نیتیو</h2>
            </div>
            <div className={'flex items-center justify-between mb-7'}>
              <div className={'flex items-center'}>
                <img
                  src={'/images/nextjs.png'}
                  alt={'course image'}
                  className={'rounded-full w-6 h-6 ring-2 ring-slate-500 ml-2'}
                />
                <span className={'text-sm text-slate-400'}>رضا غفوری</span>
              </div>
              <span
                className={
                  'text-xs px-2 py-1 rounded-xl bg-blue-100 text-blue-600 hover:bg-blue-600 hover:text-blue-100 transition-all duration-300 cursor-pointer'
                }
              >
                جاوااسکریپت
              </span>
            </div>
            <div className={'flex items-center justify-between'}>
              <div className={'flex text-xs'}>
                <span
                  className={
                    'flex px-2 py-1 rounded-xl bg-red-100 text-red-600 hover:bg-red-600 hover:text-red-100 transition-all duration-300 cursor-pointer'
                  }
                >
                  12
                  <HeartIcon className={'w-4 h-4 mr-2'} />
                </span>
                <span
                  className={
                    'flex px-2 py-1 rounded-xl bg-slate-100 text-slate-600 hover:bg-slate-600 hover:text-slate-100 transition-all duration-300 cursor-pointer'
                  }
                >
                  9
                  <ChatBubbleBottomCenterTextIcon className={'w-4 h-4 mr-2'} />
                </span>
                <span
                  className={
                    'flex px-2 py-1 rounded-xl bg-blue-100 text-blue-600 hover:bg-blue-600 hover:text-blue-100 transition-all duration-300 cursor-pointer'
                  }
                >
                  <BookmarkIcon className={'w-4 h-4'} />
                </span>
              </div>
              <div className={'flex items-center text-slate-400'}>
                <ClockIcon className={'w-4 h-4 ml-1'} />
                <span className={'text-xs'}>زمان مطالعه 20 دقیقه</span>
              </div>
            </div>
          </div>
        );
      })}
    </>
  );
};

export default Posts;
