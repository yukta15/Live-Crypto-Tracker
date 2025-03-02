import React, { useState } from "react";
import Head from "next/head";
import Image from "next/image";
import CoinList from "../Components/Coins/CoinList";
import Layout from "../Components/Layout";
import SearchBar from "../Components/Search-bar";

export default function Home({ filteredCoins }) {
  const [search, setSearch] = useState("");

  // Filter coins based on search input
  const allCoins = filteredCoins.filter((coin) =>
    coin.name.toLowerCase().includes(search.toLowerCase())
  );

  // Function to update search value
  const handleSearchChange = (searchQuery) => {
    setSearch(searchQuery);
  };

  return (
    <Layout>
      <div className="coin_app">
        {/* Pass the correct props */}
        <SearchBar searchQuery={search} onSearchChange={handleSearchChange} />
        <CoinList filteredCoins={allCoins} />
{/* 
        <footer>Made with ♥ by Yukta</footer> */}
      </div>
    </Layout>
  );
}

// Fetch data on server-side for each request
export async function getServerSideProps() {
  const res = await fetch(
    `https://api.coingecko.com/api/v3/coins/markets?vs_currency=inr&order=market_cap_desc&per_page=250&page=1&sparkline=false`
  );
  const filteredCoins = await res.json();

  if (!filteredCoins) {
    return { notFound: true };
  }

  return { props: { filteredCoins } };
}
