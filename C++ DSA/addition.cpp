#include<iostream>
using namespace std;
int main (){
    int x=10;
    int y=9;
    int result=x+y;
    int  sum=float(x+y);
    cout<<"implicit conversion:"<< result<<endl;
    cout<<"explicit conversion:"<<sum<<endl;
}