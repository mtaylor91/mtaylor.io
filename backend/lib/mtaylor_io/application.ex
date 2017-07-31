defmodule MTaylor.IO.Backend.Application do
  @moduledoc """
  Start the backend application supervisor.
  """

  use Application

  def start(_type, _args) do
    children = [
      Plug.Adapters.Cowboy.child_spec(cowboy_options())
    ]
    opts = [strategy: :one_for_one, name: MTaylor.IO.Backend.Supervisor]
    Supervisor.start_link(children, opts)
  end

  def cowboy_options do
    [
      scheme: :http,
      plug: MTaylor.IO.Backend,
      options: [
        ip: bind_address(),
        port: port_number(),
        acceptors: acceptor_pool_size(),
        max_connections: max_connections(),
      ]
    ]
  end

  def bind_address, do: {127, 0, 0, 1}

  def port_number, do: 4300

  def acceptor_pool_size, do: 100

  def max_connections, do: 16_384
end
