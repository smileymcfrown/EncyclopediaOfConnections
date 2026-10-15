### Overview: first two questions

```mermaid
flowchart LR
  q0{"What do you need it to do?"}
  a1["Hold two things together (they stay still) · 226"]
  q0 --> a1
  q2{"What are you joining?"}
  a1 --> q2
  a3["3D-printed parts, or screws, nuts and magnets into a print · 27"]
  q2 --> a3
  class a3 more
  a4["Boards, panels or sheet (wood, plywood, acrylic, sheet metal) · 37"]
  q2 --> a4
  class a4 more
  a5["Tube, rod, pole or aluminium extrusion · 13"]
  q2 --> a5
  class a5 more
  a6["A wheel, gear or arm onto a shaft, or two shafts end to end · 23"]
  q2 --> a6
  class a6 more
  a7["Strap, cord, rope or fabric · 37"]
  q2 --> a7
  class a7 more
  a8["A lid, door or cover that opens and closes · 32"]
  q2 --> a8
  class a8 more
  a9["Something onto a wall, desk, bar, tripod, rail or grid · 24"]
  q2 --> a9
  class a9 more
  a10["Something that has to be gripped or clamped · 13"]
  q2 --> a10
  class a10 more
  a11["Melt them together (weld, braze or solder) · 11"]
  q2 --> a11
  class a11 more
  a12(["Two different kinds of part (e.g. a print onto wood, or a strap onto a tube) · 226"])
  q2 --> a12
  class a12 leaf
  a13["I just want to glue it · 19"]
  q2 --> a13
  class a13 more
  a14["Any solid parts / something else · 20"]
  q2 --> a14
  class a14 more
  a15["Connect wires or power (electrical connections) · 30"]
  q0 --> a15
  q16{"What are you connecting?"}
  a15 --> q16
  a17(["Wires to each other (a splice) · 6"])
  q16 --> a17
  class a17 leaf
  a18["A wire to a board, terminal or device · 10"]
  q16 --> a18
  class a18 more
  a19(["Batteries, docks, and parts that touch or turn (no plug) · 5"])
  q16 --> a19
  class a19 leaf
  a20(["Wires on fabric, paper or a print (sewn, taped or painted on) · 3"])
  q16 --> a20
  class a20 leaf
  a21(["Insulate, protect or route wires (sleeves, strain relief, lacing, hinges) · 5"])
  q16 --> a21
  class a21 leaf
  a22["Let something move (turn, slide, swing or bend) · 98"]
  q0 --> a22
  q23{"How should it move?"}
  a22 --> q23
  a24["Swing or rock, less than a full turn (like a lid or arm) · 17"]
  q23 --> a24
  class a24 more
  a25["Spin round and round (a wheel, roller or shaft) · 23"]
  q23 --> a25
  class a25 more
  a26["Slide in a straight line, or telescope · 18"]
  q23 --> a26
  class a26 more
  a27["Bend or flex (no hinge pin) · 15"]
  q23 --> a27
  class a27 more
  a28(["Swivel or tilt in several directions (ball or universal joint) · 7"])
  q23 --> a28
  class a28 leaf
  a29(["Follow a set path (e.g. swing out and stay level) · 8"])
  q23 --> a29
  class a29 leaf
  a30["Control a movement (one way only, clicks, slips, locks, slows) · 133"]
  q0 --> a30
  q31{"What should it do?"}
  a30 --> q31
  a32["Move one way only (stop it going back) · 31"]
  q31 --> a32
  class a32 more
  a33["Click into set positions · 20"]
  q31 --> a33
  class a33 more
  a34["Slip, click or let go if overloaded · 40"]
  q31 --> a34
  class a34 more
  a35["Stay where I leave it, and let go when I release it · 34"]
  q31 --> a35
  class a35 more
  a36["Snap past a point and stay there (over-centre) · 13"]
  q31 --> a36
  class a36 more
  a37["Slow it down, stop it, or keep its speed steady · 18"]
  q31 --> a37
  class a37 more
  a38["Change a movement (speed, force or kind of motion) · 65"]
  q0 --> a38
  q39{"What change do you need?"}
  a38 --> q39
  a40["Faster, slower or stronger turning · 21"]
  q39 --> a40
  class a40 more
  a41["Turning into straight-line motion, or back · 29"]
  q39 --> a41
  class a41 more
  a42(["Steady turning into steps, or into rocking · 6"])
  q39 --> a42
  class a42 leaf
  a43["A push or pull moved, multiplied or redirected · 9"]
  q39 --> a43
  class a43 more
  a44(["Make movement from air, liquid, suction or heat · 7"])
  q39 --> a44
  class a44 leaf
  a45["Tighten something, or take up slack · 33"]
  q0 --> a45
  q46{"What are you tightening?"}
  a45 --> q46
  a47["A strap, lace, cord or rope · 21"]
  q46 --> a47
  class a47 more
  a48(["A belt, chain or cable in a machine · 6"])
  q46 --> a48
  class a48 leaf
  a49(["Parts clamped or pulled together · 10"])
  q46 --> a49
  class a49 leaf
  a50["Line parts up exactly, or adjust and level them · 12"]
  q0 --> a50
  q51{"What do you need?"}
  a50 --> q51
  a52(["Put it back in exactly the same place every time · 7"])
  q51 --> a52
  class a52 leaf
  a53(["Set a height, gap or position, then hold it · 5"])
  q51 --> a53
  class a53 leaf
  a54(["Fine-tune a tilt or angle with screws · 4"])
  q51 --> a54
  class a54 leaf
  a55["Spring back, or store energy · 18"]
  q0 --> a55
  q56{"How should it push back?"}
  a55 --> q56
  a57(["Push or pull in a straight line · 7"])
  q56 --> a57
  class a57 leaf
  a58(["A printed or bent springy part (flexure) · 8"])
  q56 --> a58
  class a58 leaf
  a59(["Twist back (torsion), or wind up · 8"])
  q56 --> a59
  class a59 leaf
  a60["Seal it, or pass cables, air or liquid through · 65"]
  q0 --> a60
  q61{"What do you need?"}
  a60 --> q61
  a62["Keep water, dust or air out of a joint that does not move · 16"]
  q61 --> a62
  class a62 more
  a63(["Seal round a moving shaft or rod · 4"])
  q61 --> a63
  class a63 leaf
  a64(["Get cables through a wall or past a moving joint · 8"])
  q61 --> a64
  class a64 leaf
  a65["Join hoses, pipes or tubes · 11"]
  q61 --> a65
  class a65 more
  a66["Pump, store or control air or liquid (valves, pumps) · 18"]
  q61 --> a66
  class a66 more
  a67["Hold or let go using power (electric, air or suction) · 37"]
  q0 --> a67
  q68{"What will power it?"}
  a67 --> q68
  a69["Electricity · 24"]
  q68 --> a69
  class a69 more
  a70["Compressed air · 17"]
  q68 --> a70
  class a70 more
  a71["Liquid (hydraulics, water) · 13"]
  q68 --> a71
  class a71 more
  a72(["Suction (vacuum) · 9"])
  q68 --> a72
  class a72 leaf
  classDef leaf fill:#e6f4ea,stroke:#2e7d32
  classDef more fill:#fff4e5,stroke:#b26a00
```

