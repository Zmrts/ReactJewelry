/* eslint-disable react-hooks/rules-of-hooks */

import { useState, useLayoutEffect } from "react";

const queries = [
    '(max-width: 766px)',
    '(min-width: 767px) and (max-width: 1199px)',
    '(min-width: 1200px)'
]

export const useMatchMedia = () => {

    if (typeof window === 'undefined') return {}
    const mediaQueryLists = queries.map(query => matchMedia(query));
    

    const getValues = () => mediaQueryLists.map(list => list.matches);

    const [values, setValues] = useState(getValues);

    useLayoutEffect(() => {
        const handleValues = () => setValues(getValues);
        mediaQueryLists.forEach(list => list.addEventListener('change', handleValues));

        return () => mediaQueryLists.forEach(list => list.removeEventListener('change', handleValues))
    });

return ['isMobile', 'isTablet', 'isDesktop'].reduce((acc, screen, index) => ({
    ...acc,
    [screen]: values[index],
}), {});
}