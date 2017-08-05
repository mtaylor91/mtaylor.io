defmodule MTaylor.IO.IndexController do
  use MTaylor.IO.Web, :controller

  def index(conn, _params) do
    Plug.Conn.send_file(conn, 200, Application.app_dir(:mtaylor_io, ~w(priv static index.html)))
  end
end
