package train.x.model;

import hu.elte.txtuml.api.model.Association;
import hu.elte.txtuml.api.model.One;
import train.x.model.Customers;
import train.x.model.Pizza;

@SuppressWarnings("all")
public class CUST extends Association {
  public class c extends Association.End<One<Customers>> {
  }
  
  public class or extends Association.End<One<Pizza>> {
  }
}
