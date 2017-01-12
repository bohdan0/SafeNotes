class AddAuthorIdToTags < ActiveRecord::Migration[5.0]
  def change
    add_column :tags, :author_id, :integer, null: false
    add_index :tags, :author_id
  end
end
