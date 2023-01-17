class TransactionSerializer < ActiveModel::Serializer
  attributes :id, :account_id, :date, :description, :dollar_amount

  belongs_to :account

end
