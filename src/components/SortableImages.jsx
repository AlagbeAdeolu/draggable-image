import { useSortable } from "@dnd-kit/sortable";
import { CSS } from "@dnd-kit/utilities";

const SortableImages = ({ image }) => {
  const { attributes, listeners, setNodeRef, transform } = useSortable({
    id: image.id,
  });

  const { transition } = useSortable({
    transition: {
      duration: 500, // milliseconds
      easing: "ease",
    },
  });

  const style = {
    transition,
    transform: CSS.Transform.toString(transform),
  };

  return (
    <div
      className="" // Adjust the width based on breakpoints
      ref={setNodeRef}
      {...attributes}
      {...listeners}
    >
      <div className="h-[300px] lg:h-[500px] w-auto bg-contain">
        <img
          className="w-full h-full object-cover rounded-md"
          style={style}
          src={image.webformatURL}
          alt={image.title}
        />
      </div>
      <p className="text-sm text-gray-500 font-bold mt-4 sm:mt-0"> {image.user}</p>
      <div className="grid grid-cols-2 md:grid-cols-3 gap-2">
        {image.tags.split(",").map((tag, index) => (
          <p
            className="text-xs sm:text-sm font-bold border border-gray-900 rounded-lg px-2 py-1"
            key={index}
          >
            #{tag.trim()}
          </p>
        ))}
      </div>
    </div>
  );
};

export default SortableImages;
