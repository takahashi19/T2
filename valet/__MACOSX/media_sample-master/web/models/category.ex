defmodule MediaSample.Category do
  use MediaSample.Web, :model
  use MediaSample.ModelStatusConcern
  use MediaSample.PreloadConcern
  alias MediaSample.CategoryTranslation

  schema "categories" do
    field :name, :string
    field :description, :string
    field :image, :string
    field :status, :integer

    has_one :translation, MediaSample.CategoryTranslation

    timestamps
  end

  @required_fields ~w(name description status)a
  @optional_fields ~w()a

  def changeset(category, params \\ %{}) do
    category
    |> cast(params, @required_fields ++ @optional_fields)
    |> validate_required(@required_fields)
  end

  def preload_all(query, locale) do
    from query, preload: [translation: ^CategoryTranslation.translation_query(locale)]
  end
end
