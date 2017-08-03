defmodule MTaylor.IO.LoginController do
  use MTaylor.IO.Web, :controller

  def login(conn, params) do
    render(conn, "login.json", login: params)
  end
end
