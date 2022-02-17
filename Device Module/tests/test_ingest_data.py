from cgi import test
import json
from main import ingest_data
from os.path import exists

test_data = {
    'Temperature' : "97",
    'Blood Pressure' : "",
    'Pulse' : "",
    'Oximeter' : "",
    'Weight' : "186",
    'Glucometer' : "120",
    }

def test_ingest_data():
    ingest_data.process_data(test_data)
    assert exists('test.txt')

    file = open('test.txt', 'r')
    file_data = file.read()
    assert isinstance(file_data, str)
    dataJSON = json.loads(file_data)
    assert isinstance(dataJSON, dict)
    assert dataJSON['Blood Pressure'] != ""
    assert dataJSON['Temperature'] == "97"
    file.close()
