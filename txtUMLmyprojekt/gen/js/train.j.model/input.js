var input = {
   "classDiagrams" : [ {
      "name" : "train.x.diagrams.XTrainClassDiagram",
      "classes" : [ {
         "position" : {
            "x" : 616,
            "y" : 0
         },
         "width" : 110,
         "height" : 88,
         "id" : "train.j.model.Order",
         "name" : "Order",
         "type" : "class",
         "attributes" : [ ],
         "operations" : [ {
            "visibility" : "public",
            "name" : "Order",
            "isStatic" : false,
            "isAbstract" : false,
            "args" : [ ]
         } ]
      }, {
         "position" : {
            "x" : 308,
            "y" : 220
         },
         "width" : 110,
         "height" : 88,
         "id" : "train.j.model.Pizza",
         "name" : "Pizza",
         "type" : "class",
         "attributes" : [ ],
         "operations" : [ {
            "visibility" : "public",
            "name" : "Pizza",
            "isStatic" : false,
            "isAbstract" : false,
            "args" : [ ]
         } ]
      }, {
         "position" : {
            "x" : 0,
            "y" : 0
         },
         "width" : 132,
         "height" : 88,
         "id" : "train.j.model.Customer",
         "name" : "Customer",
         "type" : "class",
         "attributes" : [ ],
         "operations" : [ {
            "visibility" : "public",
            "name" : "Customer",
            "isStatic" : false,
            "isAbstract" : false,
            "args" : [ ]
         } ]
      } ],
      "attributeLinks" : [ {
         "id" : "train.j.model.associations.CUST",
         "fromID" : "train.j.model.Order",
         "toID" : "train.j.model.Customer",
         "route" : [ {
            "x" : 374,
            "y" : 66
         } ],
         "type" : "normal",
         "from" : {
            "name" : "e",
            "multiplicity" : "1",
            "visibility" : "public",
            "navigable" : true,
            "composition" : false
         },
         "to" : {
            "name" : "g",
            "multiplicity" : "1",
            "visibility" : "public",
            "navigable" : true,
            "composition" : false
         },
         "name" : "CUST"
      }, {
         "id" : "train.j.model.associations.GM",
         "fromID" : "train.j.model.Pizza",
         "toID" : "train.j.model.Order",
         "route" : [ {
            "x" : 638,
            "y" : 242
         } ],
         "type" : "normal",
         "from" : {
            "name" : "g",
            "multiplicity" : "1",
            "visibility" : "public",
            "navigable" : true,
            "composition" : false
         },
         "to" : {
            "name" : "h",
            "multiplicity" : "1",
            "visibility" : "public",
            "navigable" : true,
            "composition" : false
         },
         "name" : "GM"
      }, {
         "id" : "train.j.model.associations.GL",
         "fromID" : "train.j.model.Customer",
         "toID" : "train.j.model.Pizza",
         "route" : [ {
            "x" : 110,
            "y" : 242
         } ],
         "type" : "normal",
         "from" : {
            "name" : "g",
            "multiplicity" : "1",
            "visibility" : "public",
            "navigable" : true,
            "composition" : false
         },
         "to" : {
            "name" : "l",
            "multiplicity" : "1",
            "visibility" : "public",
            "navigable" : true,
            "composition" : false
         },
         "name" : "GL"
      } ],
      "nonAttributeLinks" : [ ],
      "spacing" : 0.0
   } ],
   "stateMachines" : [ {
      "name" : "train.j.diagrams.PizzaServicesSMDiagram",
      "machineName" : "Pizza",
      "states" : [ {
         "id" : "train.j.model.Pizza.Nyers",
         "name" : "Nyers",
         "position" : {
            "x" : 0,
            "y" : 112
         },
         "width" : 77,
         "height" : 56
      }, {
         "id" : "train.j.model.Pizza.Sult",
         "name" : "Sult",
         "position" : {
            "x" : 176,
            "y" : 112
         },
         "width" : 66,
         "height" : 56
      } ],
      "pseudoStates" : [ {
         "id" : "train.j.model.Pizza.Init",
         "name" : "Init",
         "kind" : "initial",
         "position" : {
            "x" : 22,
            "y" : 0
         },
         "width" : 25,
         "height" : 25
      } ],
      "transitions" : [ {
         "id" : "train.j.model.Pizza.Light_Dark2",
         "fromID" : "train.j.model.Pizza.Sult",
         "toID" : "train.j.model.Pizza.Nyers",
         "trigger" : "LightOff",
         "route" : [ {
            "x" : 121,
            "y" : 120
         } ]
      }, {
         "id" : "train.j.model.Pizza.Nyers_Light",
         "fromID" : "train.j.model.Pizza.Nyers",
         "toID" : "train.j.model.Pizza.Nyers",
         "trigger" : "SwitchLight",
         "route" : [ {
            "x" : 55,
            "y" : 176
         }, {
            "x" : 33,
            "y" : 176
         } ]
      }, {
         "id" : "train.j.model.Pizza.Light_Dark",
         "fromID" : "train.j.model.Pizza.Nyers",
         "toID" : "train.j.model.Pizza.Sult",
         "trigger" : "SwitchLight",
         "route" : [ {
            "x" : 132,
            "y" : 136
         } ]
      }, {
         "id" : "train.j.model.Pizza.Init_Nyers",
         "fromID" : "train.j.model.Pizza.Init",
         "toID" : "train.j.model.Pizza.Nyers",
         "route" : [ {
            "x" : 33,
            "y" : 64
         } ]
      } ],
      "spacing" : 0.0
   }, {
      "name" : "train.j.diagrams.PizzaTypeSMDiagram",
      "machineName" : "Pizza",
      "states" : [ {
         "id" : "train.j.model.Pizza.Nyers",
         "name" : "Nyers",
         "position" : {
            "x" : 18,
            "y" : 132
         },
         "width" : 90,
         "height" : 60
      }, {
         "id" : "train.j.model.Pizzatype.Szalamis",
         "name" : "Szalamis",
         "position" : {
            "x" : 270,
            "y" : 132
         },
         "width" : 108,
         "height" : 60
      } ],
      "pseudoStates" : [ {
         "id" : "train.j.model.Pizza.Init",
         "name" : "Init",
         "kind" : "initial",
         "position" : {
            "x" : 54,
            "y" : 0
         },
         "width" : 25,
         "height" : 25
      } ],
      "transitions" : [ {
         "id" : "train.j.model.Pizza.Nyers_Light",
         "fromID" : "train.j.model.Pizza.Nyers",
         "toID" : "train.j.model.Pizza.Nyers",
         "trigger" : "SwitchLight",
         "route" : [ {
            "x" : 0,
            "y" : 168
         }, {
            "x" : 0,
            "y" : 144
         } ]
      }, {
         "id" : "train.j.model.Pizza.Init_Nyers",
         "fromID" : "train.j.model.Pizza.Init",
         "toID" : "train.j.model.Pizza.Nyers",
         "route" : [ {
            "x" : 72,
            "y" : 84
         } ]
      } ],
      "spacing" : 0.0
   }, {
      "name" : "train.j.diagrams.CustomersorderSMDiagram",
      "machineName" : "Pizza",
      "states" : [ {
         "id" : "train.j.model.Order.Waiting",
         "name" : "Waiting",
         "position" : {
            "x" : 460,
            "y" : 132
         },
         "width" : 92,
         "height" : 60
      }, {
         "id" : "train.j.model.Order.Eating_Food",
         "name" : "Eating_Food",
         "position" : {
            "x" : 851,
            "y" : 132
         },
         "width" : 138,
         "height" : 60
      }, {
         "id" : "train.j.model.Order.Left_Restaurant",
         "name" : "Left_Restaurant",
         "position" : {
            "x" : 0,
            "y" : 132
         },
         "width" : 184,
         "height" : 60
      } ],
      "pseudoStates" : [ {
         "id" : "train.j.model.Pizza.Init",
         "name" : "Init",
         "kind" : "initial",
         "position" : {
            "x" : 483,
            "y" : 0
         },
         "width" : 25,
         "height" : 25
      } ],
      "transitions" : [ {
         "id" : "train.j.model.Order.Order_Light",
         "fromID" : "train.j.model.Order.Waiting",
         "toID" : "train.j.model.Order.Eating_Food",
         "trigger" : "SwitchLight",
         "route" : [ {
            "x" : 713,
            "y" : 144
         } ]
      }, {
         "id" : "train.j.model.Order.Light_Dark2",
         "fromID" : "train.j.model.Order.Eating_Food",
         "toID" : "train.j.model.Order.Left_Restaurant",
         "trigger" : "LightOff",
         "route" : [ {
            "x" : 874,
            "y" : 204
         }, {
            "x" : 138,
            "y" : 204
         } ]
      } ],
      "spacing" : 0.0
   }, {
      "name" : "train.j.diagrams.CustomerPaySMDiagram",
      "machineName" : "Pizza",
      "states" : [ {
         "id" : "train.j.model.PizzaPay.Bankcard",
         "name" : "Bankcard",
         "position" : {
            "x" : 207,
            "y" : 110
         },
         "width" : 108,
         "height" : 50
      }, {
         "id" : "train.j.model.PizzaPay.KP",
         "name" : "KP",
         "position" : {
            "x" : 0,
            "y" : 110
         },
         "width" : 54,
         "height" : 50
      } ],
      "pseudoStates" : [ {
         "id" : "train.j.model.Pizza.Init",
         "name" : "Init",
         "kind" : "initial",
         "position" : {
            "x" : 18,
            "y" : 0
         },
         "width" : 25,
         "height" : 25
      } ],
      "transitions" : [ {
         "id" : "train.j.model.PizzaPay.KP_Light",
         "fromID" : "train.j.model.PizzaPay.KP",
         "toID" : "train.j.model.PizzaPay.KP",
         "trigger" : "SwitchLight",
         "route" : [ {
            "x" : 18,
            "y" : 100
         }, {
            "x" : 36,
            "y" : 100
         } ]
      }, {
         "id" : "train.j.model.PizzaPay.Light_Bankcard",
         "fromID" : "train.j.model.PizzaPay.KP",
         "toID" : "train.j.model.PizzaPay.Bankcard",
         "trigger" : "SwitchLight",
         "route" : [ {
            "x" : 135,
            "y" : 120
         } ]
      }, {
         "id" : "train.j.model.PizzaPay.Light_Bankcard1",
         "fromID" : "train.j.model.PizzaPay.Bankcard",
         "toID" : "train.j.model.PizzaPay.KP",
         "trigger" : "LightOff",
         "route" : [ {
            "x" : 126,
            "y" : 140
         } ]
      } ],
      "spacing" : 0.0
   }, {
      "name" : "train.x.diagrams.XPizzaSMDiagram",
      "machineName" : "Pizza",
      "states" : [ {
         "id" : "train.j.model.Pizza.Nyers",
         "name" : "Nyers",
         "position" : {
            "x" : 0,
            "y" : 112
         },
         "width" : 77,
         "height" : 56
      }, {
         "id" : "train.j.model.Pizza.Sult",
         "name" : "Sult",
         "position" : {
            "x" : 176,
            "y" : 112
         },
         "width" : 66,
         "height" : 56
      } ],
      "pseudoStates" : [ {
         "id" : "train.j.model.Pizza.Init",
         "name" : "Init",
         "kind" : "initial",
         "position" : {
            "x" : 22,
            "y" : 0
         },
         "width" : 25,
         "height" : 25
      } ],
      "transitions" : [ {
         "id" : "train.j.model.Pizza.Light_Dark2",
         "fromID" : "train.j.model.Pizza.Sult",
         "toID" : "train.j.model.Pizza.Nyers",
         "trigger" : "LightOff",
         "route" : [ {
            "x" : 121,
            "y" : 120
         } ]
      }, {
         "id" : "train.j.model.Pizza.Nyers_Light",
         "fromID" : "train.j.model.Pizza.Nyers",
         "toID" : "train.j.model.Pizza.Nyers",
         "trigger" : "SwitchLight",
         "route" : [ {
            "x" : 55,
            "y" : 176
         }, {
            "x" : 33,
            "y" : 176
         } ]
      }, {
         "id" : "train.j.model.Pizza.Light_Dark",
         "fromID" : "train.j.model.Pizza.Nyers",
         "toID" : "train.j.model.Pizza.Sult",
         "trigger" : "SwitchLight",
         "route" : [ {
            "x" : 132,
            "y" : 136
         } ]
      }, {
         "id" : "train.j.model.Pizza.Init_Nyers",
         "fromID" : "train.j.model.Pizza.Init",
         "toID" : "train.j.model.Pizza.Nyers",
         "route" : [ {
            "x" : 33,
            "y" : 64
         } ]
      } ],
      "spacing" : 0.0
   }, {
      "name" : "train.j.diagrams.PizzaOrderSMDiagram",
      "machineName" : "Pizza",
      "states" : [ {
         "id" : "train.j.model.Order.Waiting",
         "name" : "Waiting",
         "position" : {
            "x" : 420,
            "y" : 160
         },
         "width" : 120,
         "height" : 64
      }, {
         "id" : "train.j.model.Order.OpenDoor",
         "name" : "OpenDoor",
         "position" : {
            "x" : 0,
            "y" : 160
         },
         "width" : 120,
         "height" : 64
      }, {
         "id" : "train.j.model.Order.Left_Restaurant",
         "name" : "Left_Restaurant",
         "position" : {
            "x" : 810,
            "y" : 0
         },
         "width" : 180,
         "height" : 64
      }, {
         "id" : "train.j.model.Order.Fizet_Rendel2",
         "name" : "Fizet_Rendel2",
         "position" : {
            "x" : 1230,
            "y" : 0
         },
         "width" : 150,
         "height" : 64
      } ],
      "pseudoStates" : [ {
         "id" : "train.j.model.Pizza.Init",
         "name" : "Init",
         "kind" : "initial",
         "position" : {
            "x" : 30,
            "y" : 16
         },
         "width" : 25,
         "height" : 25
      } ],
      "transitions" : [ {
         "id" : "train.j.model.Order.Light_Dark",
         "fromID" : "train.j.model.Order.Fizet_Rendel2",
         "toID" : "train.j.model.Order.Fizet_Rendel2",
         "trigger" : "SwitchLight",
         "route" : [ {
            "x" : 1200,
            "y" : 48
         }, {
            "x" : 1200,
            "y" : 16
         } ]
      } ],
      "spacing" : 0.0
   } ],
   "modelName" : "train.j.model"
};