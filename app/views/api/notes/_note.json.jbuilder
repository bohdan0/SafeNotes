json.extract! note, :id, :title, :body, :notebook_id, :updated_at

json.tags({})
json.tags do 
  note.tags.each do |tag|
    json.set! tag.id do
      json.extract! tag, :id, :name
    end
  end
end
  

json.tag_ids do
  json.array! note.tags.map { |tag| tag.id }
end