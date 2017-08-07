defmodule MTaylor.IO.BlogChannel do
  use Phoenix.Channel

  alias MTaylor.IO.Post
  alias MTaylor.IO.Repo

  def join("blog:" <> _selector, _params, socket) do
    _ = send(self(), :enumerate)
    {:ok, socket}
  end

  def handle_in("save", params, socket) do
    case params["id"] do
      -1 ->
        Post.changeset(%Post{}, params)
        |> Repo.insert()
      id ->
        post = Repo.get!(Post, id)
        Post.changeset(post, params)
        |> Repo.update()
    end
    |> case do
      {:ok, post} ->
        {:reply, {:ok, Map.delete(post, :__meta__)}, socket}
      {:error, changeset} ->
        errors = Enum.map(changeset.errors, fn {key, {err, _}} ->
          "#{key} #{err}"
        end)
        {:reply, {:error, %{"errors" => errors}}, socket}
    end
  end

  def handle_info(:enumerate, socket) do
    Enum.map(Repo.all(Post), fn post ->
      push(socket, "update", Map.delete(post, :__meta__))
    end)
    {:noreply, socket}
  end
end
