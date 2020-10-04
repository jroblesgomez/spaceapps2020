gdjs.TallerCode = {};
gdjs.TallerCode.GDrocketObjects1= [];
gdjs.TallerCode.GDrocketObjects2= [];
gdjs.TallerCode.GDerror2Objects1= [];
gdjs.TallerCode.GDerror2Objects2= [];

gdjs.TallerCode.conditionTrue_0 = {val:false};
gdjs.TallerCode.condition0IsTrue_0 = {val:false};
gdjs.TallerCode.condition1IsTrue_0 = {val:false};


gdjs.TallerCode.eventsList0 = function(runtimeScene) {

{


gdjs.TallerCode.condition0IsTrue_0.val = false;
{
gdjs.TallerCode.condition0IsTrue_0.val = gdjs.evtTools.input.isMouseButtonReleased(runtimeScene, "Left");
}if (gdjs.TallerCode.condition0IsTrue_0.val) {
{gdjs.evtTools.runtimeScene.popScene(runtimeScene);
}{gdjs.evtTools.sound.pauseMusicOnChannel(runtimeScene, 1);
}}

}


{


gdjs.TallerCode.condition0IsTrue_0.val = false;
{
gdjs.TallerCode.condition0IsTrue_0.val = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
}if (gdjs.TallerCode.condition0IsTrue_0.val) {
{gdjs.evtTools.sound.playMusicOnChannel(runtimeScene, "sad.wav", 1, false, 90, 1);
}}

}


};

gdjs.TallerCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.TallerCode.GDrocketObjects1.length = 0;
gdjs.TallerCode.GDrocketObjects2.length = 0;
gdjs.TallerCode.GDerror2Objects1.length = 0;
gdjs.TallerCode.GDerror2Objects2.length = 0;

gdjs.TallerCode.eventsList0(runtimeScene);
return;

}

gdjs['TallerCode'] = gdjs.TallerCode;
