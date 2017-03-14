class Tag < ApplicationRecord
  validates :name, :author, presence: true
  validates :author, uniqueness: { scope: :name,
    message: 'Tag already exists' }

  belongs_to :author,
    class_name: :User,
    foreign_key: :author_id

  has_many :taggings, dependent: :destroy

  has_many :notes,
    through: :taggings,
    source: :note
end
