paella.setMonostreamProfile(() => {
    return new Promise((resolve,reject) => {
        resolve({
            id:"monostream",
            name:{es:"Monostream"},
            hidden:true,
            icon:"",
            videos: [
                {
                    content:"presenter",
                    visible:true,
                    layer:1,
                    rect:[
                        { aspectRatio:"1/1",left:280,top:0,width:720,height:720 },
                        { aspectRatio:"6/5",left:208,top:0,width:864,height:720 },
                        { aspectRatio:"5/4",left:190,top:0,width:900,height:720 },
                        { aspectRatio:"4/3",left:160,top:0,width:960,height:720 },
                        { aspectRatio:"11/8",left:145,top:0,width:990,height:720 },
                        { aspectRatio:"1.41/1",left:132,top:0,width:1015,height:720 },
                        { aspectRatio:"1.43/1",left:125,top:0,width:1029,height:720 },
                        { aspectRatio:"3/2",left:100,top:0,width:1080,height:720 },
                        { aspectRatio:"16/10",left:64,top:0,width:1152,height:720 },
                        { aspectRatio:"5/3",left:40,top:0,width:1200,height:720 },
                        { aspectRatio:"16/9",left:0,top:0,width:1280,height:720 },
                        { aspectRatio:"1.85/1",left:0,top:14,width:1280,height:692 },
                        { aspectRatio:"2.35/1",left:0,top:87,width:1280,height:544 },
                        { aspectRatio:"2.41/1",left:0,top:94,width:1280,height:531 },
                        { aspectRatio:"2.76/1",left:0,top:128,width:1280,height:463 }
                    ]
                }
            ],
            logos: [{content:"paella_logo.png",zIndex:5,rect: { top:10,left:10,width:49,height:42}}]
        })
    });
});

paella.addProfile(() => {
    return new Promise((resolve,reject) => {
        paella.events.bind(paella.events.videoReady,() => {
            if (paella.player.videoContainer.streamProvider.videoPlayers.length<3) {
                resolve(null);
            }
            else {
                resolve({
                    id:"triple_stream",
                    name:{es:"Tres streams"},
                    hidden:false,
                    icon:"three_streams_icon.svg",
                    videos: [
                        {
                            content: "presenter",
                            rect:[
                                { aspectRatio:"16/9",left:319, top:13, width:640, height:360 }
                            ],
                            visible:true,
                            layer:1
                        },
                        {
                            content: "presentation",
                            rect:[
                                { aspectRatio:"16/9",left:37, top:388, width:566, height:318 }
                            ],
                            visible:true,
                            layer:1
                        },
                        {
                            content: "presenter-2",
                            rect:[
                                { aspectRatio:"16/9",left:677, top:388, width:566, height:318 }
                            ],
                            visible:true,
                            layer:1
                        }
                    ],
                    blackBoardImages: {left:10,top:325,width:432,height:324},
                    background: {content:"slide_professor_paella.jpg",zIndex:5,rect: { left:0,top:0,width:1280,height:720},visible: true,layer:0},
                    logos: [{content:"paella_logo.png",zIndex:5,rect: { top:10,left:10,width:49,height:42}}]
                })
            }
        })
    })
});

paella.addProfile(() => {
    return new Promise((resolve,reject) => {
        paella.events.bind(paella.events.videoReady,() => {
            // TODO: videoContainer.sourceData is deprecated, update this code
            var n = paella.player.videoContainer.sourceData[0].sources;
			if(n.hasOwnProperty("image")==false) {
                resolve(null);
            }
            else {
                resolve({
                    id:"s_p_blackboard2",
                    name:{es:"Pizarra"},
                    hidden:false,
                    icon:"s_p_blackboard.svg",
                    videos: [
                        {
                            content: "presentation",
                            rect:[
                            {aspectRatio:"16/9",left:10,top:70,width:432,height:243}],
                            visible:true,
                            layer:1
                        },
                        {
                            content:"presenter",
                            rect:[{aspectRatio:"16/9",left:450,top:135,width:816,height:459}],
                            visible:true,
                            layer:1
                        }
                    ],
                    blackBoardImages: {left:10,top:325,width:432,height:324},
                    background: {content:"slide_professor_paella.jpg",zIndex:5,rect: { left:0,top:0,width:1280,height:720},visible: true,layer:0},
                    logos: [{content:"paella_logo.png",zIndex:5,rect: { top:10,left:10,width:49,height:42}}]
                });
            }
        });
    })
});

