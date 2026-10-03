### Overview: first two questions

```mermaid
flowchart LR
  q0{"What do you need it to do?"}
  a1["Hold two things together (they stay still) · 165"]
  q0 --> a1
  q2{"What are you joining?"}
  a1 --> q2
  a3["3D-printed parts, or screws, nuts and magnets into a print · 24"]
  q2 --> a3
  class a3 more
  a4["Boards, panels or sheet (wood, plywood, acrylic, sheet metal) · 30"]
  q2 --> a4
  class a4 more
  a5(["Tube, rod, pole or aluminium extrusion · 8"])
  q2 --> a5
  class a5 leaf
  a6["A wheel, gear or arm onto a shaft, or two shafts end to end · 23"]
  q2 --> a6
  class a6 more
  a7["Strap, cord, rope or fabric · 10"]
  q2 --> a7
  class a7 more
  a8["A lid, door or cover that opens and closes · 27"]
  q2 --> a8
  class a8 more
  a9["Something onto a wall, rail, desk or grid · 17"]
  q2 --> a9
  class a9 more
  a10["Something that has to be gripped or clamped · 11"]
  q2 --> a10
  class a10 more
  a11["I just want to glue it · 18"]
  q2 --> a11
  class a11 more
  a12["Any solid parts / something else · 17"]
  q2 --> a12
  class a12 more
  a13["Let something move (turn, slide, swing or bend) · 89"]
  q0 --> a13
  q14{"How should it move?"}
  a13 --> q14
  a15["Swing or rock, less than a full turn (like a lid or arm) · 17"]
  q14 --> a15
  class a15 more
  a16["Spin round and round (a wheel, roller or shaft) · 19"]
  q14 --> a16
  class a16 more
  a17["Slide in a straight line, or telescope · 18"]
  q14 --> a17
  class a17 more
  a18["Bend or flex (no hinge pin) · 14"]
  q14 --> a18
  class a18 more
  a19["Swivel or tilt in several directions · 13"]
  q14 --> a19
  class a19 more
  a20["Control a movement (one way only, clicks, slips, locks, slows) · 111"]
  q0 --> a20
  q21{"What should it do?"}
  a20 --> q21
  a22["Move one way only (stop it going back) · 29"]
  q21 --> a22
  class a22 more
  a23["Click into set positions · 20"]
  q21 --> a23
  class a23 more
  a24["Slip, click or let go if overloaded · 19"]
  q21 --> a24
  class a24 more
  a25["Stay where I leave it, and let go when I release it · 31"]
  q21 --> a25
  class a25 more
  a26["Snap past a point and stay there (over-centre) · 12"]
  q21 --> a26
  class a26 more
  a27["Slow it down, stop it, or keep its speed steady · 17"]
  q21 --> a27
  class a27 more
  a28["Change a movement (speed, force or kind of motion) · 65"]
  q0 --> a28
  q29{"What change do you need?"}
  a28 --> q29
  a30["Faster, slower or stronger turning · 21"]
  q29 --> a30
  class a30 more
  a31["Turning into straight-line motion, or back · 27"]
  q29 --> a31
  class a31 more
  a32(["Steady turning into steps, or into rocking · 7"])
  q29 --> a32
  class a32 leaf
  a33["A push or pull moved, multiplied or redirected · 14"]
  q29 --> a33
  class a33 more
  a34(["Make movement from air, liquid, suction or heat · 8"])
  q29 --> a34
  class a34 leaf
  a35["Tighten something, or take up slack · 23"]
  q0 --> a35
  q36{"What are you tightening?"}
  a35 --> q36
  a37["A strap, lace, cord or rope · 13"]
  q36 --> a37
  class a37 more
  a38(["A belt, chain or cable in a machine · 6"])
  q36 --> a38
  class a38 leaf
  a39(["Parts clamped or pulled together · 10"])
  q36 --> a39
  class a39 leaf
  a40(["Line parts up exactly, every time · 7"])
  q0 --> a40
  class a40 leaf
  a41["Spring back, or store energy · 17"]
  q0 --> a41
  q42{"How should it push back?"}
  a41 --> q42
  a43(["Push or pull in a straight line · 6"])
  q42 --> a43
  class a43 leaf
  a44(["A printed or bent springy part (flexure) · 8"])
  q42 --> a44
  class a44 leaf
  a45(["Twist back (torsion), or wind up · 8"])
  q42 --> a45
  class a45 leaf
  a46["Seal it, or pass cables, air or liquid through · 49"]
  q0 --> a46
  q47{"What do you need?"}
  a46 --> q47
  a48["Keep water, dust or air out of a joint that does not move · 11"]
  q47 --> a48
  class a48 more
  a49(["Seal round a moving shaft or rod · 4"])
  q47 --> a49
  class a49 leaf
  a50(["Get cables through a wall or past a moving joint · 5"])
  q47 --> a50
  class a50 leaf
  a51(["Join hoses, pipes or tubes · 4"])
  q47 --> a51
  class a51 leaf
  a52["Pump, store or control air or liquid (valves, pumps) · 18"]
  q47 --> a52
  class a52 more
  a53["Hold or let go using power (electric, air or suction) · 36"]
  q0 --> a53
  q54{"What will power it?"}
  a53 --> q54
  a55["Electricity · 11"]
  q54 --> a55
  class a55 more
  a56(["Compressed air · 8"])
  q54 --> a56
  class a56 leaf
  a57(["Liquid (hydraulics, water) · 6"])
  q54 --> a57
  class a57 leaf
  a58(["Suction (vacuum) · 6"])
  q54 --> a58
  class a58 leaf
  classDef leaf fill:#e6f4ea,stroke:#2e7d32
  classDef more fill:#fff4e5,stroke:#b26a00
```

