@events.each do |event|
    json.set! event.id do 
        json.extract! event, :id, :title, :user_id, :location, :details, :date, :created_at, :updated_at
        json.set! 'user' do 
            json.extract! event.user, :stage_name
            json.photo event.user.photo.attached? ? event.user.photo.url : nil
        end
    
    end
end