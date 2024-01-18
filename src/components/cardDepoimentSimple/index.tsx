/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
/* eslint-disable react/react-in-jsx-scope */
/* eslint-disable @typescript-eslint/explicit-function-return-type */

function CardCreator({
    username,
    name,
    titles,
    avatar,
    categories,
    qtdMore,
    description,
    followers,
    linkrech,
    engagament,
    image,
  }: any) {
    return (
      <div className="flex flex-col p-4 border-2 bg-white drop-shadow-xl rounded-lg animate__animated  animate__fadeIn animate__slow">
        <div className="flex justify-between gap-4">
          <div className="flex gap-3">
            <div>
              <img
                className="w-[60px] h-[60px] drop-shadow-xl rounded-full transition ease-in-out hover:scale-110 active:scale-105"
                src={avatar}
              />
            </div>
            <div className="flex flex-col gap-2">
              <p className="font-bold text-sm leading-none flex items-center ">
                @{username}
                {titles[0] === 1 && (
                  <span>
                    <img
                      className="ml-1 w-[15px]"
                      src="data:image/png;base64,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"
                    />
                  </span>
                )}
                {titles[1] === 1 && (
                  <span>
                    <img
                      className="w-[15px]"
                      src="data:image/png;base64,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"
                    />
                  </span>
                )}
                {titles[2] === 1 && (
                  <span>
                    <img
                      className="w-[15px]"
                      src="data:image/png;base64,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"
                    />
                  </span>
                )}
              </p>
              <p className="font-normal text-[.7rem] leading-none opacity-70 ">
                {name}
              </p>
              <div className="flex gap-1">
                {categories?.map((item: string, index: number) => (
                  <p key={index} className="text-[.6rem] p-1 w-fit bg-black/10">
                    {item}
                  </p>
                ))}
                <p className="text-[.6rem] p-1 w-fit bg-black/10">+{qtdMore}</p>
              </div>
              <p className="text-[.7rem]">{description.substring(0, 30)}..</p>
            </div>
          </div>
          <div className="relative">
            <img
              className="transition ease-in-out w-[50px] rounded-lg drop-shadow-2xl hover:scale-110 active:scale-105"
              src={image}
            />
  
            <i className="ph-fill ph-play text-white absolute left-1/3 top-10" />
          </div>
        </div>
        <div className="flex items-center justify-between gap-5 mt-3">
          <div className="flex items-center justify-center gap-2 transition ease-in-out hover:scale-110 active:scale-105">
            <i className="ph-bold ph-users" />
            <p className="font-bold text-md">{followers}</p>
          </div>
          <div className="h-full w-[1px] bg-black opacity-30" />
          <div className="flex items-center justify-center gap-2 transition ease-in-out hover:scale-110 active:scale-105">
            <i className="ph-bold ph-play-circle" />
            <p className="font-bold text-lmdg">{linkrech}</p>
          </div>
          <div className="h-full w-[1px] bg-black opacity-30" />
          <div className="flex items-center justify-center gap-2 transition ease-in-out hover:scale-110 active:scale-105">
            <i className="ph-bold ph-arrows-clockwise" />
            <p className="font-bold text-md">{engagament}%</p>
          </div>
        </div>
      </div>
    )
  }
  
  export default CardCreator