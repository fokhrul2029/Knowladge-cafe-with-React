/* eslint-disable react/prop-types */
function Bookmark({ item }) {
  const { title } = item;
  return (
    <div className="py-4 px-3 bg-white text-black cursor-pointer">
      <p className="text-lg font-medium">{title}</p>
    </div>
  );
}

export default Bookmark;
