const Cards = ({ image, title, desc }) => {
  return (
    <div className="flex items-start gap-4 bg-white border drop-shadow-md rounded p-10 hover:scale-105 transition-all duration-500">
      <img className="max-w-9" src={image} alt="" />
      <div>
        <p className="text-xl font-medium">{title}</p>
        <p className="text-sm text-neutral-500 mt-1">{desc}</p>
      </div>
    </div>
  )
}
export default Cards
