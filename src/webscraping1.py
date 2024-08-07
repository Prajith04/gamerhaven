import imdb
import json
# creating instance of IMDb
ia = imdb.IMDb()
  
# name of the movie
name = "red dead redemption"
  
# searching the name of the movie
search = ia.search_movie(name)
 
# printing whole list
print(search)
 
# printing the movies
for i in range(len(search)):
    print(search[i]['title'])
from PyMovieDb import IMDB
imdb = IMDB() 
res = imdb.get_by_id("tt6161168")
data = json.loads(res)

# Extract the poster URL
poster_url = data.get('poster')
print(poster_url)
import requests
from PIL import Image
from io import BytesIO

# URL of the poster image
poster_url = "https://m.media-amazon.com/images/M/MV5BMjMyZDY5NTctMzQ0Ny00ZTU0LWE1ZDYtNDYzMjAxYjA1ZGYxXkEyXkFqcGdeQXVyNTgyNTA4MjM@._V1_.jpg"

# Send a GET request to the URL
response = requests.get(poster_url)

# Check if the request was successful
if response.status_code == 200:
    # Open the image from the response content
    image = Image.open(BytesIO(response.content))
    # Save the image locally
    image.save("Red_Dead_Redemption_II_poster.jpg")
    print("Poster image has been downloaded, resized to 225x225, and saved as 'Red_Dead_Redemption_II_poster.jpg'.")
else:
    print("Failed to retrieve the image. Status code:", response.status_code)
