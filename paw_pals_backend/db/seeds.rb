# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

cat_attributes=[
    {
        name: 'Chester',
        age: 10,
        bio: 'eating cheetos, takings naps, kicking ass'
    },
    {
        name: 'Eugene',
        age: 2,
        bio: 'watching tv, grooming, drinking milk'
    }
]

cat_attributes.each do |attributes|
   Cat.create(attributes) 
end