@event_comments.each do |event_comment|
    json.set! event_comment.id do 
        json.extract! event_comment, :id, :body, :user_id, :event_id, :created_at, :updated_at
        json.set! 'event' do 
            json.extract! event_comment.event, :id, :title, :user_id, :location, :details, :date
        end
        json.set! 'user' do 
            json.extract! event_comment.user, :id, :stage_name
        end
    end
end