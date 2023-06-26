import React from "react";

import { Button, Img, Line, List, Text } from "components";

const FramePage = () => {
  return (
    <>
      <div className="bg-white-A700 flex flex-col font-roboto items-center justify-start mx-auto pb-[31px] w-full">
        <div className="flex flex-col justify-start w-full">
          <div className="h-[587px] md:px-5 relative w-full">
            <Img
              className="absolute h-[587px] inset-[0] justify-center m-auto object-cover w-full"
              src="images/img_image.png"
              alt="image"
            />
            <div className="absolute flex flex-col items-center justify-start left-[0] top-[4%] w-[15%]">
              <Img
                className="h-12 md:h-auto object-cover w-full"
                src="images/img_image0.png"
                alt="imageZero"
              />
            </div>
            <div className="absolute h-[587px] inset-[0] justify-center m-auto w-full">
              <Img
                className="h-[587px] m-auto object-cover w-full"
                src="images/img_image.png"
                alt="image_One"
              />
              <div className="absolute flex flex-col justify-start right-[2%] top-[7%] w-[86%]">
                <div className="flex md:flex-col flex-row md:gap-5 items-start justify-end md:ml-[0] ml-[150px] w-[86%] md:w-full">
                  <Text
                    className="text-[15px] text-cyan-A200"
                    size="txtRobotoRegular15"
                  >
                    Home
                  </Text>
                  <Text
                    className="ml-16 md:ml-[0] text-base text-blue_gray-500"
                    size="txtRobotoRegular16"
                  >
                    LP
                  </Text>
                  <Text
                    className="ml-16 md:ml-[0] text-base text-blue_gray-500"
                    size="txtRobotoRegular16"
                  >
                    Earn
                  </Text>
                  <Text
                    className="md:ml-[0] ml-[66px] text-base text-blue_gray-500"
                    size="txtRobotoRegular16"
                  >
                    Lucky Drop
                  </Text>
                  <Text
                    className="md:ml-[0] ml-[67px] text-base text-blue_gray-500"
                    size="txtRobotoRegular16"
                  >
                    AI Algorithm
                  </Text>
                  <Text
                    className="md:ml-[0] ml-[67px] text-base text-blue_gray-500"
                    size="txtRobotoRegular16"
                  >
                    DAO
                  </Text>
                  <Text
                    className="md:ml-[0] ml-[156px] text-[13px] text-center text-gray-900 tracking-[0.42px]"
                    size="txtRobotoRegular13"
                  >
                    Connect Wallet
                  </Text>
                </div>
                <Text
                  className="md:ml-[0] ml-[338px] mt-[163px] text-center text-cyan-A200 text-lg"
                  size="txtRobotoRegular18"
                >
                  Proudly Launch on Arbitrum
                </Text>
                <Text
                  className="mr-[119px] mt-[25px] sm:text-[37px] md:text-[43px] text-[47px] text-center text-white-A700"
                  size="txtRobotoRegular47"
                >
                  Co-built by AI creatures and our community
                </Text>
              </div>
            </div>
          </div>
          <Text
            className="md:ml-[0] ml-[484px] mt-[103px] text-base text-center text-deep_purple-A200"
            size="txtRobotoRegular16DeeppurpleA200"
          >
            You can verify your DOGEAI now
          </Text>
          <Text
            className="leading-[24.00px] md:ml-[0] ml-[263px] mt-4 text-base text-blue_gray-500 text-center w-[57%] sm:w-full"
            size="txtRobotoRegular16"
          >
            A total of 18,060,000,000,000,000 DOGEAI tokens are available for
            Arbitrum airinvestment-qualified accounts to claim. DOGEAI will be
            distributed to super contributors in the Arbitrum community,
            inviting friends to earn more.
          </Text>
          <div className="flex sm:flex-col flex-row gap-1.5 items-start justify-center md:ml-[0] ml-[391px] mt-[25px] md:px-5 w-[35%] md:w-full">
            <Img
              className="h-3.5 md:h-auto sm:mt-0 mt-[5px] object-cover w-3.5"
              src="images/img_path.png"
              alt="path"
            />
            <Text
              className="leading-[24.00px] text-base text-yellow-900 w-[96%] sm:w-full"
              size="txtRobotoRegular16Yellow900"
            >
              05.02.2023 13:00（UTC+0)—05.15.2023 13:00（UTC+0）
            </Text>
          </div>
          <div className="flex flex-row sm:gap-10 items-start justify-between ml-80 md:ml-[0] mt-[22px] md:px-5 w-[46%] md:w-full">
            <Text
              className="text-[13px] text-blue_gray-500"
              size="txtRobotoRegular13Bluegray500"
            >
              Verified
            </Text>
            <Text
              className="text-blue_gray-500 text-xs"
              size="txtRobotoRegular12"
            >
              18,060,000,000,000,000
            </Text>
          </div>
          <div className="bg-blue_gray-900 h-2.5 mx-auto md:px-5 rounded-[5px] shadow-bs w-[47%]"></div>
          <div className="bg-blue_gray-900 border-2 border-blue_gray-700 border-solid h-14 mt-5 mx-auto md:px-5 rounded-[12px] w-[47%]"></div>
          <div className="flex flex-row items-start justify-start md:ml-[0] ml-[350px] mt-6 md:px-5 w-[10%] md:w-full">
            <Text
              className="text-[13px] text-blue_gray-500"
              size="txtRobotoRegular13Bluegray500"
            >
              Balance:
            </Text>
            <Text
              className="ml-0.5 text-[15px] text-blue_gray-500"
              size="txtRobotoRegular15Bluegray500"
            >
              0
            </Text>
            <Text
              className="ml-[23px] mt-1 text-[9px] text-center text-gray-900 tracking-[0.30px]"
              size="txtRobotoRegular9"
            >
              Receive
            </Text>
          </div>
          <div className="flex sm:flex-col flex-row gap-10 items-center justify-center ml-80 md:ml-[0] mt-[62px] md:px-5 w-[47%] md:w-full">
            <Button className="bg-blue_gray-900 cursor-pointer min-w-[260px] py-[15px] rounded-[12px] text-blue_gray-500 text-center text-lg tracking-[0.54px]">
              Claim Airdrop
            </Button>
            <Button className="bg-blue_gray-900 cursor-pointer min-w-[260px] py-[15px] rounded-[12px] text-blue_gray-500 text-center text-lg tracking-[0.54px]">
              Invite Friends
            </Button>
          </div>
          <Text
            className="md:ml-[0] ml-[580px] mt-[225px] text-base text-white-A700"
            size="txtRobotoRegular16WhiteA700"
          >
            What is DOGEAI?
          </Text>
          <div className="flex md:flex-col flex-row md:gap-10 gap-[100px] items-start justify-start max-w-[958px] mt-[19px] mx-auto md:px-5 w-full">
            <Img
              className="h-[360px] md:h-auto object-cover rounded-[32px] w-[360px]"
              src="images/img_image_360x360.png"
              alt="image_Two"
            />
            <div className="flex flex-col gap-6 items-center justify-start md:mt-0 mt-[7px]">
              <Text
                className="leading-[24.00px] text-base text-blue_gray-500 w-full"
                size="txtRobotoRegular16"
              >
                DOGEAI is a deflationary token. It will be used by ArbDoge AI
                Protocol ecosystem applications. The total supply is
                420,000,000,000,000,000 tokens,75% burn, 4.3% Arbitrum community
                airdrop, 5% liquidity pool donation, 9.2% DOGEAI community
                reward, 5% staking reward, 1.5% liquidity pool. DOGEAI belongs
                to everyone in the Arbitrum community, and it is also the
                necessary key to unlock the future ecology of ArbDoge AI
                Protocol.
              </Text>
              <Text
                className="leading-[24.00px] text-blue_gray-500 text-sm w-[97%] sm:w-full"
                size="txtRobotoRegular14"
              >
                DOGEAI has a 5.1% burning tax. It is recommended to adjust the
                slippage tolerance to about 6% when buying and selling to ensure
                the success of the transaction. For every DOGEAI purchase, you
                will receive a Lucky Drop ticket and a chance to win ETH prizes
                based on the purchase amount. You can also stake your DOGEAI,
                DOGEAI/ETH LP to earn more.
              </Text>
            </div>
          </div>
          <Text
            className="md:ml-[0] ml-[779px] mt-[3px] text-center text-gray-900 text-lg tracking-[0.54px]"
            size="txtRobotoRegular18Gray900"
          >
            Buy DOGEAI
          </Text>
          <Img
            className="h-[576px] sm:h-auto mt-[142px] object-cover w-full"
            src="images/img_image_576x1200.png"
            alt="image_Three"
          />
          <List
            className="sm:flex-col flex-row gap-px grid sm:grid-cols-1 md:grid-cols-2 grid-cols-3 md:ml-[0] ml-[227px] mt-[120px] md:px-5 w-4/5"
            orientation="horizontal"
          >
            <div className="bg-gray-900_01 flex flex-col gap-5 items-center justify-end p-[30px] sm:px-5 w-full">
              <div className="md:h-10 h-[38px] mt-0.5 relative w-[37px]">
                <Text
                  className="absolute h-full inset-y-[0] left-[0] my-auto md:text-3xl sm:text-[28px] text-[32px] text-cyan-A200"
                  size="txtRobotoRegular32"
                >
                  0
                </Text>
                <Text
                  className="absolute h-full inset-y-[0] my-auto right-[0] md:text-3xl sm:text-[28px] text-[32px] text-cyan-A200"
                  size="txtRobotoRegular32"
                >
                  T
                </Text>
              </div>
              <Text
                className="text-[13px] text-white-A700"
                size="txtRobotoRegular13WhiteA700"
              >
                DOGEAI Currency Supply
              </Text>
            </div>
            <div className="bg-gray-900_01 flex flex-col gap-[18px] items-center justify-end p-[31px] sm:px-5 w-full">
              <div className="h-[38px] relative w-[37px]">
                <Text
                  className="absolute h-full inset-y-[0] left-[0] my-auto md:text-3xl sm:text-[28px] text-[32px] text-cyan-A200"
                  size="txtRobotoRegular32"
                >
                  0
                </Text>
                <Text
                  className="absolute h-full inset-y-[0] my-auto right-[0] md:text-3xl sm:text-[28px] text-[32px] text-cyan-A200"
                  size="txtRobotoRegular32"
                >
                  T
                </Text>
              </div>
              <Text
                className="text-sm text-white-A700"
                size="txtRobotoRegular14WhiteA700"
              >
                DOGEAI Total Burn
              </Text>
            </div>
            <div className="bg-gray-900_01 flex flex-col gap-5 items-center justify-end p-[30px] sm:px-5 w-full">
              <div className="md:h-10 h-[38px] mt-0.5 relative w-[37px]">
                <Text
                  className="absolute h-full inset-y-[0] left-[0] my-auto md:text-3xl sm:text-[28px] text-[32px] text-cyan-A200"
                  size="txtRobotoRegular32"
                >
                  0
                </Text>
                <Text
                  className="absolute h-full inset-y-[0] my-auto right-[0] md:text-3xl sm:text-[28px] text-[32px] text-cyan-A200"
                  size="txtRobotoRegular32"
                >
                  T
                </Text>
              </div>
              <Text
                className="text-[13px] text-white-A700"
                size="txtRobotoRegular13WhiteA700"
              >
                DOGEAI staking Volume
              </Text>
            </div>
          </List>
          <div className="flex md:flex-col flex-row gap-8 items-center justify-between max-w-[1184px] mt-[136px] mx-auto overflow-auto md:px-5 w-full">
            <div className="h-[318px] relative w-[19%] md:w-full">
              <Img
                className="h-[318px] m-auto object-cover w-full"
                src="images/img_image_318x216.png"
                alt="image_Four"
              />
              <div className="absolute bottom-[9%] flex flex-col gap-1.5 items-center justify-start left-[10%]">
                <Text
                  className="text-white-A700 text-xl"
                  size="txtRobotoRegular20"
                >
                  DOGEAI
                </Text>
                <Text
                  className="text-blue_gray-500 text-sm"
                  size="txtRobotoRegular14"
                >
                  Get started
                </Text>
              </div>
            </div>
            <List
              className="md:flex-1 sm:flex-col flex-row gap-8 grid sm:grid-cols-1 md:grid-cols-2 grid-cols-4 w-[82%] md:w-full"
              orientation="horizontal"
            >
              <div className="h-[318px] sm:ml-[0] relative w-full">
                <Img
                  className="h-[318px] m-auto object-cover w-full"
                  src="images/img_image_1.png"
                  alt="image"
                />
                <div className="absolute bottom-[9%] flex flex-col md:gap-10 gap-[62px] justify-start left-[10%] w-[51%]">
                  <Img
                    className="h-[42px] md:ml-[0] ml-[68px]"
                    src="images/img_frame.svg"
                    alt="frame"
                  />
                  <div className="flex flex-col gap-1.5 items-start justify-start w-full">
                    <Text
                      className="text-white-A700 text-xl"
                      size="txtRobotoRegular20"
                    >
                      AI Algorithm
                    </Text>
                    <Text
                      className="text-blue_gray-500 text-sm"
                      size="txtRobotoRegular14"
                    >
                      Coming soon...
                    </Text>
                  </div>
                </div>
              </div>
              <div className="h-[318px] sm:ml-[0] relative w-full">
                <Img
                  className="h-[318px] m-auto object-cover w-full"
                  src="images/img_image_2.png"
                  alt="image"
                />
                <div className="absolute bottom-[9%] flex flex-col md:gap-10 gap-[62px] justify-start left-[10%] w-[54%]">
                  <Img
                    className="h-[42px] md:ml-[0] ml-[68px]"
                    src="images/img_frame.svg"
                    alt="frame"
                  />
                  <div className="flex flex-col gap-[7px] items-start justify-start w-full">
                    <Text
                      className="text-[19px] text-white-A700"
                      size="txtRobotoRegular19"
                    >
                      NFT Prologue
                    </Text>
                    <Text
                      className="text-blue_gray-500 text-sm"
                      size="txtRobotoRegular14"
                    >
                      Coming soon...
                    </Text>
                  </div>
                </div>
              </div>
              <div className="h-[318px] sm:ml-[0] relative w-full">
                <Img
                  className="h-[318px] m-auto object-cover w-full"
                  src="images/img_image_3.png"
                  alt="image"
                />
                <div className="absolute bottom-[9%] flex flex-col md:gap-10 gap-[60px] justify-start left-[10%] w-[57%]">
                  <Img
                    className="h-[42px] md:ml-[0] ml-[68px]"
                    src="images/img_frame.svg"
                    alt="frame"
                  />
                  <div className="flex flex-col gap-2 items-start justify-start w-full">
                    <Text
                      className="text-white-A700 text-xl"
                      size="txtRobotoRegular20"
                    >
                      DOGEAI Vault
                    </Text>
                    <Text
                      className="text-blue_gray-500 text-sm"
                      size="txtRobotoRegular14"
                    >
                      Coming soon...
                    </Text>
                  </div>
                </div>
              </div>
              <div className="h-[318px] sm:ml-[0] relative w-full">
                <Img
                  className="h-[318px] m-auto object-cover w-full"
                  src="images/img_image_4.png"
                  alt="image"
                />
                <div className="absolute bottom-[9%] flex flex-col md:gap-10 gap-[60px] justify-start left-[10%] w-[49%]">
                  <Img
                    className="h-[42px] md:ml-[0] ml-[68px]"
                    src="images/img_frame.svg"
                    alt="frame"
                  />
                  <div className="flex flex-col gap-2 items-start justify-start mr-2.5">
                    <Text
                      className="text-white-A700 text-xl"
                      size="txtRobotoRegular20"
                    >
                      AI Lab
                    </Text>
                    <Text
                      className="text-blue_gray-500 text-sm"
                      size="txtRobotoRegular14"
                    >
                      Coming soon...
                    </Text>
                  </div>
                </div>
              </div>
            </List>
            <div className="overflow-x-auto w-[19%]">
              <div className="h-[318px] relative w-full">
                <Img
                  className="h-[318px] m-auto object-cover w-full"
                  src="images/img_image_5.png"
                  alt="image_Five"
                />
                <div className="absolute bottom-[8%] flex flex-col gap-[58px] justify-start left-[10%] w-[49%]">
                  <Img
                    className="h-[42px] md:ml-[0] ml-[68px]"
                    src="images/img_frame.svg"
                    alt="frame"
                  />
                  <div className="flex flex-col items-start justify-start mr-1.5">
                    <Text
                      className="text-white-A700 text-xl"
                      size="txtRobotoRegular20"
                    >
                      Build
                    </Text>
                    <Text
                      className="leading-[24.00px] text-blue_gray-500 text-sm w-full"
                      size="txtRobotoRegular14"
                    >
                      Coming soon...
                    </Text>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <Text
            className="md:ml-[0] ml-[287px] mt-[124px] sm:text-[27px] md:text-[29px] text-[31px] text-center text-white-A700"
            size="txtRobotoRegular31"
          >
            Join our community to lead the new era of AI.
          </Text>
          <div className="flex sm:flex-col flex-row sm:gap-5 items-end justify-center max-w-[833px] mt-[7px] mx-auto md:px-5 w-full">
            <Text
              className="md:text-3xl sm:text-[28px] text-[32px] text-center text-white-A700"
              size="txtRobotoRegular32WhiteA700"
            >
              DOGEAI Contract
            </Text>
            <Text
              className="mb-[3px] sm:ml-[0] ml-[15px] sm:mt-0 mt-[9px] sm:text-[17px] md:text-[19px] text-[21px] text-center text-white-A700"
              size="txtRobotoRegular21"
            >
              0x0081B0a83201400418a1654 e531eeA6D32D9d1bF
            </Text>
            <Text
              className="mb-1 sm:ml-[0] ml-[21px] sm:mt-0 mt-[11px] text-center text-gray-900 text-lg tracking-[0.54px]"
              size="txtRobotoRegular18Gray900"
            >
              COPY
            </Text>
          </div>
          <div className="flex flex-row gap-12 items-center justify-center md:ml-[0] ml-[524px] mt-[85px] md:px-5 w-[13%] md:w-full">
            <Img
              className="h-[52px] w-[52px]"
              src="images/img_frame_black_900.svg"
              alt="frame_One"
            />
            <Img
              className="h-[52px] w-[52px]"
              src="images/img_frame_black_900_52x52.svg"
              alt="frame_Two"
            />
          </div>
          <div className="flex flex-col items-center justify-start md:ml-[0] ml-[136px] mt-[184px] md:px-5 w-[15%] md:w-full">
            <Img
              className="h-12 md:h-auto object-cover w-full"
              src="images/img_image0.png"
              alt="imageZero_One"
            />
          </div>
          <Text
            className="md:ml-[0] ml-[136px] mt-[23px] text-[13px] text-blue_gray-500"
            size="txtRobotoRegular13Bluegray500"
          >
            DOGEAI, an Experiment in the Arbitrum Ecosystem.
          </Text>
          <Line className="bg-blue_gray-900 h-px max-w-[928px] mt-[65px] mx-auto w-full" />
          <Text
            className="md:ml-[0] ml-[477px] mt-[33px] text-[11px] text-blue_gray-500 text-center"
            size="txtRobotoRegular11"
          >
            © 2023 Arbitrum Doge Paradise. All right reserved.
          </Text>
        </div>
      </div>
    </>
  );
};

export default FramePage;