paella.addProfile(() => {
    return new Promise((resolve,reject) => {
        resolve({
            id:"slide_professor",
            name:{es:"Presentación y presentador"},
            hidden:false,
            icon:"slide_professor_icon.svg",
            videos: [
                { content:"presenter",rect:[
                    {aspectRatio:"16/9",left:712,top:302,width:560,height:315},
                    {aspectRatio:"16/10",left:712,top:267,width:560,height:350},
                    {aspectRatio:"4/3",left:712,top:198,width:560,height:420},
                    {aspectRatio:"5/3",left:712,top:281,width:560,height:336},
                    {aspectRatio:"5/4",left:712,top:169,width:560,height:448}],visible:true,layer:1
                },
                {content:"presentation",rect:[
                    {aspectRatio:"16/9",left:10,top:225,width:695,height:390},
                    {aspectRatio:"16/10",left:10,top:183,width:695,height:434},
                    {aspectRatio:"4/3",left:10,top:96,width:695,height:521},
                    {aspectRatio:"5/3",left:10,top:200,width:695,height:417},
                    {aspectRatio:"5/4",left:10,top:62,width:695,height:556}],visible:true,layer:"1"}
            ],
            background:{content:"slide_professor_paella.jpg",zIndex:5,rect:{left:0,top:0,width:1280,height:720},visible:true,layer:0},
            logos:[{content:"paella_logo.png",zIndex:5,rect:{top:10,left:10,width:49,height:42}}]
        })
    })
});

paella.addProfile(() => {
    return new Promise((resolve,reject) => {
        resolve({
            id:"professor_slide",
            name:{es:"Presentador y presentación"},
            hidden:false,
            icon:"professor_slide_icon.svg",
            videos: [
                {
                    content:"presenter",rect:[
                        {aspectRatio:"16/9",left:10,top:225,width:695,height:390},
                        {aspectRatio:"16/10",left:10,top:183,width:695,height:434},
                        {aspectRatio:"4/3",left:10,top:96,width:695,height:521},
                        {aspectRatio:"5/3",left:10,top:200,width:695,height:417},
                        {aspectRatio:"5/4",left:10,top:62,width:695,height:556}
                    ],
                    visible:"true",layer:"1"
                },
                {
                    content:"presentation",rect:[
                        {aspectRatio:"16/9",left:712,top:302,width:560,height:315},
                        {aspectRatio:"16/10",left:712,top:267,width:560,height:350},
                        {aspectRatio:"4/3",left:712,top:198,width:560,height:420},
                        {aspectRatio:"5/3",left:712,top:281,width:560,height:336},
                        {aspectRatio:"5/4",left:712,top:169,width:560,height:448}
                    ],visible:"true",layer:"1"
                },
            ],
            background:{content:"slide_professor_paella.jpg",zIndex:5,rect:{left:0,top:0,width:1280,height:720},visible:"true",layer:"0"},
            logos:[{content:"paella_logo.png",zIndex:5,rect:{top:10,left:10,width:49,height:42}}]
        })
    })
});

paella.addProfile(() => {
    return new Promise((resolve,reject) => {
        resolve({
            id:"professor",
            name:{es:"Solo profesor"},
            hidden:false,
            icon:"professor_icon.svg",
            videos: [
                {
                    content:"presenter",rect:[
                        {aspectRatio:"16/9",left:0,top:0,width:1280,height:720},
                        {aspectRatio:"16/10",left:64,top:0,width:1152,height:720},
                        {aspectRatio:"5/3",left:40,top:0,width:1200,height:720},
                        {aspectRatio:"5/4",left:190,top:0,width:900,height:720},
                        {aspectRatio:"4/3",left:160,top:0,width:960,height:720}
                    ],visible:"true",layer:"1"
                },
                {
                    content:"presentation",rect:[
                        {aspectRatio:"4/3",left:0,top:0,width:300,height:300}
                    ],visible:"false",layer:"1"
                }
            ],
            background:{content:"default_background_paella.jpg",zIndex:5,rect:{left:0,top:0,width:1280,height:720},visible:"true",layer:"0"},
            logos:[{content:"paella_logo.png",zIndex:5,rect:{top:10,left:10,width:49,height:42}}],
            isMonostream:true
        })
    })
});

paella.addProfile(() => {
    return new Promise((resolve,reject) => {
        resolve({
            id:"slide",
            name:{es:"Solo presentación"},
            hidden:false,
            icon:"slide_icon.svg",
            videos: [
                {
                    content:"presenter",rect:[
                    {aspectRatio:"16/9",left:0,top:0,width:320,height:190}],
                    visible:"false",layer:"1"
                },
                {
                    content:"presentation",rect:[
                        {aspectRatio:"16/9",left:0,top:0,width:1280,height:720},
                        {aspectRatio:"16/10",left:64,top:0,width:1152,height:720},
                        {aspectRatio:"5/3",left:40,top:0,width:1200,height:720},
                        {aspectRatio:"5/4",left:190,top:0,width:900,height:720},
                        {aspectRatio:"4/3",left:160,top:0,width:960,height:720}
                    ],visible:"true",layer:"1"
                }
            ],
            background:{content:"default_background_paella.jpg",zIndex:5,rect:{left:0,top:0,width:1280,height:720},visible:"true",layer:"0"},
            logos:[{content:"paella_logo.png",zIndex:5,rect:{top:10,left:10,width:49,height:42}}],
            isMonostream:true
        })
    })
});

