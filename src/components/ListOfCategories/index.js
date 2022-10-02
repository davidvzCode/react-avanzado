import React from 'react'
import { Category } from '../Category'

import { List, Item } from './styles'

function useCategoriesData() {
    const [categories, setCategories] = React.useState([])

    const [loading, setLoading] = React.useState(false)

    React.useEffect(() => {
        const getCategories = async () => {
            setLoading(true)
            await fetch('https://petgram-vz-davidvzcode.vercel.app/categories')
                .then((res) => res.json())
                .then((response) => {
                    setCategories(response)
                })
            setLoading(false)
        }
        getCategories()
    }, [])

    return { categories, loading }
}

const ListOfCategoriesComponent = () => {
    const { categories, loading } = useCategoriesData()
    const [showFixed, setShowFixed] = React.useState(false)

    React.useEffect(() => {
        const onScroll = (e) => {
            const newShowfixed = window.scrollY > 200
            showFixed !== newShowfixed && setShowFixed(newShowfixed)
        }
        document.addEventListener('scroll', onScroll)

        return () => document.removeEventListener('scroll', onScroll)
    }, [showFixed])

    const renderList = (fixed) => (
        <List fixed={fixed}>
            {loading ? (
                <Item key={loading}>
                    <Category></Category>
                </Item>
            ) : (
                categories.map((category) => (
                    <Item key={category.id}>
                        <Category {...category} path={`/pet/${category.id}`} />
                    </Item>
                ))
            )}
        </List>
    )

    return (
        <>
            {renderList()}
            {showFixed && renderList(true)}
        </>
    )
}

export const ListOfCategories = React.memo(ListOfCategoriesComponent)
