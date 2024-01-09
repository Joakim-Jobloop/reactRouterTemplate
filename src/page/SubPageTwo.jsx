import { useEffect, useState } from "react";
import { PageLayout } from "../components/utils/PageLayout";

export const SubPageTwo = ({ url }) => {
  const [data, setData] = useState([]);
  const endpoint = "photos";
  useEffect(() => {
    async function fetchData() {
      const response = await fetch(url + endpoint);
      const json = await response.json();
      setData(json);
      console.log(json);
    }

    fetchData();
  }, [url]);

  return (
    <PageLayout>
      <section className="flex my-28 justify-center flex-wrap gap-8 p-8">
        {data.slice(0, 10).map((photo) => (
          <div
            className={`max-w-[300px] relative rounded-xl flex flex-col gap-4 justify-between p-4`}
            key={photo.id}
            style={{
              backgroundImage: `url(${photo.thumbnailUrl})`,
              backgroundSize: "cover",
            }}
          >
            <h3 className="text-xl bg-black bg-opacity-60 rounded-xl p-2 text-red-500">
              {photo.title}
            </h3>
            <img
              src={photo.thumbnailUrl}
              className="text-2xl z-10 rounded-xl absolute -top-6 -right-6 h-12 w-12 border border-black"
              alt={photo.title}
            />

            <p>{photo.body}</p>
          </div>
        ))}
      </section>
    </PageLayout>
  );
};
