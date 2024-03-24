import { useEffect, useState } from "react";
import Blogs from "../Blogs/Blogs";
import Bookmarks from "../Bookmarks/Bookmarks";

function BlogContent() {
  const [blogs, setBlogs] = useState([]);
  const [bookmarks, setBookmarks] = useState([]);
  useEffect(() => {
    fetch("data.json")
      .then((res) => res.json())
      .then((data) => setBlogs(data));
  }, []);
  return (
    <section className="py-12">
      <div className="container mx-auto px-4">
        <div className="flex flex-col-reverse lg:grid lg:grid-cols-3 gap-6">
        <div className="col-span-2 flex flex-col gap-12">
          {blogs.map((blog) => (
            <Blogs blog={blog} key={blog.id} />
          ))}
          </div>
          <Bookmarks></Bookmarks>
        </div>
      </div>
    </section>
  );
}

export default BlogContent;
