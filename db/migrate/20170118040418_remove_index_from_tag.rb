class RemoveIndexFromTag < ActiveRecord::Migration[5.0]
  def change
    remove_index(:tags, name: "index_tags_on_name")
  end
end
