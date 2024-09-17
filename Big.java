import java.util.Scanner;
class Big{
    public static void main(String args[]){
    int a,b;
    Scanner input=new Scanner(System.in);
    System.out.println("Enter a value:");
    a=input.nextInt();
    System.out.println("Enter b value:");
    b=input.nextInt();
    if(a!=b)
    {
        if(a>b)
            System.out.println("a is maximum:"+a);
        else
            System.out.println("b is maximum:"+b); 
    }
    else {
        System.out.println("a,b are equal:"+a);
    }
    input.close();
    }
}

