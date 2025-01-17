package tn.app.sec.repositories;

import jakarta.data.repository.CrudRepository;
import jakarta.data.repository.Repository;
import tn.app.sec.entities.Tenant;


@Repository
public interface TenantRepository extends CrudRepository<Tenant, String> {
    Tenant findByName(String name);
}
