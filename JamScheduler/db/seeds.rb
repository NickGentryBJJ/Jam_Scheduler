# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: "Star Wars" }, { name: "Lord of the Rings" }])
#   Character.create(name: "Luke", movie: movies.first)

# db/seeds.rb

# ApplicationRecord.transaction do 
puts "Destroying tables..."
# Unnecessary if using `rails db:seed:replant`
User.destroy_all

puts "Resetting primary keys..."
# For easy testing, so that after seeding, the first `User` has `id` of 1
ApplicationRecord.connection.reset_pk_sequence!('users')
ApplicationRecord.connection.reset_pk_sequence!('events')
ApplicationRecord.connection.reset_pk_sequence!('songs')

puts "Creating users..."
# Create one user with an easy to remember username, email, and password:
gwyn = User.create!(
  stage_name: 'Gwyn',
  email: 'gwyn@email.com', 
  password: 'password'
  
)
email = User.create!(
  stage_name: 'Email',
  email: 'email@email.com', 
  password: 'password'
  
)
nick = User.create!(
  stage_name: 'Nick',
  email: 'nick@email.com', 
  password: 'password'
  
)

puts "Users Created MothaFucka"
puts "Makin dem songs now bitch"

song1 = Song.create!(
  user_id: 2,
  original_artist: 'mike',
  song_name: 'wow',
  desired_instrument: 'drums',
)
song2 = Song.create!(
  user_id: 2,
  original_artist: 'mike',
  song_name: 'NPM Start',
  desired_instrument: 'drums',
)

puts "songs Created"
puts "creating events now!"

event1 = Event.create!(
  user_id: 2,
  title: 'Mikes Par Tea',
  location: 'App Academy',
  details: 'Mikes Awesome Tea Par Tea! come through and get crunk!',
  date: "2023-09-25"
)
event2 = Event.create!(
  user_id: 2,
  title: 'Paulos Partae',
  location: 'App Academy',
  details: 'Paulos Awesome Partae! come through and get Fucked Up!',
  date: "2023-09-10"
)
puts "Events Finished" 


