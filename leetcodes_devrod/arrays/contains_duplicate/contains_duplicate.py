def contains_duplicate(arr):
    return len(arr) != len(set(arr))
contains_duplicate([1, 2, 3, 4, 5]) 
contains_duplicate([1, 2, 3, 4, 5, 1])