class User < ApplicationRecord

    has_many :clients
    has_many :accounts, through: :clients

end
