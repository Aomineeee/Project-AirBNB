import React, { useEffect, useState } from 'react'
import { useSelector, useDispatch } from 'react-redux';
import { Menu, Dropdown } from "antd";
import { DownOutlined } from "@ant-design/icons";
import { setGuestNumber } from '../../../reduxStore/bookingSlicer';


function GuestNumber() {
    let { guestNumber } = useSelector((root) => root.bookingSlicer.bookingDetail);
    const [stateGuest, setStateGuest] = useState(guestNumber);

    const dispatch = useDispatch()
    let handleGuestNumber = (value) => {
        setStateGuest(value);
        dispatch(setGuestNumber(value))
    }

    useEffect(() => {
        setStateGuest(guestNumber);
    }, [guestNumber])

    const menu = (
        <Menu>
            <Menu.Item
                key={1}
                onClick={() => {
                    handleGuestNumber(1);
                }}
            >
                1 khách
            </Menu.Item>
            <Menu.Item
                key={2}
                onClick={() => {
                    handleGuestNumber(2);
                }}
            >
                2 khách
            </Menu.Item>
            <Menu.Item
                key={3}
                onClick={() => {
                    handleGuestNumber(3);
                }}
            >
                3 khách
            </Menu.Item>
            <Menu.Item danger
                key={4}
                onClick={() => {
                    handleGuestNumber('Nhóm');
                }}
            >Nhóm trên 4 người</Menu.Item>
        </Menu>
    );
    return (
        <Dropdown overlay={menu} className="border-0">
            <div className="mt-1 border-1 px-2 py-2 rounded-md inline">
                <a
                    className="ant-dropdown-link"
                    onClick={(e) => e.preventDefault()}
                >
                    {stateGuest} <DownOutlined />
                </a>
            </div>
        </Dropdown>
    )
}
export default GuestNumber