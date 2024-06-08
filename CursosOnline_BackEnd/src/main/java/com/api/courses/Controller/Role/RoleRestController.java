package com.api.courses.Controller.Role;

import com.api.courses.Model.Entity.Role.RoleEntity;
import com.api.courses.Service.Role.IRoleService;
import jakarta.validation.Valid;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.validation.BindingResult;
import org.springframework.web.bind.annotation.*;

import java.util.HashMap;
import java.util.List;
import java.util.Map;
import java.util.Optional;

@RestController
@RequestMapping("/api/roles")
public class RoleRestController {

    @Autowired
    private IRoleService roleService;

    @GetMapping("/all")
    public ResponseEntity<List<RoleEntity>> findAllRole(){
        return ResponseEntity.ok().body(roleService.findAllRoles());
    }

    @GetMapping("/{id}")
    public ResponseEntity<Optional<RoleEntity>> findRoleById(@PathVariable Long id){
        return ResponseEntity.ok().body(roleService.findRoleById(id));
    }

    @PostMapping("/save")
    public ResponseEntity<?> saveRole(@Valid @RequestBody RoleEntity role, BindingResult result){
        if(result.hasErrors()) {
            return this.validate(result);
        }
        return ResponseEntity.status(HttpStatus.CREATED).body(roleService.saveRole(role));
    }

    @DeleteMapping("/delete/{id}")
    public ResponseEntity<?> deteleRole(@PathVariable Long id){
        boolean isDeleted = roleService.deteleRoleById(id);
        if(isDeleted){
            return ResponseEntity.noContent().build();
        }
        return ResponseEntity.notFound().build();
    }

    protected ResponseEntity<?> validate(BindingResult result){
        Map<String, Object> errores = new HashMap<>();
        result.getFieldErrors().forEach(err -> {
            errores.put(err.getField(),"El campo "+err.getField()+" "+err.getDefaultMessage());
        });
        return ResponseEntity.badRequest().body(errores);
    }

}
