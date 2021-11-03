import Head from 'next/head'
import Image from 'next/image'
import { useState } from 'react'
import Home from '../components/home/home'
import MainLayout from '../components/layout/mainlayout/mainlayout'
import Cart from '../components/ui/cart/cart'

export default function Index(props) {
  return (
    <MainLayout>
      <Home/>
    </MainLayout>
    )
}
