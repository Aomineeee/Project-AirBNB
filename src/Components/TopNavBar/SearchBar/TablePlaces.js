import React from 'react'
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

function TablePlaces({ searchStr }) {
    const { places } = useSelector(state => state.placesSlicer)
    let renderTable = () => {
        var filtered = places.filter(function (el) {
            let valid =
                el.name != null
                && el.province != null
                &&
                (el.name.toLowerCase().includes(searchStr.toLowerCase())
                    || el.province.toLowerCase().includes(searchStr.toLowerCase()))
            if (valid) {
                return el
            }
        });
        return filtered.map((place, index) => {
            return (
                <Link to={`/location/${place._id}`} className='flex items-center bg-gray-100 my-2' key={index} >
                    <img className='rounded-xl' src={place?.image} alt="Không có hình ảnh" width={120} height={120} />
                    <div className='ml-2'>
                        <p className='text-blue-600 font-bold text-lg'>{place?.province}</p>
                        <p className='font-medium'>{place?.name}</p>
                    </div>
                </Link>)
        })
    }
    return (
        <div className='h-56 overflow-y-auto'>
            {renderTable()}
        </div>
    )
}

export default TablePlaces