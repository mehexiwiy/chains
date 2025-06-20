const cryptoCurrencies = ["EVRS"];
const walletNames = [
  "Metamask", "Monero Wallet", "Kucoin", "Binance Coin Wallet",
  "Trust Wallet", "Solana", "Bitpay", "Coinbase", "Crypto.com", "Atomic Wallet",
  "Ronin Wallet", "Protocol Wallet", "Trezor Wallet", "Exodus Wallet", "Blockchain Wallet"
];

let evernodePriceUSD = 0.01; // default fallback

async function fetchEvernodePrice() {
  try {
    const res = await fetch("https://api.coingecko.com/api/v3/simple/price?ids=evernode&vs_currencies=usd");
    const data = await res.json();
    evernodePriceUSD = data.evernode.usd;
  } catch (error) {
    console.warn("Failed to fetch EVRS price, using fallback.");
  }
}

function generateRandomHash() {
  return (
    Math.random().toString(36).substring(2, 10) +
    Math.random().toString(36).substring(2, 10)
  );
}

function generateRandomTransaction() {
  const wallet = walletNames[Math.floor(Math.random() * walletNames.length)];
  const transactions = Math.floor(Math.random() * 100) + 50;
  const burned = (Math.random() * (300000 - 1000) + 1000).toFixed(Math.floor(Math.random() * 4) + 1);
  const currency = cryptoCurrencies[Math.floor(Math.random() * cryptoCurrencies.length)];
  const hash = generateRandomHash();
  const timestamp = Date.now();

  return { wallet, transactions, burned: parseFloat(burned), currency, hash, timestamp };
}

function formatElapsedTime(timestamp) {
  const diff = Math.floor((Date.now() - timestamp) / 1000);
  if (diff < 60) return `${diff}s ago`;
  if (diff < 3600) return `${Math.floor(diff / 60)} mins ago`;
  return `${Math.floor(diff / 3600)} hour${Math.floor(diff / 3600) > 1 ? "s" : ""} ago`;
}

function addTransactionRow(tx) {
  const tableBody = document.getElementById("transactionTableBody");
  const newRow = document.createElement("tr");

  const usdValue = (tx.burned * evernodePriceUSD).toLocaleString("en-US", {
    style: "currency",
    currency: "USD",
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  });

  const walletLogoPath = `./js/img/${tx.wallet}.png`;

  newRow.innerHTML = `<div style="display: flex;"><div class="cardCompletedSales"><div class="leftCard">
      <div class="iconcontain">
        <img src="${walletLogoPath}" alt="Image" class="icon" width="30" height="30" style="filter: none;">
      </div>
      <div class="introCard">
        <div class="listStatus">
          <span class="relationship-giveaway" style="max-width: 110px; white-space: nowrap; overflow: hidden; text-overflow: ellipsis; font-size: 11px; min-width: 118px;">Wallet</span>
        </div>
        <h2 class="title" aria-label="${tx.wallet}">${tx.wallet}</h2>
      </div></div>
      <div class="midCard">
        <ul class="listInfo" style="margin-bottom: 0px;">
          <li class="itemInfo"><p class="nameInfo">Claimed EVRS</p><p class="valueInfo">${tx.burned.toFixed(4)} ${tx.currency}</p></li>
          <li class="itemInfo"><p class="nameInfo">USD Value</p><p class="valueInfo">${usdValue}</p></li>	
          <li class="itemInfo alignLeftMobile"><p class="nameInfo">Time</p><p class="valueInfo time" data-timestamp="${tx.timestamp}">${formatElapsedTime(tx.timestamp)}</p></li>
          <li class="itemInfo alignLeftMobile"><p class="nameInfo">HASH</p><p class="valueInfo">&nbsp; ${tx.hash.substring(0, 12)}...</p></li>
          <li class="itemInfo"><p class="nameInfo">Status</p><div class="valueInfo"><p class="Claimable">Claimed</p></div></li>
        </ul>
      </div>
    </div></div>`;

  newRow.style.opacity = "0";
  newRow.style.transition = "opacity 0.3s ease-in-out";
  tableBody.insertBefore(newRow, tableBody.firstChild);

  setTimeout(() => {
    newRow.style.opacity = "1";
  }, 50);

  if (tableBody.children.length > 15) {
    tableBody.removeChild(tableBody.lastChild);
  }
}


function initialPopulation() {
  const now = Date.now();
  const transactions = [];

  for (let i = 0; i < 15; i++) {
    const tx = generateRandomTransaction();
    const offsetMinutes = (14 - i) * 4;
    tx.timestamp = now - offsetMinutes * 60 * 1000;
    transactions.push(tx);
  }

  transactions.forEach(tx => addTransactionRow(tx));
}

function scheduleNextUpdate() {
  const delay = Math.floor(Math.random() * 5000) + 5000;
  setTimeout(() => {
    const tx = generateRandomTransaction();
    addTransactionRow(tx);
    scheduleNextUpdate();
  }, delay);
}

function updateTimes() {
  const timeCells = document.querySelectorAll("#transactionTableBody .time");
  timeCells.forEach(cell => {
    const timestamp = parseInt(cell.getAttribute("data-timestamp"));
    cell.textContent = formatElapsedTime(timestamp);
  });
}

document.addEventListener("DOMContentLoaded", async function () {
  await fetchEvernodePrice();
  initialPopulation();
  scheduleNextUpdate();
  setInterval(updateTimes, 1000);
  setInterval(fetchEvernodePrice, 60 * 1000); // refresh price every 1 min
});
