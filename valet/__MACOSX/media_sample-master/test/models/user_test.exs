defmodule MediaSample.UserTest do
  use MediaSample.ModelCase, async: true

  alias MediaSample.{User, Enums.UserType, Enums.Status}

  @valid_attrs %{
    email: "test01@example.com", name: "some content", password: "012345678", password_confirmation: "012345678",
    profile: "some content", image: "some image path", user_type: UserType.reader.id, status: Status.valid.id}
  @invalid_attrs %{}

  test "changeset with valid attributes" do
    changeset = User.changeset(%User{}, @valid_attrs)
    assert changeset.valid?
  end

  test "changeset with invalid attributes" do
    changeset = User.changeset(%User{}, @invalid_attrs)
    refute changeset.valid?
  end

  test "changeset with invalid email format" do
    changeset = User.changeset(%User{}, %{@valid_attrs | email: "test01"})
    refute changeset.valid?

    changeset = User.changeset(%User{}, %{@valid_attrs | email: "test01example.com"})
    refute changeset.valid?

    changeset = User.changeset(%User{}, %{@valid_attrs | email: "test01@.example.com"})
    refute changeset.valid?
  end

  test "changeset with invalid user type" do
    changeset = User.changeset(%User{}, %{@valid_attrs | user_type: 100})
    refute changeset.valid?
  end

  test "changeset with invalid status" do
    changeset = User.changeset(%User{}, %{@valid_attrs | status: 100})
    refute changeset.valid?
  end

  test "changeset with different password confirmation_attrs" do
    changeset = User.changeset(%User{}, %{@valid_attrs | password_confirmation: "01234567X"})
    refute changeset.valid?
  end
end
