class ClientSerializer < ActiveModel::Serializer
  attributes :id

  belongs_to :users 
  belongs_to :accounts

end
