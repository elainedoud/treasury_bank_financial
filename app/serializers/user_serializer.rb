class UserSerializer < ActiveModel::Serializer
  attributes :id, :name, :email_address

  has_many :clients
  has_many :accounts, through: :clients

end
