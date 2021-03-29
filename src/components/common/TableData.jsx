import React from "react";
import { convertToPercent } from "../../utils/converToPercent";
import Loader from "react-loader-spinner";

const TableData = (props) => {
  const { num, type, dailyChange, volume, lastPrice } = props;

  return (
    <tr>
      <td>{num + 1}</td>
      <td>{type.substring(1)}</td>
      {typeof dailyChange !== "number" ? (
        <td>
          <Loader type="ThreeDots" color="#00BFFF" height={20} width={20} />
        </td>
      ) : (
        <td>{convertToPercent(dailyChange)}</td>
      )}
      {typeof volume !== "number" ? (
        <td>
          <Loader type="ThreeDots" color="#00BFFF" height={20} width={20} />
        </td>
      ) : (
        <td>{Math.round(volume)}</td>
      )}
      {typeof lastPrice !== "number" ? (
        <td>
          <Loader type="ThreeDots" color="#00BFFF" height={20} width={20} />
        </td>
      ) : (
        <td>{lastPrice.toFixed(1)}</td>
      )}
    </tr>
  );
};

export default TableData;