paella.addProfile(() => {
    return new Promise((resolve,reject) => {
        resolve({
            id:"slide_over_professor",
            name:{es:"Presentación sobre profesor"},
            hidden:false,
            icon:"slide_over_professor_icon.svg",
            videos: [
                {
                    content:"presenter",rect:[
                        {aspectRatio:"16/9",left:0,top:0,width:1280,height:720},
                        {aspectRatio:"16/10",left:64,top:0,width:1152,height:720},
                        {aspectRatio:"5/3",left:40,top:0,width:1200,height:720},
                        {aspectRatio:"5/4",left:190,top:0,width:900,height:720},
                        {aspectRatio:"4/3",left:160,top:0,width:960,height:720}
                    ],visible:"true",layer:"1"
                },
                {
                    content:"presentation",rect:[
                        {aspectRatio:"16/9",left:50,top:470,width:350,height:197},
                        {aspectRatio:"16/10",left:50,top:448,width:350,height:219},
                        {aspectRatio:"5/3",left:50,top:457,width:350,height:210},
                        {aspectRatio:"5/4",left:50,top:387,width:350,height:280},
                        {aspectRatio:"4/3",left:50,top:404,width:350,height:262}
                    ],visible:"true",layer:"1"
                }
            ],
            background:{content:"default_background_paella.jpg",zIndex:5,rect:{left:0,top:0,width:1280,height:720},visible:"true",layer:"0"},
            logos:[{content:"paella_logo.png",zIndex:5,rect:{top:10,left:10,width:49,height:42}}]
        })
    })
});

paella.addProfile(() => {
    return new Promise((resolve,reject) => {
        resolve({
            id:"slide_over_professor_right",
            name:{es:"Presentación a la derecha, sobre profesor"},
            hidden:false,
            icon:"slide_over_professor_right_icon.svg",
            videos: [
                {
                    content:"presenter",rect:[
                        {aspectRatio:"16/9",left:0,top:0,width:1280,height:720},
                        {aspectRatio:"16/10",left:64,top:0,width:1152,height:720},
                        {aspectRatio:"5/3",left:40,top:0,width:1200,height:720},
                        {aspectRatio:"5/4",left:190,top:0,width:900,height:720},
                        {aspectRatio:"4/3",left:160,top:0,width:960,height:720}
                    ],visible:"true",layer:"1"
                },
                {
                    content:"presentation",rect:[
                        {aspectRatio:"16/9",left:910,top:470,width:350,height:197},
                        {aspectRatio:"16/10",left:910,top:448,width:350,height:219},
                        {aspectRatio:"5/3",left:910,top:457,width:350,height:210},
                        {aspectRatio:"5/4",left:910,top:387,width:350,height:280},
                        {aspectRatio:"4/3",left:910,top:404,width:350,height:262}
                    ],visible:"true",layer:"1"
                }
            ],  
            background:{content:"default_background_paella.jpg",zIndex:5,rect:{left:0,top:0,width:1280,height:720},visible:"true",layer:"0"},
            logos:[{content:"paella_logo.png",zIndex:5,rect:{top:10,left:10,width:49,height:42}}]
        })
    })
});

paella.addProfile(() => {
    return new Promise((resolve,reject) => {
        resolve({
            id:"professor_over_slide",
            name:{es:"Profesor sobre presentación"},
            hidden:false,
            icon:"professor_over_slide.svg",
            videos: [
                {
                    content:"presentation",rect:[
                        {aspectRatio:"16/9",left:50,top:470,width:350,height:197},
                        {aspectRatio:"16/10",left:50,top:448,width:350,height:219},
                        {aspectRatio:"5/3",left:50,top:457,width:350,height:210},
                        {aspectRatio:"5/4",left:50,top:387,width:350,height:280},
                        {aspectRatio:"4/3",left:50,top:404,width:350,height:262}
                    ],visible:"true",layer:"2"
                },
                {
                    content:"presenter",rect:[
                        {aspectRatio:"16/9",left:0,top:0,width:1280,height:720},
                        {aspectRatio:"16/10",left:64,top:0,width:1152,height:720},
                        {aspectRatio:"5/3",left:40,top:0,width:1200,height:720},
                        {aspectRatio:"5/4",left:190,top:0,width:900,height:720},
                        {aspectRatio:"4/3",left:160,top:0,width:960,height:720}
                    ],visible:"true",layer:"1"
                }
            ],
            background:{content:"default_background_paella.jpg",zIndex:5,rect:{left:0,top:0,width:1280,height:720},visible:"true",layer:"0"},
            logos:[{content:"paella_logo.png",zIndex:5,rect:{top:10,left:10,width:49,height:42}}]
        })
    })
});

