function countDistinctSubsequences(arr, target) {
  const n = arr.length;
  const dp = new Array(target + 1).fill(0);
  dp[0] = 1;

  for (let i = 0; i < n; i++) {
    for (let j = target; j >= arr[i]; j--) {
      dp[j] += dp[j - arr[i]];
    }
  }

  return dp[target];
}
module.exports = countDistinctSubsequences;
