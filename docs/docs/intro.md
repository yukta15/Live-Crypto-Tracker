---
id: intro
title: Crypto Price Tracker
sidebar_label: Introduction
---

# Crypto Price Tracker

A **Next.js-based** cryptocurrency tracker that fetches real-time data using the **CoinGecko API**.

## Features:
- Live cryptocurrency price tracking
- Search functionality
- State management with React Query / Zustand / Context API

---

## 📌 **Setup Guide**

### Getting Started

#### 1️⃣ Clone the Repository
  ```sh
git clone https://github.com/yourusername/crypto-price-tracker.git
cd crypto-price-tracker
npm run dev 
```

## 📌 **API Integration**

### Fetching Live Prices

#### We use CoinGecko API to fetch cryptocurrency prices. 
  ```sh
const fetchCryptoPrices = async () => {
  const response = await fetch('https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd');
  const data = await response.json();
  return data;
};
```

## 📌 **State Management**

### Why React Query?

#### This project uses React Query for efficient state management.
##### Handles caching and background fetching.
##### Automatic refetching when the app is focused.
##### Reduces API call frequency.  
  ```sh
import { useQuery } from 'react-query';

const { data, isLoading, error } = useQuery('cryptoPrices', fetchCryptoPrices);

```


## 📌 **Challenges & Solutions**

### 1️⃣ API Rate Limits
#### Solution: Used React Query's caching mechanism to reduce unnecessary API calls.

### 2️⃣ UI Freezing on API Requests
##### Solution: Implemented a loading indicator to improve UX.

### 3️⃣ Choosing a State Management Approach
##### Solution: Compared React Query, Zustand, and Context API before selecting React Query.








