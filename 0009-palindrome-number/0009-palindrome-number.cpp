class Solution {
public:
    bool isPalindrome(int n) 
    {
        int revNum=0;
        int copy=n;
        if(n<0)
        {
            return false;
        }
        while(n!=0)
        {
            int digit=n%10;
            if(revNum<INT_MIN/10 || revNum>INT_MAX/10)
            {
                return false;
            }
            revNum=revNum*10+digit;
            n=n/10;
        }

        if(revNum==copy)
        {
            return true;
        }
        else
        {
            return false;
        }
    }
};