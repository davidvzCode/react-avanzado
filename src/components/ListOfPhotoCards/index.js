import React from 'react'
import { PhotoCard } from '../PhotoCard'
import { useQuery } from '@apollo/client'
import { withPhotos } from '../../hoc/withPhotos'

export const ListOfPhotoCards = ({ categoryId }) => {
    const { data, loading, error } = useQuery(withPhotos, {
        variables: { categoryId },
    })
    if (loading) return 'Loading...' // manejas el estado para que no te saque error mientras hace el fetch
    if (error) return <pre>{error.message}</pre>
    return (
        <ul>
            {data.photos.map((photo) => (
                <PhotoCard key={photo.id} {...photo} />
            ))}
        </ul>
    )
}
