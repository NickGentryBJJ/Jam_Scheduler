json.event_comment do
    json.extract! @event_comment, :id, :body, :user_id, :event_id
    json.set! 'event' do 
        json.extract! @event_comment.event, :id, :title, :user_id, :location, :details, :date
    end
    json.set! 'user' do 
        json.extract! @event_comment.user, :id, :stage_name
    end
end