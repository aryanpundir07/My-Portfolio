class Solution {
public:

    bool BS(vector<vector<int>>& mat, int target,int row)
    {
        int n=mat[0].size();

        int st=0;
        int end=n-1;

        while(st<=end)
        {
            int mid=st+(end-st)/2;

            if(target==mat[row][mid])
            {
                return true;
            }
            else if(target>mat[row][mid])
            {
                st=mid+1;
            }
            else
            {
                end=mid-1;
            }
        }
        return false;
    } 

    bool searchMatrix(vector<vector<int>>& mat, int target)
    {
        int m=mat.size();
        int n=mat[0].size();

        int sr=0;
        int er=m-1;

        while(sr<=er)
        {
            int mr=sr+(er-sr)/2;

            if(mat[mr][0]<=target && target<=mat[mr][n-1])
            {
                return BS(mat,target,mr);
            }
            else if(target>=mat[mr][n-1])
            {
                sr=mr+1;
            }
            else
            {
                er=mr-1;
            }
        }
        return false;
    }
};