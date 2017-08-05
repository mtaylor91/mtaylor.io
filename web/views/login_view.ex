defmodule MTaylor.IO.LoginView do
  use MTaylor.IO.Web, :view

  def render("login.json", %{login: _login}) do
    %{token: "placeholder"}
  end
end