paella.addProfile(() => {
    return new Promise((resolve,reject) => {
        resolve({
            id:"professor_over_slide_right",
            name:{es:"Profesor a la derecha, sobre presentación"},
            hidden:false,
            icon:"professor_over_slide_right_icon.svg",
            videos: [
                {
                    content:"presentation",rect:[
                        {aspectRatio:"16/9",left:910,top:470,width:350,height:197},
                        {aspectRatio:"16/10",left:910,top:448,width:350,height:219},
                        {aspectRatio:"5/3",left:910,top:457,width:350,height:210},
                        {aspectRatio:"5/4",left:910,top:387,width:350,height:280},
                        {aspectRatio:"4/3",left:910,top:404,width:350,height:262}
                    ],visible:"true",layer:"2"
                },
                {
                    content:"presenter",rect:[
                        {aspectRatio:"16/9",left:0,top:0,width:1280,height:720},
                        {aspectRatio:"16/10",left:64,top:0,width:1152,height:720},
                        {aspectRatio:"5/3",left:40,top:0,width:1200,height:720},
                        {aspectRatio:"5/4",left:190,top:0,width:900,height:720},
                        {aspectRatio:"4/3",left:160,top:0,width:960,height:720}
                    ],visible:"true",layer:"1"
                }
            ],
            background:{content:"default_background_paella.jpg",zIndex:5,rect:{left:0,top:0,width:1280,height:720},visible:"true",layer:"0"},
            logos:[{content:"paella_logo.png",zIndex:5,rect:{top:10,left:10,width:49,height:42}}]
        })
    })
});

paella.addProfile(() => {
    return new Promise((resolve,reject) => {
        resolve({
            id:"blank_professor",
            name:{es:"Nada y presentador"},
            hidden:true,
            icon:"slide_professor_icon.png",
            videos: [
                {
                    content:"presenter",rect:[
                        {aspectRatio:"16/9",left:712,top:302,width:560,height:315},
                        {aspectRatio:"16/10",left:712,top:267,width:560,height:350},
                        {aspectRatio:"4/3",left:712,top:198,width:560,height:420},
                        {aspectRatio:"5/3",left:712,top:281,width:560,height:336},
                        {aspectRatio:"5/4",left:712,top:169,width:560,height:448}
                    ],visible:"true",layer:"1"
                },
                {
                    content:"presentation",rect:[
                        {aspectRatio:"4/3",left:0,top:0,width:300,height:300}
                    ],visible:"false",layer:"1"
                }
            ],
            background:{content:"slide_professor_paella.jpg",zIndex:5,rect:{left:0,top:0,width:1280,height:720},visible:"false",layer:"0"},
            logos:[{content:"paella_logo.png",zIndex:5,rect:{top:10,left:10,width:49,height:42}}],
            isMonostream:true
        })
    })
});

paella.addProfile(() => {
    return new Promise((resolve,reject) => {
        paella.events.bind(paella.events.videoReady, () => {
            // TODO: videoContainer.sourceData is deprecated. Update this code
            var n = paella.player.videoContainer.sourceData[0].sources;
            if (!n.chroma) {
                resolve(null);
            }
            else {
                resolve({
                    id:"chroma",
                    name:{es:"Polimedia"},
                    hidden:false,
                    icon:"chroma.svg",
                    videos: [
                        {
                            content:"presenter",rect:[
                                {aspectRatio:"16/9",left:0,top:0,width:1280,height:720},
                                {aspectRatio:"16/10",left:64,top:0,width:1152,height:720},
                                {aspectRatio:"5/3",left:40,top:0,width:1200,height:720},
                                {aspectRatio:"5/4",left:190,top:0,width:900,height:720},
                                {aspectRatio:"4/3",left:160,top:0,width:960,height:720}
                            ],visible:"true",layer:"1"
                        },
                        {
                            content:"presentation",rect:[
                                {aspectRatio:"16/9",left:0,top:0,width:1280,height:720},
                                {aspectRatio:"16/10",left:64,top:0,width:1152,height:720},
                                {aspectRatio:"5/3",left:40,top:0,width:1200,height:720},
                                {aspectRatio:"5/4",left:190,top:0,width:900,height:720},
                                {aspectRatio:"4/3",left:160,top:0,width:960,height:720}
                            ],visible:"true",layer:"0"
                        }
                    ],
                    background:{content:"default_background_paella.jpg",zIndex:5,rect:{left:0,top:0,width:1280,height:720},visible:"true",layer:"0"},
                    logos:[{content:"paella_logo.png",zIndex:5,rect:{top:10,left:10,width:49,height:42}}]
                })
            }
        })
    })
});

