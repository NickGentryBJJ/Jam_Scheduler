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
ApplicationRecord.connection.reset_pk_sequence!('attendees')

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
# Seed 1
User.create!(
  stage_name: 'Alice',
  email: 'alice@email.com',
  password: 'securepassword1'
)

# Seed 2
User.create!(
  stage_name: 'Bob',
  email: 'bob@email.com',
  password: 'secretpass123'
)

# Seed 3
User.create!(
  stage_name: 'Eve',
  email: 'eve@email.com',
  password: 'mypassword456'
)

# Seed 4
User.create!(
  stage_name: 'Charlie',
  email: 'charlie@email.com',
  password: 'password789'
)

# Seed 5
User.create!(
  stage_name: 'Grace',
  email: 'grace@email.com',
  password: 'strongpass!23'
)

# Seed 6
User.create!(
  stage_name: 'David',
  email: 'david@email.com',
  password: 'davids_secret'
)

# Seed 7
User.create!(
  stage_name: 'Olivia',
  email: 'olivia@email.com',
  password: 'oliviasecure'
)

# Seed 8
User.create!(
  stage_name: 'Liam',
  email: 'liam@email.com',
  password: 'liamspassword'
)

# Seed 9
User.create!(
  stage_name: 'Sophia',
  email: 'sophia@email.com',
  password: 'sophiapass42'
)

