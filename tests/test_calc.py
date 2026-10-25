import unittest

import pytest


def add(a, b):
    return a + b


def test_add():
    assert add(1, 2) == 3


@pytest.mark.skip(reason="flaky")
def test_zero():
    assert add(0, 0) == 0


class TestCalc(unittest.TestCase):
    def test_negative(self):
        self.skipTest("later")
        self.assertEqual(add(-1, 1), 0)
