import React from 'react'
import { PhotoCard } from '../components/PhotoCard/index'
import { useGetSinglePhoto } from '../hoc/withPhotos'

export const PhotoCardWithQuery = ({ id }) => {
    const { loading, data } = useGetSinglePhoto(id)
    if (loading) return null

    const { photo = {} } = data
    return <PhotoCard {...photo} />
}
