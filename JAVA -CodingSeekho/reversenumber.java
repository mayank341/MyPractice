import java.util.*;
public class reversenumber {
    public static void main(String args[]){
        System.out.println("enter the input :");
        Scanner sc=new Scanner(System.in);
        int n=sc.nextInt();
           int r=0;
        while(n>0){
         
            int b=n%10;
        r=r*10+b;
        n=n/10;


        }
         System.out.println("palindrome number of input is:"+r);

          System.out.println("palindrome number of input is:"+r);
       
       

        
    
        }
    }
    

