defmodule MTaylor.IO.Router do
  use MTaylor.IO.Web, :router

  pipeline :api do
    plug :accepts, ["json"]
  end

  scope "/api", MTaylor.IO do
    pipe_through :api
    resources "/users", UserController
  end
end
