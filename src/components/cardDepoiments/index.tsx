/* eslint-disable react/react-in-jsx-scope */
/* eslint-disable import/no-absolute-path */
/* eslint-disable @typescript-eslint/explicit-function-return-type */
/* eslint-disable react-hooks/rules-of-hooks */
/* eslint-disable import-helpers/order-imports */
/* eslint-disable react/no-unescaped-entities */
/* eslint-disable @typescript-eslint/no-explicit-any */
import { useRef, useState } from 'react'
import { useMediaQuery } from 'react-responsive'
import FavoriteIcon from '@mui/icons-material/Favorite';
import ChatBubbleIcon from '@mui/icons-material/ChatBubble';
import ReplyIcon from '@mui/icons-material/Reply';


interface CardGifprops {
  link: string
  brand: string
  avatar: string
  creator: string
  brand_name: string
  action: string
  height?: string
  video?: boolean
}

function CardYoutube({
  link,
  brand,
  avatar,
  creator,
  brand_name,
  action,
  height,
  video = false,
}: CardGifprops): JSX.Element {
  const isMobile = useMediaQuery({ query: '(max-width: 1224px)' })

  return (
    <div className="w-full h-full pointer-events-none	">
      <div className="relative">
        {!video && (
          <iframe
            width="100%"
            height={height}
            className="rounded-xl shadow-xl shadow-black/30 transition-all ease-in-out cursor-pointer"
            src={`https://www.youtube.com/embed/${link}?autoplay=1&loop=1&iv_load_policy=3&fs=0&color=white&controls=0&mute=1&disablekb=1&playlist=${link}`}
          />
        )}
        {video && (
          <video
            src={link}
            width="100%"
            height={height}
            className="rounded-xl shadow-xl shadow-black/30 transition-all ease-in-out cursor-pointer"
            muted
            loop
            autoPlay
          />
        )}
        {/* </LazyLoad> */}

        <div className="w-full absolute bottom-9 sm:bottom-24 right-1 sm:right-2 flex flex-col items-end gap-1 justify-end">
          <div className="p-1 sm:p-2 rounded-md w-fit h-fit shadow-lg shadow-black/30 border-[1px] border-white/20 font-bold text-[.5rem] sm:text-xs bg-white bg-opacity-20 backdrop-filter backdrop-blur-lg flex items-center justify-center">
            <FavoriteIcon fontSize='small' sx={{color: "#ffffff"}}/>
          </div>
          <div className="p-1 sm:p-2 rounded-md w-fit h-fit shadow-lg shadow-black/30 border-[1px] border-white/20 font-bold text-[.5rem] sm:text-xs bg-white bg-opacity-20 backdrop-filter backdrop-blur-lg flex items-center justify-center">
          <ChatBubbleIcon fontSize='small' sx={{color: "#ffffff"}}/>
          </div>
          <div className="p-1 sm:p-2 rounded-md w-fit h-fit shadow-lg shadow-black/30 border-[1px] border-white/20 font-bold text-[.5rem] sm:text-xs bg-white bg-opacity-20 backdrop-filter backdrop-blur-lg flex items-center justify-center">
          <ReplyIcon fontSize='small' sx={{color: "#ffffff"}}/>
          </div>
        </div>

        <div className="absolute bottom-0 left-0 w-full">
          <div className="w-full rounded-md sm:rounded-xl leading-none px-1 sm:px-2 py-1 sm:py-2 shadow-md shadow-black/30 border-[1px] border-white/20 font-bold text-xs bg-green-300 bg-opacity-20 backdrop-filter backdrop-blur-lg">
            <div className="flex items-center justify-around gap-1 ">
              <img src={brand} className="w-full  sm:w-14 drop-shadow-2xl" />
              <p className="text-[.5rem] sm:text-base !text-white">
                {brand_name}
              </p>
              <p className='font-bold font-Montserrat text-4xl italic text-green-700'>
             fax
              </p>
            </div>
          </div>
        </div>

        <div className="w-full absolute top-2 left-2 flex items-center gap-1 justify-start">
          <img
            src={avatar}
            className="w-4 sm:w-8 rounded-full drop-shadow-2xl"
          />
          <a target="_blank">
            <p className="px-1 rounded-lg w-fit h-fit shadow-md !text-white shadow-black/30 border-[1px] border-white/20 font-bold text-[.5rem] sm:text-xs bg-white bg-opacity-20 backdrop-filter backdrop-blur-lg">
              {isMobile ? creator.slice(0, 8) : creator.slice(0, 10)}
            </p>
          </a>
        </div>
      </div>
    </div>
  )
}

export default CardYoutube