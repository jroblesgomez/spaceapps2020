gdjs.IntroCode = {};
gdjs.IntroCode.GDbgObjects1= [];
gdjs.IntroCode.GDbgObjects2= [];
gdjs.IntroCode.GDStart_95buttonObjects1= [];
gdjs.IntroCode.GDStart_95buttonObjects2= [];
gdjs.IntroCode.GDTitleObjects1= [];
gdjs.IntroCode.GDTitleObjects2= [];
gdjs.IntroCode.GDDemoObjects1= [];
gdjs.IntroCode.GDDemoObjects2= [];

gdjs.IntroCode.conditionTrue_0 = {val:false};
gdjs.IntroCode.condition0IsTrue_0 = {val:false};
gdjs.IntroCode.condition1IsTrue_0 = {val:false};


gdjs.IntroCode.eventsList0 = function(runtimeScene) {

{


gdjs.IntroCode.condition0IsTrue_0.val = false;
{
gdjs.IntroCode.condition0IsTrue_0.val = gdjs.evtTools.input.isMouseButtonReleased(runtimeScene, "Left");
}if (gdjs.IntroCode.condition0IsTrue_0.val) {
{gdjs.evtTools.sound.playMusic(runtimeScene, "confirm.wav", false, 100, 1);
}}

}


{


gdjs.IntroCode.condition0IsTrue_0.val = false;
{
gdjs.IntroCode.condition0IsTrue_0.val = gdjs.evtTools.input.isMouseButtonReleased(runtimeScene, "Left");
}if (gdjs.IntroCode.condition0IsTrue_0.val) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Oficina", true);
}}

}


{


gdjs.IntroCode.condition0IsTrue_0.val = false;
{
gdjs.IntroCode.condition0IsTrue_0.val = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
}if (gdjs.IntroCode.condition0IsTrue_0.val) {
{gdjs.evtTools.sound.playMusic(runtimeScene, "intro.wav", false, 90, 1);
}}

}


};

gdjs.IntroCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.IntroCode.GDbgObjects1.length = 0;
gdjs.IntroCode.GDbgObjects2.length = 0;
gdjs.IntroCode.GDStart_95buttonObjects1.length = 0;
gdjs.IntroCode.GDStart_95buttonObjects2.length = 0;
gdjs.IntroCode.GDTitleObjects1.length = 0;
gdjs.IntroCode.GDTitleObjects2.length = 0;
gdjs.IntroCode.GDDemoObjects1.length = 0;
gdjs.IntroCode.GDDemoObjects2.length = 0;

gdjs.IntroCode.eventsList0(runtimeScene);
return;

}

gdjs['IntroCode'] = gdjs.IntroCode;
