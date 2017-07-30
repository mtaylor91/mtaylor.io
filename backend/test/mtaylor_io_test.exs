defmodule MTaylor.IO.BackendTest do
  use ExUnit.Case
  doctest MTaylor.IO.Backend

  test "greets the world" do
    assert MTaylor.IO.Backend.hello() == :world
  end
end
