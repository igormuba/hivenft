var client = new dhive.Client([
  "https://api.hive.blog",
  "https://api.hivekings.com",
  "https://anyx.io",
  "https://api.openhive.network",
]);

function buyPunk(punk) {
  hive_keychain.requestCustomJson(
    null,
    "ssc-mainnet-hive",
    "Active",
    `{"contractName":"nftmarket","contractAction": "buy","contractPayload":{"symbol": "PUNK","nfts": ["${punk.nftId}"],"marketAccount": "blockheadgames","expPrice": "${punk.price}","expPriceSymbol": "SWAP.HIVE"}}`.replace(
      /\s/g,
      ""
    ),
    `Buy ${punk.name}`
  );
}
function removeModal() {
  modal.innerHTML = "";
}
function addModal(punk) {
  console.log(punk);

  modal.innerHTML = `<div class="modal">
      <div
        class="
          xl:w-full
          2xl:w-1/2
          m-2
          overflow-auto
          scrollbar-thin scrollbar-thumb-transparent
          flex flex-col
          p-1
          bg-gray-800
          shadow-lg
          hover:shodow-lg
          rounded-lg
          border-2 border-black
        "
      >
        <div class="xl:flex xl:flex-row xl:flex-shrink-0">
          <div class="xl:w-1/2 2xl:w-1/2">
            <img
              class="rounded-lg drop-shadow-lg border border-black w-full"
              src="https://files.usehive.com/file/hivepunks/${punk.id}.png"
            />
            <div class="w-full bg-gray-200 rounded-full h-2">
              <div
                class="bg-blue-400 h-2 rounded-full"
                style="width: 1.86756%"
              ></div>
            </div>
            <p class="name-text text-center pt-2">${punk.name || "None"}</p>
            <p class="profession-text text-center">${
              punk.profession || "None"
            }</p>
            <div class="text-sm text-white font-bold text-center p-1">
              Rarity Score: <span class="text-blue-400"> ${parseFloat(
                punk.rarity
              ).toFixed(2)}</span>
            </div>
            <!---->
          </div>
          <div class="py-1 px-2 xl:w-1/2 2xl:w-1/2 xl:flex-shrink">
            <div>
              <div
                class="
                  flex flex-row
                  items-baseline
                  px-1
                  overflow-hidden
                  text-sm
                "
              >
                <div class="flex-grow font-medium text-white capitalize">
                  full type
                </div>
                <div class="pl-1 text-md text-right text-blue-400">+${parseFloat(
                  punk.full_type_rarity
                ).toFixed(2)}</div>
              </div>
              <div
                class="
                  flex flex-row
                  pl-1.5
                  mb-0.5
                  overflow-hidden
                  text-sm text-white
                  border
                  rounded-lg
                  shadow
                  cursor-pointer
                  select-none
                  transition-colors
                  hover:bg-gray-900
                  bg-gray-600
                  border-gray-800
                "
              >
                <div class="flex-grow overflow-hidden">${
                  punk.full_type || "None"
                }</div>

              </div>
            </div>
            <div>
              <div
                class="
                  flex flex-row
                  items-baseline
                  px-1
                  overflow-hidden
                  text-sm
                "
              >
                <div class="flex-grow font-medium text-white capitalize">
                  gender
                </div>
                <div class="pl-1 text-md text-right text-blue-400">+${parseFloat(
                  punk.gender_rarity
                ).toFixed(2)}</div>
              </div>
              <div
                class="
                  flex flex-row
                  pl-1.5
                  mb-0.5
                  overflow-hidden
                  text-sm text-white
                  border
                  rounded-lg
                  shadow
                  cursor-pointer
                  select-none
                  transition-colors
                  hover:bg-gray-900
                  bg-gray-600
                  border-gray-800
                "
              >
                <div class="flex-grow overflow-hidden">${
                  punk.gender || "None"
                }</div>

              </div>
            </div>
            <div>
              <div
                class="
                  flex flex-row
                  items-baseline
                  px-1
                  overflow-hidden
                  text-sm
                "
              >
                <div class="flex-grow font-medium text-white capitalize">
                  profession
                </div>
                <div class="pl-1 text-md text-right text-blue-400">
                  +${parseFloat(punk.profession_rarity).toFixed(2)}
                </div>
              </div>
              <div
                class="
                  flex flex-row
                  pl-1.5
                  mb-0.5
                  overflow-hidden
                  text-sm text-white
                  border
                  rounded-lg
                  shadow
                  cursor-pointer
                  select-none
                  transition-colors
                  hover:bg-gray-900
                  bg-gray-600
                  border-gray-800
                "
              >
                <div class="flex-grow overflow-hidden">
                ${punk.profession || "None"}
                </div>

              </div>
            </div>
            <div>
              <div
                class="
                  flex flex-row
                  items-baseline
                  px-1
                  overflow-hidden
                  text-sm
                "
              >
                <div class="flex-grow font-medium text-white capitalize">
                  accessory count
                </div>
                <div class="pl-1 text-md text-right text-blue-400">+${parseFloat(
                  punk.accessory_count_rarity
                ).toFixed(2)}</div>
              </div>
              <div
                class="
                  flex flex-row
                  pl-1.5
                  mb-0.5
                  overflow-hidden
                  text-sm text-white
                  border
                  rounded-lg
                  shadow
                  cursor-pointer
                  select-none
                  transition-colors
                  hover:bg-gray-900
                  bg-gray-600
                  border-gray-800
                "
              >
                <div class="flex-grow overflow-hidden">${
                  punk.accessory_count || "0"
                }</div>

              </div>
            </div>
            <div>
              <div
                class="
                  flex flex-row
                  items-baseline
                  px-1
                  overflow-hidden
                  text-sm
                "
              >
                <div class="flex-grow font-medium text-white capitalize">
                  hair
                </div>
                <div class="pl-1 text-md text-right text-blue-400">+${parseFloat(
                  punk.hair_rarity
                ).toFixed(2)}</div>
              </div>
              <div
                class="
                  flex flex-row
                  pl-1.5
                  mb-0.5
                  overflow-hidden
                  text-sm text-white
                  border
                  rounded-lg
                  shadow
                  cursor-pointer
                  select-none
                  transition-colors
                  hover:bg-gray-900
                  bg-gray-600
                  border-gray-800
                "
              >
                <div class="flex-grow overflow-hidden">${
                  punk.hair || "None"
                }</div>
   
              </div>
            </div>
            <div>
              <div
                class="
                  flex flex-row
                  items-baseline
                  px-1
                  overflow-hidden
                  text-sm
                "
              >
                <div class="flex-grow font-medium text-white capitalize">
                  eyes
                </div>
                <div class="pl-1 text-md text-right text-blue-400">
                  +${parseFloat(punk.eyes_rarity).toFixed(2)}
                </div>
              </div>
              <div
                class="
                  flex flex-row
                  pl-1.5
                  mb-0.5
                  overflow-hidden
                  text-sm text-white
                  border
                  rounded-lg
                  shadow
                  cursor-pointer
                  select-none
                  transition-colors
                  hover:bg-gray-900
                  bg-gray-600
                  border-gray-800
                "
              >
                <div class="flex-grow overflow-hidden">${
                  punk.eyes || "None"
                }</div>

              </div>
            </div>
            <div>
              <div
                class="
                  flex flex-row
                  items-baseline
                  px-1
                  overflow-hidden
                  text-sm
                "
              >
                <div class="flex-grow font-medium text-white capitalize">
                  nose
                </div>
                <div class="pl-1 text-md text-right text-blue-400">+${parseFloat(
                  punk.nose_rarity
                ).toFixed(2)}</div>
              </div>
              <div
                class="
                  flex flex-row
                  pl-1.5
                  mb-0.5
                  overflow-hidden
                  text-sm text-white
                  border
                  rounded-lg
                  shadow
                  cursor-pointer
                  select-none
                  transition-colors
                  hover:bg-gray-900
                  bg-gray-600
                  border-gray-800
                "
              >
                <div class="flex-grow overflow-hidden">${
                  punk.nose || "None"
                }</div>

              </div>
            </div>
            <div>
              <div
                class="
                  flex flex-row
                  items-baseline
                  px-1
                  overflow-hidden
                  text-sm
                "
              >
                <div class="flex-grow font-medium text-white capitalize">
                  ear
                </div>
                <div class="pl-1 text-md text-right text-blue-400">+${parseFloat(
                  punk.ear_rarity
                ).toFixed(2)}</div>
              </div>
              <div
                class="
                  flex flex-row
                  pl-1.5
                  mb-0.5
                  overflow-hidden
                  text-sm text-white
                  border
                  rounded-lg
                  shadow
                  cursor-pointer
                  select-none
                  transition-colors
                  hover:bg-gray-900
                  bg-gray-600
                  border-gray-800
                "
              >
                <div class="flex-grow overflow-hidden">${
                  punk.ear || "None"
                }</div>

              </div>
            </div>
            <div>
              <div
                class="
                  flex flex-row
                  items-baseline
                  px-1
                  overflow-hidden
                  text-sm
                "
              >
                <div class="flex-grow font-medium text-white capitalize">
                  neck
                </div>
                <div class="pl-1 text-md text-right text-blue-400">+${parseFloat(
                  punk.neck_rarity
                ).toFixed(2)}</div>
              </div>
              <div
                class="
                  flex flex-row
                  pl-1.5
                  mb-0.5
                  overflow-hidden
                  text-sm text-white
                  border
                  rounded-lg
                  shadow
                  cursor-pointer
                  select-none
                  transition-colors
                  hover:bg-gray-900
                  bg-gray-600
                  border-gray-800
                "
              >
                <div class="flex-grow overflow-hidden">${
                  punk.neck || "None"
                }</div>

              </div>
            </div>
            <div>
              <div
                class="
                  flex flex-row
                  items-baseline
                  px-1
                  overflow-hidden
                  text-sm
                "
              >
                <div class="flex-grow font-medium text-white capitalize">
                  mouth
                </div>
                <div class="pl-1 text-md text-right text-blue-400">
                  +${parseFloat(punk.mouth_rarity).toFixed(2)}
                </div>
              </div>
              <div
                class="
                  flex flex-row
                  pl-1.5
                  mb-0.5
                  overflow-hidden
                  text-sm text-white
                  border
                  rounded-lg
                  shadow
                  cursor-pointer
                  select-none
                  transition-colors
                  hover:bg-gray-900
                  bg-gray-600
                  border-gray-800
                "
              >
                <div class="flex-grow overflow-hidden">${
                  punk.mouth || "None"
                }</div>

              </div>
            </div>
            <div>
              <div
                class="
                  flex flex-row
                  items-baseline
                  px-1
                  overflow-hidden
                  text-sm
                "
              >
                <div class="flex-grow font-medium text-white capitalize">
                  mouth prop
                </div>
                <div class="pl-1 text-md text-right text-blue-400">+${parseFloat(
                  punk.mouth_prop_rarity
                ).toFixed(2)}</div>
              </div>
              <div
                class="
                  flex flex-row
                  pl-1.5
                  mb-0.5
                  overflow-hidden
                  text-sm text-white
                  border
                  rounded-lg
                  shadow
                  cursor-pointer
                  select-none
                  transition-colors
                  hover:bg-gray-900
                  bg-gray-600
                  border-gray-800
                "
              >
                <div class="flex-grow overflow-hidden">${
                  punk.mouth_prop || "None"
                }</div>

              </div>
            </div>
            <div>
              <div
                class="
                  flex flex-row
                  items-baseline
                  px-1
                  overflow-hidden
                  text-sm
                "
              >
                <div class="flex-grow font-medium text-white capitalize">
                  facial hair
                </div>
                <div class="pl-1 text-md text-right text-blue-400">+${parseFloat(
                  punk.facial_hair_rarity
                ).toFixed(2)}</div>
              </div>
              <div
                class="
                  flex flex-row
                  pl-1.5
                  mb-0.5
                  overflow-hidden
                  text-sm text-white
                  border
                  rounded-lg
                  shadow
                  cursor-pointer
                  select-none
                  transition-colors
                  hover:bg-gray-900
                  bg-gray-600
                  border-gray-800
                "
              >
                <div class="flex-grow overflow-hidden">${
                  punk.facial_hair || "None"
                }</div>

              </div>
            </div>
            <div>
              <div
                class="
                  flex flex-row
                  items-baseline
                  px-1
                  overflow-hidden
                  text-sm
                "
              >
                <div class="flex-grow font-medium text-white capitalize">
                  blemish
                </div>
                <div class="pl-1 text-md text-right text-blue-400">+${parseFloat(
                  punk.blemish_rarity
                ).toFixed(2)}</div>
              </div>
              <div
                class="
                  flex flex-row
                  pl-1.5
                  mb-0.5
                  overflow-hidden
                  text-sm text-white
                  border
                  rounded-lg
                  shadow
                  cursor-pointer
                  select-none
                  transition-colors
                  hover:bg-gray-900
                  bg-gray-600
                  border-gray-800
                "
              >
                <div class="flex-grow overflow-hidden">${
                  punk.blemish || "None"
                }</div>

              </div>
            </div>
          </div>
        </div>
        <div class="flex flex-row justify-between">
          <button
            class="
              flex flex-row
              bg-blue-200
              hover:bg-blue-100
              font-bold font-serif
              text-sm
              p-1
              m-1
              justify-center
              rounded-lg
              drop-shadow-lg
            "
            onclick='removeModal()'
          >
            Close
          </button>
        </div>
      </div>
    </div>`;
}
(async () => {
  let cheapestPunksReq = await axios.get("/cheapestpunks");
  let cheapestPunks = cheapestPunksReq.data;
  //   console.log(cheapestPunks);
  let punkslist = document.getElementById("punkslist");
  let modal = document.getElementById("modal");

  for (let punk of cheapestPunks) {
    console.log(punk);
    punkslist.innerHTML += `<div class="col-span-1">
      <div class="bg-gray-800 overflow-hidden rounded-lg">
        <img
          class=""
          src="https://files.usehive.com/file/hivepunks/${punk.nftId}.png"
        />
        <div class="text-left p-6 md:p-4 space-y-2">
          <p class="name-text">${punk.name}</p>
          <p class="profession-text pb-1">${punk.profession}</p>
          <p class="text-white text-sm">ID: ${punk.nftId}</p>
          <p class="text-sm leading-relaxed text-white">
            Rarity: ${parseFloat(punk.rarity).toFixed(2)}
          </p>
          <div class="w-full bg-gray-200 rounded-full h-2">
            <div
              class="bg-blue-400 h-2 rounded-full"
              style="width: 97.7112%"
            ></div>
          </div>
        </div>
        <div class="grid grid-cols-1">
          <button
            class="
              bg-blue-200
              hover:bg-blue-100
              font-bold
              text-black text-xs
              p-1
            "
            onclick='addModal(${JSON.stringify(punk)})'
          >
            Details</button
          ><!---->
        </div>
        <div class="flex flex-col bg-white rounded-none">
          <p class="text-md text-black font-medium text-sm py-2 ml-2">
            Seller: @${punk.account}
          </p>
          <div class="p-1">
            <div class="flex flex-row mx-1 my-1 justify-end">
              <button class="btn-std" onclick='buyPunk(${JSON.stringify(
                punk
              )})'>
                Buy for ${parseFloat(punk.price).toFixed(2)}
                <span
                  class="
                    flex flex-row
                    ml-1
                    text-red-500 text-sm
                    font-medium font-peakfont
                  "
                  >h</span
                >
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>`;
  }
})();
