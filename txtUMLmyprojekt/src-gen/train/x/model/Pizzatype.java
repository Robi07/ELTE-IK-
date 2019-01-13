package train.x.model;

import hu.elte.txtuml.api.model.From;
import hu.elte.txtuml.api.model.ModelClass;
import hu.elte.txtuml.api.model.StateMachine;
import hu.elte.txtuml.api.model.To;
import hu.elte.txtuml.api.model.Trigger;
import train.x.model.SwitchLight;

/**
 * Pizzatype
 */
@SuppressWarnings("all")
public class Pizzatype extends ModelClass {
  public class Init extends StateMachine.Initial {
  }
  
  public class Szalamis extends StateMachine.State {
  }
  
  public class Sajtos extends StateMachine.State {
  }
  
  public class Husos extends StateMachine.State {
  }
  
  public class zoldseges extends StateMachine.State {
  }
  
  public class gombas extends StateMachine.State {
  }
  
  public class sonkas_sajtos extends StateMachine.State {
  }
  
  public class Nyers extends StateMachine.State {
  }
  
  @From(Pizzatype.Init.class)
  @To(Pizzatype.Nyers.class)
  public class Init_Nyers extends StateMachine.Transition {
  }
  
  @From(Pizzatype.Nyers.class)
  @To(Pizzatype.Szalamis.class)
  @Trigger(SwitchLight.class)
  public class Szalamis1 extends StateMachine.Transition {
  }
  
  @From(Pizzatype.Nyers.class)
  @To(Pizzatype.Sajtos.class)
  @Trigger(SwitchLight.class)
  public class Sajtos1 extends StateMachine.Transition {
  }
  
  @From(Pizzatype.Nyers.class)
  @To(Pizzatype.Husos.class)
  @Trigger(SwitchLight.class)
  public class Husos1 extends StateMachine.Transition {
  }
  
  @From(Pizzatype.Nyers.class)
  @To(Pizzatype.zoldseges.class)
  @Trigger(SwitchLight.class)
  public class Zoldseges1 extends StateMachine.Transition {
  }
  
  @From(Pizzatype.Nyers.class)
  @To(Pizzatype.gombas.class)
  @Trigger(SwitchLight.class)
  public class Gombas1 extends StateMachine.Transition {
  }
  
  @From(Pizzatype.Nyers.class)
  @To(Pizzatype.sonkas_sajtos.class)
  @Trigger(SwitchLight.class)
  public class Sonkas_Sajtos1 extends StateMachine.Transition {
  }
}
