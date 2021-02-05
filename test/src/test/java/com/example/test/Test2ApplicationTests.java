package com.example.test;

import static org.junit.jupiter.api.Assertions.fail;  
import static org.springframework.test.web.servlet.result.MockMvcResultHandlers.log;

import java.sql.DriverManager;

import org.junit.jupiter.api.Test;
import org.springframework.boot.test.context.SpringBootTest;


import jdk.internal.org.jline.utils.Log;
import lombok.extern.log4j.Log4j;

@SpringBootTest
@Log4j
class Test2ApplicationTests {

	static {
		try {
			Class.forName("com.mysql.cj.jdbc.Driver");
		} catch (Exception e) {
			e.printStackTrace();
		}
	}
	
	
	@Test
	public void testConnectionMySQL() {
		
		try (java.sql.Connection con =
			 DriverManager.getConnection("jdbc:mysql://127.0.0.1:3306/test?useSSL=false&serverTimezone=Asia/Seoul",
					 "root","1234")) {
			Log.info(con);
		} catch (Exception e) {
			fail(e.getMessage());
		}		
	}
	


}