### Branch 1: Hold two things together (they stay still) (165 entries)

```mermaid
flowchart LR
  q59{"What are you joining?"}
  a60["3D-printed parts, or screws, nuts and magnets into a print · 24"]
  q59 --> a60
  q61{"Will you need to take it apart again?"}
  a60 --> q61
  a62(["No, never (permanent) · 10"])
  q61 --> a62
  class a62 leaf
  a63["Now and then, with a tool · 11"]
  q61 --> a63
  q64{"Is there a screw or bolt?"}
  a63 --> q64
  a65(["Yes · 6"])
  q64 --> a65
  class a65 leaf
  a66(["No (clips, pins, rings) · 5"])
  q64 --> a66
  class a66 leaf
  a67(["Often, by hand, without tools · 3"])
  q61 --> a67
  class a67 leaf
  a68["Boards, panels or sheet (wood, plywood, acrylic, sheet metal) · 30"]
  q59 --> a68
  q69{"Will you need to take it apart again?"}
  a68 --> q69
  a70["No, never (permanent) · 16"]
  q69 --> a70
  q71{"What is the sheet made of?"}
  a70 --> q71
  a72(["Wood or plywood · 6"])
  q71 --> a72
  class a72 leaf
  a73(["Sheet metal or plastic sheet · 10"])
  q71 --> a73
  class a73 leaf
  a74["Now and then, with a tool · 10"]
  q69 --> a74
  q75{"What is the sheet made of?"}
  a74 --> q75
  a76(["Wood or plywood · 6"])
  q75 --> a76
  class a76 leaf
  a77(["Sheet metal, plastic or laser-cut sheet · 4"])
  q75 --> a77
  class a77 leaf
  a78(["Often, by hand, without tools · 4"])
  q69 --> a78
  class a78 leaf
  a79(["Tube, rod, pole or aluminium extrusion · 8"])
  q59 --> a79
  class a79 leaf
  a80["A wheel, gear or arm onto a shaft, or two shafts end to end · 23"]
  q59 --> a80
  q81{"What are you connecting?"}
  a80 --> q81
  a82["A wheel, gear, pulley or arm onto a shaft · 12"]
  q81 --> a82
  q83{"Will you 3D print the part that goes on the shaft?"}
  a82 --> q83
  a84(["Yes · 6"])
  q83 --> a84
  class a84 leaf
  a85(["No, it is metal or bought · 6"])
  q83 --> a85
  class a85 leaf
  a86["Two shafts end to end · 12"]
  q81 --> a86
  q87{"How well do the shafts line up?"}
  a86 --> q87
  a88(["Exactly in line · 5"])
  q87 --> a88
  class a88 leaf
  a89(["A little out of line (needs some give) · 4"])
  q87 --> a89
  class a89 leaf
  a90(["At an angle, or along a bent path · 3"])
  q87 --> a90
  class a90 leaf
  a91["Strap, cord, rope or fabric · 10"]
  q59 --> a91
  q92{"Do you need to adjust the length or tightness?"}
  a91 --> q92
  a93(["Yes · 6"])
  q92 --> a93
  class a93 leaf
  a94(["No, just join or close it · 4"])
  q92 --> a94
  class a94 leaf
  a95["A lid, door or cover that opens and closes · 27"]
  q59 --> a95
  q96{"How should it open?"}
  a95 --> q96
  a97(["It swings open on a hinge · 5"])
  q96 --> a97
  class a97 leaf
  a98(["Twist a lid, knob or fastener · 5"])
  q96 --> a98
  class a98 leaf
  a99["Press, pull or flip a catch or lever · 14"]
  q96 --> a99
  q100{"Should it lock, so only the right person can open it?"}
  a99 --> q100
  a101(["Yes (key, code, hidden catch or safety lock) · 5"])
  q100 --> a101
  class a101 leaf
  a102(["No, it just has to stay shut · 9"])
  q100 --> a102
  class a102 leaf
  a103(["By power (button, remote, timer) · 3"])
  q96 --> a103
  class a103 leaf
  a104["Something onto a wall, rail, desk or grid · 17"]
  q59 --> a104
  q105{"How should it hold?"}
  a104 --> q105
  a106(["Hooks, slots, clips or pins · 9"])
  q105 --> a106
  class a106 leaf
  a107(["Magnet or suction · 5"])
  q105 --> a107
  class a107 leaf
  a108(["Sticky tape or pads · 3"])
  q105 --> a108
  class a108 leaf
  a109["Something that has to be gripped or clamped · 11"]
  q59 --> a109
  q110{"Who does the gripping?"}
  a109 --> q110
  a111(["I tighten it by hand (clamp, chuck, wedge) · 6"])
  q110 --> a111
  class a111 leaf
  a112(["A robot or machine (gripper) · 5"])
  q110 --> a112
  class a112 leaf
  a113["I just want to glue it · 18"]
  q59 --> a113
  q114{"What are you gluing?"}
  a113 --> q114
  a115["3D-printed plastic (PLA, PETG, ABS) or resin prints · 15"]
  q114 --> a115
  q116{"What matters most?"}
  a115 --> q116
  a117(["Strongest bond · 8"])
  q116 --> a117
  class a117 leaf
  a118(["Stays flexible, or seals too · 5"])
  q116 --> a118
  class a118 leaf
  a119(["Fills gaps, or builds up a shape · 6"])
  q116 --> a119
  class a119 leaf
  a120(["Can be undone later · 4"])
  q116 --> a120
  class a120 leaf
  a121(["Slippery plastics (polyethylene, polypropylene, silicone) · 6"])
  q114 --> a121
  class a121 leaf
  a122["Wood, paper or card · 12"]
  q114 --> a122
  q123{"What matters most?"}
  a122 --> q123
  a124(["Strongest bond · 7"])
  q123 --> a124
  class a124 leaf
  a125(["Stays flexible, or seals too · 3"])
  q123 --> a125
  class a125 leaf
  a126(["Fills gaps, or builds up a shape · 4"])
  q123 --> a126
  class a126 leaf
  a127(["Can be undone later · 3"])
  q123 --> a127
  class a127 leaf
  a128["Metal or glass · 15"]
  q114 --> a128
  q129{"What matters most?"}
  a128 --> q129
  a130(["Strongest bond · 7"])
  q129 --> a130
  class a130 leaf
  a131(["Stays flexible, or seals too · 5"])
  q129 --> a131
  class a131 leaf
  a132(["Fills gaps, or builds up a shape · 6"])
  q129 --> a132
  class a132 leaf
  a133(["Can be undone later · 5"])
  q129 --> a133
  class a133 leaf
  a134["Rubber, fabric, leather or foam · 12"]
  q114 --> a134
  q135{"What matters most?"}
  a134 --> q135
  a136(["Strongest bond · 5"])
  q135 --> a136
  class a136 leaf
  a137(["Stays flexible, or seals too · 4"])
  q135 --> a137
  class a137 leaf
  a138(["Fills gaps, or builds up a shape · 3"])
  q135 --> a138
  class a138 leaf
  a139(["Can be undone later · 4"])
  q135 --> a139
  class a139 leaf
  a140["Any solid parts / something else · 17"]
  q59 --> a140
  q141{"Where can you reach?"}
  a140 --> q141
  a142(["Only one side, or only the end of a tube or shaft · 6"])
  q141 --> a142
  class a142 leaf
  a143(["Both sides · 5"])
  q141 --> a143
  class a143 leaf
  a144(["It does not matter · 6"])
  q141 --> a144
  class a144 leaf
  classDef leaf fill:#e6f4ea,stroke:#2e7d32
  classDef more fill:#fff4e5,stroke:#b26a00
```

