/*jslint */
/*global AdobeEdge: false, window: false, document: false, console:false, alert: false */
(function (compId) {

    "use strict";
    var im='images/',
        aud='media/',
        vid='media/',
        js='js/',
        fonts = {
        },
        opts = {
            'gAudioPreloadPreference': 'auto',
            'gVideoPreloadPreference': 'auto'
        },
        resources = [
        ],
        scripts = [
        ],
        symbols = {
            "stage": {
                version: "6.0.0",
                minimumCompatibleVersion: "5.0.0",
                build: "6.0.0.400",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            id: 'Pasted2',
                            display: 'block',
                            type: 'image',
                            rect: ['-2300px', '-161px', '3701px', '1547px', 'auto', 'auto'],
                            fill: ["rgba(0,0,0,0)",im+"Pasted2.svg",'0px','0px']
                        },
                        {
                            id: 'Pasted',
                            display: 'block',
                            type: 'image',
                            rect: ['0px', '0px', '600px', '600px', 'auto', 'auto'],
                            fill: ["rgba(0,0,0,0)",im+"Pasted.svg",'0px','0px']
                        },
                        {
                            id: 'Pasted3',
                            display: 'none',
                            type: 'image',
                            rect: ['29px', '153px', '542px', '295px', 'auto', 'auto'],
                            fill: ["rgba(0,0,0,0)",im+"Pasted3.svg",'0px','0px']
                        }
                    ],
                    style: {
                        '${Stage}': {
                            isStage: true,
                            rect: [undefined, undefined, '600px', '600px'],
                            overflow: 'hidden',
                            fill: ["rgba(255,255,255,1)"]
                        }
                    }
                },
                timeline: {
                    duration: 10000,
                    autoPlay: true,
                    data: [
                        [
                            "eid7",
                            "display",
                            0,
                            0,
                            "linear",
                            "${Pasted3}",
                            'none',
                            'none'
                        ],
                        [
                            "eid6",
                            "display",
                            10000,
                            0,
                            "linear",
                            "${Pasted3}",
                            'none',
                            'block'
                        ],
                        [
                            "eid5",
                            "left",
                            0,
                            10000,
                            "linear",
                            "${Pasted2}",
                            '-2300px',
                            '-295px'
                        ],
                        [
                            "eid8",
                            "display",
                            0,
                            0,
                            "linear",
                            "${Pasted2}",
                            'block',
                            'block'
                        ],
                        [
                            "eid11",
                            "display",
                            10000,
                            0,
                            "linear",
                            "${Pasted2}",
                            'block',
                            'none'
                        ],
                        [
                            "eid9",
                            "display",
                            0,
                            0,
                            "linear",
                            "${Pasted}",
                            'block',
                            'block'
                        ],
                        [
                            "eid10",
                            "display",
                            10000,
                            0,
                            "linear",
                            "${Pasted}",
                            'block',
                            'none'
                        ]
                    ]
                }
            }
        };

    AdobeEdge.registerCompositionDefn(compId, symbols, fonts, scripts, resources, opts);

    if (!window.edge_authoring_mode) AdobeEdge.getComposition(compId).load("boomrang-anim_edgeActions.js");
})("EDGE-495886552");