### Branch 1: Hold two things together (they stay still) (226 entries)

```mermaid
flowchart LR
  q73{"What are you joining?"}
  a74["3D-printed parts, or screws, nuts and magnets into a print · 27"]
  q73 --> a74
  q75{"Will you need to take it apart again?"}
  a74 --> q75
  a76(["No, never (permanent) · 10"])
  q75 --> a76
  class a76 leaf
  a77["Yes · 15"]
  q75 --> a77
  q78{"Is there a screw or bolt?"}
  a77 --> q78
  a79(["Yes · 6"])
  q78 --> a79
  class a79 leaf
  a80(["No (clips, pins, rings, magnets) · 9"])
  q78 --> a80
  class a80 leaf
  a81(["It is fabric, chain mail or a folding sheet made in the print · 3"])
  q75 --> a81
  class a81 leaf
  a82["Boards, panels or sheet (wood, plywood, acrylic, sheet metal) · 37"]
  q73 --> a82
  q83{"Will you need to take it apart again?"}
  a82 --> q83
  a84["No, never (permanent) · 18"]
  q83 --> a84
  q85{"What is the sheet made of?"}
  a84 --> q85
  a86(["Wood or plywood · 8"])
  q85 --> a86
  class a86 leaf
  a87(["Sheet metal or plastic sheet · 10"])
  q85 --> a87
  class a87 leaf
  a88["Now and then, with a tool · 16"]
  q83 --> a88
  q89{"What is the sheet made of?"}
  a88 --> q89
  a90(["Wood or plywood · 10"])
  q89 --> a90
  class a90 leaf
  a91(["Sheet metal, plastic or laser-cut sheet · 6"])
  q89 --> a91
  class a91 leaf
  a92(["Often, by hand, without tools · 3"])
  q83 --> a92
  class a92 leaf
  a93["Tube, rod, pole or aluminium extrusion · 13"]
  q73 --> a93
  q94{"Does it carry air or liquid?"}
  a93 --> q94
  a95(["Yes (hoses, pipes and tubing) · 4"])
  q94 --> a95
  class a95 leaf
  a96(["No (frames, poles and rails) · 9"])
  q94 --> a96
  class a96 leaf
  a97["A wheel, gear or arm onto a shaft, or two shafts end to end · 23"]
  q73 --> a97
  q98{"What are you connecting?"}
  a97 --> q98
  a99["A wheel, gear, pulley or arm onto a shaft · 14"]
  q98 --> a99
  q100{"Will you 3D print the part that goes on the shaft?"}
  a99 --> q100
  a101(["Yes · 6"])
  q100 --> a101
  class a101 leaf
  a102(["No, it is metal or bought · 8"])
  q100 --> a102
  class a102 leaf
  a103["Two shafts end to end · 10"]
  q98 --> a103
  q104{"How well do the shafts line up?"}
  a103 --> q104
  a105(["Exactly in line · 3"])
  q104 --> a105
  class a105 leaf
  a106(["A little out of line (needs some give) · 4"])
  q104 --> a106
  class a106 leaf
  a107(["At an angle, or along a bent path · 3"])
  q104 --> a107
  class a107 leaf
  a108["Strap, cord, rope or fabric · 37"]
  q73 --> a108
  q109{"What do you need?"}
  a108 --> q109
  a110(["Close an opening, or attach fabric (zip, hook-and-loop, press stud, button) · 4"])
  q109 --> a110
  class a110 leaf
  a111["Tie, splice or lash it (knots, no hardware) · 10"]
  q109 --> a111
  q112{"What should the knot do?"}
  a111 --> q112
  a113(["Stop a cord pulling through, or finish its end · 3"])
  q112 --> a113
  class a113 leaf
  a114(["Tie it to a post or ring, or join two cords · 3"])
  q112 --> a114
  class a114 leaf
  a115(["Make a loop, or pull it tight and hold it · 4"])
  q112 --> a115
  class a115 leaf
  a116(["Bind or lash things together · 3"])
  q112 --> a116
  class a116 leaf
  a117(["Sew or lace it · 5"])
  q109 --> a117
  class a117 leaf
  a118["Fit a part (buckle, hook, shackle, grommet, rivet) · 19"]
  q109 --> a118
  q119{"What should the part do?"}
  a118 --> q119
  a120(["Hook, link or swivel onto something · 5"])
  q119 --> a120
  class a120 leaf
  a121(["Join or grip strap and cord ends, or hold struts with cord · 5"])
  q119 --> a121
  class a121 leaf
  a122(["Fix it to fabric or leather, or hold a fabric edge · 4"])
  q119 --> a122
  class a122 leaf
  a123["A lid, door or cover that opens and closes · 32"]
  q73 --> a123
  q124{"How should it open?"}
  a123 --> q124
  a125(["It swings open on a hinge, or stays open at an angle · 7"])
  q124 --> a125
  class a125 leaf
  a126(["Twist a lid, knob or fastener · 6"])
  q124 --> a126
  class a126 leaf
  a127["Press, pull or flip a catch or lever · 16"]
  q124 --> a127
  q128{"Should it lock, so only the right person can open it?"}
  a127 --> q128
  a129(["Yes (key, code, hidden catch or safety lock) · 7"])
  q128 --> a129
  class a129 leaf
  a130(["No, it just has to stay shut · 9"])
  q128 --> a130
  class a130 leaf
  a131(["By power (button, remote, timer) · 3"])
  q124 --> a131
  class a131 leaf
  a132["Something onto a wall, desk, bar, tripod, rail or grid · 24"]
  q73 --> a132
  q133{"What is it going onto?"}
  a132 --> q133
  a134["A wall or ceiling · 13"]
  q133 --> a134
  q135{"How should it hold?"}
  a134 --> q135
  a136(["Screws, anchors, hooks or slots · 5"])
  q135 --> a136
  class a136 leaf
  a137(["Magnet or suction · 5"])
  q135 --> a137
  class a137 leaf
  a138(["Sticky tape or pads · 3"])
  q135 --> a138
  class a138 leaf
  a139(["A bar, pole, tube or the edge of a desk · 4"])
  q133 --> a139
  class a139 leaf
  a140(["A tripod, camera or light stand · 3"])
  q133 --> a140
  class a140 leaf
  a141(["A rail, extrusion or grid · 5"])
  q133 --> a141
  class a141 leaf
  a142["Something that has to be gripped or clamped · 13"]
  q73 --> a142
  q143{"Who does the gripping?"}
  a142 --> q143
  a144(["I tighten it by hand (clamp, chuck, wedge) · 7"])
  q143 --> a144
  class a144 leaf
  a145(["A robot or machine (gripper) · 6"])
  q143 --> a145
  class a145 leaf
  a146["Melt them together (weld, braze or solder) · 11"]
  q73 --> a146
  q147{"What are the parts made of?"}
  a146 --> q147
  a148(["Metal · 4"])
  q147 --> a148
  class a148 leaf
  a149(["Plastic, or plastic film and coated fabric · 7"])
  q147 --> a149
  class a149 leaf
  a150(["Two different kinds of part (e.g. a print onto wood, or a strap onto a tube) · 226"])
  q73 --> a150
  class a150 leaf
  a151["I just want to glue it · 19"]
  q73 --> a151
  q152{"What are you gluing?"}
  a151 --> q152
  a153["3D-printed plastic (PLA, PETG, ABS) or resin prints · 12"]
  q152 --> a153
  q154{"What matters most?"}
  a153 --> q154
  a155(["Strongest bond · 6"])
  q154 --> a155
  class a155 leaf
  a156(["Stays flexible, or seals too · 4"])
  q154 --> a156
  class a156 leaf
  a157(["Fills gaps, or builds up a shape · 5"])
  q154 --> a157
  class a157 leaf
  a158(["Can be undone later · 3"])
  q154 --> a158
  class a158 leaf
  a159(["Slippery plastics (polyethylene, polypropylene, silicone) · 7"])
  q152 --> a159
  class a159 leaf
  a160["Wood, paper or card · 13"]
  q152 --> a160
  q161{"What matters most?"}
  a160 --> q161
  a162(["Strongest bond · 7"])
  q161 --> a162
  class a162 leaf
  a163(["Stays flexible, or seals too · 4"])
  q161 --> a163
  class a163 leaf
  a164(["Fills gaps, or builds up a shape · 4"])
  q161 --> a164
  class a164 leaf
  a165(["Can be undone later · 3"])
  q161 --> a165
  class a165 leaf
  a166["Metal or glass · 15"]
  q152 --> a166
  q167{"What matters most?"}
  a166 --> q167
  a168(["Strongest bond · 7"])
  q167 --> a168
  class a168 leaf
  a169(["Stays flexible, or seals too · 5"])
  q167 --> a169
  class a169 leaf
  a170(["Fills gaps, or builds up a shape · 6"])
  q167 --> a170
  class a170 leaf
  a171(["Can be undone later · 5"])
  q167 --> a171
  class a171 leaf
  a172["Rubber, fabric, leather or foam · 13"]
  q152 --> a172
  q173{"What matters most?"}
  a172 --> q173
  a174(["Strongest bond · 5"])
  q173 --> a174
  class a174 leaf
  a175(["Stays flexible, or seals too · 5"])
  q173 --> a175
  class a175 leaf
  a176(["Fills gaps, or builds up a shape · 3"])
  q173 --> a176
  class a176 leaf
  a177(["Can be undone later · 4"])
  q173 --> a177
  class a177 leaf
  a178(["Two different materials (e.g. a print onto wood) · 19"])
  q152 --> a178
  class a178 leaf
  a179["Any solid parts / something else · 20"]
  q73 --> a179
  q180{"Where can you reach?"}
  a179 --> q180
  a181(["Only one side, or only the end of a tube or shaft · 9"])
  q180 --> a181
  class a181 leaf
  a182(["Both sides · 6"])
  q180 --> a182
  class a182 leaf
  a183(["It does not matter · 5"])
  q180 --> a183
  class a183 leaf
  classDef leaf fill:#e6f4ea,stroke:#2e7d32
  classDef more fill:#fff4e5,stroke:#b26a00
```

