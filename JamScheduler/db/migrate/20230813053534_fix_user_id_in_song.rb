class FixUserIdInSong < ActiveRecord::Migration[7.0]
  def change
    rename_column :songs, :user_id_id, :user
  end
end
