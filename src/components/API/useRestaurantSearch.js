import {useState, useEffect} from 'react';
import * as api from './api';

export const useRestaurantSearch = (entry) => {
    const [restaurants, setRestaurants] = useState([]);
    const [searchParams, setSearchParams] = useState({entry});

    useEffect(() => {
        setRestaurants([]);
        const fetchData = async () => {
            try {
                const rawData = await api.get('/restaurants/search', searchParams);
                const resp = await rawData.json();
                setRestaurants(resp.restaurants);
            } catch(e) {
                console.error(e);
            }
        };
        fetchData();
    }, [searchParams]);
    return [restaurants, searchParams, setSearchParams];
}
