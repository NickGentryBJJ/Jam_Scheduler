json.event do
    json.extract! @event, :id, :title, :user_id, :location, :details, :date, :created_at, :updated_at
    # json.photo @user.photo.attached? ? @user.photo.url : nil
    json.set! 'user' do 
        json.extract! event.user, :stage_name, :id, :email
    end
end