'use client';

import apiTemp from "@/service/domain/api-temp";
import { useEffect, useState } from "react";
import Button from "./ButtonComp";

export default function HelloText() {

  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchSomething = async () => {
      const result = await apiTemp.getTodos();
      return result;
    };


    fetchSomething().then((data) => {
      setData(data);
    });


  }, []);


  return <div>{data.map((item: any) => (
    <Button key={item.id} label={item.firstName} />
  ))}</div>;
}
