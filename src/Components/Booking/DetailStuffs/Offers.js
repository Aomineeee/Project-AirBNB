import { Button, Modal } from 'antd';
import React, { useState } from 'react'

function Offers({ data }) {
    const [isModalVisible, setIsModalVisible] = useState(false);
    const showModal = () => {
        setIsModalVisible(true);
    };
    const handleCancel = () => {
        setIsModalVisible(false);
    };

    let renderItems = () => {
        let itemArray = []
        for (const key in data) {
            const element = data[key];
            if (element && typeof element === 'boolean') {
                itemArray.push(key)
            }
        }
        return itemArray.slice(0, 4).map((item, i) => (
            <div className="p-2 sm:w-1/2 w-full" key={i}>
                <div className="bg-gray-100 rounded flex p-4 h-full items-center">
                    {item === 'elevator' && <i className="mr-3 fa-solid fa-elevator"></i>}
                    {item === 'hotTub' && <i className="mr-3 fa fa-hot-tub"></i>}
                    {item === "pool" && <i className="mr-3 fa-solid fa-person-swimming"></i>}
                    {item === "indoorFireplace" && <i className="mr-3 fa-solid fa-fire-burner"></i>}
                    {item === "dryer" && <i className="mr-3 fa-solid fa-dryer"></i>}
                    {item === "gym" && <i className="mr-3 fa-solid fa-dumbbell"></i>}
                    {item === "kitchen" && <i className="mr-3 fa-solid fa-kitchen-set"></i>}
                    {item === "wifi" && <i className="mr-3 fa-solid fa-wifi"></i>}
                    {item === "heating" && <i className="mr-3 fa-solid fa-heat"></i>}
                    {item === "cableTV" && <i className="mr-3 fa fa-tv"></i>}
                    <span className="title-font font-medium">{item}</span>
                </div>
            </div >
        ))
    }
    let renderModal = () => {
        let itemArray = []
        for (const key in data) {
            const element = data[key];
            if (element && typeof element === 'boolean') {
                itemArray.push(key)
            }
        }
        return itemArray.map((item, i) => (
            <div className="p-2 sm:w-1/2 w-full" key={i}>
                <div className="bg-gray-100 rounded flex p-4 h-full items-center">
                    {item === 'elevator' && <i className="mr-3 fa-solid fa-elevator"></i>}
                    {item === 'hotTub' && <i className="mr-3 fa fa-hot-tub"></i>}
                    {item === "pool" && <i className="mr-3 fa-solid fa-person-swimming"></i>}
                    {item === "indoorFireplace" && <i className="mr-3 fa-solid fa-fire-burner"></i>}
                    {item === "dryer" && <i className="mr-3 fa-solid fa-dryer"></i>}
                    {item === "gym" && <i className="mr-3 fa-solid fa-dumbbell"></i>}
                    {item === "kitchen" && <i className="mr-3 fa-solid fa-kitchen-set"></i>}
                    {item === "wifi" && <i className="mr-3 fa-solid fa-wifi"></i>}
                    {item === "heating" && <i className="mr-3 fa-regular fa-heat"></i>}
                    {item === "cableTV" && <i className="mr-3 fa fa-tv"></i>}
                    <span className="title-font font-medium">{item}</span>
                </div>
            </div >
        ))
    }
    return (
        <section className="text-gray-600 body-font">
            <div className="flex flex-wrap lg:w-4/5 sm:mx-auto sm:mb-2 -mx-2" >
                {renderItems()}
            </div>
            <Button
                type="primary"
                onClick={showModal}
                className="bg-transparent border-none text-black text-md font-medium mt-2"
            >
                Hiển thị tất cả tiện ích{" "}
                <i className="fa fa-angle-right ml-2" aria-hidden="true"></i>
            </Button>
            <Modal
                title="Những tiện ích cung cấp"
                visible={isModalVisible}
                onCancel={handleCancel}
                footer={null}
                className="rounded-xl overflow-hidden"
            >
                {renderModal()}
            </Modal>
        </section >
    )
}

export default Offers