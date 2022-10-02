import React from 'react'
import { ListOfFavs } from '../components/ListOfFavs'
import { useGetFavPhotos } from '../Hooks/useGetFavPhotos'
import { Layout } from '../components/Layout'
export const Favs = () => {
    const { loading, data, error } = useGetFavPhotos()
    if (loading) return <p>Loading...</p>
    if (error) return <p>Error...</p>
    const { favs } = data
    return (
        <>
            <Layout
                title="Petgram 🐶 | tus favoritos"
                description="Petgram puedes encontrar tus fotos favoritas"
                verDatos
            >
                <ListOfFavs favs={favs} />
            </Layout>
        </>
    )
}
