defmodule MTaylor.IO.Repo.Migrations.CreatePost do
  use Ecto.Migration

  def change do
    create table(:posts) do
      add :name, :string
      add :link, :string
      add :content, :text

      timestamps()
    end

    create unique_index(:posts, [:link])
  end
end
