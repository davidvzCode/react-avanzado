import React from 'react'
import { Helmet } from 'react-helmet-async'
import { Div, Title, Subtitle } from './styles'
export const Layout = ({ children, title, subtitle, verDatos }) => {
    return (
        <>
            <Helmet>
                {title && <title>{title} | Petgram 🐶</title>}
                {subtitle && <meta name="description" content={subtitle} />}
            </Helmet>
            {verDatos && (
                <Div>
                    {title && <Title>{title}</Title>}
                    {subtitle && <Subtitle>{subtitle}</Subtitle>}
                    {children}
                </Div>
            )}

            {children}
        </>
    )
}
