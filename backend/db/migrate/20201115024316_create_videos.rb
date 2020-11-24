class CreateVideos < ActiveRecord::Migration[6.0]
  def change
    create_table :videos do |t|
      t.string :title
      t.string :vid_url
      t.string :mood
      t.string :image_url
      t.string :description


      t.timestamps
    end
  end
end
