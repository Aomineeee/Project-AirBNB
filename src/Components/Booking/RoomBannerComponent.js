import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

function RoomBannerComponent() {
    let { roomDetail } = useSelector((root) => root.roomSlicer);
    let { userInfor } = useSelector((root) => root.userSlice)
    const [userState, setUserState] = useState()
    useEffect(() => {
        setUserState(userInfor)
    })

    let { name, locationId, image } = roomDetail
    let renderUserInteraction = () => {
        return (userState) ? <div className="h-full w-full flex justify-between items-center">
            <div className=''>
                <div className="flex justify-center items-center">
                    <span>Xin chào {userState.user.name} </span>
                </div>
                <div className='text-grayAir font-bold'>
                    {locationId && <span>Địa chỉ phòng tại {locationId?.name} - {locationId?.province}</span>}
                </div>
            </div>
            <div className='flex mt-2'>
                <button type="button" className="flex mx-2">
                    <div className="flex">
                        <span className="mx-2">
                            <svg viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" role="presentation" focusable="false" style={{ display: 'block', fill: 'none', height: 16, width: 16, stroke: 'currentcolor', strokeWidth: 2, overflow: 'visible' }}><g fill="none"><path d="M27 18v9a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2v-9" /><path d="M16 3v23V3z" /><path d="M6 13l9.293-9.293a1 1 0 0 1 1.414 0L26 13" /></g></svg>
                        </span>Chia Sẻ
                    </div>
                </button>
                <button type="button" className="flex mx-2">
                    <div className="flex">
                        <span className="mx-2"><svg viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" role="presentation" focusable="false" style={{ display: 'block', fill: 'none', height: 16, width: 16, stroke: 'currentcolor', strokeWidth: 2, overflow: 'visible' }}><path d="m16 28c7-4.733 14-10 14-17 0-1.792-.683-3.583-2.05-4.95-1.367-1.366-3.158-2.05-4.95-2.05-1.791 0-3.583.684-4.949 2.05l-2.051 2.051-2.05-2.051c-1.367-1.366-3.158-2.05-4.95-2.05-1.791 0-3.583.684-4.949 2.05-1.367 1.367-2.051 3.158-2.051 4.95 0 7 7 12.267 14 17z" /></svg></span>
                        Yêu thích
                    </div>
                </button>
            </div>
        </div> : <div>
            <div className="text-red-400 font-semibold">Vui lòng đăng nhập để xem thông tin</div>
            <Link to={'/signin'}>Đăng nhập</Link>
        </div>
    }

    let renderBanner = () => {
        return <>
            <h1 className='text-3xl font-medium'>{name}</h1>
            {renderUserInteraction()}
            {/* imgs section */}
            <div className='h-80 flex gap-2 rounded-xl overflow-hidden mx-5 mt-7'>
                {/* left imgs*/}
                <div className=' w-1/2 h-full'>
                    <img className='cursor-pointer hover:opacity-70 transition-all ease h-full w-full' src={image} alt="..." />
                </div>
                {/* right imgs */}
                <div className=' w-1/2 h-full flex gap-2'>
                    <div className="w-full h-full flex flex-col gap-2">
                        <img className='cursor-pointer hover:opacity-70 transition-all ease h-1/2 w-full' src={image} alt="..." />
                        <img className='cursor-pointer hover:opacity-70 transition-all ease h-1/2 w-full' src={image} alt="..." />
                    </div>
                    <div className="w-full h-full flex flex-col gap-2">
                        <img className='cursor-pointer hover:opacity-70 transition-all ease h-1/2 w-full' src={image} alt="..." />
                        <img className='cursor-pointer hover:opacity-70 transition-all ease h-1/2 w-full' src={image} alt="..." />
                    </div>
                </div>
            </div>
        </>
    }

    return (<>{renderBanner()}</>)
}

export default RoomBannerComponent