import Head from "next/head";
import Image from "next/image";
import Background from "../components/FirstPage/Background";
import FirstDiv from "../components/FirstPage/FirstDiv";
import Footer from "../components/Footer";
import Navbar from "../components/navbar";
import styles from "../styles/Home.module.css";

export default function Home() {
  return (
    <div>
      <Head>
        <title>Vade Labs</title>
        <meta name="title" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"></link>
        <style>
          @import url(&apos;https://fonts.googleapis.com/css2?family=Poppins:wght@500;700&display=swap&apos;);
          @import url(&apos;https://fonts.googleapis.com/css2?family=Exo+2:wght@900&display=swap&apos;);
          
        </style>
      </Head>
      <Navbar />
      <Background />
      <Footer/>
    </div>
  );
}
