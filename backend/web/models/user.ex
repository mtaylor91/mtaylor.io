defmodule MTaylor.IO.User do
  use MTaylor.IO.Web, :model

  schema "users" do
    field :email, :string
    field :name, :string
    field :salt, :string
    field :hash, :string

    timestamps()
  end

  @doc """
  Builds a changeset based on the `struct` and `params`.
  """
  def changeset(struct, params \\ %{}) do
    struct
    |> cast(params, [:email, :name, :salt, :hash])
    |> validate_required([:email, :name, :salt, :hash])
  end
end
