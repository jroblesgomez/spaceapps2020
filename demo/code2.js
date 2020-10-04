gdjs.EspacioCode = {};
gdjs.EspacioCode.GDerrorObjects1= [];
gdjs.EspacioCode.GDerrorObjects2= [];

gdjs.EspacioCode.conditionTrue_0 = {val:false};
gdjs.EspacioCode.condition0IsTrue_0 = {val:false};
gdjs.EspacioCode.condition1IsTrue_0 = {val:false};


gdjs.EspacioCode.eventsList0 = function(runtimeScene) {

{


gdjs.EspacioCode.condition0IsTrue_0.val = false;
{
gdjs.EspacioCode.condition0IsTrue_0.val = gdjs.evtTools.input.isMouseButtonReleased(runtimeScene, "Left");
}if (gdjs.EspacioCode.condition0IsTrue_0.val) {
{gdjs.evtTools.runtimeScene.popScene(runtimeScene);
}{runtimeScene.getGame().getVariables().getFromIndex(1).add(1);
}{runtimeScene.getGame().getVariables().getFromIndex(2).add(1);
}{runtimeScene.getGame().getVariables().getFromIndex(3).add(1);
}{runtimeScene.getGame().getVariables().getFromIndex(4).add(1);
}{runtimeScene.getGame().getVariables().getFromIndex(0).getChild("month").add(1);
}{gdjs.evtTools.sound.pauseMusicOnChannel(runtimeScene, 2);
}}

}


{


gdjs.EspacioCode.condition0IsTrue_0.val = false;
{
gdjs.EspacioCode.condition0IsTrue_0.val = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
}if (gdjs.EspacioCode.condition0IsTrue_0.val) {
{gdjs.evtTools.sound.playMusicOnChannel(runtimeScene, "desert.wav", 2, false, 90, 1);
}}

}


};

gdjs.EspacioCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.EspacioCode.GDerrorObjects1.length = 0;
gdjs.EspacioCode.GDerrorObjects2.length = 0;

gdjs.EspacioCode.eventsList0(runtimeScene);
return;

}

gdjs['EspacioCode'] = gdjs.EspacioCode;
