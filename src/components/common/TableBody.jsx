import React from "react";
import TableData from "./TableData";

const TableBody = ({ data }) => {
  return (
    <>
      <tbody>
        {Object.entries(data).map((value, index) => {
          return (
            <TableData
              key={index}
              num={index}
              type={value[0]}
              dailyChange={value[1].dailyChange}
              volume={value[1].volume}
              lastPrice={value[1].lastPrice}
            />
          );
        })}
      </tbody>
    </>
  );
};

export default TableBody;
