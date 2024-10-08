import axios from "axios";
import { useEffect, useState } from "react";
import NewsCard from "./NewSCard";

const NewsCards = () => {
  const [getNewsData, setGetNewsData] = useState([]);

  const fetchNewsData = async () => {
    try {
      const response = await axios.get(
        "https://newsapi.org/v2/top-headlines?country=us&apiKey=8fc71bf3dbb546dfb64f64cc19401d33"
      );
      setGetNewsData(response.data.articles);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    fetchNewsData();
  }, []);

  return (
    <div className="d-flex flex-wrap justify-content-center mx-auto">
      {getNewsData?.map(({ title, publishedAt, source }, index) => (
        <div className="p-2" key={index}>
          <NewsCard title={title} publishedAt={publishedAt} source={source} />
        </div>
      ))}
    </div>
  );
};

export default NewsCards;
