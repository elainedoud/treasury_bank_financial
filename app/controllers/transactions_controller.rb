class TransactionsController < ApplicationController

    private

    def transaction_params
        params.permit(:account_id, :date, :description, :dollar_amount)
    end

end
