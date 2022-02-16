import json


def process_data(data):
    data_copy = data.copy()

    for key in data_copy.keys():
        if not data_copy[key]:
            data_copy[key] = " "

    dataJSON = json.dumps(data_copy)
    
    try:
        with open("test.txt", 'w+') as f:
            f.write(dataJSON)
            f.close()
    except OSError:
        print("Error")
