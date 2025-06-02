'use client'

import { useEffect, useRef, useState } from 'react'
import '@neshan-maps-platform/mapbox-gl-react/dist/style.css'
import mapboxgl from '@neshan-maps-platform/mapbox-gl'
import nmp_mapboxgl from '@neshan-maps-platform/mapbox-gl'

export default function LocationPicker({ mapContainerRef, setCoordinates }) {
    const mapRef = useRef(null)
    const [position] = useState([51.389, 35.6892])
    const [marker, setMarker] = useState(null)

    const onInit = neshanMap => {
        const redMarker = new nmp_mapboxgl.Marker({ color: 'red' })
            .setLngLat(position)
            .addTo(neshanMap)
        setMarker(redMarker)

        neshanMap.on('click', function (e) {
            const { lng, lat } = e.lngLat
            setCoordinates({
                longitude: lng,
                latitude: lat,
            })

            redMarker.setLngLat([lng, lat])
        })
    }

    useEffect(() => {
        const neshanMap = mapRef.current

        if (mapContainerRef.current) {
            mapRef.current = new mapboxgl.Map({
                mapType: mapboxgl.Map.mapTypes.neshanVectorNight,
                container: mapContainerRef.current,
                zoom: 12,
                pitch: 0,
                center: [51.389, 35.6892],
                minZoom: 2,
                maxZoom: 18,
                trackResize: true,
                mapKey: process.env.NEXT_PUBLIC_MAP_API_KEY,
                poi: true,
                traffic: false,
                mapTypeControllerOptions: {
                    show: false,
                },
            })
        }

        return () => neshanMap?.remove()
    }, [])

    useEffect(() => {
        const neshanMap = mapRef.current
        if (neshanMap) {
            onInit(neshanMap)
        }
    }, [position])
}
