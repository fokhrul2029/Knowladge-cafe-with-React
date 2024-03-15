function Blog() {
  return (
    <div className="flex flex-col gap-8 border-b-2 pb-2">
      <img className="rounded-md" src="img/1.jpg" alt="" />
      <div className="flex justify-between items-center">
        <div className="flex gap-4 items-center">
          <img className="w-16" src="img/boy1.png" alt="" />
          <div className="flex flex-col gap-2">
            <h2 className="text-2xl font-bold">Mr. Raju</h2>
            <p className="text-base font-semibold">Mar 14 (4 Days ago)</p>
          </div>
        </div>
        <div className="flex gap-2 items-center font-medium text-xl">
          <p>05 min read</p>
          <img className="cursor-pointer" src="img/Frame.png" alt="" />
        </div>
      </div>
      <h1 className="text-4xl font-bold">
        How to get your first job as a self-taught programmer
      </h1>
      <div className="flex gap-3 text-xl font-medium">
        <p>#programming</p>
        <p>#coding</p>
      </div>
      <div>
        <button className="text-primaryColor font-semibold text-xl">
          Mark as read
        </button>
      </div>
    </div>
  );
}

export default Blog;
