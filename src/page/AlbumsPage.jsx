import { useEffect, useState } from "react";
import { PageLayout } from "../components/utils/PageLayout";

export const AlbumsPage = ({ url }) => {
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
      <section className="flex flex-wrap justify-center gap-8">
        {data.slice(0, 10).map((album) => (
          <>
            <div className="flex flex-col group w-[300px] hover:scale-105 transition">
              <article className="h-[100px] flex justify-center items-center p-8 text-slate-100 bg-slate-800 rounded-tl-3xl rounded-t-lg">
                <h3 className="text-md ">
                  {album.title}
                </h3>
              </article>

              <div
                className={`relative h-[300px]`}
                key={album.id}
              >
                <img
                  src={album.url}
                  className="h-full rounded-br-3xl rounded-b-xl"
                  alt={album.title}
                />
                <img
                  src={album.thumbnailUrl}
                  className="absolute z-10 w-20 h-20 text-2xl transition origin-top-right border border-black hover:scale-125 rounded-tr-3xl rounded-bl-3xl rounded-xl -top-6 -right-4"
                  alt={album.title}
                />
              </div>
            </div>
          </>
        ))}
      </section>
    </PageLayout>
  );
};