### Branch 2: Connect wires or power (electrical connections) (30 entries)

```mermaid
flowchart LR
  q184{"What are you connecting?"}
  a185(["Wires to each other (a splice) · 6"])
  q184 --> a185
  class a185 leaf
  a186["A wire to a board, terminal or device · 10"]
  q184 --> a186
  q187{"Will you unplug it often?"}
  a186 --> q187
  a188(["Yes, it plugs in and out · 6"])
  q187 --> a188
  class a188 leaf
  a189(["No, it stays connected (screwed, crimped or wrapped) · 4"])
  q187 --> a189
  class a189 leaf
  a190(["Batteries, docks, and parts that touch or turn (no plug) · 5"])
  q184 --> a190
  class a190 leaf
  a191(["Wires on fabric, paper or a print (sewn, taped or painted on) · 3"])
  q184 --> a191
  class a191 leaf
  a192(["Insulate, protect or route wires (sleeves, strain relief, lacing, hinges) · 5"])
  q184 --> a192
  class a192 leaf
  classDef leaf fill:#e6f4ea,stroke:#2e7d32
  classDef more fill:#fff4e5,stroke:#b26a00
```

### Branch 3: Let something move (turn, slide, swing or bend) (98 entries)

```mermaid
flowchart LR
  q193{"How should it move?"}
  a194["Swing or rock, less than a full turn (like a lid or arm) · 17"]
  q193 --> a194
  q195{"Should it print in one piece?"}
  a194 --> q195
  a196["Yes, print it assembled · 11"]
  q195 --> a196
  q197{"Should it stay where you put it?"}
  a196 --> q197
  a198(["No, swing freely · 7"])
  q197 --> a198
  class a198 leaf
  a199(["Yes: hold, click or spring shut · 4"])
  q197 --> a199
  class a199 leaf
  a200(["No, I will assemble or buy it · 6"])
  q195 --> a200
  class a200 leaf
  a201["Spin round and round (a wheel, roller or shaft) · 23"]
  q193 --> a201
  q202{"What should spin?"}
  a201 --> q202
  a203(["A wheel or part on a fixed axle or table · 9"])
  q202 --> a203
  class a203 leaf
  a204["A shaft driving another shaft · 14"]
  q202 --> a204
  q205{"What else should it do?"}
  a204 --> q205
  a206(["Just pass the turning on · 5"])
  q205 --> a206
  class a206 leaf
  a207(["Turn one way only · 5"])
  q205 --> a207
  class a207 leaf
  a208(["Change speed or split the drive (gears) · 4"])
  q205 --> a208
  class a208 leaf
  a209["Slide in a straight line, or telescope · 18"]
  q193 --> a209
  q210{"What kind of slide?"}
  a209 --> q210
  a211(["A tube or pole that telescopes and locks · 4"])
  q210 --> a211
  class a211 leaf
  a212(["A carriage, drawer or table on a rail · 5"])
  q210 --> a212
  class a212 leaf
  a213(["Pushed along by a screw, chain or crank · 8"])
  q210 --> a213
  class a213 leaf
  a214["Bend or flex (no hinge pin) · 15"]
  q193 --> a214
  q215{"What should the bendy part do?"}
  a214 --> q215
  a216(["Fold or swing like a hinge · 7"])
  q215 --> a216
  class a216 leaf
  a217(["Move in a straight line, or act as a spring · 5"])
  q215 --> a217
  class a217 leaf
  a218(["Grip, or snap between two positions · 3"])
  q215 --> a218
  class a218 leaf
  a219(["Swivel or tilt in several directions (ball or universal joint) · 7"])
  q193 --> a219
  class a219 leaf
  a220(["Follow a set path (e.g. swing out and stay level) · 8"])
  q193 --> a220
  class a220 leaf
  classDef leaf fill:#e6f4ea,stroke:#2e7d32
  classDef more fill:#fff4e5,stroke:#b26a00
```

