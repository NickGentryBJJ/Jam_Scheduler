# == Schema Information
#
# Table name: attendees
#
#  id         :bigint           not null, primary key
#  status     :string           not null
#  created_at :datetime         not null
#  updated_at :datetime         not null
#  user_id    :bigint
#  event_id   :bigint
#
class Attendee < ApplicationRecord
    validates :status, :user_id, :event_id, presence: true
    belongs_to :event
end
