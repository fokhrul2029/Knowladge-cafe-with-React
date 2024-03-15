import Blogs from "../Blogs/Blogs";
import Bookmarks from "../Bookmarks/Bookmarks";

function BlogContent() {
  return (
    <section className="py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-3 gap-6">
          <Blogs></Blogs>
          <Bookmarks></Bookmarks>
        </div>
      </div>
    </section>
  );
}

export default BlogContent;
