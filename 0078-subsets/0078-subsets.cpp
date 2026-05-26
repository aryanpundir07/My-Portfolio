class Solution {
public:

    void getallsubsets(vector<int>& nums,vector<int>& ans,int i,vector<vector<int>>& allSubsets)
    {
        if(i==nums.size())
        {
            allSubsets.push_back({ans});
            return;
        }

        ans.push_back(nums[i]);
        getallsubsets(nums,ans,i+1,allSubsets);

        ans.pop_back();

        getallsubsets(nums,ans,i+1,allSubsets);
    }

    vector<vector<int>> subsets(vector<int>& nums) 
    {
        vector<int> ans;
        vector<vector<int>> allSubsets;

        getallsubsets(nums,ans,0,allSubsets);

        return allSubsets;
    }
};