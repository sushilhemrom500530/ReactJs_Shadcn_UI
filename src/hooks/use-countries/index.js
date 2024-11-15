import { useState, useEffect } from "react";
import useApi from "../use-api";

export default function useCountries() {
  const [countries, setCountries] = useState([]);

  const fetchData = async () => {
    await useApi
      .get("v1/common/countries")
      .then((response) => {
        setCountries(response?.data?.data);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  };

  useEffect(() => {
    fetchData();
  }, []);
  return countries;
}