### Branch 4: Control a movement (one way only, clicks, slips, locks, slows) (133 entries)

```mermaid
flowchart LR
  q221{"What should it do?"}
  a222["Move one way only (stop it going back) · 31"]
  q221 --> a222
  q223{"Does it turn or slide?"}
  a222 --> q223
  a224["Turns · 18"]
  q223 --> a224
  q225{"Is clicking OK?"}
  a224 --> q225
  a226(["Yes, clicks are fine (ratchets) · 7"])
  q225 --> a226
  class a226 leaf
  a227(["No, it must be smooth and silent · 7"])
  q225 --> a227
  class a227 leaf
  a228(["It is for air or liquid (one-way valves) · 4"])
  q225 --> a228
  class a228 leaf
  a229(["Slides · 8"])
  q223 --> a229
  class a229 leaf
  a230(["Bends, or something else · 6"])
  q223 --> a230
  class a230 leaf
  a231["Click into set positions · 20"]
  q221 --> a231
  q232{"Does it turn or slide?"}
  a231 --> q232
  a233["Turns · 14"]
  q232 --> a233
  q234{"What should the clicks do?"}
  a233 --> q234
  a235(["Hold a position I set by hand · 8"])
  q234 --> a235
  class a235 leaf
  a236(["Step forward one position at a time · 6"])
  q234 --> a236
  class a236 leaf
  a237(["Slides, bends or something else · 7"])
  q232 --> a237
  class a237 leaf
  a238["Slip, click or let go if overloaded · 40"]
  q221 --> a238
  q239{"What should happen when it is overloaded?"}
  a238 --> q239
  a240["Slip, and keep going · 20"]
  q239 --> a240
  q241{"Will you 3D print it?"}
  a240 --> q241
  a242(["Yes, or partly · 10"])
  q241 --> a242
  class a242 leaf
  a243(["No, I will buy or machine it · 10"])
  q241 --> a243
  class a243 leaf
  a244(["Click or pop out, then reset by itself · 6"])
  q239 --> a244
  class a244 leaf
  a245(["Pull apart without damage, then refit it by hand · 5"])
  q239 --> a245
  class a245 leaf
  a246(["Break or let go once, on purpose (replace it after) · 6"])
  q239 --> a246
  class a246 leaf
  a247["Stay where I leave it, and let go when I release it · 34"]
  q221 --> a247
  q248{"Does it turn or slide?"}
  a247 --> q248
  a249["Turns · 19"]
  q248 --> a249
  q250{"What should it do?"}
  a249 --> q250
  a251(["Lock so only a person can open it (key, code, trigger) · 8"])
  q250 --> a251
  class a251 leaf
  a252(["Hold a load where it stops (brake or self-locking drive) · 10"])
  q250 --> a252
  class a252 leaf
  a253(["Slides · 8"])
  q248 --> a253
  class a253 leaf
  a254(["Bends, or something else · 9"])
  q248 --> a254
  class a254 leaf
  a255["Snap past a point and stay there (over-centre) · 13"]
  q221 --> a255
  q256{"What is it for?"}
  a255 --> q256
  a257(["Clamp or latch something shut · 5"])
  q256 --> a257
  class a257 leaf
  a258(["Flip between two positions (switch, fold or stay) · 8"])
  q256 --> a258
  class a258 leaf
  a259["Slow it down, stop it, or keep its speed steady · 18"]
  q221 --> a259
  q260{"What do you need?"}
  a259 --> q260
  a261(["Stop it or hold it still (brakes) · 4"])
  q260 --> a261
  class a261 leaf
  a262(["Cushion or smooth it (dampers) · 6"])
  q260 --> a262
  class a262 leaf
  a263(["Keep a steady speed or level · 7"])
  q260 --> a263
  class a263 leaf
  classDef leaf fill:#e6f4ea,stroke:#2e7d32
  classDef more fill:#fff4e5,stroke:#b26a00
```

