import Link from "next/link";
import React from "react";
import { Article } from "../@types/article";
import Card from "../components/main/card/Card";

const main = ({ articles }: any) => {
  console.log(articles);
  return (
    <div>
      <p>main..</p>
      <Link href="/article/create">CREATE</Link>
      {articles.map((article: any) => (
        <div key={article._id}>
          <div>{article.title}</div>
          <div>{article.content}</div>
          <div>{article.userGuid}</div>
          <div>{article._id}</div>
        </div>
      ))}
      {/* <Card /> */}
    </div>
  );
};

export const getServerSideProps = async () => {
  const articles = await Article.getAll()
    .then((res) => res.articles)
    .catch((err) => [{ title: "hi", content: "hihi" }]);
  return { props: { articles } };
};

export default main;
