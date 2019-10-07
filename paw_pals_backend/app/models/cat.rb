class Cat < ApplicationRecord
    
    validates :name, :age, :bio, presence: true
    
    validates :bio, length: { minimum: 10 }
    
    has_one_attached :avatar
    
end