# Seed 10
User.create!(
  stage_name: 'Jackson',
  email: 'jackson@email.com',
  password: 'jackson12345'
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

# Seed 1
Song.create!(
  user_id: 3,
  original_artist: 'Led Zeppelin',
  song_name: 'Stairway to Heaven',
  desired_instrument: 'Guitar',
)

# Seed 2
Song.create!(
  user_id: 3,
  original_artist: 'Queen',
  song_name: 'Bohemian Rhapsody',
  desired_instrument: 'Piano',
)

# Seed 3
Song.create!(
  user_id: 3,
  original_artist: 'Michael Jackson',
  song_name: 'Billie Jean',
  desired_instrument: 'Bass',
)

# Seed 4
Song.create!(
  user_id: 3,
  original_artist: 'Elton John',
  song_name: 'Rocket Man',
  desired_instrument: 'Keyboard',
)

# Seed 5
Song.create!(
  user_id: 3,
  original_artist: 'Adele',
  song_name: 'Someone Like You',
  desired_instrument: 'Vocals',
)
# Seed 1
Song.create!(
  user_id: 4,
  original_artist: 'Led Zeppelin',
  song_name: 'Black Dog',
  desired_instrument: 'Guitar',
)

# Seed 2
Song.create!(
  user_id: 4,
  original_artist: 'Queen',
  song_name: 'Radio Ga Ga',
  desired_instrument: 'Piano',
)

# Seed 3
Song.create!(
  user_id: 4,
  original_artist: 'Michael Jackson',
  song_name: 'Smooth Criminal',
  desired_instrument: 'Bass',
)

# Seed 4
Song.create!(
  user_id: 4,
  original_artist: 'Elton John',
  song_name: 'Tiny Dancer',
  desired_instrument: 'Keyboard',
)

# Seed 5
Song.create!(
  user_id: 4,
  original_artist: 'Adele',
  song_name: 'Rolling in the Deep',
  desired_instrument: 'Vocals',
)
Song.create!(
  user_id: 5,
  original_artist: 'Adele',
  song_name: 'Someone Like You',
  desired_instrument: 'Vocals',
)
# Seed 1
Song.create!(
  user_id: 5,
  original_artist: 'Led Zeppelin',
  song_name: 'Black Dog',
  desired_instrument: 'Guitar',
)

# Seed 2
Song.create!(
  user_id: 5,
  original_artist: 'Queen',
  song_name: 'Radio Ga Ga',
  desired_instrument: 'Piano',
)

# Seed 3
Song.create!(
  user_id: 5,
  original_artist: 'Michael Jackson',
  song_name: 'Smooth Criminal',
  desired_instrument: 'Bass',
)

# Seed 5
Song.create!(
  user_id: 5,
  original_artist: 'Elton John',
  song_name: 'Tiny Dancer',
  desired_instrument: 'Keyboard',
)

# Seed 5
Song.create!(
  user_id: 5,
  original_artist: 'Adele',
  song_name: 'Rolling in the Deep',
  desired_instrument: 'Vocals',
)

# Seed 1
Song.create!(
  user_id: 6,
  original_artist: 'Pink Floyd',
  song_name: 'Comfortably Numb',
  desired_instrument: 'Guitar',
)

# Seed 2
Song.create!(
  user_id: 6,
  original_artist: 'The Rolling Stones',
  song_name: 'Paint It Black',
  desired_instrument: 'Drums',
)

# Seed 3
Song.create!(
  user_id: 6,
  original_artist: 'Fleetwood Mac',
  song_name: 'Go Your Own Way',
  desired_instrument: 'Bass',
)

# Seed 4
Song.create!(
  user_id: 6,
  original_artist: 'David Bowie',
  song_name: 'Space Oddity',
  desired_instrument: 'Keyboard',
)

# Seed 5
Song.create!(
  user_id: 6,
  original_artist: 'Nirvana',
  song_name: 'Smells Like Teen Spirit',
  desired_instrument: 'Vocals',
)

# Seed 1
Song.create!(
  user_id: 7,
  original_artist: 'Coldplay',
  song_name: 'Fix You',
  desired_instrument: 'Piano',
)

# Seed 2
Song.create!(
  user_id: 7,
  original_artist: 'Ed Sheeran',
  song_name: 'Shape of You',
  desired_instrument: 'Guitar',
)

# Seed 3
Song.create!(
  user_id: 7,
  original_artist: 'Billie Eilish',
  song_name: 'Bad Guy',
  desired_instrument: 'Bass',
)

# Seed 4
Song.create!(
  user_id: 7,
  original_artist: 'Taylor Swift',
  song_name: 'Love Story',
  desired_instrument: 'Vocals',
)

# Seed 5
Song.create!(
  user_id: 7,
  original_artist: 'Imagine Dragons',
  song_name: 'Believer',
  desired_instrument: 'Guitar'
)
Song.create!(
  user_id: 8,
  original_artist: 'Coldplay',
  song_name: 'Fix You',
  desired_instrument: 'Piano',
)

# Seed 2
Song.create!(
  user_id: 8,
  original_artist: 'Ed Sheeran',
  song_name: 'Shape of You',
  desired_instrument: 'Guitar',
)

# Seed 3
Song.create!(
  user_id: 8,
  original_artist: 'Billie Eilish',
  song_name: 'Bad Guy',
  desired_instrument: 'Bass',
)

# Seed 4
Song.create!(
  user_id: 8,
  original_artist: 'Taylor Swift',
  song_name: 'Love Story',
  desired_instrument: 'Vocals',
)

# Seed 5
Song.create!(
  user_id: 8,
  original_artist: 'Imagine Dragons',
  song_name: 'Believer',
  desired_instrument: 'Guitar'
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

# Seed 2
Event.create!(
  user_id: 2,
  title: "Alice's Art Exhibition",
  location: 'Gallery XYZ',
  details: "Join Alice's art exhibition showcasing her latest creations.",
  date: "2023-08-25"
)

# Seed 3
Event.create!(
  user_id: 3,
  title: "Bob's Birthday Bash",
  location: "Bob's House",
  details: "Let's celebrate Bob's birthday with a night of fun and games.",
  date: "2023-10-03"
)

# Seed 4
Event.create!(
  user_id: 4,
  title: "Eve's Book Club",
  location: 'Local Library',
  details: "Discussing this month's book pick. All book lovers welcome!",
  date: "2023-09-18"
)

# Seed 5
Event.create!(
  user_id: 5,
  title: "Charlie's Charity 5K Run",
  location: 'City Park',
  details: "Join Charlie's charity run to support a good cause.",
  date: "2023-08-29"
)

# Seed 6
Event.create!(
  user_id: 6,
  title: "Grace's Yoga Retreat",
  location: 'Serene Retreat Center',
  details: "Relax, rejuvenate, and find your inner peace with Grace's yoga retreat.",
  date: "2023-09-15"
)

# Seed 7
Event.create!(
  user_id: 7,
  title: "David's Coding Workshop",
  location: 'Tech Hub',
  details: "Learn coding basics and build your own website with David's workshop.",
  date: "2023-10-12"
)

# Seed 8
Event.create!(
  user_id: 8,
  title: 'Olivia Live in Concert',
  location: 'City Arena',
  details: "Experience Olivia's mesmerizing performance live on stage.",
  date: "2023-09-27"
)

puts "Events Finished! Exciting!"
puts "Adding event comments"

EventComment.create!(
  user_id: 2,
  event_id: 1,
  body: "Maybe"
)


puts "EVENT COMMENTs ADDED"
puts "Adding Attendees Fingers Crossed!"
puts "mothafucka!"

# Attendees for Event 1
Attendee.create!(
  user_id: 2,
  event_id: 1,
  status: "Maybe"
)

Attendee.create!(
  user_id: 3,
  event_id: 1,
  status: "Going"
)

Attendee.create!(
  user_id: 4,
  event_id: 1,
  status: "Going"
)

# Attendees for Event 2
Attendee.create!(
  user_id: 1,
  event_id: 2,
  status: "Going"
)

Attendee.create!(
  user_id: 3,
  event_id: 2,
  status: "Maybe"
)

Attendee.create!(
  user_id: 4,
  event_id: 2,
  status: "Going"
)

# Continue the pattern for the rest of the events and users...

# Attendees for Event 12
Attendee.create!(
  user_id: 5,
  event_id: 8,
  status: "Going"
)

Attendee.create!(
  user_id: 1,
  event_id: 7,
  status: "Maybe"
)

Attendee.create!(
  user_id: 2,
  event_id: 6,
  status: "Going"
)

users = User.all
events = Event.where(id: 3..8)  # Events 3 through 11
statuses = ["Going", "Maybe"]

users.each do |user|
  events.each do |event|
    Attendee.create!(
      user_id: user.id,
      event_id: event.id,
      status: statuses.sample
    )
  end
end







puts "All Seeds Created No Issues!" 


