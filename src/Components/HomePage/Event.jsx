export const Event = () => {
  const image = [
    "https://cdn2.unrealengine.com/en-mega-sale-breaker-asset-1920x1080-98514c483012.jpg?h=480&quality=medium&resize=1&w=854",
    "https://cdn2.unrealengine.com/en-mega-sale-shopearnredeem-breaker-1920x1080-8a5667cc31f7.jpg?h=480&quality=medium&resize=1&w=854",
    "https://cdn2.unrealengine.com/en-featured-giveaways-breaker-1920x1080-0dbde30ffb23.jpg?h=480&quality=medium&resize=1&w=854",
  ];
  return (
    <>
      <div className="grid sm:grid-cols-3 justify-items-center place-content-center gap-4">
        {image.map((item, index) => (
          <span key={index} className="">
            <img className="w-full rounded-lg " src={item} />
          </span>
        ))}
      </div>
    </>
  );
};
