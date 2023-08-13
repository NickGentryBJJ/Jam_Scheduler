# == Schema Information
#
# Table name: songs
#
#  id                 :bigint           not null, primary key
#  song_name          :string           not null
#  original_artist    :string           not null
#  desired_instrument :string           not null
#  user_id            :bigint
#  created_at         :datetime         not null
#  updated_at         :datetime         not null
#
class Song < ApplicationRecord
    validates :song_name, :original_artist, :desired_instrument, :user_id, presence: true
    belongs_to :user
end

# users can find other users that play the same song by searching for users by song name and displaying fetched 
# users. This will happen on Session user song display page when click on song.
