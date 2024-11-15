import { useState, useEffect } from "react";
import useApi from "../use-api";

export default function useAppPlacements() {
    const [apps, setApps] = useState([]);

    useEffect(() => {
        const fetchAppPlacements = async () => {
            try {
                const { data } = await useApi.get('/v1/common/app-placements');
                console.log("app data: ", data);
                setApps(
                    data?.data?.map(placement => ({
                        value: placement.id.toString(),
                        label: placement.name
                    }))
                );
            } catch (error) {
                console.error("Error fetching app placements:", error);
            }
        };

        fetchAppPlacements();
    }, []);

    return apps;
}
