from cgi import test
from os.path import exists
import warnings

from main import device


device1 = device.Device(name="Keven DeOliveira", weight="190", temperature="98.5")
device2 = device.Device()
device3 = device.Device(name="Ryan White")


# use '-s' flag to view STDOUT/STDERR
def test_device():
    device1.upload()
    assert exists('data.txt')
    device3.upload()


with warnings.catch_warnings(record=True) as w:
    warnings.simplefilter("always")

    # trigger waring
    device2.upload()
    assert len(w) == 1
    assert issubclass(w[-1].category, UserWarning)
    assert "Upload Aborted: all fields empty" in str(w[-1].message)
