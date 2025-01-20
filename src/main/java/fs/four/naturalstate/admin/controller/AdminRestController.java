package fs.four.naturalstate.admin.controller;

import fs.four.naturalstate.admin.service.AdminService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@RequestMapping("/api")
@CrossOrigin(origins = "http://localhost:3000")
public class AdminRestController {

    @Autowired
    private AdminService adminService;

    @GetMapping("/users")
    public ResponseEntity<List> getAllUsers() {
        try{
            List usersList = adminService.listUsers();
            return ResponseEntity.ok(usersList);
        } catch (Exception e) {
            return ResponseEntity.internalServerError().build();
        }
    }

    @GetMapping("/stores")
    public ResponseEntity<List> getAllStores() {
        try{
            List storesList = adminService.listStores();
            return ResponseEntity.ok(storesList);
        } catch (Exception e) {
            return ResponseEntity.internalServerError().build();
        }
    }

    @GetMapping("/excel/products")
    public ResponseEntity<List> getExcelProducts() {
        try {
            List productsExcelList = adminService.listSelectProducts();
            return ResponseEntity.ok(productsExcelList);
        } catch (Exception e) {
            return ResponseEntity.internalServerError().build();
        }
    }
}
