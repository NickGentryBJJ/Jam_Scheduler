# == Schema Information
#
# Table name: events
#
#  id         :bigint           not null, primary key
#  title      :string           not null
#  location   :string           not null
#  details    :string           not null
#  date       :date             not null
#  created_at :datetime         not null
#  updated_at :datetime         not null
#  user_id    :bigint
#
class Event < ApplicationRecord
    validates :title, :location, :details, :date, presence: true
    belongs_to :user
end
