import React from "react";
import PieChartComponent from "./Charts/PieChartComponent";
import UserSidebar from "./UserSidebar";
import LinearWithValueLabel from "./LinearWithValueLabel";
import './styles/Home.css'
import { Typography } from "@mui/material";

const totalAmount = 5000000;
const amountPaid = 200000;

// const dummyUrls = [
//   "https://www.example.com/page1",
//   "https://www.example.com/page2",
//   "https://www.example.com/page3",
//   "https://www.example.com/page4",
//   "https://www.example.com/page5",
//   // Add more URLs as needed
// ];

const Home = () => {
  return (
    <div className="parent-div flex flex-col">
      <div className="grid grid-cols-4 m-3">
        <div className="col-span-1">
          <UserSidebar />
        </div>

        <div className="col-span-3 flex flex-col gap-2">
          <Typography sx={{ fontVariant:'all-petite-caps', letterSpacing: '5px', color: 'white', fontSize: '60px', mt: '30px', mb: '30px', fontWeight: 'bold' }}>Dashboard</Typography>

          <div className="stats-card grid justify-between">
            <div className="font-sans text-2xl"></div>
            {/* pie chart and amount paid section */}
            <div className="grid grid-cols-2 gap-20 mb-11">
              <div className="cols-span-1 bg-slate-800 rounded">
                {/* pie chart */}
                <div className="flex flex-col items-center">
                  <Typography  variant='h4' sx={{color: 'white', fontSize: '25px', mt: '20px'}}>Work</Typography>
                  <PieChartComponent />
                </div>
              </div>
              <div className="cols-span-1 bg-slate-800 rounded">
                {/* pie chart */}
                <div className="flex flex-col items-center">
                  <Typography variant="h4" sx={{color: 'white', fontSize: '25px', mt: '20px'}}>Amount</Typography>
                  <PieChartComponent />
                </div>
              </div>
            </div>

            {/* Rooms and their status and pdf documents */}
          </div>

          <div className="grid grid-cols-3 gap-3">
            <div className="col-span-2 w-full">
              <LinearWithValueLabel title={"Kitchen"} value={"10"} />
              <LinearWithValueLabel title={"Drawing Room"} value={"25"} />
              <LinearWithValueLabel title={"Bathroom"} value={"58"} />
              <LinearWithValueLabel title={"Bedroom 1"} value={"80"} />
              <LinearWithValueLabel title={"Bedroom 2"} value={"90"} />
            </div>

            {/* <div className="col-span-1">
              <div className="ml-10 mt-10 font-sans text-2xl justify-center items-center">
                Documents
              </div>

              <ul className="list-disc ml-10">
                {dummyUrls.map((url, index) => (
                  <li key={index}>
                    <a
                      href={url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-blue-500 hover:underline"
                    >
                      {`Link ${index + 1}`}
                    </a>
                  </li>
                ))}
              </ul>
            </div> */}

            <div>

            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;