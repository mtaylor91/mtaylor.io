defmodule MTaylor.IO.UserView do
  use MTaylor.IO.Web, :view

  def render("index.json", %{users: users}) do
    %{data: render_many(users, MTaylor.IO.UserView, "user.json")}
  end

  def render("show.json", %{user: user}) do
    %{data: render_one(user, MTaylor.IO.UserView, "user.json")}
  end

  def render("user.json", %{user: user}) do
    %{id: user.id,
      email: user.email,
      name: user.name,
      salt: user.salt,
      hash: user.hash}
  end
end
