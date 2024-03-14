import { useEffect, useState } from "react";
import { swiggy_api_URL } from "../constants";
import { bannerImg } from "../constants";
import { json } from "react-router-dom";

const HeadlineCards = () => {
  const [headCards, setHeadCards] = useState([]);
  const [secondCards, setSecondCards] = useState([]);
  const [show, setShow] = useState(false);

  useEffect(() => {
    {
      /**calling api */
    }
    getData();
  }, []);

  async function getData() {
    const response = await fetch(swiggy_api_URL);
    const json = await response.json();
    setSecondCards(json?.data);
    setHeadCards(
      json?.data?.cards[0]?.card?.card?.gridElements?.infoWithStyle?.info
    );
    console.log(json.data);
  }

  return (
    <div className="flex  items-center flex-col gap-8">
      <span className="text-2xl  font-medium ">What's on your mind?</span>
      <button onClick={() => setShow(!show)}>Show</button>
      <div className=" flex flex-wrap justify-between items-center max-w-[1000px] ">
        {show &&
          headCards.map((item) => {
            return (
              <div
                className=" flex justify-center items-center h-[200px] w-[200px] k p-6"
                key={item.id}
              >
                <img
                  className=" cursor-pointer size-32 rounded-full hover:scale-125 duration-200 "
                  src={bannerImg + item.imageId}
                />
              </div>
            );
          })}
      </div>
    </div>
  );
};
export default HeadlineCards;
