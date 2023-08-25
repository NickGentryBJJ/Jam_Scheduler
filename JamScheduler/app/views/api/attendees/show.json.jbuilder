json.attendee do
    json.set! 'event' do 
        json.extract! @attendee.event, :id, :title, :user_id, :location, :details, :date
    end
end