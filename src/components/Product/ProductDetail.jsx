export default function ProductDetail(props) {
  const { id, title, description, image, price, rating, category } = props;

  return (
    <div className="mt-6 sm:mt-8 lg:flex lg:items-start  lg:max-w-6xl xl:max-w-7xl ">
      <div className="mx-auto w-2/5 flex-none">
        {/* lg:max-w-2xl xl:max-w-2xl xl:gap-8 md:gap-6*/}
        <img src={image} alt="" className="w-[90%] h-[90%]" />
      </div>
      <div className="mx-auto  w-[90%] space-y-2 ">
        {/*max-w-4xl lg:mt-0 lg:w-ful flex-1 space-y-6 l*/}
        <h1 className="text-2xl md:text-4xl lg:text-4xl font-bold">{title}</h1>
        {rating && (
          <div className="flex gap-2">
            <svg
              className="w-4 h-4 text-yellow-300 ms-1"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
              viewBox="0 0 22 20"
            >
              <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
            </svg>
            <div>{rating.rate}</div>
            <div>Reviews: {rating.count}</div>
          </div>
        )}

        <span
          key={category}
          className="inline-flex items-center rounded-md bg-gray-50 px-2 py-1 text-xs font-medium text-gray-600 ring-1 ring-inset ring-gray-500/10"
        >
          {category}
        </span>

        <h3 className="text-xl md:text-2xl lg:text-2xl font-bold">${price}</h3>
        <button className="bg-cyan-700 hover:bg-cyan-900 w-[90%] md:w-[14rem] lg:w-[14rem]  text-white font-bold py-2 px-4 rounded">
          Add To Cart
        </button>
        <h2 className="text-lg font-bold">Description</h2>
        <p>{description}</p>
      </div>
    </div>
  );
}
