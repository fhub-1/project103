import Head from 'next/head'
import Navbar from '../components/navbar/Navbar'

export default function Home() {
  return (
    <>
    <div className="">
      <Head>
        <title>E-learning Life</title>
        <link rel="icon" href="/code.png" />
      </Head>
       <Navbar/>
    </div>
    </>
  )
}
