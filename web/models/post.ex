defmodule MTaylor.IO.Post do
  use MTaylor.IO.Web, :model

  schema "posts" do
    field :name, :string
    field :link, :string
    field :content, :string

    timestamps()
  end

  @doc """
  Builds a changeset based on the `struct` and `params`.
  """
  def changeset(struct, params \\ %{}) do
    struct
    |> cast(params, [:name, :link, :content])
    |> validate_required([:name, :link])
  end
end
