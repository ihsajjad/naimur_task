import { BsBook, BsCameraVideo } from "react-icons/bs";
import {
  AiOutlineUser,
  AiOutlineClockCircle,
  AiOutlineStar,
} from "react-icons/ai";

const SingleCart = ({ item }) => {
  //   console.log(item);
  const {
    courseTitle,
    bannerImg,
    sellerImg,
    sellerName,
    courseRating,
    lessonQuantity,
    enrolledStudents,
    videoDuration,
    numberOfVideos,
    price,
  } = item;
  return (
    <div className="border shadow-xl flex flex-col  rounded-lg p-3 md:h-[550px] lg:h-[500px] w-full">
      <div>
        <img
          className="rounded-lg"
          src="https://images.pexels.com/photos/7014337/pexels-photo-7014337.jpeg?auto=compress&cs=tinysrgb&w=600"
          alt=""
        />
      </div>

      <div className="grow">
        {/* first one */}
        <div className="flex justify-between items-center my-4">
          <div className="flex items-center gap-x-2">
            <img
              className="w-12 h-12  rounded-full"
              src="https://media.istockphoto.com/id/1300512215/photo/headshot-portrait-of-smiling-ethnic-businessman-in-office.jpg?s=1024x1024&w=is&k=20&c=tq1C4HoZraH5szwBZqUf7sGVp7EPO-VB8PVbAPjagqY="
              alt=""
            />
            <p className="text-xl">{sellerName}</p>
          </div>
          <div className="flex items-center text-lg gap-x-2">
            <AiOutlineStar className="text-yellow-400 "></AiOutlineStar>
            <p>{courseRating}</p>
          </div>
        </div>
        {/* seconde div */}
        <div className="grow">
          <h1 className="text-xl font-semibold mb-3">{courseTitle}</h1>

          <div className="grid  justify-between items-center w-full  grid-cols-2">
            {/* each div */}
            <div className="flex items-center gap-2 text-slate-400 ">
              <div>
                <BsBook></BsBook>
              </div>
              <div>{lessonQuantity} lesson</div>
            </div>
            {/* each div */}
            <div className="flex text-slate-400 items-center gap-2 ">
              <div>
                <AiOutlineUser></AiOutlineUser>
              </div>
              <div>{enrolledStudents} students</div>
            </div>
            {/* each div */}
            <div className="flex items-center text-slate-400 gap-2 ">
              <div>
                <AiOutlineClockCircle></AiOutlineClockCircle>
              </div>
              <div>{videoDuration} </div>
            </div>
            {/* each div */}
            <div className="flex items-center gap-2 text-slate-400 ">
              <div>
                <BsCameraVideo></BsCameraVideo>
              </div>
              <div>{numberOfVideos} videos</div>
            </div>
          </div>
        </div>

        {/* footer div */}
      </div>
      <div className="flex text-xl  items-center my-4 justify-between">
        <div className="flex items-center gap-x-3">
          <p>${price}</p>
          <p>
            <del className="text-slate-400">$55</del>
          </p>
        </div>
        <div>
          <button className=" px-3 py-2 bg-green-500 text-white rounded-lg">
            Add to cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default SingleCart;
