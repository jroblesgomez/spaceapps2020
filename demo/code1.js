gdjs.OficinaCode = {};
gdjs.OficinaCode.GDbgObjects1= [];
gdjs.OficinaCode.GDbgObjects2= [];
gdjs.OficinaCode.GDspace_95buttonObjects1= [];
gdjs.OficinaCode.GDspace_95buttonObjects2= [];
gdjs.OficinaCode.GDworkshop_95buttonObjects1= [];
gdjs.OficinaCode.GDworkshop_95buttonObjects2= [];
gdjs.OficinaCode.GDcalendarObjects1= [];
gdjs.OficinaCode.GDcalendarObjects2= [];
gdjs.OficinaCode.GDmaterials_95listObjects1= [];
gdjs.OficinaCode.GDmaterials_95listObjects2= [];
gdjs.OficinaCode.GDtodo_95listObjects1= [];
gdjs.OficinaCode.GDtodo_95listObjects2= [];
gdjs.OficinaCode.GDrecycle_95buttonObjects1= [];
gdjs.OficinaCode.GDrecycle_95buttonObjects2= [];
gdjs.OficinaCode.GDspace_95time_95infoObjects1= [];
gdjs.OficinaCode.GDspace_95time_95infoObjects2= [];
gdjs.OficinaCode.GDn_95panel_95labelObjects1= [];
gdjs.OficinaCode.GDn_95panel_95labelObjects2= [];
gdjs.OficinaCode.GDn_95tank_95labelObjects1= [];
gdjs.OficinaCode.GDn_95tank_95labelObjects2= [];
gdjs.OficinaCode.GDn_95metal_95labelObjects1= [];
gdjs.OficinaCode.GDn_95metal_95labelObjects2= [];
gdjs.OficinaCode.GDn_95chip_95labelObjects1= [];
gdjs.OficinaCode.GDn_95chip_95labelObjects2= [];
gdjs.OficinaCode.GDdate_95labelObjects1= [];
gdjs.OficinaCode.GDdate_95labelObjects2= [];

gdjs.OficinaCode.conditionTrue_0 = {val:false};
gdjs.OficinaCode.condition0IsTrue_0 = {val:false};
gdjs.OficinaCode.condition1IsTrue_0 = {val:false};


