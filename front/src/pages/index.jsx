import React, { useEffect } from 'react';
import { useRouter } from 'next/router';

function HomePage() {
    const router = useRouter();

    useEffect(() => {
        router.push('explore')
    }, [])

    return (
        <div>Welcome to Next.js!</div>
    )
}

export default HomePage