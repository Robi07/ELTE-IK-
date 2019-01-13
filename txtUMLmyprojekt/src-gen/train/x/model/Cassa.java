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
public class Cassa extends ModelClass {
  public class Init extends StateMachine.Initial {
  }
  
  /**
   * state Dark;
   * state Light;
   */
  public class Open extends StateMachine.State {
  }
  
  public class Close extends StateMachine.State {
  }
  
  @From(Cassa.Init.class)
  @To(Cassa.Open.class)
  public class Init_Open extends StateMachine.Transition {
  }
  
  @From(Cassa.Open.class)
  @To(Cassa.Close.class)
  @Trigger(SwitchLight.class)
  public class Open_Close extends StateMachine.Transition {
  }
  
  @From(Cassa.Close.class)
  @To(Cassa.Open.class)
  @Trigger(SwitchLight.class)
  public class Close_Open extends StateMachine.Transition {
  }
  
  @From(Cassa.Close.class)
  @To(Cassa.Open.class)
  @Trigger(LightOff.class)
  public class Close_Open2 extends StateMachine.Transition {
  }
}
