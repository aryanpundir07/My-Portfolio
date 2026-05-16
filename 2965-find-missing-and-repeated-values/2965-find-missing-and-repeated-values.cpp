class Solution {
public:
    vector<int> findMissingAndRepeatedValues(vector<vector<int>>& grid) 
    {
        int n=grid.size();
        unordered_set<int> s;
        vector<int> ans;
        int a;
        int b;

        int act_sum=0;
        int exp_sum=0;

        for(int i=0;i<n;i++)
        {
            for(int j=0;j<n;j++)
            {
                act_sum+=grid[i][j];

                if(s.find(grid[i][j])!=s.end())
                {
                    a=grid[i][j];
                    ans.push_back(a);
                }
                s.insert(grid[i][j]);
            }
        }
        exp_sum=(n*n)*(n*n + 1)/2;
        b=exp_sum+a-act_sum;
        ans.push_back(b);

        return ans;
    }
};