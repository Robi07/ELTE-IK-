package train.x.model;

import hu.elte.txtuml.api.model.Association;
import hu.elte.txtuml.api.model.One;
import train.x.model.Orders;
import train.x.model.Pizza;

@SuppressWarnings("all")
public class PZ extends Association {
  public class p extends Association.End<One<Pizza>> {
  }
  
  public class or extends Association.End<One<Orders>> {
  }
}
