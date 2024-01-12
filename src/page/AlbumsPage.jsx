import { useEffect, useState } from "react";
import { PageLayout } from "../components/utils/PageLayout";
import { IoArrowBack, IoArrowForward } from "react-icons/io5";

export const AlbumsPage = ({ url }) => {
  const [data, setData] = useState([]);
  const [albums, setAlbums] = useState(0);
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
      <div className="flex items-center gap-8">
        <button
          className={`border-2 animate-appear rounded-xl`}
          onClick={albums === 0 ? null : () => setAlbums((page) => page - 10)}
        >
          <IoArrowBack className={`h-14 w-14 z-10`} />
        </button>
        <p className="text-3xl">
          <span>{albums === 0 ? "1" : albums + 1}</span>-
          <span>{albums + 10}</span>
        </p>
        <button
          className={`border-2 animate-appear rounded-xl`}
          onClick={albums >= 490 ? null : () => setAlbums((page) => page + 10)}
        >
          <IoArrowForward className={`h-14 w-14 z-10`} />
        </button>
      </div>
      <section className="flex flex-wrap justify-center gap-8">
        {data.slice(albums, albums + 10).map((album, index) => (
          <>
            <div className="flex flex-col group w-[300px] hover:scale-105 transition rounded-tl-3xl shadow shadow-slate-800 rounded-t-lg rounded-br-3xl rounded-b-xl">
              <article className="h-[100px] flex justify-center  relative items-center p-8 text-slate-100 bg-slate-800 rounded-tl-3xl rounded-t-lg">
                <p className="absolute px-2 text-2xl bg-white border border-black rounded-lg rounded-tr-xl rounded-bl-xl text-slate-800 -top-1 -left-1">
                  {index + albums + 1}
                </p>
                <h3 className="text-md ">{album.title}</h3>
              </article>

              <div className={`relative h-[300px]`} key={album.id}>
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
