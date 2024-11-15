import { useState, useEffect } from "react";
import useApi from "../use-api";

export default function useNetworks() {
    const [networks, setNetworks] = useState([]);

    const fetchData = async () => {
        await useApi
            .get("v1/common/networks")
            .then((response) => {
                setNetworks(response?.data?.data);
            })
            .catch((error) => {
                console.error("Error fetching data:", error);
            });
    };

    useEffect(() => {
        fetchData();
    }, []);
    return networks;
}