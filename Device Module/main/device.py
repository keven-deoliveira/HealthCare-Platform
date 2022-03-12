import warnings
import json
import os


class Device:
    def __init__(self, name=None, temperature=None, bp=None, pulse=None, oximeter=None, weight=None, glucose=None):
        self.name = name
        self.temperature = temperature
        self.bp = bp
        self.pulse = pulse
        self.oximeter = oximeter
        self.weight = weight
        self.glucose = glucose

    def __makeDict(self):
        return {
                'Name': self.name,
                'Temperature': self.temperature,
                'Blood Pressure': self.bp,
                'Pulse': self.pulse,
                'Oximeter': self.oximeter,
                'Weight': self.weight,
                'Glucose': self.glucose,
                }
    
    def upload(self):
        data = self.__makeDict()

        # make null entries a blank space
        for key in data.keys():
            if not data[key]:
                data[key] = " "
        
        if all(value == " " for value in data.values()):
            warnings.simplefilter('default')
            warnings.warn("Upload Aborted: all fields empty")
            return
        
        # create JSON structure
        dataJSON = json.dumps(data)

        try:
            file_is_empty = (os.path.exists('data.txt') and os.stat('data.txt').st_size == 0)
            with open('data.txt', 'a+') as f:
                if not file_is_empty:
                    f.write('\n')
                    f.write(dataJSON)
                else:
                    f.write(dataJSON)
                f.close()
        except OSError:
            print("ERROR: File failed to open")
    
    # debugging print method
    def print(self):
        print(
            'Name: ' + str(self.name) + '\n' +
            'Temperature: ' + str(self.temperature) + '\n' +
            'Blood Pressure: ' + str(self.bp) + '\n' +
            'Pulse: ' + str(self.pulse) + '\n' +
            'Oximeter: ' + str(self.oximeter) + '\n' +
            'Weight: ' + str(self.weight) + '\n' +
            'Glucose: ' + str(self.glucose)
        )