### Branch 2: Let something move (turn, slide, swing or bend) (89 entries)

```mermaid
flowchart LR
  q145{"How should it move?"}
  a146["Swing or rock, less than a full turn (like a lid or arm) · 17"]
  q145 --> a146
  q147{"Should it print in one piece?"}
  a146 --> q147
  a148["Yes, print it assembled · 11"]
  q147 --> a148
  q149{"Should it stay where you put it?"}
  a148 --> q149
  a150(["No, swing freely · 7"])
  q149 --> a150
  class a150 leaf
  a151(["Yes: hold, click or spring shut · 4"])
  q149 --> a151
  class a151 leaf
  a152(["No, I will assemble or buy it · 6"])
  q147 --> a152
  class a152 leaf
  a153["Spin round and round (a wheel, roller or shaft) · 19"]
  q145 --> a153
  q154{"What should spin?"}
  a153 --> q154
  a155(["A wheel or part on a fixed axle or table · 5"])
  q154 --> a155
  class a155 leaf
  a156["A shaft driving another shaft · 14"]
  q154 --> a156
  q157{"What else should it do?"}
  a156 --> q157
  a158(["Just pass the turning on · 5"])
  q157 --> a158
  class a158 leaf
  a159(["Turn one way only · 5"])
  q157 --> a159
  class a159 leaf
  a160(["Change speed or split the drive (gears) · 4"])
  q157 --> a160
  class a160 leaf
  a161["Slide in a straight line, or telescope · 18"]
  q145 --> a161
  q162{"What kind of slide?"}
  a161 --> q162
  a163(["A tube or pole that telescopes and locks · 4"])
  q162 --> a163
  class a163 leaf
  a164(["A carriage, drawer or table on a rail · 5"])
  q162 --> a164
  class a164 leaf
  a165(["Pushed along by a screw, chain or crank · 8"])
  q162 --> a165
  class a165 leaf
  a166["Bend or flex (no hinge pin) · 14"]
  q145 --> a166
  q167{"What should the bendy part do?"}
  a166 --> q167
  a168(["Fold or swing like a hinge · 7"])
  q167 --> a168
  class a168 leaf
  a169(["Move in a straight line, or act as a spring · 5"])
  q167 --> a169
  class a169 leaf
  a170(["Grip, or snap between two positions · 3"])
  q167 --> a170
  class a170 leaf
  a171["Swivel or tilt in several directions · 13"]
  q145 --> a171
  q172{"What kind?"}
  a171 --> q172
  a173(["A ball or universal joint · 4"])
  q172 --> a173
  class a173 leaf
  a174(["A linkage that moves a point along a path · 6"])
  q172 --> a174
  class a174 leaf
  classDef leaf fill:#e6f4ea,stroke:#2e7d32
  classDef more fill:#fff4e5,stroke:#b26a00
```

