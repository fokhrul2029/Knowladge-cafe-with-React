/* eslint-disable no-unused-vars */
import { useEffect, useState } from "react";
import Blogs from "../Blogs/Blogs";
import Bookmarks from "../Bookmarks/Bookmarks";

function BlogContent() {
  const [blogs, setBlogs] = useState([]);
  const [bookmarks, setBookmarks] = useState([]);
  const handleBookmark = (item) => {
    const newItem = blogs.find((blog) => blog.id === item.id);
    setBookmarks((pre) => [...pre, newItem]);
  };
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
              <Blogs
                handleBookmark={handleBookmark}
                blog={blog}
                key={blog.id}
              />
            ))}
          </div>

          <Bookmarks items={bookmarks}></Bookmarks>
        </div>
      </div>
    </section>
  );
}

export default BlogContent;
