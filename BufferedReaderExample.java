import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStreamReader;
public class BufferedReaderExample {
    public static void main(String[] args) throws IOException {
        BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
        System.out.print("Enter a string: ");
        int c = br.read();
        System.out.println("ASCII value entered: " + c);
        System.out.println("Character entered: " + (char)c);      
        br.close();
    }
}