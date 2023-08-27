# == Schema Information
#
# Table name: event_comments
#
#  id         :bigint           not null, primary key
#  body       :string           not null
#  created_at :datetime         not null
#  updated_at :datetime         not null
#  user_id    :bigint
#  event_id   :bigint
#
class EventComment < ApplicationRecord
    validates :body, presence: true

    belongs_to :event
    belongs_to :user

    def get_name 
        user = self.user
        return user.stage_name
    end
end