### Branch 3: Control a movement (one way only, clicks, slips, locks, slows) (111 entries)

```mermaid
flowchart LR
  q175{"What should it do?"}
  a176["Move one way only (stop it going back) · 29"]
  q175 --> a176
  q177{"Does it turn or slide?"}
  a176 --> q177
  a178["Turns · 17"]
  q177 --> a178
  q179{"Is clicking OK?"}
  a178 --> q179
  a180(["Yes, clicks are fine (ratchets) · 7"])
  q179 --> a180
  class a180 leaf
  a181(["No, it must be smooth and silent · 6"])
  q179 --> a181
  class a181 leaf
  a182(["It is for air or liquid (one-way valves) · 4"])
  q179 --> a182
  class a182 leaf
  a183(["Slides · 8"])
  q177 --> a183
  class a183 leaf
  a184(["Bends, or something else · 5"])
  q177 --> a184
  class a184 leaf
  a185["Click into set positions · 20"]
  q175 --> a185
  q186{"Does it turn or slide?"}
  a185 --> q186
  a187["Turns · 14"]
  q186 --> a187
  q188{"What should the clicks do?"}
  a187 --> q188
  a189(["Hold a position I set by hand · 8"])
  q188 --> a189
  class a189 leaf
  a190(["Step forward one position at a time · 6"])
  q188 --> a190
  class a190 leaf
  a191(["Slides, bends or something else · 7"])
  q186 --> a191
  class a191 leaf
  a192["Slip, click or let go if overloaded · 19"]
  q175 --> a192
  q193{"What should happen when it is overloaded?"}
  a192 --> q193
  a194["Slip, and keep going · 12"]
  q193 --> a194
  q195{"Will you 3D print it?"}
  a194 --> q195
  a196(["Yes, or partly · 6"])
  q195 --> a196
  class a196 leaf
  a197(["No, I will buy or machine it · 6"])
  q195 --> a197
  class a197 leaf
  a198(["Click or pop out, then reset by itself · 6"])
  q193 --> a198
  class a198 leaf
  a199(["Break or let go once, on purpose (replace it after) · 3"])
  q193 --> a199
  class a199 leaf
  a200["Stay where I leave it, and let go when I release it · 31"]
  q175 --> a200
  q201{"Does it turn or slide?"}
  a200 --> q201
  a202["Turns · 17"]
  q201 --> a202
  q203{"What should it do?"}
  a202 --> q203
  a204(["Lock so only a person can open it (key, code, trigger) · 7"])
  q203 --> a204
  class a204 leaf
  a205(["Hold a load where it stops (brake or self-locking drive) · 10"])
  q203 --> a205
  class a205 leaf
  a206(["Slides · 8"])
  q201 --> a206
  class a206 leaf
  a207(["Bends, or something else · 8"])
  q201 --> a207
  class a207 leaf
  a208["Snap past a point and stay there (over-centre) · 12"]
  q175 --> a208
  q209{"What is it for?"}
  a208 --> q209
  a210(["Clamp or latch something shut · 5"])
  q209 --> a210
  class a210 leaf
  a211(["Flip between two positions (switch, fold or stay) · 7"])
  q209 --> a211
  class a211 leaf
  a212["Slow it down, stop it, or keep its speed steady · 17"]
  q175 --> a212
  q213{"What do you need?"}
  a212 --> q213
  a214(["Stop it or hold it still (brakes) · 4"])
  q213 --> a214
  class a214 leaf
  a215(["Cushion or smooth it (dampers) · 6"])
  q213 --> a215
  class a215 leaf
  a216(["Keep a steady speed or level · 7"])
  q213 --> a216
  class a216 leaf
  classDef leaf fill:#e6f4ea,stroke:#2e7d32
  classDef more fill:#fff4e5,stroke:#b26a00
```

