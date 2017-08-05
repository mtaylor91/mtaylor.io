defmodule MTaylor.IO.UserTest do
  use MTaylor.IO.ModelCase

  alias MTaylor.IO.User

  @valid_attrs %{email: "some content", hash: "some content", name: "some content", salt: "some content"}
  @invalid_attrs %{}

  test "changeset with valid attributes" do
    changeset = User.changeset(%User{}, @valid_attrs)
    assert changeset.valid?
  end

  test "changeset with invalid attributes" do
    changeset = User.changeset(%User{}, @invalid_attrs)
    refute changeset.valid?
  end
end
