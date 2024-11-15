import { useState, useEffect } from "react";
import useApi from "../use-api";

export default function useOffers() {
    const [offers, setOffers] = useState([]);

    useEffect(() => {
        const fetchOffers = async () => {
            try {
                const { data } = await useApi.get('/v1/common/offers');
                setOffers(
                    data?.data?.map(offer => ({
                        value: offer.id,
                        label: `${offer.id} - ${offer.name}`,
                    }))
                );
            } catch (error) {
                console.error("Error fetching offers:", error);
            }
        };

        fetchOffers();
    }, []);

    return offers;
}
