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
        className="w-full flex flex-col items-center justify-center"
        ref={setNodeRef}
        {...attributes}
        {...listeners}
      >
        <div className="">
          <div className="h-[500px] w-auto bg-contain ">
            <img
              className="w-full h-full object-cover rounded-md"
              style={style}
              src={image.webformatURL}
              alt={image.title}
            />
          </div>
          <p className="text-sm text-gray-500 font-bold mb-4">{image.user}</p>
          <div className="flex gap-4">
            {image.tags.split(",").map((tag, index) => (
              <p
                className="text-sm font-bold border border-gray-900 rounded-lg px-2 py-1"
                key={index}
              >
                #{tag.trim()}
              </p>
            ))}
          </div>
        </div>
      </div>
    );
  };

  export default SortableImages