gdjs.OficinaCode.mapOfGDgdjs_46OficinaCode_46GDspace_9595buttonObjects1Objects = Hashtable.newFrom({"space_button": gdjs.OficinaCode.GDspace_95buttonObjects1});gdjs.OficinaCode.mapOfGDgdjs_46OficinaCode_46GDspace_9595time_9595infoObjects1Objects = Hashtable.newFrom({"space_time_info": gdjs.OficinaCode.GDspace_95time_95infoObjects1});gdjs.OficinaCode.eventsList0 = function(runtimeScene) {

{


gdjs.OficinaCode.condition0IsTrue_0.val = false;
{
gdjs.OficinaCode.condition0IsTrue_0.val = gdjs.evtTools.input.isMouseButtonReleased(runtimeScene, "Left");
}if (gdjs.OficinaCode.condition0IsTrue_0.val) {
{gdjs.evtTools.runtimeScene.pushScene(runtimeScene, "Espacio");
}}

}


};gdjs.OficinaCode.mapOfGDgdjs_46OficinaCode_46GDspace_9595buttonObjects1Objects = Hashtable.newFrom({"space_button": gdjs.OficinaCode.GDspace_95buttonObjects1});gdjs.OficinaCode.eventsList1 = function(runtimeScene) {

{


gdjs.OficinaCode.condition0IsTrue_0.val = false;
{
gdjs.OficinaCode.condition0IsTrue_0.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(0).getChild("month")) > 12;
}if (gdjs.OficinaCode.condition0IsTrue_0.val) {
/* Reuse gdjs.OficinaCode.GDdate_95labelObjects1 */
{runtimeScene.getGame().getVariables().getFromIndex(0).getChild("month").setNumber(1);
}{runtimeScene.getGame().getVariables().getFromIndex(0).getChild("year").add(1);
}{for(var i = 0, len = gdjs.OficinaCode.GDdate_95labelObjects1.length ;i < len;++i) {
    gdjs.OficinaCode.GDdate_95labelObjects1[i].setString(gdjs.evtTools.common.toString(gdjs.evtTools.common.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(0).getChild("month"))) + " / " + gdjs.evtTools.common.toString(gdjs.evtTools.common.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(0).getChild("year"))));
}
}}

}


};gdjs.OficinaCode.mapOfGDgdjs_46OficinaCode_46GDworkshop_9595buttonObjects1Objects = Hashtable.newFrom({"workshop_button": gdjs.OficinaCode.GDworkshop_95buttonObjects1});gdjs.OficinaCode.eventsList2 = function(runtimeScene) {

{


gdjs.OficinaCode.condition0IsTrue_0.val = false;
{
gdjs.OficinaCode.condition0IsTrue_0.val = gdjs.evtTools.input.isMouseButtonReleased(runtimeScene, "Left");
}if (gdjs.OficinaCode.condition0IsTrue_0.val) {
{gdjs.evtTools.runtimeScene.pushScene(runtimeScene, "Taller");
}}

}


};gdjs.OficinaCode.mapOfGDgdjs_46OficinaCode_46GDworkshop_9595buttonObjects1Objects = Hashtable.newFrom({"workshop_button": gdjs.OficinaCode.GDworkshop_95buttonObjects1});gdjs.OficinaCode.mapOfGDgdjs_46OficinaCode_46GDrecycle_9595buttonObjects1Objects = Hashtable.newFrom({"recycle_button": gdjs.OficinaCode.GDrecycle_95buttonObjects1});gdjs.OficinaCode.mapOfGDgdjs_46OficinaCode_46GDrecycle_9595buttonObjects1Objects = Hashtable.newFrom({"recycle_button": gdjs.OficinaCode.GDrecycle_95buttonObjects1});gdjs.OficinaCode.eventsList3 = function(runtimeScene) {

{


gdjs.OficinaCode.condition0IsTrue_0.val = false;
{
gdjs.OficinaCode.condition0IsTrue_0.val = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
}if (gdjs.OficinaCode.condition0IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("date_label"), gdjs.OficinaCode.GDdate_95labelObjects1);
gdjs.copyArray(runtimeScene.getObjects("n_chip_label"), gdjs.OficinaCode.GDn_95chip_95labelObjects1);
gdjs.copyArray(runtimeScene.getObjects("n_metal_label"), gdjs.OficinaCode.GDn_95metal_95labelObjects1);
gdjs.copyArray(runtimeScene.getObjects("n_panel_label"), gdjs.OficinaCode.GDn_95panel_95labelObjects1);
gdjs.copyArray(runtimeScene.getObjects("n_tank_label"), gdjs.OficinaCode.GDn_95tank_95labelObjects1);
{gdjs.evtTools.sound.playMusic(runtimeScene, "bucle.wav", true, 90, 1);
}{runtimeScene.getGame().getVariables().getFromIndex(1).setNumber(0);
}{runtimeScene.getGame().getVariables().getFromIndex(2).setNumber(0);
}{runtimeScene.getGame().getVariables().getFromIndex(3).setNumber(0);
}{runtimeScene.getGame().getVariables().getFromIndex(4).setNumber(0);
}{runtimeScene.getGame().getVariables().getFromIndex(0).getChild("year").setNumber(2020);
}{runtimeScene.getGame().getVariables().getFromIndex(0).getChild("month").setNumber(10);
}{for(var i = 0, len = gdjs.OficinaCode.GDdate_95labelObjects1.length ;i < len;++i) {
    gdjs.OficinaCode.GDdate_95labelObjects1[i].setString(gdjs.evtTools.common.toString(gdjs.evtTools.common.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(0).getChild("month"))) + " / " + gdjs.evtTools.common.toString(gdjs.evtTools.common.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(0).getChild("year"))));
}
}{for(var i = 0, len = gdjs.OficinaCode.GDn_95panel_95labelObjects1.length ;i < len;++i) {
    gdjs.OficinaCode.GDn_95panel_95labelObjects1[i].setString("Solar panels: " + gdjs.evtTools.common.toString(gdjs.evtTools.common.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(2))));
}
}{for(var i = 0, len = gdjs.OficinaCode.GDn_95tank_95labelObjects1.length ;i < len;++i) {
    gdjs.OficinaCode.GDn_95tank_95labelObjects1[i].setString("Fuel tanks: " + gdjs.evtTools.common.toString(gdjs.evtTools.common.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(3))));
}
}{for(var i = 0, len = gdjs.OficinaCode.GDn_95chip_95labelObjects1.length ;i < len;++i) {
    gdjs.OficinaCode.GDn_95chip_95labelObjects1[i].setString("Microchips: " + gdjs.evtTools.common.toString(gdjs.evtTools.common.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(1))));
}
}{for(var i = 0, len = gdjs.OficinaCode.GDn_95metal_95labelObjects1.length ;i < len;++i) {
    gdjs.OficinaCode.GDn_95metal_95labelObjects1[i].setString("Metal frag.: " + gdjs.evtTools.common.toString(gdjs.evtTools.common.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(4))));
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("space_button"), gdjs.OficinaCode.GDspace_95buttonObjects1);

