import { Text } from "@chakra-ui/react";
import { NextPage } from "next";
import { AppProps } from "next/app";
import Head from "next/head";
import BeerCard from "../../components/card";
import { Beers } from "../api/beers";

interface Props {
  beers: Beers[];
}

const Beers: NextPage<Props> = ({ beers }) => {
  return (
    <>
      <Head>
        <title>Beers</title>
      </Head>
      {beers.map((beer: Beers) => {
        return <BeerCard key={beer.id} beer={beer}/>;
      })}
    </>
  );
};

export default Beers;

export async function getServerSideProps() {
  const req = await fetch(`http://localhost:3000/api/beers`);
  const data: Beers[] = await req.json();

  return {
    props: { beers: data },
  };
}
