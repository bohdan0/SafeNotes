class Tagging < ApplicationRecord
  validates :tag, :note, presence: true
  validates :note, uniqueness: { scope: :tag,
    message: 'already tagged' }
  
  belongs_to :tag
  belongs_to :note
end
