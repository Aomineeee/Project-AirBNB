import React, { useState, useEffect } from "react";
import { Modal, Button } from "antd";
import { useDispatch, useSelector } from "react-redux";
import Offers from "./DetailStuffs/Offers";
import CalendarDateRange from "./DetailStuffs/CalendarDateRange";
import ReviewRoom from "./DetailStuffs/ReviewRoom";

function RoomDetailComponent() {
  const [isModalVisibleOne, setIsModalVisibleOne] = useState(false);
  let { userInfor } = useSelector((root) => root.userSlice)
  const [userState, setUserState] = useState()

  useEffect(() => {
    setUserState(userInfor)
  })
  const dispatch = useDispatch();
  let { roomDetail } = useSelector((root) => root.roomSlicer);
  let { name, guests, bedRoom, bath, description, ...restProps } = roomDetail

  const showModalOne = () => {
    setIsModalVisibleOne(true);
  };
  const handleCancelOne = () => {
    setIsModalVisibleOne(false);
  };

  return (
    <div className="w-2/3">
      <h1 className="text-xl font-medium">
        {name}
      </h1>
      {/* user image */}
      <div className="flex justify-between items-center border-b-2 pb-4">
        <div className="flex justify-between gap-4">
          <p>{guests} người . {bedRoom} phòng ngủ . {bath} phòng tắm</p>
        </div>
        <div className="flex mt-2 relative">
          <div className="rounded-full overflow-hidden w-16 h-16">
            <img
              className="w-full h-full"
              src={userState && userState.user.avatar}
              alt="..."
            />
          </div>
          <div className="absolute right-1 bottom-1 w-5 h-5">
            {userState && userState.user.type == "CLIENT" ? <i className="fa fa-user-circle text-yellow-600"></i> : <i className="fa fa-user-secret text-red-600"></i>}
          </div>
        </div>
      </div>
      {/* Describtion room */}
      <div className="flex justify-between items-center border-b-2 py-6">
        <div>
          <h1 className="text-xl font-medium mb-3">Tổng quan về phòng</h1>
          {description}
          <br />
          <Button
            type="primary"
            onClick={showModalOne}
            className="bg-transparent border-none text-black text-md font-medium mt-2"
          >
            Xem chi tiết{" "}
            <i className="fa fa-angle-right ml-2" aria-hidden="true"></i>
          </Button>
        </div>
        <Modal
          title="Mô tả phòng"
          visible={isModalVisibleOne}
          onCancel={handleCancelOne}
          footer={null}
          className="rounded-xl overflow-hidden"
        >
          {/* show Describtion */}
          <p>{description}</p>
          <p>{description}</p>
          <p>{description}</p>
        </Modal>
      </div>
      {/* Offers */}
      <div className="flex flex-col border-b-2 py-6">
        <h1 className="text-xl font-medium mb-3">Các tiện ích nơi đây cung cấp</h1>
        <Offers data={restProps} />
      </div>
      {/* Check-In Section */}
      <div className="flex justify-between items-center border-b-2 py-6">
        <div className="w-full">
          <h1 className="text-xl font-medium mb-3">Đặt phòng</h1>
          <CalendarDateRange />
        </div>
      </div>
      {/* Reviews */}
      <div className="flex justify-between items-center border-b-2 py-6">
        <div>
          <h1 className="text-xl font-medium mb-3">Đánh giá nơi này</h1>
          <ReviewRoom roomId={restProps._id} />
        </div>
      </div>
      {/* API Google Map */}
      <div className="flex justify-between items-center border-b-2 py-6">
        <div>
          <h1 className="text-xl font-medium mb-3">Where is this place</h1>
          render google map
        </div>
      </div>
    </div>
  );
}

export default RoomDetailComponent;
