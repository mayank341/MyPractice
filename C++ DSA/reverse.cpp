#include<iostream>
using namespace std;

int main(){
    string str;
    cout<< "enter the string ";
    getline(cin,str);

    int n=str.length();
    for(int i=0;i<n/2;i++){
        swap(str[i],str[n-i-1]);
    }
    cout<<"reverse string is:"<< str<<endl;
    return 0;

}