gdjs.OficinaCode.condition0IsTrue_0.val = false;
{
gdjs.OficinaCode.condition0IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.OficinaCode.mapOfGDgdjs_46OficinaCode_46GDspace_9595buttonObjects1Objects, runtimeScene, true, false);
}if (gdjs.OficinaCode.condition0IsTrue_0.val) {
/* Reuse gdjs.OficinaCode.GDspace_95buttonObjects1 */
gdjs.OficinaCode.GDspace_95time_95infoObjects1.length = 0;

{for(var i = 0, len = gdjs.OficinaCode.GDspace_95buttonObjects1.length ;i < len;++i) {
    gdjs.OficinaCode.GDspace_95buttonObjects1[i].setAnimation(1);
}
}{gdjs.evtTools.object.createObjectOnScene((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : runtimeScene), gdjs.OficinaCode.mapOfGDgdjs_46OficinaCode_46GDspace_9595time_9595infoObjects1Objects, 8, 390, "GUI");
}
{ //Subevents
gdjs.OficinaCode.eventsList0(runtimeScene);} //End of subevents
}

}


{

gdjs.copyArray(runtimeScene.getObjects("space_button"), gdjs.OficinaCode.GDspace_95buttonObjects1);

gdjs.OficinaCode.condition0IsTrue_0.val = false;
{
gdjs.OficinaCode.condition0IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.OficinaCode.mapOfGDgdjs_46OficinaCode_46GDspace_9595buttonObjects1Objects, runtimeScene, true, true);
}if (gdjs.OficinaCode.condition0IsTrue_0.val) {
/* Reuse gdjs.OficinaCode.GDspace_95buttonObjects1 */
gdjs.copyArray(runtimeScene.getObjects("space_time_info"), gdjs.OficinaCode.GDspace_95time_95infoObjects1);
{for(var i = 0, len = gdjs.OficinaCode.GDspace_95buttonObjects1.length ;i < len;++i) {
    gdjs.OficinaCode.GDspace_95buttonObjects1[i].setAnimation(0);
}
}{for(var i = 0, len = gdjs.OficinaCode.GDspace_95time_95infoObjects1.length ;i < len;++i) {
    gdjs.OficinaCode.GDspace_95time_95infoObjects1[i].deleteFromScene(runtimeScene);
}
}}

}


