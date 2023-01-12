class ClientsController < ApplicationController

    def create
        client = Client.create(client_params)
        render json: client, status: :created
    end


    private

    def client_params
        params.permit(:user_id, :account_id)
    end
end
