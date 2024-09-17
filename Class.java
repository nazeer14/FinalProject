import java.util.Scanner;
class Child{
    Scanner read=new Scanner(System.in);
    int age=read.nextInt();
}
class Class extends Child {
    public static void main(String args[]){
        Child c1=new Child();
        if(c1.age>17)
            System.out.println("Eligible");   
        else
            System.out.println("not eligible");

    }    
}
