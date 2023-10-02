// import React, { useEffect } from "react";
// import { useParams } from "react-router"

function Post() {
  // let { postSlug } = useParams()

  // useEffect(() => {
  //     // Fetch post using the postSlug
  // }, [postSlug]);

  return (
    <div>
      <h1>This is a Post Title</h1>
      {/* <h6>The post slug is, {postSlug}</h6> */}
      <p>
        Lorem Ipsum is simply dummy text of the printing and typesetting
        industry. Lorem Ipsum has been the industrys standard dummy text ever
        since the 1500s, when an unknown printer took a galley of type and
        scrambled it to make a type specimen book.
      </p>
    </div>
  )
}

export default Post
