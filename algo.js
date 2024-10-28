// 239. Sliding Window Maximum



// You are given an array of integers nums, there is a sliding window of size k which is moving from the very left of the array to the very right. You can only see the k numbers in the window. Each time the sliding window moves right by one position.
// Return the max sliding window.








/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */

var maxSlidingWindow = function(nums, k) {
    const n = nums.length;
    const output = new Array(n - k + 1); // Output array to store the maximums for each window
    const q = []; // Deque to store indices of useful elements for the current window
    let l = 0; // Left pointer
    let r = 0; // Right pointer

    while (r < n) {
        // While the queue is not empty and the last number pushed into the queue is less than the current number at right, remove the last number
        while (q.length > 0 && nums[q[q.length - 1]] < nums[r]) {
            q.pop(); // Remove indices of elements less than the current element
        }

        // Push the index of the right number
        q.push(r);

        // If the left index is greater than the first number's index in the queue, remove the first number
        // (if the first number in the queue is now outside the window)
        if (l > q[0]) {
            q.shift(); // Remove the index that is out of the current window
        }

        // If right + 1 is greater than or equal to k, slide the window forward
        if (r + 1 >= k) {
            output[l] = nums[q[0]]; // The first element in the queue is the maximum for the current window
            l++; // Move the left pointer forward
        }
        r++; // Move the right pointer forward
    }

    return output; // Return the array of maximums
};
