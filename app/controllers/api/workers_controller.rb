class Api::WorkersController < ApplicationController
  before_action :set_workers, only: [:show, :update, :destroy]
  def index 
<<<<<<< HEAD
    render json: Worker.all
=======
    render json: Worker.All
>>>>>>> 6117727 (updated repo)
  end

  def show
    render json: @worker
  end
  
  def create
    @worker = Worker.new(worker_params)
    if @worker.save
      render json: @worker
    else
      render json: { errors: @worker.errors }, status: :unprocessable_entity
    end
  end
  
  def update
    if @worker.update(worker_params)
      render json: @worker
    else
      render json: {errors: @worker.errors}, status: :unprocessable_entity
    end
  end
  
  def destroy
    @worker.destroy
    render json: { message: "worker deleted" }
  end
  
  private
      def set_worker
        @worker = Worker.find(params[:id])
      end
      
      def worker_params
        params.require(:worker).permit(:first_name, :last_name, :specialty)
      end
  end

