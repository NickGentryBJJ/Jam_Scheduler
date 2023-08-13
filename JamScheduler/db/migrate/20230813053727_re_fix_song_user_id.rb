class ReFixSongUserId < ActiveRecord::Migration[7.0]
  def change
    rename_column :songs, :user, :user_id
  end
end
