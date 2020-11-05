import React from 'react'
import { NextPage, NextPageContext } from 'next'

interface Props {
    statusCode: number
}

const Error: NextPage<Props> = ({ statusCode }) => {
    return <div>{statusCode} error occurred</div>
}

Error.getInitialProps = async ({ res, err }: NextPageContext) => {
    const statusCode = res ? res.statusCode : err ? err.statusCode ?? 500 : 404
    return { statusCode }
}

export default Error
