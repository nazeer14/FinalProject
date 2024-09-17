public class ClassA {
    int meth1()
    {
        System.out.println("Start");
        System.out.println("meth1() called");
        return new ClassA().meth2("java",10);
    }
    int meth2(String s,int a)
    {
        System.out.println("meth2() called");
        System.out.println(s);
        return (5*5)+a;
    }
    public static void main(String[] args) {
        ClassA obj= new ClassA(); 
        int value=obj.meth1();
        System.out.println(value);
        System.out.println("END");    
    }
}
