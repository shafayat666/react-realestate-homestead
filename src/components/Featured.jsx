import BookingCard from "./BookingCard";

const Featured = () => {
  return (
    <div className="bg-gray-100 mt-10 p-5">
      <div className="text-center space-y-5 mt-10">
        <p className="">OUR PROPERTIES</p>
        <h1 className="text-4xl">Featured Properties</h1>
      </div>
      <div>
        <BookingCard></BookingCard>
      </div>
    </div>

  );
}

export default Featured;