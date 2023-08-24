class RemoveNameAttendees < ActiveRecord::Migration[7.0]
  def change
    remove_column :attendees, :name
  end
end
