import { useQuery } from "@tanstack/react-query";
import { useState } from "react";
var axios = require("axios").default;

const getNews = () =>
  axios
    .get("https://saurav.tech/NewsAPI/top-headlines/category/health/in.json")
    .then(res => res.data);

export const useGetNews = () => {
  const { data, isError } = useQuery(["getNews"], getNews, {
    refetchOnWindowFocus: false
  });

  const totalResults = data?.totalResults;

  const [index, setIndex] = useState(62);
  const resetNews = () => {
    setIndex(-1);
  };
  const nextNews = e => {
    setIndex(index + 1);
  };

  const getCurrentNews = () => {
    if (index === totalResults) setIndex(0);
    else return data?.articles[index].title;
  };

  return { data, getCurrentNews, nextNews, index, isError, resetNews };
};