### Branch 5: Change a movement (speed, force or kind of motion) (65 entries)

```mermaid
flowchart LR
  q264{"What change do you need?"}
  a265["Faster, slower or stronger turning · 21"]
  q264 --> a265
  q266{"How are the input and output shafts arranged?"}
  a265 --> q266
  a267(["Side by side (parallel) · 9"])
  q266 --> a267
  class a267 leaf
  a268(["At an angle (e.g. 90 degrees) · 7"])
  q266 --> a268
  class a268 leaf
  a269(["In line (one straight through the other) · 6"])
  q266 --> a269
  class a269 leaf
  a270(["Far apart, or the path bends (belts, cables, chains) · 3"])
  q266 --> a270
  class a270 leaf
  a271["Turning into straight-line motion, or back · 29"]
  q264 --> a271
  q272{"What kind of straight-line motion?"}
  a271 --> q272
  a273(["A slow, precise push (screws) · 7"])
  q272 --> a273
  class a273 leaf
  a274(["Back and forth, again and again (cranks, cams) · 5"])
  q272 --> a274
  class a274 leaf
  a275(["Long travel, or pulling (rack, belt, chain, cable, rope) · 10"])
  q272 --> a275
  class a275 leaf
  a276(["Steady turning into steps, or into rocking · 6"])
  q264 --> a276
  class a276 leaf
  a277["A push or pull moved, multiplied or redirected · 9"]
  q264 --> a277
  q278{"How?"}
  a277 --> q278
  a279(["Levers and linkages · 5"])
  q278 --> a279
  class a279 leaf
  a280(["Cables, ropes, pulleys or liquid in tubes · 3"])
  q278 --> a280
  class a280 leaf
  a281(["Make movement from air, liquid, suction or heat · 7"])
  q264 --> a281
  class a281 leaf
  classDef leaf fill:#e6f4ea,stroke:#2e7d32
  classDef more fill:#fff4e5,stroke:#b26a00
```

