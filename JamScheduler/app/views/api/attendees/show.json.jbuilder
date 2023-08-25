json.attendee do
    json.extract! @attendee, :id, :user_id, :event_id
    json.set! 'event' do 
        json.extract! @attendee.event, :id, :title, :user_id, :location, :details, :date
    end
end