import React from "react";
// import { Sidebar, Menu, MenuItem, SubMenu } from "react-pro-sidebar";
import { Sidebar } from "flowbite-react";
import { Link } from "react-router-dom";
import {
  HiArrowSmLeft,
  HiChartPie,
  HiInbox,
  HiShoppingBag,
  HiUser,
  HiViewBoards,
} from "react-icons/hi";
import tsec_logo from "../assets/tsec_logo.avif";

export default function UserSidebar() {
  return (
    <div>
      <Sidebar className="h-screen sticky top-0" aria-label="Sidebar with logo branding example">
        <Sidebar.Logo href="#" img="/favicon.svg" imgAlt="logo">
          My Profile
        </Sidebar.Logo>
        <Sidebar.Items>
          <Sidebar.ItemGroup>
            <Sidebar.Item href="#" icon={HiChartPie}>
              Current Progress
            </Sidebar.Item>
            <Sidebar.Item href="#" icon={HiViewBoards}>
              Filter
            </Sidebar.Item>
            <Sidebar.Item href="#" icon={HiInbox}>
              My Decor
            </Sidebar.Item>
            <Sidebar.Item href="#" icon={HiUser}>
              Users
            </Sidebar.Item>
            <Sidebar.Item href="#" icon={HiShoppingBag}>
              Shop from Amazon
            </Sidebar.Item>
            <Link to="/login">
              <Sidebar.Item href="#" icon={HiArrowSmLeft}>
                Logout
              </Sidebar.Item>
            </Link>
          </Sidebar.ItemGroup>
        </Sidebar.Items>
      </Sidebar>
    </div>
    // <div>Sidebar</div>
  );
}
