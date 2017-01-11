class Note < ApplicationRecord
  validates :title, :body, :author, :notebook, presence: true

  belongs_to :author,
    class_name: :User

  belongs_to :notebook,
    class_name: :Notebook
end
