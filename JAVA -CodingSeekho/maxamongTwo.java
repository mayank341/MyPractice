import java.util.*;
public class maxamongTwo {
    public static void main(String args[]){
        System.out.println("enter the number :");
        Scanner sc=new Scanner(System.in);
        int a=sc.nextInt();
        System.out.println("enter the second number:");
        int b=sc.nextInt();

        if(a>b){
            System.out.println("first number is greater than second number ");
        }
        else if(a==b){
            System.out.println("first number  is equal to second number ");
        }
        else {
            System.out.println("second number is greater than first number");
        }
    }
    
}
