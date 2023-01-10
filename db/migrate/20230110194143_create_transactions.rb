class CreateTransactions < ActiveRecord::Migration[6.1]
  def change
    create_table :transactions do |t|
      t.integer :account_id
      t.string :date
      t.string :description
      t.integer :dollar_amount

      t.timestamps
    end
  end
end
