class VideoSerializer
  include FastJsonapi::ObjectSerializer
  attributes :id, :title, :vid_url, :mood, :room
end
