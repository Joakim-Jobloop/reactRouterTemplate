import { useEffect, useState } from "react";
import { PageLayout } from "../components/utils/PageLayout";
import { IoArrowBack, IoArrowForward } from "react-icons/io5";

export const PostsPage = ({ url }) => {
  const [data, setData] = useState([]);
  const [posts, setPosts] = useState(0);
  const endpoint = "posts";
  const limit = "";

  useEffect(() => {
    async function fetchData() {
      const response = await fetch(url + endpoint + `?_limit=${limit}`);
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
          onClick={posts === 0 ? null : () => setPosts((page) => page - 10)}
        >
          <IoArrowBack className={`h-14 w-14 z-10`} />
        </button>
        <p className="text-3xl">
          <span>{posts === 0 ? "1" : posts + 1}</span>-<span>{posts + 10}</span>
        </p>
        <button
          className={`border-2 animate-appear rounded-xl`}
          onClick={posts >= 40 ? null : () => setPosts((page) => page + 10)}
        >
          <IoArrowForward className={`h-14 w-14 z-10`} />
        </button>
      </div>
      <section className="flex flex-wrap justify-center gap-8 p-8">
        {data.slice(posts, posts + 10).map((post) => (
          <div
            className="max-w-[300px] relative rounded-xl flex flex-col gap-4 justify-between bg-slate-100 p-4"
            key={post.id}
          >
            <h3 className="text-2xl text-red-500">{post.title}</h3>
            <p className="absolute px-4 py-2 text-2xl rounded-xl -top-6 -right-6 bg-slate-200">
              {post.id}
            </p>

            <p>{post.body}</p>
          </div>
        ))}
      </section>
    </PageLayout>
  );
};
