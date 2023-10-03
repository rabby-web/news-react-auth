import { useLoaderData, useParams } from "react-router-dom";
import Header from "../Shared/Header/Header";
import RightSideNav from "../Shared/RightSideNav/RightSideNav";
import Navbar from "../Shared/Navbar/Navbar";

const News = () => {
  const allNews = useLoaderData();
  const { id } = useParams();
  //   const idInt = parseInt(id);
  const news = allNews.find((news) => news._id == id);
  console.log(id, news);

  return (
    <div>
      <Header></Header>
      <Navbar></Navbar>
      <div className="grid grid-cols-3">
        <div className="col-span-2">
          <h2 className="text-2xl">News</h2>
          <div className="card w-full p-2 glass">
            <figure>
              <img src={news.image_url} alt="car!" />
            </figure>
            <div className="card-body">
              <h2 className="card-title">{news.title}</h2>
              <p>{news.details}</p>

              <div className="card-actions justify-end">
                <button className="btn btn-primary">View Details</button>
              </div>
            </div>
          </div>
        </div>
        <div className="col-span-1">
          <RightSideNav></RightSideNav>
        </div>
      </div>
    </div>
  );
};

export default News;
// const jobs = useLoaderData();
// const { id } = useParams();
// const idInt = parseInt(id);
// const job = jobs.find((job) => job.id === idInt);
// console.log(id, job);
