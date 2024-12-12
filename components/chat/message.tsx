import { TProducts } from '@/types/products';
import React, { FC } from 'react'
import { RecommendationList } from './recommendation-list';
import { Clock } from '@geist-ui/icons'


type TMessageProps = {
    message: string;
    date: Date;
    cardStyles?: string
    containerStyles?: string;
    recommendations?: TProducts[]
}

const Message: FC<TMessageProps> = ({ date, message, recommendations = [], cardStyles = '', containerStyles = '' }) => {
    const time = `${date.getHours()}:${date.getMinutes()}`
    return (
        <div className={`flex flex-col gap-2 ${containerStyles}`}>
            <div className={`border-none w-fit max-w-screen-md rounded-lg p-3 backdrop-blur-3xl`}>
                <div className='flex flex-col gap-2'>
                    <p>{message}</p>
                    {!!recommendations.length && <RecommendationList recommendations={recommendations} />}
                </div>
                <p className='text-gray-500 mt-1 flex items-center gap-1'><Clock size={16} />{time}</p>
            </div>
        </div>
    )
}

export default Message