### Branch 6: Tighten something, or take up slack (33 entries)

```mermaid
flowchart LR
  q282{"What are you tightening?"}
  a283["A strap, lace, cord or rope · 21"]
  q282 --> a283
  q284{"How should it hold?"}
  a283 --> q284
  a285(["Click, wind or screw it tighter (ratchet, winch, turnbuckle) · 6"])
  q284 --> a285
  class a285 leaf
  a286(["Grip by friction; release by hand (buckles, cord locks, hitches) · 8"])
  q284 --> a286
  class a286 leaf
  a287(["Pull back by itself (spring or elastic) · 3"])
  q284 --> a287
  class a287 leaf
  a288(["A belt, chain or cable in a machine · 6"])
  q282 --> a288
  class a288 leaf
  a289(["Parts clamped or pulled together · 10"])
  q282 --> a289
  class a289 leaf
  classDef leaf fill:#e6f4ea,stroke:#2e7d32
  classDef more fill:#fff4e5,stroke:#b26a00
```

### Branch 7: Line parts up exactly, or adjust and level them (12 entries)

```mermaid
flowchart LR
  q290{"What do you need?"}
  a291(["Put it back in exactly the same place every time · 7"])
  q290 --> a291
  class a291 leaf
  a292(["Set a height, gap or position, then hold it · 5"])
  q290 --> a292
  class a292 leaf
  a293(["Fine-tune a tilt or angle with screws · 4"])
  q290 --> a293
  class a293 leaf
  classDef leaf fill:#e6f4ea,stroke:#2e7d32
  classDef more fill:#fff4e5,stroke:#b26a00
```

