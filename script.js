async function fetchPrices() {
  try {
    const response = await fetch("https://api.coingecko.com/api/v3/simple/price?ids=bitcoin,ethereum,solana&vs_currencies=usd");
    const data = await response.json();

    document.getElementById("btc-price").textContent = `$${data.bitcoin.usd}`;
    document.getElementById("eth-price").textContent = `$${data.ethereum.usd}`;
    document.getElementById("sol-price").textContent = `$${data.solana.usd}`;
  } catch (error) {
    console.error("Error fetching prices:", error);
  }
}

// Fetch prices on load
fetchPrices();

// Refresh every 60 seconds
setInterval(fetchPrices, 60000);
