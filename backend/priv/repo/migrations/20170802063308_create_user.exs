defmodule MTaylor.IO.Repo.Migrations.CreateUser do
  use Ecto.Migration

  def change do
    create table(:users) do
      add :email, :string
      add :name, :string
      add :salt, :string
      add :hash, :string

      timestamps()
    end

  end
end
