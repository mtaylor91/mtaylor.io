defmodule MTaylor.IO.PostView do
  use MTaylor.IO.Web, :view

  def render("index.json", %{posts: posts}) do
    %{data: render_many(posts, MTaylor.IO.PostView, "post.json")}
  end

  def render("show.json", %{post: post}) do
    %{data: render_one(post, MTaylor.IO.PostView, "post.json")}
  end

  def render("post.json", %{post: post}) do
    %{id: post.id,
      name: post.name,
      link: post.link,
      content: post.content}
  end
end
