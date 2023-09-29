import {
    ChatBubbleBottomCenterTextIcon,
    ClockIcon,
    BookmarkIcon as OutlineBookmarkIcon,
    HeartIcon as OutlineHeartIcon,
} from '@heroicons/react/24/outline';
import {BookmarkIcon, HeartIcon} from '@heroicons/react/24/solid';
import Link from "next/link";

const Posts = ({data}) => {
    return (
        <>
            {data?.docs?.map((item, index) => {
                return (
                    <div
                        key={index}
                        className={
                            'col-span-6 md:col-span-3 lg:col-span-2 bg-white rounded-3xl p-2 max-h-[330px]'
                        }
                    >
                        <div className={'aspect-w-16 aspect-h-9'}>
                            {/* <Image src={`/images/${item}`} alt={'course image'} className={'rounded-2xl'} width={1000} height={1000}/> */}
                            <Link href={`posts/${item?.hashId}/${item?.slug}`}>
                                <img
                                    src={`/images/${item?.coverImage}`}
                                    alt={item?.slug}
                                    className={
                                        'rounded-2xl w-full h-full object-center object-cover'
                                    }
                                />
                            </Link>
                        </div>
                        <Link href={`posts/${item?.hashId}/${item?.slug}`}>
                            <div className={'bg-gray-50 rounded-2xl p-2'}>
                                <h2 className={'mb-4'}>{item?.title}</h2>
                            </div>
                        </Link>
                        <div className={'flex items-center justify-between mb-7'}>
                            <div className={'flex items-center'}>
                                <img
                                    src={`/images/${item?.coverImage}`}
                                    alt={item?.slug}
                                    className={'rounded-full w-6 h-6 ring-2 ring-slate-500 ml-2'}
                                />
                                <span className={'text-sm text-slate-400'}>رضا غفوری</span>
                            </div>
                            <Link href={`/blogs/${item?.categorySlug}`}>
                                <span
                                    className={
                                        'text-xs px-2 py-1 rounded-xl bg-blue-100 text-blue-600 hover:bg-blue-600 hover:text-blue-100 transition-all duration-300 cursor-pointer'
                                    }
                                >
                                    {item?.titleBrief}
                                </span>
                            </Link>
                        </div>
                        <div className={'flex items-center justify-between'}>
                            <div className={'flex text-xs'}>
                <span
                    className={
                        'flex px-2 py-1 rounded-xl bg-red-100 text-red-600 hover:bg-red-600 hover:text-red-100 transition-all duration-300 cursor-pointer'
                    }
                >
                  {item?.likesCount}
                    {item?.isLiked ? (
                        <HeartIcon className={'w-4 h-4 mr-2'}/>
                    ) : (
                        <OutlineHeartIcon className={'w-4 h-4'}/>
                    )}
                </span>
                                <span
                                    className={
                                        'flex px-2 py-1 rounded-xl bg-slate-100 text-slate-600 hover:bg-slate-600 hover:text-slate-100 transition-all duration-300 cursor-pointer'
                                    }
                                >
                  {item?.commentsCount}
                                    <ChatBubbleBottomCenterTextIcon className={'w-4 h-4 mr-2'}/>
                </span>
                                <span
                                    className={
                                        'flex px-2 py-1 rounded-xl bg-blue-100 text-blue-600 hover:bg-blue-600 hover:text-blue-100 transition-all duration-300 cursor-pointer'
                                    }
                                >
                  {item?.isBookmarked ? (
                      <BookmarkIcon className={'w-4 h-4'}/>
                  ) : (
                      <OutlineBookmarkIcon className={'w-4 h-4'}/>
                  )}
                </span>
                            </div>
                            <div className={'flex items-center text-slate-400'}>
                                <ClockIcon className={'w-4 h-4 ml-1'}/>
                                <span className={'text-xs'}>
                  زمان مطالعه {item?.readingTime} دقیقه
                </span>
                            </div>
                        </div>
                    </div>
                );
            })}
        </>
    );
};

export default Posts;
