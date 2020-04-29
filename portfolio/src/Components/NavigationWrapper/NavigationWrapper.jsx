import React, { useEffect } from 'react'

const NavigationWrapper = () => {
    useEffect(() => {
        const handleScroll = (event) => {
            // console.log('pagesScrolling', event.wheelDelta)
        }
        window.addEventListener('wheel', (handleScroll))
    })
    return (
        <div>
            {/* wednesday */}
        </div>
    )
}

export default  NavigationWrapper