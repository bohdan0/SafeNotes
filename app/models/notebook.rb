class Notebook < ApplicationRecord
  validates :title, :author, presence: true

  has_many :notes, dependent: :destroy

  belongs_to :author,
    class_name: :User
end
