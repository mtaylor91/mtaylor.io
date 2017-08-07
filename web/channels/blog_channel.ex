defmodule MTaylor.IO.BlogChannel do
  use Phoenix.Channel

  alias MTaylor.IO.Post
  alias MTaylor.IO.Repo

  def join("blog:" <> _selector, _params, socket) do
    _ = send(self(), :enumerate)
    {:ok, socket}
  end

  def handle_in("update", params, socket) do
    _ =
      case Repo.get(Post, params["id"]) do
        nil ->
          Post.changeset(%Post{}, params)
        post ->
          Post.changeset(post, params)
      end
      |> Repo.insert_or_update!()
      |> push_update(socket)
    {:noreply, socket}
  end

  def handle_info(:enumerate, socket) do
    Enum.map(Repo.all(Post), fn post ->
      push_update(post, socket)
    end)
    {:noreply, socket}
  end

  defp push_update(post, socket) do
    push(socket, "update", Map.delete(post, :__meta__))
  end
end
