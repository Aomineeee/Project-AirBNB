import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getReviewsByRoom } from '../../../reduxStore/roomSlicer'

function ReviewRoom({ roomId }) {
    let { reviews } = useSelector((root) => root.roomSlicer)
    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(getReviewsByRoom(roomId))
    }, [roomId])

    let review = () => {
        return reviews.map((review, index) => {
            return (
                <div className="py-8 px-5 lg:w-1/2" key={index}>
                    <div className="flex items-start">
                        <div className="w-12 flex-shrink-0 flex flex-col text-center leading-none">
                            <a className="inline-flex items-center">
                                {review.userId ?
                                    <img className="w-full rounded-full flex-shrink-0 object-cover object-center" src={review.userId.avatar} alt="avatar" />
                                    :
                                    <img className="w-full rounded-full flex-shrink-0 object-cover object-center" src="https://dummyimage.com/103x103" alt="avatar" />
                                }
                            </a>
                        </div>
                        <div className="flex-grow ml-3">
                            <h1 className="title-font text-xl font-medium text-gray-900 ">{review.userId ? review.userId.name : "Ẩn danh"}</h1>
                            <p className="title-font text-sm font-normal text-gray-400 ">Ngày tạo: {review.created_at}</p>
                        </div>
                    </div>
                    <div className="">{review.content}</div>
                </div >)
        })
    }

    let renderReviews = () => {
        return (<section className="text-gray-600 body-font">
            {reviews ? (<>
                <div className='text-xl font-bold text-red-500'>4.83 <i className="fa fa-splotch"></i> ( {reviews.length} đánh giá)</div>
                <div className="mx-auto">
                    <div className="flex flex-wrap">
                        {review()}
                    </div>
                </div>
            </>) : (<div>Không có đánh giá</div>)}
        </section>
        )
    }
    return (
        <>{renderReviews()}</>
    )
}

export default ReviewRoom