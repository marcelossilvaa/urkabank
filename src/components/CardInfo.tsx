import React from "react"
interface ICardInfo {
  mainContent: string,
  content: string
}

const CardInfo = ({mainContent, content}: ICardInfo) => {
  return(
    <div className="bg-white min-h-[120px] w-80 p-6 rounded-3xl flex justify-center flex-col">
      <h1 className="font-bold text-xl">{mainContent}</h1>
      <h3 className="text-lg">{content}</h3>
    </div>
  )
}

export default CardInfo