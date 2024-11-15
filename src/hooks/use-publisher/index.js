import {useState, useEffect} from "react";
import useApi from "../use-api";

export default function usePublishers() {
    const [publishers, setPublishers] = useState([]);

    const fetchData = async () => {
        await useApi
            .get("v1/common/publishers")
            .then((response) => {
                setPublishers(response?.data?.data?.map((publisher) => ({
                    label: `${publisher.id} - ${publisher.first_name} ${publisher.last_name}`,
                    value: publisher.id,
                })));
            })
            .catch((error) => {
                console.error("Error fetching data:", error);
            });
    };

    useEffect(() => {
        fetchData();
    }, []);
    return publishers;
}
