class CreateSongs < ActiveRecord::Migration[7.0]
  def change
    create_table :songs do |t|
      t.string :song_name, null: false
      t.string :original_artist, null: false 
      t.string :desired_instrument, null: false 
      t.references :user_id, foreign_key: {to_table: :users}
      t.timestamps
    end
  end
end
