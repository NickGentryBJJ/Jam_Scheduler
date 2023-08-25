@attendees.each do |attendee|
    json.set! attendee.id do 
        json.extract! attendee, :id, :status, :user_id, :event_id, :created_at, :updated_at
        json.set! 'event' do 
            json.extract! attendee.event, :id, :title, :user_id, :location, :details, :date
        end
    end
end