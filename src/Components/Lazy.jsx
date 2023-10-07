import React, { Suspense, useEffect, useState } from 'react';

const LazyLoadDetails = React.lazy(() => import('./LazyLoadDetails'));

export default function Lazy() {

    const [showLazyLoadDetails, setShowLazyLoadDetails] = useState(false);

    useEffect(() => {
        // For demonstration, we're using setTimeout. 
        // In a real-world scenario, this could be after fetching some initial data or other conditions.
        const timer = setTimeout(() => {
            setShowLazyLoadDetails(true);
        }, 2000); // 2 seconds delay
    
        return () => clearTimeout(timer); // Cleanup timer
    }, []);

    return (
        <div>
            <h1>Welcome to the LazyLoad!</h1>

            {/* Conditionally render the LazyLoadDetails component */}
            {showLazyLoadDetails && (
                <Suspense fallback={<div>Loading Details...</div>}>
                    <LazyLoadDetails />
                </Suspense>
            )}
        </div>
    )
}
