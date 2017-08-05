# This file is responsible for configuring your application
# and its dependencies with the aid of the Mix.Config module.
#
# This configuration file is loaded before any dependency and
# is restricted to this project.
use Mix.Config

# General application configuration
config :mtaylor_io,
  namespace: MTaylor.IO,
  ecto_repos: [MTaylor.IO.Repo]

# Configures the endpoint
config :mtaylor_io, MTaylor.IO.Endpoint,
  url: [host: "localhost"],
  secret_key_base: "nsMDukNQ/rCHMQ/29rJ0imLYNYgfWDN2jSPf+jNKahI8ei/VXkP4m8hrIq7iTR+V",
  render_errors: [view: MTaylor.IO.ErrorView, accepts: ~w(json)],
  pubsub: [name: MTaylor.IO.PubSub,
           adapter: Phoenix.PubSub.PG2]

# Configures Elixir's Logger
config :logger, :console,
  format: "$time $metadata[$level] $message\n",
  metadata: [:request_id]

# Import environment specific config. This must remain at the bottom
# of this file so it overrides the configuration defined above.
import_config "#{Mix.env}.exs"
