// DatabaseConnection.java
import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.SQLException;

public class DatabaseConnection {
    private final String url = "jdbc:mysql://localhost:3306/your_database";
    private final String user = "your_username";
    private final String password = "your_password";

    public Connection getConnection() throws SQLException {
        return DriverManager.getConnection(url, user, password);
    }
}
