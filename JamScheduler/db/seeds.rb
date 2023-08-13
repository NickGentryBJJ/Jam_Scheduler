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
ApplicationRecord.connection.reset_pk_sequence!('posts')
ApplicationRecord.connection.reset_pk_sequence!('comments')

puts "Creating users..."
# Create one user with an easy to remember username, email, and password:
gwyn = User.create!(
  stage_name: 'Gwyn',
  email: 'gwyn@email.com', 
  password: 'password'
  
)

song1 = Song.create!(
  user_id: 1,
  original_artist: 'mike',
  song_name: 'wow',
  desired_instrument: 'drums',
)

