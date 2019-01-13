package train.x.model;

import hu.elte.txtuml.api.model.Association;
import hu.elte.txtuml.api.model.One;
import train.x.model.Customers;
import train.x.model.Orders;

@SuppressWarnings("all")
public class GM extends Association {
  public class g extends Association.End<One<Customers>> {
  }
  
  public class N extends Association.End<One<Orders>> {
  }
}
