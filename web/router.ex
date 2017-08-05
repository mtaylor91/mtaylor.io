defmodule MTaylor.IO.Router do
  use MTaylor.IO.Web, :router

  pipeline :api do
    plug :accepts, ["json"]
    plug CORSPlug, origin: ["http://localhost:4200"]
  end

  scope "/api", MTaylor.IO do
    pipe_through :api
    put "/login/:token", LoginController, :login
    options "/login/:token", LoginController, :options
    resources "/users", UserController, except: [:new, :edit]
    resources "/blog/posts", PostController, except: [:new, :edit]
  end

  scope "/", MTaylor.IO do
    get "/*path", IndexController, :index
  end
end
