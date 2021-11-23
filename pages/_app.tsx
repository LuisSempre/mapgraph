import 'tailwindcss/tailwind.css'
import { AppProps } from 'next/app'
import React from 'react'
import Head from 'next/head'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
    <Head>
      <title>Next.js Tailwind CSS</title>
      <meta name="descripttion"
        content="A simple project to work with Typescript, React, Next and Tailwind" />
      <link rel="icon" href="/favicon.ico" />
    </Head>
      <Component {...pageProps} />
    </>
  )
}
export default MyApp
