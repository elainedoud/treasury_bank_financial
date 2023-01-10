class TransactionSerializer < ActiveModel::Serializer
  attributes :id, :account_id, :integer, :date, :description, :dollar_amount

  belongs_to :account

end