{


gdjs.OficinaCode.condition0IsTrue_0.val = false;
{
gdjs.OficinaCode.condition0IsTrue_0.val = gdjs.evtTools.runtimeScene.sceneJustResumed(runtimeScene);
}if (gdjs.OficinaCode.condition0IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("date_label"), gdjs.OficinaCode.GDdate_95labelObjects1);
gdjs.copyArray(runtimeScene.getObjects("n_chip_label"), gdjs.OficinaCode.GDn_95chip_95labelObjects1);
gdjs.copyArray(runtimeScene.getObjects("n_metal_label"), gdjs.OficinaCode.GDn_95metal_95labelObjects1);
gdjs.copyArray(runtimeScene.getObjects("n_panel_label"), gdjs.OficinaCode.GDn_95panel_95labelObjects1);
gdjs.copyArray(runtimeScene.getObjects("n_tank_label"), gdjs.OficinaCode.GDn_95tank_95labelObjects1);
{gdjs.evtTools.sound.playMusic(runtimeScene, "bucle.wav", true, 90, 1);
}{for(var i = 0, len = gdjs.OficinaCode.GDdate_95labelObjects1.length ;i < len;++i) {
    gdjs.OficinaCode.GDdate_95labelObjects1[i].setString(gdjs.evtTools.common.toString(gdjs.evtTools.common.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(0).getChild("month"))) + " / " + gdjs.evtTools.common.toString(gdjs.evtTools.common.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(0).getChild("year"))));
}
}{for(var i = 0, len = gdjs.OficinaCode.GDn_95panel_95labelObjects1.length ;i < len;++i) {
    gdjs.OficinaCode.GDn_95panel_95labelObjects1[i].setString("Solar panels: " + gdjs.evtTools.common.toString(gdjs.evtTools.common.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(2))));
}
}{for(var i = 0, len = gdjs.OficinaCode.GDn_95tank_95labelObjects1.length ;i < len;++i) {
    gdjs.OficinaCode.GDn_95tank_95labelObjects1[i].setString("Fuel tanks: " + gdjs.evtTools.common.toString(gdjs.evtTools.common.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(3))));
}
}{for(var i = 0, len = gdjs.OficinaCode.GDn_95chip_95labelObjects1.length ;i < len;++i) {
    gdjs.OficinaCode.GDn_95chip_95labelObjects1[i].setString("Microchips: " + gdjs.evtTools.common.toString(gdjs.evtTools.common.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(1))));
}
}{for(var i = 0, len = gdjs.OficinaCode.GDn_95metal_95labelObjects1.length ;i < len;++i) {
    gdjs.OficinaCode.GDn_95metal_95labelObjects1[i].setString("Metal frag.: " + gdjs.evtTools.common.toString(gdjs.evtTools.common.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(4))));
}
}
{ //Subevents
gdjs.OficinaCode.eventsList1(runtimeScene);} //End of subevents
}

}


{

gdjs.copyArray(runtimeScene.getObjects("workshop_button"), gdjs.OficinaCode.GDworkshop_95buttonObjects1);

gdjs.OficinaCode.condition0IsTrue_0.val = false;
{
gdjs.OficinaCode.condition0IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.OficinaCode.mapOfGDgdjs_46OficinaCode_46GDworkshop_9595buttonObjects1Objects, runtimeScene, true, false);
}if (gdjs.OficinaCode.condition0IsTrue_0.val) {
/* Reuse gdjs.OficinaCode.GDworkshop_95buttonObjects1 */
{for(var i = 0, len = gdjs.OficinaCode.GDworkshop_95buttonObjects1.length ;i < len;++i) {
    gdjs.OficinaCode.GDworkshop_95buttonObjects1[i].setAnimation(1);
}
}
{ //Subevents
gdjs.OficinaCode.eventsList2(runtimeScene);} //End of subevents
}

}


