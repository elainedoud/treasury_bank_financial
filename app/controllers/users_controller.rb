class UsersController < ApplicationController
    rescue_from ActiveRecord::RecordInvalid, with: :unauthorized

    def show
        user = User.find_by!(id: session[:user_id])
        render json: user
    end

    def create
        user = User.create!(user_params)
        session[:user_id] = user.id
        render json: user, status: :created
    end

private

def user_params
    params.permit(:name, :email_address, :password)
end

end
