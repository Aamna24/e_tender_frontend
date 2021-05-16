import React from "react";

function PostLoading(Component) {
  return function PostLoadingComponent({ isLoading, ...props }) {
    if (!isLoading) return <Component {...props} />;
    return <div>We are waiting for the data to load!!</div>;
  };
}

export default PostLoading;
