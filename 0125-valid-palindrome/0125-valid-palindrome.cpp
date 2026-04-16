class Solution {
public:
bool isAlphaNum(char ch)
{
    if(ch>='0' && ch<='9' || tolower(ch)>='a' && tolower(ch)<='z')
    {
        return true;
    }
    return false;
}

    bool isPalindrome(string str) 
    {
        int st=0;
    int end=str.length()-1;

    while(st<=end)
    {
        if(!isAlphaNum(str[st]))
        {
            st++;
            continue;
        }

        if(!isAlphaNum(str[end]))
        {
            end--;
            continue;
        }

        if(tolower(str[st])!=tolower(str[end]))
        {
            return false;
        }
        st++;
        end--;
    }
    return true;
    }
};