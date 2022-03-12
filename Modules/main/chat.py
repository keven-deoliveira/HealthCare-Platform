import warnings
import json
import os


class Chat():
    def __init__(self, sender=None, receiver=None, message=""):
        if sender == None:
            raise ValueError("Sender cannot be None")
        
        if receiver == None:
            raise ValueError("Receiver cannot be None")
        
        self.sender = sender
        self.receiver = receiver
        self.message = message
    
    def __makeDict(self):
        return {
            'Sender': self.sender,
            'Receiver': self.receiver,
            'Message': self.message,
            }

    def upload(self):
        chat = self.__makeDict()

        # Prevents empty messages from being sent
        if (not chat['Message']) or chat['Message'].isspace():
            warnings.simplefilter('default')
            warnings.warn("Upload Aborted: message empty")
            return
        
        # create JSON structure
        chatJSON = json.dumps(chat)

        try:
            file_is_empty = (os.path.exists('chat.txt') and os.stat('chat.txt').st_size == 0)
            with open('chat.txt', 'a+') as f:
                if not file_is_empty:
                    f.write('\n')
                    f.write(chatJSON)
                else:
                    f.write(chatJSON)
                f.close()
        except OSError:
            print("ERROR: File failed to open")
    
    # debugging print method
    def print(self):
        print(
            'Sender: ' + str(self.sender) + '\n' +
            'Receiver: ' + str(self.receiver) + '\n' +
            'Message: ' + str(self.message)
        )
