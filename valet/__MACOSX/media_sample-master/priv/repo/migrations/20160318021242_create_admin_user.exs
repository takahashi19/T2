defmodule MediaSample.Repo.Migrations.CreateAdminUser do
  use Ecto.Migration

  def change do
    create table(:admin_users, options: "ROW_FORMAT=DYNAMIC") do
      add :email, :string
      add :name, :string
      add :encrypted_password, :string
      add :status, :integer

      timestamps
    end

  end
end
