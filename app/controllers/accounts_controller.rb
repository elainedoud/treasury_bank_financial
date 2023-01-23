class AccountsController < ApplicationController

    def create
        account = Account.create(account_params)
        render json: account, status: :created
    end

    def index
        accounts = Account.all
        render json: accounts
    end

    private

    def account_params
        params.permit(:name)
    end

end