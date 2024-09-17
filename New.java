import java.util.Scanner;
class N{
    Scanner input=new Scanner(System.in);
    String name=input.nextLine();
}
class New extends N
{
    public static void main(String args[])
    {

        Scanner read=new Scanner(System.in);
        System.out.println("enter the number:");
        int i=read.nextInt();
        System.out.println("enter the name:");
        N n1=new N();
        System.out.println(i+"  "+n1.name);
        read.close();
    }
}