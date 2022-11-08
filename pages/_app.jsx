import React, {Component} from 'react';
import { Layout } from '../components';
import 'tailwindcss/tailwind.css';
import '../styles/globals.css'; 

export default function MyApp(pageProps) {
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  );
}
