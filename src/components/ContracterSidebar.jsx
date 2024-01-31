import React from "react";
import { Sidebar } from "flowbite-react";
import { Link } from "react-router-dom";
import {
  HiArrowSmLeft,
  HiChartPie,
  HiInbox,
  HiUser,
} from "react-icons/hi";

export default function ContracterSidebar() {
  return (
    <div>
      <Sidebar
        className="h-screen"
        style={{position: 'sticky', top: 0}}
        aria-label="Sidebar with logo branding example"
      >
        <Sidebar.Logo href="#" img="/favicon.svg" imgAlt="logo">
          My Profile
        </Sidebar.Logo>
        <Sidebar.Items>
          <Sidebar.ItemGroup>
            <Sidebar.Item href="#" icon={HiChartPie}>
              Current Progress
            </Sidebar.Item>
            <Sidebar.Item href="#" icon={HiInbox}>
              Families
            </Sidebar.Item>
            <Sidebar.Item href="#" icon={HiUser}>
              Workers
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
  );
}
