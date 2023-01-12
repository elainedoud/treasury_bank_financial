class AccountsController < ApplicationController

    def create
        account = Account.create(account_params)
        render json: account, status: :created
    end

    private

    def account_params
        params.permit(:name)
    end

end
