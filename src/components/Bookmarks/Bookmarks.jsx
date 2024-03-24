/* eslint-disable react/prop-types */
import Bookmark from "../bookmark/bookmark";

function Bookmarks({ items }) {
  const time = items.reduce((acc, cur) => acc + cur.reading_time, 0);
  return (
    <div className="flex flex-col gap-6">
      <div className="py-5 text-center border-2 border-primaryColor rounded-lg bg-[#6047EC1A]">
        <p className="text-2xl font-bold text-primaryColor">
          Spent time on read : {time} min
        </p>
      </div>
      <div className="flex flex-col gap-5 py-4 px-4 bg-slate-100 rounded-lg">
        <div>
          <h1 className="text-2xl font-bold">
            Bookmarked Blogs : {items.length}
          </h1>
        </div>
        <div className="flex flex-col gap-4">
          {items.map((item, i) => (
            <Bookmark key={i} item={item} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default Bookmarks;
