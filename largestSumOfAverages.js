
We partition a row of numbers A into at most K adjacent (non-empty) groups, then our score is the sum of the average of each group. What is the largest score we can achieve?

Note that our partition must use every number in A, and that scores are not necessarily integers.

Example:
Input:
A = [9,1,2,3,9]
K = 3
Output: 20
Explanation:
The best choice is to partition A into [9], [1, 2, 3], [9]. The answer is 9 + (1 + 2 + 3) / 3 + 9 = 20.
We could have also partitioned A into [9, 1], [2], [3, 9], for example.
That partition would lead to a score of 5 + 2 + 6 = 13, which is worse.


Approach #1: Dynamic Programming [Accepted]
Intuition

The best score partitioning A[i:] into at most K parts depends on answers to paritioning A[j:] (j > i) into less parts. We can use dynamic programming as the states form a directed acyclic graph.

Algorithm

Let dp(i, k) be the best score partioning A[i:] into at most K parts.

If the first group we partition A[i:] into ends before j, then our candidate partition has score average(i, j) + dp(j, k-1)), where average(i, j) = (A[i] + A[i+1] + ... + A[j-1]) / (j - i) (floating point division). We take the highest score of these, keeping in mind we don't necessarily need to partition - dp(i, k) can also be just average(i, N).

In total, our recursion in the general case is dp(i, k) = max(average(i, N), max_{j > i}(average(i, j) + dp(j, k-1))).

We can calculate average a little bit faster by remembering prefix sums. If P[x+1] = A[0] + A[1] + ... + A[x], then average(i, j) = (P[j] - P[i]) / (j - i).

Our implementation showcases a "bottom-up" style of dp. Here at loop number k in our outer-most loop, dp[i] represents dp(i, k) from the discussion above, and we are calculating the next layer dp(i, k+1). The end of our second loop for i = 0..N-1 represents finishing the calculation of the correct value for dp(i, t), and the inner-most loop performs the calculation max_{j > i}(average(i, j) + dp(j, k)).



class Solution(object):
    def largestSumOfAverages(self, A, K):
        P = [0]
        for x in A: P.append(P[-1] + x)
        def average(i, j):
            return (P[j] - P[i]) / float(j - i)

        N = len(A)
        dp = [average(i, N) for i in xrange(N)]
        for k in xrange(K-1):
            for i in xrange(N):
                for j in xrange(i+1, N):
                    dp[i] = max(dp[i], average(i, j) + dp[j])

        return dp[0]
