class CreateVideos < ActiveRecord::Migration[6.0]
  def change
    create_table :videos do |t|
      t.string :name
      t.string :vid_url
      t.string :mood
      t.string :genre

      t.timestamps
    end
  end
end
