import java.sql.SQLException;
import java.util.List;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class testservice {
	
	@Autowired
	private testDAO dao;
	
	public List<Map<String,Object>> getList() throws SQLException {
		return dao.getList();
	}

}
