class CreateEventComments < ActiveRecord::Migration[7.0]
  def change
    create_table :event_comments do |t|
      t.string :body, null: false 
      t.timestamps
    end
    add_reference :event_comments, :user, index: true, foreign_key: true
    add_reference :event_comments, :event, index: true, foreign_key: true
  end
end
