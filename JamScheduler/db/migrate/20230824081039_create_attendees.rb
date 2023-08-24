class CreateAttendees < ActiveRecord::Migration[7.0]
  def change
    create_table :attendees do |t|
      t.string :name, null: false 
      t.string :status, null: false 
      t.timestamps
    end
    add_reference :attendees, :user, index: true, foreign_key: true
    add_reference :attendees, :event, unique: true
  end
end
