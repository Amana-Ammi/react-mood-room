# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)



Video.create([
    { title: "A Little Seoul", vid_url: "https://youtu.be/39S4BAvjFeo", mood: "Chill", image_url: "https://react-my-dj.s3-us-west-2.amazonaws.com/Dance.jpg", description: "A few introductory Korean R&B tracks that are sure to get you grooving." }
])

Video.create([
    { title: "Wu-Tang Generator Name", vid_url: "https://www.youtube.com/watch?v=ExVtrghW5Y4&list=PLzDWYEiYiW2Avuzbt0Pz2dPPXRr3AHYsH", mood: "Hype", image_url: "https://free2music.com/images/singer/2018/11/01/childish-gambino_0.jpg", description: "Childish Gambino. Need I say More?" }
])

Video.create([
    { title: "MOOD FOREVER", vid_url: "https://www.youtube.com/watch?v=LXXQLa-5n5w&list=PLc5z3xejLEJL-Tmh2FWHRpGko3q43ZKMR", mood: "Beyonce", image_url: "https://react-my-dj.s3-us-west-2.amazonaws.com/Beyonce.png", description: "Yes, Beyonce is a Mood." }
])

Video.create([
    { title: "AFRO-BEATZ", vid_url: "https://youtu.be/SQ2cHyowuwI", mood: "Happy", image_url: "https://react-my-dj.s3-us-west-2.amazonaws.com/afro-beat.jpg", description: "A true happy place."}
])

Video.create([
    { title: "RAINY DAY SOUL", vid_url: "https://youtu.be/PReV3zH4iIw", mood: "Relaxed", image_url: "https://react-my-dj.s3-us-west-2.amazonaws.com/rain_1.jpg", description: "Sometimes you need to relax as if it was raining outside. Grab a blanket and some hot chocolate for this one." }
])