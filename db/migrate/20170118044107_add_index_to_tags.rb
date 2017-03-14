class AddIndexToTags < ActiveRecord::Migration[5.0]
  def change
    add_index :tags, [:author_id, :name], unique: true
  end
end