### Branch 8: Spring back, or store energy (18 entries)

```mermaid
flowchart LR
  q294{"How should it push back?"}
  a295(["Push or pull in a straight line · 7"])
  q294 --> a295
  class a295 leaf
  a296(["A printed or bent springy part (flexure) · 8"])
  q294 --> a296
  class a296 leaf
  a297(["Twist back (torsion), or wind up · 8"])
  q294 --> a297
  class a297 leaf
  classDef leaf fill:#e6f4ea,stroke:#2e7d32
  classDef more fill:#fff4e5,stroke:#b26a00
```

### Branch 9: Seal it, or pass cables, air or liquid through (65 entries)

```mermaid
flowchart LR
  q298{"What do you need?"}
  a299["Keep water, dust or air out of a joint that does not move · 16"]
  q298 --> a299
  q300{"Will you need to take it apart again?"}
  a299 --> q300
  a301["No, never · 10"]
  q300 --> a301
  q302{"What are the parts?"}
  a301 --> q302
  a303(["Metal sheet, tube or pipe · 6"])
  q302 --> a303
  class a303 leaf
  a304(["Plastic, fabric or film, or a gap to fill · 4"])
  q302 --> a304
  class a304 leaf
  a305(["Yes · 6"])
  q300 --> a305
  class a305 leaf
  a306(["Seal round a moving shaft or rod · 4"])
  q298 --> a306
  class a306 leaf
  a307(["Get cables through a wall or past a moving joint · 8"])
  q298 --> a307
  class a307 leaf
  a308["Join hoses, pipes or tubes · 11"]
  q298 --> a308
  q309{"How is it joined?"}
  a308 --> q309
  a310(["Screwed together (threads or a nut) · 4"])
  q309 --> a310
  class a310 leaf
  a311(["Pushed on, clamped or clicked together · 4"])
  q309 --> a311
  class a311 leaf
  a312(["Fused, soldered or brazed for good · 3"])
  q309 --> a312
  class a312 leaf
  a313["Pump, store or control air or liquid (valves, pumps) · 18"]
  q298 --> a313
  q314{"What should it do?"}
  a313 --> q314
  a315(["Push air or liquid along (pumps) · 7"])
  q314 --> a315
  class a315 leaf
  a316(["Let flow one way only, or let off pressure (safety) · 4"])
  q314 --> a316
  class a316 leaf
  a317(["Switch, set or store the flow (valves, regulators, tanks) · 7"])
  q314 --> a317
  class a317 leaf
  classDef leaf fill:#e6f4ea,stroke:#2e7d32
  classDef more fill:#fff4e5,stroke:#b26a00
```

