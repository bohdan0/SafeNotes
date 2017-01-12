class Note < ApplicationRecord
  validates :title, :body, :author, :notebook, presence: true

  belongs_to :author,
    class_name: :User,
    foreign_key: :author_id

  belongs_to :notebook

  has_many :taggings, dependent: :destroy

  has_many :tags,
    through: :taggings,
    source: :tag
end
