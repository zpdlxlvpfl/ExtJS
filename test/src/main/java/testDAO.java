import java.sql.SQLException;
import java.util.List;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.stereotype.Repository;

@Repository
public class testDAO {
	
	@Autowired
	private JdbcTemplate sql;
	
public List<Map<String,Object>> getList() throws SQLException {
	String query = "";	
	return sql.queryForList(query);
	}

}
