class RenameTypeToName < ActiveRecord::Migration[6.1]
  def change
    rename_column :accounts, :type, :name
  end
end
