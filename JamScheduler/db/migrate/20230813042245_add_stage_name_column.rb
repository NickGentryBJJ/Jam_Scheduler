class AddStageNameColumn < ActiveRecord::Migration[7.0]
  def change
    add_column :users, :stage_name, :string
  end
end
