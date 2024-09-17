import java.util.Scanner;
 
class Maximum{
    static int biggestOfThree(int x, int y, int z)
    {
        if (x >= y && x >= z)
            return x;
        else if (y >= x && y >= z)
            return y;
        else
            return z;
    }
    public static void main(String[] args)
    {
        int a, b, c, largest;
        Scanner l=new Scanner(System.in);
        System.out.print("Enter the values:");
        a=l.nextInt();
        b=l.nextInt();
        c=l.nextInt();
        largest = biggestOfThree(a, b, c);
        System.out.print(largest+ " is the largest number.");
        return;
    }
}