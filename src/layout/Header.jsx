import React, { useState } from "react";
import { Button, Popover, Avatar, List } from "antd";
import { MdNotificationsActive, MdOutlineMessage } from "react-icons/md";

const data = [
  {
    title: "Wade Warren",
  },
  {
    title: "Jane Cooper",
  },
  {
    title: "Leslie Alexander",
  },
  {
    title: "John Doe",
  },
];

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const hide = () => {
    setOpen(false);
  };
  const handleOpenChange = (newOpen) => {
    setOpen(newOpen);
  };
  return (
    <div className="flex justify-between p-4 items-center">
      {/* //searchbar */}
      <div
        // className="hidden md:flex items-center gap-2 text-xs rounded-full ring-[1.5px] ring-gray-300 px-2"
        className="group inline-flex items-center focus:outline-none active:translate-y-px xl:h-10 xl:w-full xl:max-w-sm xl:rounded-lg xl:border xl:border-muted xl:py-2 xl:pe-2 xl:ps-3.5 xl:shadow-sm xl:backdrop-blur-md xl:transition-colors xl:duration-200 xl:hover:border-gray-900 xl:hover:outline-double xl:hover:outline-[0.5px] xl:hover:outline-gray-900 xl:focus-visible:border-gray-900 xl:focus-visible:outline-double xl:focus-visible:outline-[0.5px] xl:focus-visible:outline-gray-900"
      >
        <img src="/search.png" alt="" width={14} height={14}></img>
        <input
          type="text"
          placeholder="search..."
          className="w-[200px] bg-transparent outline-none p-2"
        />
      </div>
      {/* icon and user */}
      <div className="flex items-center gap-6 ">
        <div
          // className= "bg-white rounded-full w-7 h-7 flex items-center justify-center cursor-pointer"
          className="inline-flex items-center justify-center active:enabled:translate-y-px focus:outline-none focus-visible:ring-[1.8px] focus-visible:ring-offset-2 ring-offset-background transition-colors duration-200 p-1 rounded hover:text-primary focus-visible:ring-primary-lighter relative h-[34px] w-[34px] shadow backdrop-blur-md dark:bg-gray-100 md:h-9 md:w-9"
        >
          {/* <img alt="message" src="/message.png" width={20} height={14} /> */}
          <MdNotificationsActive className="text-lg" />
        </div>
        <div
          //  className="bg-white rounded-full w-7 h-7 flex items-center justify-center cursor-pointer relative"
          className="inline-flex items-center justify-center active:enabled:translate-y-px focus:outline-none focus-visible:ring-[1.8px] focus-visible:ring-offset-2 ring-offset-background transition-colors duration-200 p-1 rounded hover:text-primary focus-visible:ring-primary-lighter relative h-[34px] w-[34px] shadow backdrop-blur-md dark:bg-gray-100 md:h-9 md:w-9"
        >
          <Popover
            content={
              <div style={{ width: "400px" }}>
                <a onClick={hide}>
                  <List
                    itemLayout="horizontal"
                    dataSource={data}
                    renderItem={(item, index) => (
                      <List.Item>
                        <List.Item.Meta
                          avatar={
                            <Avatar
                              src={`https://api.dicebear.com/7.x/miniavs/svg?seed=${index}`}
                            />
                          }
                          title={<a href="https://ant.design">{item.title}</a>}
                          description="It is nice to be chatting with you. Omnis, qui"
                        />
                      </List.Item>
                    )}
                  />
                </a>
              </div>
            }
            // overlayStyle={{ width: "600px" }}
            placement="bottomRight"
            title="Messages"
            trigger="click"
            open={open}
            onOpenChange={handleOpenChange}
          >
            <MdOutlineMessage className="text-lg" />
          </Popover>
          <div className="absolute -top-3 -right-3 w-5 h-5 flex items-center justify-center bg-purple-500 text-white rounded-full text-xs">
            1
          </div>
        </div>
        <div className="flex flex-col">
          <span className="text-xs leading-3 font-medium">John Doe</span>
          <span className="text-[10px] text-gray-500 text-right ">Admin</span>
        </div>
        <img
          src="/avatar.png"
          alt=""
          width={36}
          height={36}
          className="rounded-full -mt-0.5"
        />
      </div>
    </div>
  );
};

export default Navbar;
