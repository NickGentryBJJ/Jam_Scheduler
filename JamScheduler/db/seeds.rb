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

rick = User.create!(
  stage_name: 'Ricky G',
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


song3 = Song.create!(
  user_id: 2,
  original_artist: 'The Beatles',
  song_name: 'Hey Jude',
  desired_instrument: 'Drums',
)

song4 = Song.create!(
  user_id: 2,
  original_artist: 'Queen',
  song_name: 'Bohemian Rhapsody',
  desired_instrument: 'Vocals',
)

song5 = Song.create!(
  user_id: 2,
  original_artist: 'Elton John',
  song_name: 'Rocket Man',
  desired_instrument: 'Synthesizer',
)

song6 = Song.create!(
  user_id: 2,
  original_artist: 'Fleetwood Mac',
  song_name: 'Go Your Own Way',
  desired_instrument: 'Bass Guitar',
)

song7 = Song.create!(
  user_id: 2,
  original_artist: 'Led Zeppelin',
  song_name: 'Stairway to Heaven',
  desired_instrument: 'Flute',
)

song8 = Song.create!(
  user_id: 2,
  original_artist: 'Beyoncé',
  song_name: 'Crazy in Love',
  desired_instrument: 'Trumpet',
)

song9 = Song.create!(
  user_id: 2,
  original_artist: 'Prince',
  song_name: 'Purple Rain',
  desired_instrument: 'Electric Guitar',
)

song10 = Song.create!(
  user_id: 2,
  original_artist: 'Adele',
  song_name: 'Someone Like You',
  desired_instrument: 'Violin',
)

song1 = Song.create!(
  user_id: 2,
  original_artist: 'DeBarge',
  song_name: 'I Like It',
  desired_instrument: 'Guitar',
)

song12 = Song.create!(
  user_id: 1,
  original_artist: 'Michael Jackson',
  song_name: 'Thriller',
  desired_instrument: 'Piano',
)

song13 = Song.create!(
  user_id: 1,
  original_artist: 'The Rolling Stones',
  song_name: 'Paint It Black',
  desired_instrument: 'Drums',
)

song14 = Song.create!(
  user_id: 1,
  original_artist: 'David Bowie',
  song_name: 'Space Oddity',
  desired_instrument: 'Guitar',
)

song15 = Song.create!(
  user_id: 1,
  original_artist: 'Elvis Presley',
  song_name: "Can't Help Falling in Love",
  desired_instrument: 'Vocals',
)

song16 = Song.create!(
  user_id: 1,
  original_artist: 'The Eagles',
  song_name: 'Hotel California',
  desired_instrument: 'Electric Guitar',
)

song17 = Song.create!(
  user_id: 1,
  original_artist: 'Bob Marley',
  song_name: 'Three Little Birds',
  desired_instrument: 'Acoustic Guitar',
)

song18 = Song.create!(
  user_id: 1,
  original_artist: 'Stevie Wonder',
  song_name: 'Superstition',
  desired_instrument: 'Keyboards',
)

song19 = Song.create!(
  user_id: 1,
  original_artist: 'Prince',
  song_name: 'When Doves Cry',
  desired_instrument: 'Synthesizer',
)

song20 = Song.create!(
  user_id: 1,
  original_artist: 'Adele',
  song_name: 'Rolling in the Deep',
  desired_instrument: 'Bass Guitar',
)

song21 = Song.create!(
  user_id: 1,
  original_artist: 'Queen',
  song_name: 'Bohemian Rhapsody',
  desired_instrument: 'Vocals',
)

puts "Songs Created!"
puts "Creating Events Now!"

event1 = Event.create!(
  user_id: 2,
  title: 'Mikes Par Tea',
  location: 'App Academy',
  details: 'Mikes Awesome Tea Par Tea! come through and get crunk!',
  date: "2023-09-25"
)
event2 = Event.create!(
  user_id: 1,
  title: 'Paulos Partae',
  location: 'App Academy',
  details: 'Paulos Awesome Partae! come through and drink!',
  date: "2023-09-10"
)

puts "Events Finished! Exciting!"
puts "Adding Attendees Fingers Crossed!"
puts "mothafucka!"

parti1 = Attendee.create!(
  user_id: 1,
  event_id: 1, 
  status: "Going"
)
parti2 = Attendee.create!(
  user_id: 2,
  event_id: 2, 
  status: "Maybe"
)
parti3 = Attendee.create!(
  user_id: 1,
  event_id: 2, 
  status: "Going"
)
parti4 = Attendee.create!(
  user_id: 2,
  event_id: 1, 
  status: "Maybe"
)


puts "All Seeds Created No Issues!" 


