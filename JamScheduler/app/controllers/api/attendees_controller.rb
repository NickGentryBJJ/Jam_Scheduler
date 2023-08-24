class Api::AttendeesController < ApplicationController
    def index 
        @attendees = Attendee.includes(:user).all 
        @attendees = Attendee.includes(:event).all
        render :index
    end

    def show
        @attendee = Attendee.find(params[:id])
        render :show
    end

    def update
        @attendee = Attendee.find(params[:id])
        if @attendee.update(attendee_params)
            @attendees = Attendee.all 
            render json: :index
        else  
            render json: {errors:@attendee.errors.full_messages},status: 422
        end
    end
    
    def create
        @attendees = Attendee.all
        @attendee = Attendee.new(attendee_params)
        if @attendee.save 
            render :index
        else
            render json: {errors:@attendee.errors.full_messages}, status: 422
        end
    end

    def destroy
        @attendee = Attendee.find(params[:id])
        @attendee.destroy
    end

    private 
    def attendee_params
        params.require(:attendee).permit(:status, :event_id, :user_id)
    end   
end
