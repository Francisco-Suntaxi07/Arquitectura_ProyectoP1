package com.api.courses.Controller.Creator;

import com.api.courses.Model.Entity.Creator.CreatorEntity;
import com.api.courses.Model.Entity.User.UserEntity;
import com.api.courses.Service.Creator.ICreatorService;
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
@RequestMapping("/api/creators")
public class CreatorRestController {

    @Autowired
    private ICreatorService creatorService;

    @GetMapping("/all")
    public ResponseEntity<List<CreatorEntity>> findAllCreators(){
        return ResponseEntity.ok().body(creatorService.findAllCreators());
    }

    @GetMapping("/{id}")
    public ResponseEntity<Optional<CreatorEntity>> findCreatorById(@PathVariable String id){
        return ResponseEntity.ok().body(creatorService.findCreatorById(id));
    }

    @PostMapping("/save")
    public ResponseEntity<?> saveCreator(@Valid @RequestBody CreatorEntity creator, BindingResult result){
        if(result.hasErrors()){
            return this.validate(result);
        }
        return ResponseEntity.status(HttpStatus.CREATED).body(creatorService.saveCreator(creator));
    }

    @DeleteMapping("/delete/{id}")
    public ResponseEntity<?> deleteCreatorById(@PathVariable String id){
        boolean isDeleted = creatorService.deleteCreatorById(id);
        if(isDeleted){
            return ResponseEntity.noContent().build();
        }
        return  ResponseEntity.notFound().build();
    }

    @GetMapping("/disable")
    public ResponseEntity<List<CreatorEntity>> findAllDisableCreators(){
        return ResponseEntity.ok().body(creatorService.findAllDisableCreators());
    }
    @PostMapping("/login")
    public ResponseEntity<?> login(@RequestBody CreatorEntity creator) {
        Optional<CreatorEntity> foundCreator = creatorService.findByEmailAndPassword(creator.getEmail(), creator.getPassword());
        if (foundCreator.isPresent()) {
            Map<String, String> response = new HashMap<>();
            response.put("id", foundCreator.get().getId());
            response.put("name", foundCreator.get().getName());
            response.put("role", foundCreator.get().getRole());
            response.put("status", foundCreator.get().getStatusAccount().toString());
            response.put("numberCourses", String.valueOf(foundCreator.get().getNumberCourses()));
            return ResponseEntity.ok().body(response);
        } else {
            return ResponseEntity.status(HttpStatus.UNAUTHORIZED).body("Invalid credentials");
        }
    }

    @PatchMapping("/updateCourses/{id}")
    public ResponseEntity<Optional<CreatorEntity>> updateNumberCourses(@PathVariable String id, @RequestBody int numberCourses){
        Optional<CreatorEntity> response = creatorService.updateNumberCourses(id,numberCourses);
        if (response.isPresent()){
            return ResponseEntity.noContent().build();
        }
        return  ResponseEntity.notFound().build();
    }

    protected ResponseEntity<?> validate(BindingResult result){
        Map<String, Object> errores = new HashMap<>();
        result.getFieldErrors().forEach(err -> {
            errores.put(err.getField(),"El campo "+err.getField()+" "+err.getDefaultMessage());
        });
        return ResponseEntity.badRequest().body(errores);
    }

}
