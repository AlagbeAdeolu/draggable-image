import { useEffect, useState } from "react";
import {
  DndContext,
  KeyboardSensor,
  MouseSensor,
  TouchSensor,
  closestCenter,
  useSensor,
  useSensors,
} from "@dnd-kit/core";
import {
  SortableContext,
  arrayMove,
  arraySwap,
  rectSwappingStrategy,

} from "@dnd-kit/sortable";
import SortableImages from "./SortableImages";



function Images() {
  const [images, setImages] = useState([]);
  const mouseSensor = useSensor(MouseSensor);
  const touchSensor = useSensor(TouchSensor);
  const keyboardSensor = useSensor(KeyboardSensor);

  const sensors = useSensors(mouseSensor, touchSensor, keyboardSensor);

  useEffect(() => {
    const apiKey = "39559354-a54d6d460a1baed9da791cf32";
    const query = "birds"; // Replace with your desired search query
    const perPage = 20; // Number of results per page

    // Create the API URL
    const apiUrl = `https://pixabay.com/api/?key=${apiKey}&q=${query}&per_page=${perPage}`;
    fetch(apiUrl)
      .then((res) => res.json())
      .then((data) => setImages(data.hits));
  }, []);
  console.log(images);
  const onDragEnd = (e) => {
    const { active, over } = e;
    if (active.id === over.id) {
      return;
    }
    setImages((images) => {
      const oldIndex = images.findIndex((image) => image.id === active.id);
      const newIndex = images.findIndex((image) => image.id === over.id);
      return arrayMove(images, oldIndex, newIndex);
    });
  };
  return (
    <div className="px-4 py-6 mt-6 h-full ">
      <DndContext
        sensors={sensors}
        collisionDetection={closestCenter}
        onDragEnd={onDragEnd}
      >
        <SortableContext
          items={images}
          reorderItems={arraySwap}
          strategy={rectSwappingStrategy}
          getNewIndex={({ id, items, activeIndex, overIndex }) =>
            arraySwap(items, activeIndex, overIndex).indexOf(id)
          }
        >
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-4">
            {images.map((image) => {
              return <SortableImages key={image.id} image={image} />;
            })}
          </div>
        </SortableContext>
      </DndContext>
    </div>
  );
}

export default Images;
