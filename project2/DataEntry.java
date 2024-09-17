// DataEntry.java
import java.sql.Connection;
import java.sql.PreparedStatement;
import java.sql.SQLException;

public class DataEntry {
    private Connection connection;

    public DataEntry(Connection connection) {
        this.connection = connection;
    }

    public void insertData(String name, String email) {
        String sql = "INSERT INTO user_data (name, email) VALUES (?, ?)";
        try (PreparedStatement statement = connection.prepareStatement(sql)) {
            statement.setString(1, name);
            statement.setString(2, email);
            statement.executeUpdate();
        } catch (SQLException e) {
            e.printStackTrace();
        }
    }
}
