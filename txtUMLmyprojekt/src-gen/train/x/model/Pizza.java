package train.x.model;

import hu.elte.txtuml.api.model.From;
import hu.elte.txtuml.api.model.ModelClass;
import hu.elte.txtuml.api.model.StateMachine;
import hu.elte.txtuml.api.model.To;
import hu.elte.txtuml.api.model.Trigger;
import train.x.model.LightOff;
import train.x.model.SwitchLight;

/**
 * /
 */
@SuppressWarnings("all")
public class Pizza extends ModelClass {
  public class Init extends StateMachine.Initial {
  }
  
  public class Nyers extends StateMachine.State {
  }
  
  public class Sult extends StateMachine.State {
  }
  
  @From(Pizza.Init.class)
  @To(Pizza.Nyers.class)
  public class Init_Nyers extends StateMachine.Transition {
  }
  
  @From(Pizza.Nyers.class)
  @To(Pizza.Sult.class)
  @Trigger(SwitchLight.class)
  public class Nyers_Light extends StateMachine.Transition {
  }
  
  @From(Pizza.Sult.class)
  @To(Pizza.Nyers.class)
  @Trigger(SwitchLight.class)
  public class Light_Nyers extends StateMachine.Transition {
  }
  
  @From(Pizza.Sult.class)
  @To(Pizza.Nyers.class)
  @Trigger(LightOff.class)
  public class Light_Nyers2 extends StateMachine.Transition {
  }
}
