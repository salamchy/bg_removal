import { assets } from "../assets/assets";
import Cards from "./Cards"


const Steps = () => {

  const cards = [
    {
      image: assets.upload_icon,
      title: "Upload Image",
      desc: 'This is the description for Card 1.',
    },
    {
      image: assets.remove_bg_icon,
      title: "Remove Background",
      desc: 'This is the description for Card 2.',
    },
    {
      image: assets.download_icon,
      title: "Download Image",
      desc: 'This is the description for Card 3.',
    },
  ];
  return (
    <div className="mx-4 lg:mx-44 py-20 xl:py-40">
      <h1 className="text-center text-2xl md:text-3xl lg:text-4xl mt-4 font-semibold bg-gradient-to-r from-gray-900 to-gray-400 bg-clip-text text-transparent">Steps to Remove Background <br /> Image in seconds</h1>

      <div className="flex items-start flex-wrap gap-4 mt-16 xl:mt-24 justify-center" >
        {cards.map((card, index) => (
          <Cards
            key={index}
            image={card.image}
            title={card.title}
            desc={card.desc}
          />
        ))}
      </div>
    </div>
  )
}
export default Steps