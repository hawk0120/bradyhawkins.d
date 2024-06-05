# Leetcode Strategies: Two Pointer

Whether you love them or hate them, Leetcode problems are an undenialable reality of the software engineering hiring journey. In this post, I want to tackle some different strategies that I use to solve them. This is going to kickoff a series of posts of this topic.

My to tackling these problems approach is to get to a brute force solution first and then refine using the langauge API (see Java streams or RxJS in javascript). We will tackle both in the series. 

## Two Pointer

When solving problems with sorted arrays that require specific constraints with a limited set of elements, the two pointer technique is useful. It could be a pair, a triplet, or a subarray.

Take a look at the porblem Two Sum.

```
Given an array of sorted numers and a target sum, find a pair in the array whose sum is equal to the given target.
```

To solve this, the brute force technique would be to use two nested loops and check all the possible pairings to find the one whose sum is equal to the target value. This would be slow (Time Complexity of <em>O(N^2)</em>. A better way to do this is assume that the input array is sorted, with the first pointer at the beginning and the second pointer at the end.

At each step, you will see if the numbers pointed by the two pointers add up to the target sum. If so, then return the two values pointed out. Otherwise:
<ul>
<li>If the sum of the two numbers pointed by the two pointer is greater than the target, you need a pair that with a smaller sum. Try moving the second pointer to the left side of the array. </li>
<li> If the sum of the two numbers pointed to is smaller than the target, move the first pointer up</li>
</ul>
The two pointers technique has decreased the time complexity of the approach to <em>O(N)</em>. It is a more efficient approach to finding a pair with the target sum in an array.

For the sake of consistency, all examples will be implemented in Java. 
```Java
public boolean twoSum(int[] input, int targetValue) {

    int pointerOne = 0;
    int pointerTwo = input.length - 1;

    while (pointerOne < pointerTwo) {
        int sum = input[pointerOne] + input[pointerTwo];

        if (sum == targetValue) {
            return true;
        } else if (sum < targetValue) {
            pointerOne++;
        } else {
            pointerTwo--;
        }
    }

    return false;
}
```

Okay, we have our solution. I'm sure you could write this in fewer lines of code but I this straight forward to read and implement.  
