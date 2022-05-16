import React, { Fragment, useCallback, useEffect, useRef, useState } from 'react'
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { setPlaces } from '../../../reduxStore/placesSlicer';
import quanLyViTri from '../../../Service/QuanLyViTri.service';
import TablePlaces from './TablePlaces';

function QuerryPlaces() {
    const [searchStr, setSearchStr] = useState()
    const typeTimeOut = useRef(null)
    const dispatch = useDispatch()
    const debounce = (func) => {
        return function (...args) {
            const context = this;
            if (typeTimeOut.current) {
                clearTimeout(typeTimeOut.current);
            }
            typeTimeOut.current = setTimeout(() => {
                func.apply(context, args);
            }, 500);
        }
    }
    let handleOnChange = (e) => {
        quanLyViTri.LayDSViTri_9()
            .then(res => {
                dispatch(setPlaces(res.data))
                setSearchStr(e.target.value)
            })
    }
    const optimisedVersion = useCallback(
        debounce(handleOnChange), []
    )
    let renderDropDown = () => {
        return searchStr ? (
            <TablePlaces searchStr={searchStr} />
        ) :
            (<Fragment>
                <Link to={`/location/${Math.floor(Math.random() * 10) + 1}`} className="rounded-full px-4 py-2 border-1 border-gray-200 shadow-lg text-lg w-full flex justify-between items-center hover:shadow-xl">
                    <span className="text-primary-color font-semibold text-xl">
                        Tôi Linh Hoạt
                    </span>
                    <i className="fa fa-chevron-right ml-auto text-primary-color"></i>
                </Link>
            </Fragment>)
    }
    return (
        <li className="w-3/12 p-2 dropdown rounded-full cursor-pointer hover:bg-gray-100 transition duration-300">
            <div
                className="dropdown-toggle"
                id="dropdownMenuButton"
                data-toggle="dropdown"
                aria-haspopup="true"
                aria-expanded="false"
            >
                <p className="font-semibold">Địa điểm</p>
                <input
                    className="bg-transparent focus:border-none focus:outline-none"
                    type="search"
                    placeholder="Bạn sắp đi đâu?"
                    onChange={optimisedVersion}
                />
            </div>
            <div className="dropdown-menu mt-6 rounded-4xl w-96 p-8"
                aria-labelledby="dropdownMenuButton">
                <p className="font-semibold mb-6">Đi bất cứ đâu, bất cứ lúc nào</p>
                {renderDropDown()}
            </div>
        </li>
    )
}

export default QuerryPlaces