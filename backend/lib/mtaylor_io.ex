defmodule MTaylor.IO.Backend do
  @moduledoc """
  API backend for https://mtaylor.io.
  """
  use Plug.Router

  plug :match
  plug :dispatch

  get "/hello" do
    send_resp(conn, 200, "world")
  end

  match _ do
    send_resp(conn, 404, "Not Found")
  end
end
