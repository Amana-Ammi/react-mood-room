# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)


blue = Room.create(name: "Blue Room", image_url: "https://www.pexels.com/photo/shallow-focus-photography-of-water-droplets-1202841/")

Video.create([
    { title: "Rainy Day Soul", vid_url: "https://www.youtube.com/watch?v=f02mOEt11OQ", mood: "chill", room_id: blue.id}
])

Video.create([
    { title: "Lo-fi", vid_url: "https://www.youtube.com/watch?v=GZgoXPybYOY", mood: "chill", room_id: blue.id}
])

Video.create([
    { title: "Afro Beats", vid_url: "https://www.youtube.com/watch?v=FrCUPRHNhOw", mood: "hype", room_id: blue.id}
])

Video.create([
    { title: "Dance", vid_url: "https://www.youtube.com/watch?v=Elt0ZQo5bHY", mood: "dance", room_id: blue.id}
])