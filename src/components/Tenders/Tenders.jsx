import React, { useEffect, useState } from "react";

import posts from "../posts";
import postLoading from "../postLoading";

const Tenders = () => {
  const PostLoading = postLoading(posts);
  const [appState, setAppState] = useState({
    loading: false,
    posts: null,
  });

  useEffect(() => {
    setAppState({ loading: true });
    const apiURL = "https://etender-backend.herokuapp.com/api/publish-tender/";
    fetch(apiURL)
      .then((data) => data.json())
      .then((posts) => {
        setAppState({ loading: false, posts: posts });
      });
  }, [setAppState]);
  return (
    <div className="container" style={{ marginTop: "50px" }}>
      <PostLoading isLoading={appState.loading} posts={appState.posts} />
    </div>
  );
};
export default AllTenders;
