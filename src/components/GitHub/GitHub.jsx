/* eslint-disable react-refresh/only-export-components */
/* eslint-disable no-unused-vars */
import React from "react";
import { useLoaderData } from "react-router-dom";

function GitHub() {
  //   const [data, setData] = useState([]);
  //   useEffect(() => {
  //     fetch("https://api.github.com/users/PassionateSumon")
  //       .then((response) => response.json())
  //       .then((data) => {
  //         console.log(data);
  //         setData(data);
  //       });
  //   }, []);

  const data = useLoaderData();

  return (
    <div className="flex justify-center items-center font-semibold p-6 bg-slate-500 text-2xl text-white">
      GitHub ID: {data.id} {<br />}
      GitHub Username: {data.login} {<br />}
      GitHub Repos: {data.public_repos}
    </div>
  );
}

export default GitHub;

export const githubLoader = async () => {
  const response = await fetch("https://api.github.com/users/PassionateSumon");
  return response.json();
};
