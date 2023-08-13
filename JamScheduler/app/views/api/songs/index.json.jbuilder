@songs.each do |song|
    json.set! song.id do 
        json.extract! song, :id, :song_name, :user_id, :desired_instrument, :original_artist, :created_at, :updated_at
        json.set! 'user' do 
            json.extract! song.user, :stage_name
            json.photo song.user.photo.attached? ? song.user.photo.url : nil
        end
    
    end
end