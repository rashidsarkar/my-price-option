import axios from "axios";
import React, { useEffect, useState } from "react";
import { Audio, Circles } from "react-loader-spinner";
import { BarChart, Bar, XAxis, YAxis, Tooltip } from "recharts";

const Phone = () => {
  const [phone, setPhone] = useState([]);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    // fetch("https://openapi.programming-hero.com/api/phones?search=iphone")
    //   .then((res) => res.json())
    //   .then((data) => setPhone(data.data));
    axios
      .get("https://openapi.programming-hero.com/api/phones?search=iphone")
      .then((data) => {
        const phoneData = data.data.data;
        const phoneWithFakeData = phoneData.map((phone) => {
          const obj = {
            name: phone.phone_name,
            price: parseInt(phone.slug.split("-")[1]),
          };
          return obj;
        });
        setPhone(phoneWithFakeData);

        setLoading(false);
      });
  }, []);

  return (
    <div>
      {loading && (
        <div>
          <Audio
            height="80"
            width="80"
            radius="9"
            color="green"
            ariaLabel="three-dots-loading"
            wrapperStyle
            wrapperClass
          />
          <Circles
            height="80"
            width="80"
            color="#4fa94d"
            ariaLabel="circles-loading"
            wrapperStyle={{}}
            wrapperClass=""
            visible={true}
          />
        </div>
      )}
      <h2 className="text-5xl">Phones : {phone.length}</h2>
      <BarChart width={1200} height={340} data={phone}>
        <Bar dataKey="price" fill="#8884d8" />
        <XAxis dataKey="name"></XAxis>
        <YAxis></YAxis>
        <Tooltip></Tooltip>
      </BarChart>
    </div>
  );
};

export default Phone;
