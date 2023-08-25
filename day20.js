function minimumPathSumInTriangle(triangle) {
    const n = triangle.length;
    
    // Create a copy of the triangle to store the dynamic programming results
    const dp = new Array(n);
    for (let i = 0; i < n; i++) {
      dp[i] = new Array(triangle[i].length);
    }
    
    // Initialize the bottom row of dp with the values from the last row of the triangle
    for (let i = 0; i < triangle[n - 1].length; i++) {
      dp[n - 1][i] = triangle[n - 1][i];
    }
    
    // Build the dp table from bottom to top
    for (let i = n - 2; i >= 0; i--) {
      for (let j = 0; j < triangle[i].length; j++) {
        // The minimum path sum at dp[i][j] is the value at triangle[i][j] plus the minimum of the two adjacent values in the next row
        dp[i][j] = triangle[i][j] + Math.min(dp[i + 1][j], dp[i + 1][j + 1]);
      }
    }
    
    return dp[0][0];
  }
  
  const triangle = [
    [2],
    [3, 4],
    [6, 5, 7],
    [4, 1, 8, 3]
  ];
  console.log(minimumPathSumInTriangle(triangle)); // Output: 11
  