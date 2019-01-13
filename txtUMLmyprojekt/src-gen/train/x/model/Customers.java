package train.x.model;

import hu.elte.txtuml.api.model.From;
import hu.elte.txtuml.api.model.ModelClass;
import hu.elte.txtuml.api.model.StateMachine;
import hu.elte.txtuml.api.model.To;
import hu.elte.txtuml.api.model.Trigger;
import train.x.model.GetFood;
import train.x.model.GetMenu;
import train.x.model.Leaving;
import train.x.model.LightOff;
import train.x.model.Sit;
import train.x.model.SwitchLight;

@SuppressWarnings("all")
public class Customers extends ModelClass {
  public class Init extends StateMachine.Initial {
  }
  
  /**
   * state Dark;
   * state Light;
   */
  public class Pay extends StateMachine.State {
  }
  
  int price;
  
  public class Waiting extends StateMachine.State {
  }
  
  public class Order extends StateMachine.State {
  }
  
  public class Eating extends StateMachine.State {
  }
  
  public class CloseDoor extends StateMachine.State {
  }
  
  public class OpenDoor extends StateMachine.State {
  }
  
  public class StartSelection_OrderPizza extends StateMachine.State {
  }
  
  public class StartSelection extends StateMachine.Choice {
  }
  
  @From(Customers.Init.class)
  @To(Customers.Waiting.class)
  public class Init_Customer extends StateMachine.Transition {
  }
  
  @From(Customers.Waiting.class)
  @To(Customers.StartSelection.class)
  @Trigger(GetMenu.class)
  public class Waiting_Waiter extends StateMachine.Transition {
  }
  
  @From(Customers.StartSelection.class)
  @To(Customers.Order.class)
  public class StartSelection_OrderPizza1 extends StateMachine.Transition {
    @Override
    public boolean guard() {
      return (Customers.this.price >= 900);
    }
  }
  
  @From(Customers.OpenDoor.class)
  @To(Customers.Waiting.class)
  @Trigger(Sit.class)
  public class Customer_OpenDoor extends StateMachine.Transition {
  }
  
  @From(Customers.Order.class)
  @To(Customers.Pay.class)
  @Trigger(SwitchLight.class)
  public class Open_Close extends StateMachine.Transition {
  }
  
  @From(Customers.Pay.class)
  @To(Customers.Order.class)
  @Trigger(SwitchLight.class)
  public class Fizet_Rendel extends StateMachine.Transition {
  }
  
  @From(Customers.Order.class)
  @To(Customers.Pay.class)
  @Trigger(LightOff.class)
  public class Fizet_Rendel2 extends StateMachine.Transition {
  }
  
  @From(Customers.Pay.class)
  @To(Customers.Eating.class)
  @Trigger(GetFood.class)
  public class Eating_Food1 extends StateMachine.Transition {
  }
  
  @From(Customers.Eating.class)
  @To(Customers.CloseDoor.class)
  @Trigger(Leaving.class)
  public class Left_Restuarant extends StateMachine.Transition {
  }
}
