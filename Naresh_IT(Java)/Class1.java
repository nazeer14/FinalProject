public class Class1 {
    int meth1()
    {
    System.out.println("meth1 called");
    return 5*5; 

    }
    public static void main(String[] args) {
        Class1 obj=new Class1();
        obj.meth1();
        System.out.println(obj.meth1());
    }
    
}
