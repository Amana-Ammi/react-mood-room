class VideoSerializer
  include FastJsonapi::ObjectSerializer
  attributes :id, :title, :vid_url, :mood, :genre, :room
end
