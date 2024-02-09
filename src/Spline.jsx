import React, { Suspense } from 'react';
const Spline = React.lazy(() => import('@splinetool/react-spline'));

function SplineModel() {
    return (
        <div>
            <Suspense fallback={<div>Loading...</div>}>
                    <Spline scene="https://prod.spline.design/y3VevNB21VcWXQcT/scene.splinecode"/>
            </Suspense>
        </div>
    )
}

export default SplineModel