class ClientSerializer < ActiveModel::Serializer
  attributes :id, :user_id, :account_id

  belongs_to :users 
  belongs_to :accounts

end
