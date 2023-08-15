@users.each do |user|
    json.set! user.id do 
        json.extract! user, :id, :email, :stage_name, :created_at, :updated_at
        # json.photo user.photo.attached? ? user.photo.url : nil
    end
end