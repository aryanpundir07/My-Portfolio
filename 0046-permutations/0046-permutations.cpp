class Solution {
public:

    void getPerm(vector<int>& nums,int idx,vector<vector<int>> &ans)
    {
        int n=nums.size();
        if(idx==n)
        {
            ans.push_back({nums});
            return;
        }

        for(int i=idx;i<n;i++)
        {
            swap(nums[idx],nums[i]);
            getPerm(nums,idx+1,ans);

            swap(nums[idx],nums[i]);
        }
    }

    vector<vector<int>> permute(vector<int>& nums) 
    {
        vector<vector<int>> ans;
        getPerm(nums,0,ans);
        return ans;
    }
};