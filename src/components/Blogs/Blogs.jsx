/* eslint-disable react/prop-types */
function Blogs({ blog }) {
  const {
    cover_img,
    auth_img,
    author_name,
    publish_date,
    reading_time,
    title,
    tags,
  } = blog;
  const targetDate = new Date(publish_date);
  const today = new Date();
  const diff = Math.abs(today - targetDate);
  const diffInDays = Math.ceil(diff / (1000 * 60 * 60 * 24));
  const date = diffInDays < 30 ? `(${diffInDays} days ago)` : "";

  return (
    <div className="flex flex-col gap-8 border-b-2 pb-2">
      <img className="rounded-md" src={cover_img} alt="" />
      <div className="flex justify-between items-center">
        <div className="flex gap-4 items-center">
          <img className="w-16" src={auth_img} alt="" />
          <div className="flex flex-col gap-2">
            <h2 className="text-2xl font-bold">{author_name}</h2>
            <p className="text-base font-semibold">
              {publish_date} {date}
            </p>
          </div>
        </div>
        <div className="flex gap-2 items-center font-medium text-xl">
          <p>{reading_time} min read</p>
          <img className="cursor-pointer" src="img/Frame.png" alt="" />
        </div>
      </div>
      <h1 className="text-4xl font-bold">{title}</h1>
      <div className="flex gap-3 text-xl font-medium">
        {tags.map((tag, i) => (
          <p key={i}>{tag}</p>
        ))}
      </div>
      <div>
        <button className="text-primaryColor font-semibold text-xl">
          Mark as read
        </button>
      </div>
    </div>
  );
}

export default Blogs;