### Branch 4: Change a movement (speed, force or kind of motion) (65 entries)

```mermaid
flowchart LR
  q217{"What change do you need?"}
  a218["Faster, slower or stronger turning · 21"]
  q217 --> a218
  q219{"How are the input and output shafts arranged?"}
  a218 --> q219
  a220(["Side by side (parallel) · 10"])
  q219 --> a220
  class a220 leaf
  a221(["At an angle (e.g. 90 degrees) · 7"])
  q219 --> a221
  class a221 leaf
  a222(["In line (one straight through the other) · 7"])
  q219 --> a222
  class a222 leaf
  a223(["Far apart, or the path bends (belts, cables, chains) · 5"])
  q219 --> a223
  class a223 leaf
  a224["Turning into straight-line motion, or back · 27"]
  q217 --> a224
  q225{"What kind of straight-line motion?"}
  a224 --> q225
  a226(["A slow, precise push (screws) · 7"])
  q225 --> a226
  class a226 leaf
  a227(["Back and forth, again and again (cranks, cams) · 5"])
  q225 --> a227
  class a227 leaf
  a228(["Long travel, or pulling (rack, belt, chain, cable, rope) · 10"])
  q225 --> a228
  class a228 leaf
  a229(["Steady turning into steps, or into rocking · 7"])
  q217 --> a229
  class a229 leaf
  a230["A push or pull moved, multiplied or redirected · 14"]
  q217 --> a230
  q231{"How?"}
  a230 --> q231
  a232(["Levers and linkages · 9"])
  q231 --> a232
  class a232 leaf
  a233(["Cables, ropes, pulleys or liquid in tubes · 5"])
  q231 --> a233
  class a233 leaf
  a234(["Make movement from air, liquid, suction or heat · 8"])
  q217 --> a234
  class a234 leaf
  classDef leaf fill:#e6f4ea,stroke:#2e7d32
  classDef more fill:#fff4e5,stroke:#b26a00
```