{

gdjs.copyArray(runtimeScene.getObjects("workshop_button"), gdjs.OficinaCode.GDworkshop_95buttonObjects1);

gdjs.OficinaCode.condition0IsTrue_0.val = false;
{
gdjs.OficinaCode.condition0IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.OficinaCode.mapOfGDgdjs_46OficinaCode_46GDworkshop_9595buttonObjects1Objects, runtimeScene, true, true);
}if (gdjs.OficinaCode.condition0IsTrue_0.val) {
/* Reuse gdjs.OficinaCode.GDworkshop_95buttonObjects1 */
{for(var i = 0, len = gdjs.OficinaCode.GDworkshop_95buttonObjects1.length ;i < len;++i) {
    gdjs.OficinaCode.GDworkshop_95buttonObjects1[i].setAnimation(0);
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("recycle_button"), gdjs.OficinaCode.GDrecycle_95buttonObjects1);

gdjs.OficinaCode.condition0IsTrue_0.val = false;
{
gdjs.OficinaCode.condition0IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.OficinaCode.mapOfGDgdjs_46OficinaCode_46GDrecycle_9595buttonObjects1Objects, runtimeScene, true, false);
}if (gdjs.OficinaCode.condition0IsTrue_0.val) {
/* Reuse gdjs.OficinaCode.GDrecycle_95buttonObjects1 */
{for(var i = 0, len = gdjs.OficinaCode.GDrecycle_95buttonObjects1.length ;i < len;++i) {
    gdjs.OficinaCode.GDrecycle_95buttonObjects1[i].setAnimation(1);
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("recycle_button"), gdjs.OficinaCode.GDrecycle_95buttonObjects1);

gdjs.OficinaCode.condition0IsTrue_0.val = false;
{
gdjs.OficinaCode.condition0IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.OficinaCode.mapOfGDgdjs_46OficinaCode_46GDrecycle_9595buttonObjects1Objects, runtimeScene, true, true);
}if (gdjs.OficinaCode.condition0IsTrue_0.val) {
/* Reuse gdjs.OficinaCode.GDrecycle_95buttonObjects1 */
{for(var i = 0, len = gdjs.OficinaCode.GDrecycle_95buttonObjects1.length ;i < len;++i) {
    gdjs.OficinaCode.GDrecycle_95buttonObjects1[i].setAnimation(0);
}
}}

}


};

gdjs.OficinaCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.OficinaCode.GDbgObjects1.length = 0;
gdjs.OficinaCode.GDbgObjects2.length = 0;
gdjs.OficinaCode.GDspace_95buttonObjects1.length = 0;
gdjs.OficinaCode.GDspace_95buttonObjects2.length = 0;
gdjs.OficinaCode.GDworkshop_95buttonObjects1.length = 0;
gdjs.OficinaCode.GDworkshop_95buttonObjects2.length = 0;
gdjs.OficinaCode.GDcalendarObjects1.length = 0;
gdjs.OficinaCode.GDcalendarObjects2.length = 0;
gdjs.OficinaCode.GDmaterials_95listObjects1.length = 0;
gdjs.OficinaCode.GDmaterials_95listObjects2.length = 0;
gdjs.OficinaCode.GDtodo_95listObjects1.length = 0;
gdjs.OficinaCode.GDtodo_95listObjects2.length = 0;
gdjs.OficinaCode.GDrecycle_95buttonObjects1.length = 0;
gdjs.OficinaCode.GDrecycle_95buttonObjects2.length = 0;
gdjs.OficinaCode.GDspace_95time_95infoObjects1.length = 0;
gdjs.OficinaCode.GDspace_95time_95infoObjects2.length = 0;
gdjs.OficinaCode.GDn_95panel_95labelObjects1.length = 0;
gdjs.OficinaCode.GDn_95panel_95labelObjects2.length = 0;
gdjs.OficinaCode.GDn_95tank_95labelObjects1.length = 0;
gdjs.OficinaCode.GDn_95tank_95labelObjects2.length = 0;
gdjs.OficinaCode.GDn_95metal_95labelObjects1.length = 0;
gdjs.OficinaCode.GDn_95metal_95labelObjects2.length = 0;
gdjs.OficinaCode.GDn_95chip_95labelObjects1.length = 0;
gdjs.OficinaCode.GDn_95chip_95labelObjects2.length = 0;
gdjs.OficinaCode.GDdate_95labelObjects1.length = 0;
gdjs.OficinaCode.GDdate_95labelObjects2.length = 0;

gdjs.OficinaCode.eventsList3(runtimeScene);
return;

}

gdjs['OficinaCode'] = gdjs.OficinaCode;
