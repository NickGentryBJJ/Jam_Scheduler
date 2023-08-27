class Api::EventCommentsController < ApplicationController
    def index 
        @event_comments = EventComment.all 
        render :index
    end

    def show
        @event_comment = EventComment.find(params[:id])
        render :show
    end

    def update
        @event_comment = EventComment.find(params[:id])
        if @event_comment.update(event_comment_params)
            @event_comments = EventComment.all 
            render json: :index
        else  
            render json: {errors:@event.errors.full_messages},status: 422
        end
    end
    
    def create
        @event_comment = EventComment.all
        @event_comment = EventComment.new(event_comment_params)
        if @event_comment.save 
            render :index
        else
            render json: {errors:@event.errors.full_messages}, status: 422
        end
    end

    def destroy
        @event_comment = EventComment.find(params[:id])
        @event_comment.destroy
    end

    private 
    def event_comment_params
        params.require(:event_comment).permit(:body, :event_id, :user_id)
    end     
end
