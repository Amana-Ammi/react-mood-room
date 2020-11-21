# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)



Video.create([
    { title: "Rainy Day Soul", vid_url: "https://www.youtube.com/watch?v=f02mOEt11OQ", mood: "chill", likes: 25 , dislikes: 1 }
])

Video.create([
    { title: "Lo-fi", vid_url: "https://www.youtube.com/watch?v=GZgoXPybYOY", mood: "chill", likes: 25 , dislikes: 5 }
])

Video.create([
    { title: "Afro Beats", vid_url: "https://www.youtube.com/watch?v=FrCUPRHNhOw", mood: "fun", likes: 15, dislikes: 0 }
])

Video.create([
    { title: "Dance", vid_url: "https://www.youtube.com/watch?v=Elt0ZQo5bHY", mood: "happy", likes: 20, dislikes: 10 }
])