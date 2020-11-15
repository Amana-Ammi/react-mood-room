class Api::V1::RoomsController < ApplicationController

    before_action :room, only: [:update, :destroy]

    def index
        rooms = Room.all
        render json: RoomSerializer.new(rooms).serialized_json
    end

    def create
        room = Room.new(room_params)
        if product.save
            render json: RoomSerializer.new(room).serialized_json
        end
    end

    private

    # strong params 
    
    def room_params
        params.require(:room).permit(:name, :image_url)
    end

    def find_room
        room = Room.find(params[:id])
    end
    
end
