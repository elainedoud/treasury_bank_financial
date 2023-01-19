class AccountsController < ApplicationController

    def create
        account = Account.create(account_params)
        render json: account, status: :created
    end

    def show
        account = Account.find_by(user: account_user)
        render json: account
    end

    private

    def account_params
        params.permit(:name)
    end

    def account_user
        user = User.find_by(params[:id])
    end

    #comments
    #account_user.
    #.where(name: params[:checking])

end