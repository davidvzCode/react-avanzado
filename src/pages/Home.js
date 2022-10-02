import React, { Fragment } from 'react'
import { ListOfCategories } from '../components/ListOfCategories'
import { ListOfPhotoCards } from '../components/ListOfPhotoCards'
import { useParams } from 'react-router-dom'
import { Layout } from '../components/Layout'
const HomePage = () => {
    const params = useParams()
    return (
        <Fragment>
            <Layout
                title="Petgram 🐶 | tu app de fotos de mascotas"
                description="Petgram puedes encontrar fotos de animales domesticos muy bonitas"
            >
                <ListOfCategories />
                <ListOfPhotoCards categoryId={params.categoryId} />
            </Layout>
        </Fragment>
    )
}

export const Home = React.memo(HomePage, (preProvs, props) => {
    return preProvs.id === props.id
})
