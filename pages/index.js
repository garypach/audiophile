import Head from 'next/head'
import Image from 'next/image'
import Home from '../components/home/home'
import MainLayout from '../components/layout/mainlayout/mainlayout'

export default function Index(props) {
  return (
    <MainLayout>
      <Home/>
    </MainLayout>
    )
}
