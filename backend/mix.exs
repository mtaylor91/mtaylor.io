defmodule MTaylor.IO.Backend.Mixfile do
  use Mix.Project

  def project do
    [
      app: :mtaylor_io,
      version: "0.1.0",
      elixir: "~> 1.5",
      deps: deps(),
      test_coverage: [
        tool: ExCoveralls,
      ],
      preferred_cli_env: [
        "coveralls": :test,
        "coveralls.detail": :test,
        "coveralls.post": :test,
        "coveralls.html": :test
      ],
      start_permanent: Mix.env == :prod,
    ]
  end

  # Run "mix help compile.app" to learn about applications.
  def application do
    [
      extra_applications: [:logger],
      mod: {MTaylor.IO.Backend.Application, []}
    ]
  end

  # Run "mix help deps" to learn about dependencies.
  defp deps do
    [
      {:plug, "~> 1.4"},
      {:cowboy, "~> 1.1"},
      {:poison, "~> 3.1"},
      {:ex_doc, "~> 0.16.2", only: [:dev]},
      {:dialyxir, "~> 0.5.1", only: [:dev]},
      {:excoveralls, "~> 0.7.2", only: [:dev, :test]},
    ]
  end
end
