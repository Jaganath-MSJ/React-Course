import React, { Component } from "react";
import BlogCard from "./BlogCard";
import { isArrayEmpty as check } from "./Utils";

class ReactJS2 extends Component {
  state = {
    showBlogs: true,
    blogArr: [
      {
        id: 1,
        title: "Blog Title 1",
        description: "Disc rounded in Blog Title Project",
        likeCount: 0,
      },
      {
        id: 2,
        title: "Blog Title 2",
        description: "Disc rounded in Blog Title Project",
        likeCount: 0,
      },
      {
        id: 3,
        title: "Blog Title 3",
        description: "Disc rounded in Blog Title Project",
        likeCount: 0,
      },
    ],
  };

  onHideBtnClick = () => {
    this.setState((prevState, prevProps) => {
      return { showBlogs: !prevState.showBlogs };
    });
  };

  onLikeBtnClick = (pos) => {
    const updatedBlogList = this.state.blogArr;
    const updatedBlogObj = updatedBlogList[pos];

    updatedBlogObj.likeCount = updatedBlogObj.likeCount + 1;
    updatedBlogList[pos] = updatedBlogObj;

    this.setState({ blogArr: updatedBlogList });

    console.log(this.state.showBlogs);
  };

  render() {
    console.log("Render called");
    console.log(this.state);

    const blogCards = check(this.state.blogArr)
      ? []
      : this.state.blogArr.map((item, pos) => {
          return (
            <BlogCard
              key={pos}
              title={item.title}
              description={item.description}
              likeCount={item.likeCount}
              id={item.id}
              onLikeBtnClick={() => this.onLikeBtnClick(pos)}
            />
          );
        });

    return (
      <div>
        <button onClick={this.onHideBtnClick}>
          {this.state.showBlogs ? "Hide List" : "Show List"}
        </button>
        <br />
        {this.state.showBlogs ? blogCards : null}
      </div>
    );
  }
}

export default ReactJS2;
