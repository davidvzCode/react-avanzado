import React from 'react'
import { PhotoCardWithQuery } from '../container/PhotoCardWithQuery'
import { useParams } from 'react-router-dom'
import { Layout } from '../components/Layout'

export const Detail = () => {
    const params = useParams()
    return (
        <Layout title={`Fotografria ${params.detailId}`}>
            <PhotoCardWithQuery id={params.detailId} />
        </Layout>
    )
}
