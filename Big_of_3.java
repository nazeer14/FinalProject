import java.util.Scanner;
public class Big_of_3 
{
    public static void main(String args[])
    {
        int x,y,z;
        Scanner mn=new Scanner(System.in);
        System.out.print("Enter x value:");
        x=mn.nextInt();
        System.out.print("Enter y value:");
        y=mn.nextInt();
        System.out.print("Enter z value:");
        z=mn.nextInt();
        if(x!=y&&y!=z&&z!=x){
            if(x>y&&x>z)
                System.out.print("x is big:"+x);
            else if(y>x && y>z)
                System.out.print("y is big:"+y);
            else if(z>x && z>y)
                System.out.print("z is big :"+z);
        }  
        else if(x==y&&y==z&&x==z)
            System.out.print("a,b,c are equal"); 
        else if(x==y&&x>z)
            System.out.print("x,y are big ");
        else if(y==z&&y>x)
            System.out.print("y,z are big");
        else if(z==x&&z>y)
            System.out.print("x,z are big");
   
        mn.close();
    }
}