### Branch 10: Hold or let go using power (electric, air or suction) (37 entries)

```mermaid
flowchart LR
  q318{"What will power it?"}
  a319["Electricity · 24"]
  q318 --> a319
  q320{"What should it do?"}
  a319 --> q320
  a321(["Lock, latch or hold by magnet, and let go on command · 6"])
  q320 --> a321
  class a321 leaf
  a322(["Move or push something (motors, actuators, artificial muscles) · 7"])
  q320 --> a322
  class a322 leaf
  a323(["Pump, switch or control air or liquid · 7"])
  q320 --> a323
  class a323 leaf
  a324(["Brake, clutch or grip · 4"])
  q320 --> a324
  class a324 leaf
  a325["Compressed air · 17"]
  q318 --> a325
  q326{"What should it do?"}
  a325 --> q326
  a327(["Push, pull, bend or turn something (cylinders, air muscles) · 7"])
  q326 --> a327
  class a327 leaf
  a328(["Grip or lift something (grippers, air bearings) · 5"])
  q326 --> a328
  class a328 leaf
  a329(["Switch, pump or control the air (valves, pumps) · 5"])
  q326 --> a329
  class a329 leaf
  a330["Liquid (hydraulics, water) · 13"]
  q318 --> a330
  q331{"What should it do?"}
  a330 --> q331
  a332(["Push, lift, bend or fold something · 8"])
  q331 --> a332
  class a332 leaf
  a333(["Pump, switch or control the liquid · 5"])
  q331 --> a333
  class a333 leaf
  a334(["Suction (vacuum) · 9"])
  q318 --> a334
  class a334 leaf
  classDef leaf fill:#e6f4ea,stroke:#2e7d32
  classDef more fill:#fff4e5,stroke:#b26a00
```