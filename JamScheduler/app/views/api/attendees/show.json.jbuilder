json.attendee do
    # json.photo @user.photo.attached? ? @user.photo.url : nil
    json.set! 'user' do 
        json.extract! @attendee.user, :stage_name, :id, :email
    end
    json.set! 'event' do 
        json.extract! @attendee.event, :id, :title, :user_id, :location, :details, :date
    end
end