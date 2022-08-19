import java.sql.*;

public class pruebamql {
    public static void main(String[] args) {
        try {
            Connection conn= DriverManager.getConnection("jdbc:mysql://localhost:3306/practicas_2","root","" );
       PreparedStatement prepatre=conn.prepareStatement("Select *from alumnos;");
       ResultSet resul=prepatre.executeQuery();
       while (resul.next()){
           System.out.println(resul.getString("Nombre"));
       }
        } catch (SQLException e) {
            throw new RuntimeException(e);
        }
    }
}
