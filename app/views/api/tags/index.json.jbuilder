ordered_hash = Hash.new { |h, k| h[k] = [] }
@tags.each { |tag| ordered_hash[tag.name[0].upcase] << tag }

ordered_hash.keys.each do |letter|
  json.set! letter do
    json.array! ordered_hash[letter], :id, :name
  end
end