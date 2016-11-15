c5864c7c26992101be5f0fc027919f2a
jsio("import AudioManager");exports.sound=null;
exports.getSound=function(){exports.sound||(exports.sound=new AudioManager({path:"resources/sounds",files:{main_music:{path:"music",background:!0},bg_music:{path:"music",background:!0},start_ready:{path:"effect",background:!1},start_go:{path:"effect",background:!1},lightning:{path:"effect",background:!1},attack:{path:"effect",background:!1},bubble_xiaochu:{path:"effect",background:!1},coin_in:{path:"effect",background:!1},great:{path:"effect",background:!1},nice:{path:"effect",background:!1},perfect:{path:"effect",
background:!1},lose:{path:"effect",background:!1},win:{path:"effect",background:!1}}}));return exports.sound};
