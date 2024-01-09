import { useEffect, useState } from "react";
import { PageLayout } from "../components/utils/PageLayout";

export const SubPageOne = ({ url }) => {
  const [data, setData] = useState([]);
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
      <section className="flex my-28 justify-center flex-wrap gap-8 p-8">
        {data.map((post) => (
          <div
            className="max-w-[300px] relative rounded-xl flex flex-col gap-4 justify-between bg-slate-100 p-4"
            key={post.id}
          >
            <h3 className="text-2xl text-red-500">{post.title}</h3>
            <p className="text-2xl rounded-xl absolute -top-6 -right-6 bg-slate-200 px-4 py-2">
              {post.id}
            </p>

            <p>{post.body}</p>
          </div>
        ))}
      </section>
    </PageLayout>
  );
};
