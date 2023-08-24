# @events.each do |event|
#     json.set! event.id do 
#         json.extract! event, :id, :title, :user_id, :location, :details, :date, :created_at, :updated_at
#         json.set! 'user' do 
#             json.extract! event.user, :stage_name, :id, :email
#         end
#         json.set! 'attendees' do 
#             json.extract! event.attendees.do |attendee|
#             attendee, :status, :user_id
#         end
#     end

# json.array! @events do |event|
#     json.set! event.id do
#       json.extract! event, :id, :title, :user_id, :location, :details, :date, :created_at, :updated_at
#       json.set! 'user' do
#         json.extract! event.user, :stage_name, :id, :email
#       end
#       json.attendees event.attendees do |attendee|
#         json.extract! attendee, :status, :user_id
#       end
#     end
#   end

json.array! @events do |event|
    json.id event.id
    json.title event.title
    json.user_id event.user_id
    json.location event.location
    json.details event.details
    json.date event.date
    json.created_at event.created_at
    json.updated_at event.updated_at
  
    json.user do
      json.stage_name event.user.stage_name
      json.id event.user.id
      json.email event.user.email
    end
  
    json.attendees event.attendees do |attendee|
      json.status attendee.status
      json.user_id attendee.user_id
    end
  end
  


  


