class CatsController < ApplicationController
    
    def index
        cats = Cat.all
        render json: cats
    end
    
    def create
        cat = Cat.create(cat_params)
        if cat.valid?
            render json: cat
        else
            render json: cat.errors, status: :unprocessable_entity
        end
    end
    
    def update
       @cat = Cat.find(params[:id])
       @cat.update_attributes(cat_params)
       render :show
    end
    
    private
    
    def cat_params
        params.require(:cat).permit(:name, :age, :bio, :avatar) 
    end
    
end
