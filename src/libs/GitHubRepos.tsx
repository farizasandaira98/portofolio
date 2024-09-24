import React, { useState, useEffect } from "react";
import axios from "axios";

type Repo = {
  id: number;
  name: string;
  html_url: string;
  description: string;
};

const GitHubRepos: React.FC = () => {
  const [repos, setRepos] = useState<Repo[]>([]);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    const fetchRepos = async () => {
      try {
        const response = await axios.get(
          "https://api.github.com/users/farizasandaira98/repos",
          { headers: { Authorization: `${import.meta.env.VITE_GITHUB_API as string}` } }
        );
        setRepos(response.data);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching repositories:", error);
        setLoading(false);
      }
    };

    fetchRepos();
  }, []);

  if (loading) return <p>Loading...</p>;

  console.log(repos);

  return (
    <div>
      <h2 className="text-2xl font-bold mb-4 text-center">My Personal Projects</h2>
      <div className="grid grid-cols-5 gap-4">
        {repos.map((repo) => (
          <div className="bg-red-100 p-4 rounded-lg">
            <a href={repo.html_url} target="_blank" rel="noopener noreferrer" className="text-black">
                <p className="text-black"></p>{repo.name}
              </a>
            <p className="text-black">{repo.description}</p>
          </div>
        ))}
      </div>
      {/* <ul>
        {repos.map((repo) => (
          <li key={repo.id}>
            <a href={repo.html_url} target="_blank" rel="noopener noreferrer">
              {repo.name}
            </a>
            <p>{repo.description}</p>
          </li>
        ))}
      </ul> */}

    </div>
  );
};

export default GitHubRepos;
