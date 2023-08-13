class SongsController < ApplicationController
        def index 
            @songs = Song.includes(:user).all 
            render :index
        end

        def show
            @song = Song.find(params[:id])
            render json: @song
        end

        def update
            @song = Song.find(params[:id])
            if @song.update(song_params)
                @songs = Song.all 
                render json: :index
            else  
                render json: {errors:@song.errors.full_messages},status: 422
            end
        end
        
        def create
            @songs = Song.all
            @song = Song.new(song_params)
            if @song.save 
                render :index
            else
                render json: {errors:@song.errors.full_messages}, status: 422
            end
        end

        def destroy
            @song = Song.find(params[:id])
            @song.destroy
        end

        private 
        def song_params
            params.require(:song).permit(:song_name, :original_artist, :desired_instrument)
        end      
end
