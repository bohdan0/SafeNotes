class AddIndexToTags < ActiveRecord::Migration[5.0]
  def change
    add_index :tags, [:name, :author_id], unique: true
  end
end
