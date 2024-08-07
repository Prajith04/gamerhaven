import requests, os
def get_last_word_from_search_result(query):
    search_url = f'https://en.wikipedia.org/w/api.php?action=opensearch&search={query}&limit=1&namespace=0&format=json'
    try:
        response = requests.get(search_url)
        response.raise_for_status()
        search_results = response.json()
        if search_results and len(search_results) > 3 and len(search_results[3]) > 0:
            url = search_results[3][0]
            last_word = url.split('/')[-1]
            return last_word
    except requests.RequestException as e:
        print(f"Error fetching search results for query '{query}': {e}")
    return None

# List of search queries
search_queries =  ['gtavi', 'gtav', 'gtaiv', 'readdeadredemption1', 'readdeadredemption2', 'maxpayne1']
results=[]
# Loop through each search query and get the last word from the first search result URL
for query in search_queries:
    result = get_last_word_from_search_result(query)
    if result:
        print(f"Search query: {query}, Last word in URL: {result}")
        results.append(result)
    else:
        print(f"No result found for search query: {query}")
print(results)
# set the folder name where images will be stored
my_folder = 'wiki_images'

# create the folder in the current working directory
# in which to store the downloaded images
os.makedirs(my_folder, exist_ok=True)

# front part of each Wikipedia URL
base_url = 'https://en.wikipedia.org/wiki/'

# partial URLs for each desired Wikipedia page
# my_list = ['Anaea_troglodyta',
#     'Colias_eurytheme',
#     'Euphilotes_battoides',
#     'Great_spangled_fritillary',
#     'Papilio_troilus']
my_list=results
# Wikipedia API query string to get the main image on a page
# (partial URL will be added to the end)
query = 'http://en.wikipedia.org/w/api.php?action=query&prop=pageimages&format=json&piprop=original&titles='

# get JSON data w/ API and extract image URL
def get_image_url(partial_url):
    try:
        api_res = requests.get(query + partial_url).json()
        first_part = api_res['query']['pages']
        # this is a way around not knowing the article id number
        for key, value in first_part.items():
            if (value['original']['source']):
                data = value['original']['source']
                return data
    except Exception as exc:
        print(exc)
        print("Partial URL: " + partial_url)
        data = None
    return data

# download one image with URL obtained from API
def download_image(the_url, the_page):
    headers = {
        "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.124 Safari/537.36"
    }
    res = requests.get(the_url,headers=headers)
    res.raise_for_status()

    # get original file extension for image
    # by splitting on . and getting the final segment
    file_ext = '.' + the_url.split('.')[-1].lower()

    # save the image to folder - binary file - with desired filename
    image_file = open(os.path.join(my_folder, os.path.basename(the_page + file_ext)), 'wb')

    # download the image file 
    # HT to Automate the Boring Stuff with Python, chapter 12 
    for chunk in res.iter_content(100000):
        image_file.write(chunk)
    image_file.close()

# loop to download main image for each page in list
counter = 1
for the_page in my_list:
    # get JSON data and extract image URL
    the_url = get_image_url(the_page)
    # if the URL is not None ...
    if (the_url):
        # tell us where we are for the heck of it
        print("Downloading image " + str(counter))
        # download that image
        download_image(the_url, the_page)
    else:
        print("No image file for " + the_page)
    counter += 1

print("All done!")