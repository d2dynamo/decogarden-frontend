import { ItemBasic } from "@/types";
import { useEffect, useState } from "react";

async function fakeItems() {
  // fake waiting for data
  await new Promise((resolve) => setTimeout(resolve, 1000));

  return [
    {
      id: "1",
      name: "Item 1",
      price: 100,
      image: "https://via.placeholder.com/150",
      stock: 10,
    },
    {
      id: "2",
      name: "Item 2",
      price: 200,
      image: "https://via.placeholder.com/150",
      stock: 20,
    },
    {
      id: "3",
      name: "Item 3",
      price: 300,
      image: "https://via.placeholder.com/150",
      stock: 30,
    },
    {
      id: "4",
      name: "Item 4",
      price: 400,
      image: "https://via.placeholder.com/150",
      stock: 40,
    },
  ];
}

export default function Items() {
  const [items, setItems] = useState<ItemBasic[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    (async () => {
      const data = await fakeItems();
      setItems(data);
      setLoading(false);
    })();
  }, []);

  return (
    <div className="flex flex-wrap -m-2">
      {items.map((item) => (
        <div
          key={item.id}
          className="p-2 w-1/2 sm:w-1/3 md:w-1/4 lg:w-1/5 xl:w-1/6"
        >
          <div className="bg-white rounded-lg shadow-lg p-4">
            <img
              src={item.image}
              alt={item.name}
              className="w-full h-32 object-cover"
            />
            <div className="mt-4">
              <h2 className="text-lg font-semibold">{item.name}</h2>
              <p className="text-gray-500">${item.price}</p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
