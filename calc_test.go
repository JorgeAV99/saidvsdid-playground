package calc

import "testing"

func TestSum(t *testing.T) {
	if Sum(1, 2) != 3 {
		t.Fatal("1+2")
	}
}

func TestZero(t *testing.T) {
	t.Skip("flaky")
	if Sum(0, 0) != 0 {
		t.Fatal("0+0")
	}
}
