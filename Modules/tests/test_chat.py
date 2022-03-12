from os.path import exists
import warnings
import pytest

from main import chat

chat1 = chat.Chat(sender='Keven', receiver='Ryan', message='Hello')
chat2 = chat.Chat(sender='Ryan', receiver='Keven', message='Hey')

chat3 = chat.Chat(sender='Keven', receiver='Ryan')
chat4 = chat.Chat(sender='Keven', receiver='Ryan', message=' ')
chat5 = chat.Chat(sender='Keven', receiver='Ryan', message='      \n     \n \t      ')


# use '-s' flag to view STDOUT/STDERR
def test_chat():
    chat1.upload()
    assert exists('data.txt')
    chat2.upload()


##########################################
##### CHECK THAT WARNINGS ARE RAISED #####
##########################################

with warnings.catch_warnings(record=True) as w:
    warnings.simplefilter("always")

    # trigger waring
    chat3.upload()
    assert len(w) == 1
    assert issubclass(w[-1].category, UserWarning)
    assert "Upload Aborted: message empty" in str(w[-1].message)


with warnings.catch_warnings(record=True) as w:
    warnings.simplefilter("always")

    # trigger waring
    chat4.upload()
    assert len(w) == 1
    assert issubclass(w[-1].category, UserWarning)
    assert "Upload Aborted: message empty" in str(w[-1].message)


with warnings.catch_warnings(record=True) as w:
    warnings.simplefilter("always")

    # trigger waring
    chat5.upload()
    assert len(w) == 1
    assert issubclass(w[-1].category, UserWarning)
    assert "Upload Aborted: message empty" in str(w[-1].message)

##########################################


##########################################
##### CHECK THAT ERRORS ARE RAISED #####
##########################################

def test_fails():
    with pytest.raises(ValueError):
        chat6 = chat.Chat(sender='Keven', message='Hello')

def test_fails_again():
    with pytest.raises(ValueError):
        chat7 = chat.Chat(receiver='Ryan', message='Hello')

##########################################