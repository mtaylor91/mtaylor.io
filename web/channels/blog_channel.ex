defmodule MTaylor.IO.BlogChannel do
  use Phoenix.Channel

  alias MTaylor.IO.Post
  alias MTaylor.IO.Repo

  def join("blog:" <> _selector, _params, socket) do
    _ = send(self(), :enumerate)
    {:ok, socket}
  end

  def handle_in("save", post, socket) do
    require Logger
    _ = Logger.info("Would save: \n" <> post.content)
    {:ok, socket}
  end

  def handle_info(:enumerate, socket) do
    _ = Enum.map(Repo.all(Post), fn post ->
      _ = push(socket, "update", Map.delete(post, :__meta__))
    end)
    {:noreply, socket}
  end
end
