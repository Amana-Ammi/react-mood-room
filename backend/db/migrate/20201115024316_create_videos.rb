class CreateVideos < ActiveRecord::Migration[6.0]
  def change
    create_table :videos do |t|
      t.string :title
      t.string :vid_url
      t.string :mood
      t.integer :likes
      t.integer :dislikes

      t.timestamps
    end
  end
end
