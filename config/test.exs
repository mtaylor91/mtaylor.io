use Mix.Config

# We don't run a server during test. If one is required,
# you can enable the server option below.
config :mtaylor_io, MTaylor.IO.Endpoint,
  http: [port: 4001],
  server: false

# Print only warnings and errors during test
config :logger, level: :warn

# Configure your database
config :mtaylor_io, MTaylor.IO.Repo,
  adapter: Ecto.Adapters.Postgres,
  username: "dev_mtaylor_io",
  password: "1b3s&YXui28I",
  database: "test_mtaylor_io",
  hostname: "dva.home.mtaylor.io",
  pool: Ecto.Adapters.SQL.Sandbox
