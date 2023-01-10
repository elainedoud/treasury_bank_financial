class AccountSerializer < ActiveModel::Serializer
  attributes :id, :type

  has_many :clients
  has_many :users, through: :clients
  has_many :transactions 

end
