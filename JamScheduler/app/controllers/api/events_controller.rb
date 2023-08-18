class Api::EventsController < ApplicationController

    def index 
        @events = Event.includes(:user).all 
        render :index
    end

    def show
        @event = Event.find(params[:id])
        render :show
    end

    def update
        @event = Event.find(params[:id])
        if @event.update(event_params)
            @events = Event.all 
            render json: :index
        else  
            render json: {errors:@event.errors.full_messages},status: 422
        end
    end
    
    def create
        @events = Event.all
        @event = Event.new(event_params)
        if @event.save 
            render :index
        else
            render json: {errors:@event.errors.full_messages}, status: 422
        end
    end

    def destroy
        @event = Event.find(params[:id])
        @event.destroy
    end

    private 
    def event_params
        params.require(:event).permit(:title, :location, :details, :date, :user_id)
    end     
end
