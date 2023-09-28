import {
    AdjustmentsHorizontalIcon,
} from '@heroicons/react/24/outline';

const SortBar = () => {
    return (
        <div className={'bg-white rounded-3xl px-4 flex items-center'}>
            <div className={'flex gap-x-2 items-center ml-4'}>
                <AdjustmentsHorizontalIcon className={'w-6 h-6'}/>
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
    );
};

export default SortBar;
