import { gql, useQuery } from '@apollo/client'

export const withPhotos = gql`
    query getPhotos($categoryId: ID) {
        photos(categoryId: $categoryId) {
            id
            categoryId
            src
            likes
            userId
            liked
        }
    }
`

export const useGetSinglePhoto = (id) => {
    const getSinglePhoto = gql`
        query getSinglePhoto($id: ID!) {
            photo(id: $id) {
                id
                categoryId
                src
                likes
                userId
                liked
            }
        }
    `
    const { loading, error, data } = useQuery(getSinglePhoto, {
        variables: { id },
    })

    return { loading, error, data }
}