### Branch 5: Tighten something, or take up slack (23 entries)

```mermaid
flowchart LR
  q235{"What are you tightening?"}
  a236["A strap, lace, cord or rope · 13"]
  q235 --> a236
  q237{"How should it hold?"}
  a236 --> q237
  a238(["Click, wind or screw it tighter (ratchet, winch, turnbuckle) · 6"])
  q237 --> a238
  class a238 leaf
  a239(["Grip by friction; release by hand (buckles, cord locks) · 4"])
  q237 --> a239
  class a239 leaf
  a240(["Pull back by itself (spring or elastic) · 3"])
  q237 --> a240
  class a240 leaf
  a241(["A belt, chain or cable in a machine · 6"])
  q235 --> a241
  class a241 leaf
  a242(["Parts clamped or pulled together · 10"])
  q235 --> a242
  class a242 leaf
  classDef leaf fill:#e6f4ea,stroke:#2e7d32
  classDef more fill:#fff4e5,stroke:#b26a00
```

### Branch 6: Line parts up exactly, every time (7 entries)

This answer goes straight to a shortlist; no further question.


### Branch 7: Spring back, or store energy (17 entries)

```mermaid
flowchart LR
  q243{"How should it push back?"}
  a244(["Push or pull in a straight line · 6"])
  q243 --> a244
  class a244 leaf
  a245(["A printed or bent springy part (flexure) · 8"])
  q243 --> a245
  class a245 leaf
  a246(["Twist back (torsion), or wind up · 8"])
  q243 --> a246
  class a246 leaf
  classDef leaf fill:#e6f4ea,stroke:#2e7d32
  classDef more fill:#fff4e5,stroke:#b26a00
```

### Branch 8: Seal it, or pass cables, air or liquid through (49 entries)

```mermaid
flowchart LR
  q247{"What do you need?"}
  a248["Keep water, dust or air out of a joint that does not move · 11"]
  q247 --> a248
  q249{"Will you need to take it apart again?"}
  a248 --> q249
  a250(["No, never · 6"])
  q249 --> a250
  class a250 leaf
  a251(["Yes · 5"])
  q249 --> a251
  class a251 leaf
  a252(["Seal round a moving shaft or rod · 4"])
  q247 --> a252
  class a252 leaf
  a253(["Get cables through a wall or past a moving joint · 5"])
  q247 --> a253
  class a253 leaf
  a254(["Join hoses, pipes or tubes · 4"])
  q247 --> a254
  class a254 leaf
  a255["Pump, store or control air or liquid (valves, pumps) · 18"]
  q247 --> a255
  q256{"What should it do?"}
  a255 --> q256
  a257(["Push air or liquid along (pumps) · 7"])
  q256 --> a257
  class a257 leaf
  a258(["Let flow one way only, or let off pressure (safety) · 4"])
  q256 --> a258
  class a258 leaf
  a259(["Switch, set or store the flow (valves, regulators, tanks) · 7"])
  q256 --> a259
  class a259 leaf
  classDef leaf fill:#e6f4ea,stroke:#2e7d32
  classDef more fill:#fff4e5,stroke:#b26a00
```

### Branch 9: Hold or let go using power (electric, air or suction) (36 entries)

```mermaid
flowchart LR
  q260{"What will power it?"}
  a261["Electricity · 11"]
  q260 --> a261
  q262{"What should it do?"}
  a261 --> q262
  a263(["Lock, latch or hold by magnet, and let go on command · 6"])
  q262 --> a263
  class a263 leaf
  a264(["Brake, engage, switch or move something · 5"])
  q262 --> a264
  class a264 leaf
  a265(["Compressed air · 8"])
  q260 --> a265
  class a265 leaf
  a266(["Liquid (hydraulics, water) · 6"])
  q260 --> a266
  class a266 leaf
  a267(["Suction (vacuum) · 6"])
  q260 --> a267
  class a267 leaf
  classDef leaf fill:#e6f4ea,stroke:#2e7d32
  classDef more fill:#fff4e5,stroke:#b26a00
```