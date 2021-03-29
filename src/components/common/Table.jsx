import React, { useState, useEffect } from "react";
import TableHeader from "./TableHeader";
import TableBody from "./TableBody";
import ReconnectingWebSocket from "reconnecting-websocket";
import Loader from "react-loader-spinner";

const ws = new ReconnectingWebSocket("wss://api-pub.bitfinex.com/ws/2");

const symbols = ["BTCUSD", "BTCEUR", "ETHUSD", "ETHEUR", "EOSUSD"];

const Table = () => {
  const [cryptoData, setCryptoData] = useState({});
  const [channelToSymbolMap, setChannelToSymbolMap] = useState({});

  useEffect(() => {
    ws.onopen = () => {
      symbols.forEach((symbol) => {
        ws.send(
          JSON.stringify({
            event: "subscribe",
            channel: "ticker",
            symbol,
          })
        );
      });
    };

    ws.onmessage = (event) => {
      const eventData = JSON.parse(event.data);

      if (eventData.event && eventData.event === "subscribed") {
        const { chanId, symbol } = eventData;
        setChannelToSymbolMap((prevState) => ({
          ...prevState,
          [chanId]: symbol,
        }));
      }
    };

    return () => {
      ws.close();
    };
  }, []);

  useEffect(() => {
    if (Object.keys(channelToSymbolMap).length === symbols.length) {
      ws.onmessage = (event) => {
        const eventData = JSON.parse(event.data);

        if (Array.isArray(eventData)) {
          const [channelId, data] = eventData;
          const targetSymbol = channelToSymbolMap[String(channelId)];
          setCryptoData((prevState) => ({
            ...prevState,
            [targetSymbol]: {
              dailyChange: data[5],
              volume: data[7],
              lastPrice: data[6],
            },
          }));
        }
      };
    }
  }, [channelToSymbolMap]);

  return (
    <>
      {Object.keys(cryptoData).length === 5 ? (
        <table className="table">
          <TableHeader />
          <TableBody data={cryptoData} />
        </table>
      ) : (
        <>
          <div
            style={{ height: "30rem" }}
            className="d-flex flex-column justify-content-center align-items-center"
          >
            <Loader type="Grid" color="#00BFFF" height={150} width={150} />
            <p style={{ fontStyle: "italic", marginTop: "1rem" }}>
              Fetching data...
            </p>
          </div>
        </>
      )}
    </>
  );
};

export default Table;
