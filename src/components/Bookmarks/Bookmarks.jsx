import Bookmark from "../bookmark/bookmark";

function Bookmarks() {
  return (
    <div className="flex flex-col gap-6">
      <div className="py-5 text-center border-2 border-primaryColor rounded-lg bg-[#6047EC1A]">
        <p className="text-2xl font-bold text-primaryColor">
          Spent time on read : 177 min
        </p>
      </div>
      <div className="flex flex-col gap-5 py-4 px-4 bg-slate-100 rounded-lg">
        <div>
          <h1 className="text-2xl font-bold">Bookmarked Blogs : 8</h1>
        </div>
        <div className="flex flex-col gap-4">
          <Bookmark></Bookmark>
        </div>
      </div>
    </div>
  );
}

export default Bookmarks;
