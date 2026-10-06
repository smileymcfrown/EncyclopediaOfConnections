### Overview: first two questions

```mermaid
flowchart LR
  q0{"What do you need it to do?"}
  a1["Hold two things together (they stay still) · 225"]
  q0 --> a1
  q2{"What are you joining?"}
  a1 --> q2
  a3["3D-printed parts, or screws, nuts and magnets into a print · 28"]
  q2 --> a3
  class a3 more
  a4["Boards, panels or sheet (wood, plywood, acrylic, sheet metal) · 40"]
  q2 --> a4
  class a4 more
  a5["Tube, rod, pole or aluminium extrusion · 12"]
  q2 --> a5
  class a5 more
  a6["A wheel, gear or arm onto a shaft, or two shafts end to end · 26"]
  q2 --> a6
  class a6 more
  a7["Strap, cord, rope or fabric · 32"]
  q2 --> a7
  class a7 more
  a8["A lid, door or cover that opens and closes · 29"]
  q2 --> a8
  class a8 more
  a9["Something onto a wall, desk, bar, tripod, rail or grid · 26"]
  q2 --> a9
  class a9 more
  a10["Something that has to be gripped or clamped · 12"]
  q2 --> a10
  class a10 more
  a11["Melt them together (weld, braze or solder) · 11"]
  q2 --> a11
  class a11 more
  a12["I just want to glue it · 19"]
  q2 --> a12
  class a12 more
  a13["Any solid parts / something else · 18"]
  q2 --> a13
  class a13 more
  a14["Connect wires or power (electrical connections) · 30"]
  q0 --> a14
  q15{"What are you connecting?"}
  a14 --> q15
  a16(["Wires to each other (a splice) · 6"])
  q15 --> a16
  class a16 leaf
  a17["A wire to a board, terminal or device · 10"]
  q15 --> a17
  class a17 more
  a18(["Batteries, docks, and parts that touch or turn (no plug) · 5"])
  q15 --> a18
  class a18 leaf
  a19(["Wires on fabric, paper or a print (sewn, taped or painted on) · 3"])
  q15 --> a19
  class a19 leaf
  a20(["Insulate, protect or route wires (sleeves, strain relief, lacing, hinges) · 5"])
  q15 --> a20
  class a20 leaf
  a21["Let something move (turn, slide, swing or bend) · 98"]
  q0 --> a21
  q22{"How should it move?"}
  a21 --> q22
  a23["Swing or rock, less than a full turn (like a lid or arm) · 17"]
  q22 --> a23
  class a23 more
  a24["Spin round and round (a wheel, roller or shaft) · 23"]
  q22 --> a24
  class a24 more
  a25["Slide in a straight line, or telescope · 18"]
  q22 --> a25
  class a25 more
  a26["Bend or flex (no hinge pin) · 15"]
  q22 --> a26
  class a26 more
  a27(["Swivel or tilt in several directions (ball or universal joint) · 7"])
  q22 --> a27
  class a27 leaf
  a28(["Follow a set path (e.g. swing out and stay level) · 8"])
  q22 --> a28
  class a28 leaf
  a29["Control a movement (one way only, clicks, slips, locks, slows) · 123"]
  q0 --> a29
  q30{"What should it do?"}
  a29 --> q30
  a31["Move one way only (stop it going back) · 31"]
  q30 --> a31
  class a31 more
  a32["Click into set positions · 20"]
  q30 --> a32
  class a32 more
  a33["Slip, click or let go if overloaded · 21"]
  q30 --> a33
  class a33 more
  a34["Stay where I leave it, and let go when I release it · 34"]
  q30 --> a34
  class a34 more
  a35["Snap past a point and stay there (over-centre) · 13"]
  q30 --> a35
  class a35 more
  a36["Slow it down, stop it, or keep its speed steady · 18"]
  q30 --> a36
  class a36 more
  a37["Change a movement (speed, force or kind of motion) · 65"]
  q0 --> a37
  q38{"What change do you need?"}
  a37 --> q38
  a39["Faster, slower or stronger turning · 21"]
  q38 --> a39
  class a39 more
  a40["Turning into straight-line motion, or back · 27"]
  q38 --> a40
  class a40 more
  a41(["Steady turning into steps, or into rocking · 7"])
  q38 --> a41
  class a41 leaf
  a42["A push or pull moved, multiplied or redirected · 14"]
  q38 --> a42
  class a42 more
  a43(["Make movement from air, liquid, suction or heat · 8"])
  q38 --> a43
  class a43 leaf
  a44["Tighten something, or take up slack · 33"]
  q0 --> a44
  q45{"What are you tightening?"}
  a44 --> q45
  a46["A strap, lace, cord or rope · 21"]
  q45 --> a46
  class a46 more
  a47(["A belt, chain or cable in a machine · 6"])
  q45 --> a47
  class a47 leaf
  a48(["Parts clamped or pulled together · 10"])
  q45 --> a48
  class a48 leaf
  a49["Line parts up exactly, or adjust and level them · 12"]
  q0 --> a49
  q50{"What do you need?"}
  a49 --> q50
  a51(["Put it back in exactly the same place every time · 7"])
  q50 --> a51
  class a51 leaf
  a52(["Set a height, gap or position, then hold it · 5"])
  q50 --> a52
  class a52 leaf
  a53(["Fine-tune a tilt or angle with screws · 4"])
  q50 --> a53
  class a53 leaf
  a54["Spring back, or store energy · 18"]
  q0 --> a54
  q55{"How should it push back?"}
  a54 --> q55
  a56(["Push or pull in a straight line · 7"])
  q55 --> a56
  class a56 leaf
  a57(["A printed or bent springy part (flexure) · 8"])
  q55 --> a57
  class a57 leaf
  a58(["Twist back (torsion), or wind up · 8"])
  q55 --> a58
  class a58 leaf
  a59["Seal it, or pass cables, air or liquid through · 65"]
  q0 --> a59
  q60{"What do you need?"}
  a59 --> q60
  a61["Keep water, dust or air out of a joint that does not move · 16"]
  q60 --> a61
  class a61 more
  a62(["Seal round a moving shaft or rod · 4"])
  q60 --> a62
  class a62 leaf
  a63(["Get cables through a wall or past a moving joint · 8"])
  q60 --> a63
  class a63 leaf
  a64["Join hoses, pipes or tubes · 11"]
  q60 --> a64
  class a64 more
  a65["Pump, store or control air or liquid (valves, pumps) · 18"]
  q60 --> a65
  class a65 more
  a66["Hold or let go using power (electric, air or suction) · 37"]
  q0 --> a66
  q67{"What will power it?"}
  a66 --> q67
  a68["Electricity · 11"]
  q67 --> a68
  class a68 more
  a69(["Compressed air · 8"])
  q67 --> a69
  class a69 leaf
  a70(["Liquid (hydraulics, water) · 6"])
  q67 --> a70
  class a70 leaf
  a71(["Suction (vacuum) · 6"])
  q67 --> a71
  class a71 leaf
  classDef leaf fill:#e6f4ea,stroke:#2e7d32
  classDef more fill:#fff4e5,stroke:#b26a00
```

### Branch 1: Hold two things together (they stay still) (225 entries)

```mermaid
flowchart LR
  q72{"What are you joining?"}
  a73["3D-printed parts, or screws, nuts and magnets into a print · 28"]
  q72 --> a73
  q74{"Will you need to take it apart again?"}
  a73 --> q74
  a75(["No, never (permanent) · 10"])
  q74 --> a75
  class a75 leaf
  a76["Yes · 15"]
  q74 --> a76
  q77{"Is there a screw or bolt?"}
  a76 --> q77
  a78(["Yes · 6"])
  q77 --> a78
  class a78 leaf
  a79(["No (clips, pins, rings, magnets) · 9"])
  q77 --> a79
  class a79 leaf
  a80(["It is fabric, chain mail or a folding sheet made in the print · 3"])
  q74 --> a80
  class a80 leaf
  a81["Boards, panels or sheet (wood, plywood, acrylic, sheet metal) · 40"]
  q72 --> a81
  q82{"Will you need to take it apart again?"}
  a81 --> q82
  a83["No, never (permanent) · 18"]
  q82 --> a83
  q84{"What is the sheet made of?"}
  a83 --> q84
  a85(["Wood or plywood · 8"])
  q84 --> a85
  class a85 leaf
  a86(["Sheet metal or plastic sheet · 10"])
  q84 --> a86
  class a86 leaf
  a87["Now and then, with a tool · 18"]
  q82 --> a87
  q88{"What is the sheet made of?"}
  a87 --> q88
  a89(["Wood or plywood · 9"])
  q88 --> a89
  class a89 leaf
  a90(["Sheet metal, plastic or laser-cut sheet · 9"])
  q88 --> a90
  class a90 leaf
  a91(["Often, by hand, without tools · 4"])
  q82 --> a91
  class a91 leaf
  a92["Tube, rod, pole or aluminium extrusion · 12"]
  q72 --> a92
  q93{"Does it carry air or liquid?"}
  a92 --> q93
  a94(["Yes (hoses, pipes and tubing) · 4"])
  q93 --> a94
  class a94 leaf
  a95(["No (frames, poles and rails) · 8"])
  q93 --> a95
  class a95 leaf
  a96["A wheel, gear or arm onto a shaft, or two shafts end to end · 26"]
  q72 --> a96
  q97{"What are you connecting?"}
  a96 --> q97
  a98["A wheel, gear, pulley or arm onto a shaft · 15"]
  q97 --> a98
  q99{"Will you 3D print the part that goes on the shaft?"}
  a98 --> q99
  a100(["Yes · 6"])
  q99 --> a100
  class a100 leaf
  a101(["No, it is metal or bought · 9"])
  q99 --> a101
  class a101 leaf
  a102["Two shafts end to end · 12"]
  q97 --> a102
  q103{"How well do the shafts line up?"}
  a102 --> q103
  a104(["Exactly in line · 5"])
  q103 --> a104
  class a104 leaf
  a105(["A little out of line (needs some give) · 4"])
  q103 --> a105
  class a105 leaf
  a106(["At an angle, or along a bent path · 3"])
  q103 --> a106
  class a106 leaf
  a107["Strap, cord, rope or fabric · 32"]
  q72 --> a107
  q108{"What do you need?"}
  a107 --> q108
  a109(["Close an opening, or attach fabric (zip, hook-and-loop, press stud, button) · 4"])
  q108 --> a109
  class a109 leaf
  a110["Tie, splice or lash it (knots, no hardware) · 10"]
  q108 --> a110
  q111{"What should the knot do?"}
  a110 --> q111
  a112(["Stop a cord pulling through, or finish its end · 3"])
  q111 --> a112
  class a112 leaf
  a113(["Tie it to a post or ring, or join two cords · 3"])
  q111 --> a113
  class a113 leaf
  a114(["Make a loop, or pull it tight and hold it · 4"])
  q111 --> a114
  class a114 leaf
  a115(["Bind or lash things together · 3"])
  q111 --> a115
  class a115 leaf
  a116(["Sew or lace it · 4"])
  q108 --> a116
  class a116 leaf
  a117["Fit a part (buckle, hook, shackle, grommet, rivet) · 14"]
  q108 --> a117
  q118{"What should the part do?"}
  a117 --> q118
  a119(["Hook, link or swivel onto something · 5"])
  q118 --> a119
  class a119 leaf
  a120(["Join or grip strap and cord ends, or hold struts with cord · 5"])
  q118 --> a120
  class a120 leaf
  a121(["Fix it to fabric or leather, or hold a fabric edge · 4"])
  q118 --> a121
  class a121 leaf
  a122["A lid, door or cover that opens and closes · 29"]
  q72 --> a122
  q123{"How should it open?"}
  a122 --> q123
  a124(["It swings open on a hinge, or stays open at an angle · 6"])
  q123 --> a124
  class a124 leaf
  a125(["Twist a lid, knob or fastener · 6"])
  q123 --> a125
  class a125 leaf
  a126["Press, pull or flip a catch or lever · 14"]
  q123 --> a126
  q127{"Should it lock, so only the right person can open it?"}
  a126 --> q127
  a128(["Yes (key, code, hidden catch or safety lock) · 5"])
  q127 --> a128
  class a128 leaf
  a129(["No, it just has to stay shut · 9"])
  q127 --> a129
  class a129 leaf
  a130(["By power (button, remote, timer) · 3"])
  q123 --> a130
  class a130 leaf
  a131["Something onto a wall, desk, bar, tripod, rail or grid · 26"]
  q72 --> a131
  q132{"What is it going onto?"}
  a131 --> q132
  a133["A wall or ceiling · 15"]
  q132 --> a133
  q134{"How should it hold?"}
  a133 --> q134
  a135(["Screws, anchors, hooks or slots · 7"])
  q134 --> a135
  class a135 leaf
  a136(["Magnet or suction · 5"])
  q134 --> a136
  class a136 leaf
  a137(["Sticky tape or pads · 3"])
  q134 --> a137
  class a137 leaf
  a138(["A bar, pole, tube or the edge of a desk · 4"])
  q132 --> a138
  class a138 leaf
  a139(["A tripod, camera or light stand · 3"])
  q132 --> a139
  class a139 leaf
  a140(["A rail, extrusion or grid · 6"])
  q132 --> a140
  class a140 leaf
  a141["Something that has to be gripped or clamped · 12"]
  q72 --> a141
  q142{"Who does the gripping?"}
  a141 --> q142
  a143(["I tighten it by hand (clamp, chuck, wedge) · 6"])
  q142 --> a143
  class a143 leaf
  a144(["A robot or machine (gripper) · 6"])
  q142 --> a144
  class a144 leaf
  a145["Melt them together (weld, braze or solder) · 11"]
  q72 --> a145
  q146{"What are the parts made of?"}
  a145 --> q146
  a147(["Metal · 4"])
  q146 --> a147
  class a147 leaf
  a148(["Plastic, or plastic film and coated fabric · 7"])
  q146 --> a148
  class a148 leaf
  a149["I just want to glue it · 19"]
  q72 --> a149
  q150{"What are you gluing?"}
  a149 --> q150
  a151["3D-printed plastic (PLA, PETG, ABS) or resin prints · 15"]
  q150 --> a151
  q152{"What matters most?"}
  a151 --> q152
  a153(["Strongest bond · 8"])
  q152 --> a153
  class a153 leaf
  a154(["Stays flexible, or seals too · 5"])
  q152 --> a154
  class a154 leaf
  a155(["Fills gaps, or builds up a shape · 6"])
  q152 --> a155
  class a155 leaf
  a156(["Can be undone later · 4"])
  q152 --> a156
  class a156 leaf
  a157(["Slippery plastics (polyethylene, polypropylene, silicone) · 6"])
  q150 --> a157
  class a157 leaf
  a158["Wood, paper or card · 13"]
  q150 --> a158
  q159{"What matters most?"}
  a158 --> q159
  a160(["Strongest bond · 7"])
  q159 --> a160
  class a160 leaf
  a161(["Stays flexible, or seals too · 3"])
  q159 --> a161
  class a161 leaf
  a162(["Fills gaps, or builds up a shape · 4"])
  q159 --> a162
  class a162 leaf
  a163(["Can be undone later · 3"])
  q159 --> a163
  class a163 leaf
  a164["Metal or glass · 15"]
  q150 --> a164
  q165{"What matters most?"}
  a164 --> q165
  a166(["Strongest bond · 7"])
  q165 --> a166
  class a166 leaf
  a167(["Stays flexible, or seals too · 5"])
  q165 --> a167
  class a167 leaf
  a168(["Fills gaps, or builds up a shape · 6"])
  q165 --> a168
  class a168 leaf
  a169(["Can be undone later · 5"])
  q165 --> a169
  class a169 leaf
  a170["Rubber, fabric, leather or foam · 13"]
  q150 --> a170
  q171{"What matters most?"}
  a170 --> q171
  a172(["Strongest bond · 5"])
  q171 --> a172
  class a172 leaf
  a173(["Stays flexible, or seals too · 4"])
  q171 --> a173
  class a173 leaf
  a174(["Fills gaps, or builds up a shape · 3"])
  q171 --> a174
  class a174 leaf
  a175(["Can be undone later · 4"])
  q171 --> a175
  class a175 leaf
  a176["Any solid parts / something else · 18"]
  q72 --> a176
  q177{"Where can you reach?"}
  a176 --> q177
  a178(["Only one side, or only the end of a tube or shaft · 9"])
  q177 --> a178
  class a178 leaf
  a179(["Both sides · 4"])
  q177 --> a179
  class a179 leaf
  a180(["It does not matter · 5"])
  q177 --> a180
  class a180 leaf
  classDef leaf fill:#e6f4ea,stroke:#2e7d32
  classDef more fill:#fff4e5,stroke:#b26a00
```

### Branch 2: Connect wires or power (electrical connections) (30 entries)

```mermaid
flowchart LR
  q181{"What are you connecting?"}
  a182(["Wires to each other (a splice) · 6"])
  q181 --> a182
  class a182 leaf
  a183["A wire to a board, terminal or device · 10"]
  q181 --> a183
  q184{"Will you unplug it often?"}
  a183 --> q184
  a185(["Yes, it plugs in and out · 6"])
  q184 --> a185
  class a185 leaf
  a186(["No, it stays connected (screwed, crimped or wrapped) · 4"])
  q184 --> a186
  class a186 leaf
  a187(["Batteries, docks, and parts that touch or turn (no plug) · 5"])
  q181 --> a187
  class a187 leaf
  a188(["Wires on fabric, paper or a print (sewn, taped or painted on) · 3"])
  q181 --> a188
  class a188 leaf
  a189(["Insulate, protect or route wires (sleeves, strain relief, lacing, hinges) · 5"])
  q181 --> a189
  class a189 leaf
  classDef leaf fill:#e6f4ea,stroke:#2e7d32
  classDef more fill:#fff4e5,stroke:#b26a00
```

### Branch 3: Let something move (turn, slide, swing or bend) (98 entries)

```mermaid
flowchart LR
  q190{"How should it move?"}
  a191["Swing or rock, less than a full turn (like a lid or arm) · 17"]
  q190 --> a191
  q192{"Should it print in one piece?"}
  a191 --> q192
  a193["Yes, print it assembled · 11"]
  q192 --> a193
  q194{"Should it stay where you put it?"}
  a193 --> q194
  a195(["No, swing freely · 7"])
  q194 --> a195
  class a195 leaf
  a196(["Yes: hold, click or spring shut · 4"])
  q194 --> a196
  class a196 leaf
  a197(["No, I will assemble or buy it · 6"])
  q192 --> a197
  class a197 leaf
  a198["Spin round and round (a wheel, roller or shaft) · 23"]
  q190 --> a198
  q199{"What should spin?"}
  a198 --> q199
  a200(["A wheel or part on a fixed axle or table · 9"])
  q199 --> a200
  class a200 leaf
  a201["A shaft driving another shaft · 14"]
  q199 --> a201
  q202{"What else should it do?"}
  a201 --> q202
  a203(["Just pass the turning on · 5"])
  q202 --> a203
  class a203 leaf
  a204(["Turn one way only · 5"])
  q202 --> a204
  class a204 leaf
  a205(["Change speed or split the drive (gears) · 4"])
  q202 --> a205
  class a205 leaf
  a206["Slide in a straight line, or telescope · 18"]
  q190 --> a206
  q207{"What kind of slide?"}
  a206 --> q207
  a208(["A tube or pole that telescopes and locks · 4"])
  q207 --> a208
  class a208 leaf
  a209(["A carriage, drawer or table on a rail · 5"])
  q207 --> a209
  class a209 leaf
  a210(["Pushed along by a screw, chain or crank · 8"])
  q207 --> a210
  class a210 leaf
  a211["Bend or flex (no hinge pin) · 15"]
  q190 --> a211
  q212{"What should the bendy part do?"}
  a211 --> q212
  a213(["Fold or swing like a hinge · 7"])
  q212 --> a213
  class a213 leaf
  a214(["Move in a straight line, or act as a spring · 5"])
  q212 --> a214
  class a214 leaf
  a215(["Grip, or snap between two positions · 3"])
  q212 --> a215
  class a215 leaf
  a216(["Swivel or tilt in several directions (ball or universal joint) · 7"])
  q190 --> a216
  class a216 leaf
  a217(["Follow a set path (e.g. swing out and stay level) · 8"])
  q190 --> a217
  class a217 leaf
  classDef leaf fill:#e6f4ea,stroke:#2e7d32
  classDef more fill:#fff4e5,stroke:#b26a00
```

### Branch 4: Control a movement (one way only, clicks, slips, locks, slows) (123 entries)

```mermaid
flowchart LR
  q218{"What should it do?"}
  a219["Move one way only (stop it going back) · 31"]
  q218 --> a219
  q220{"Does it turn or slide?"}
  a219 --> q220
  a221["Turns · 18"]
  q220 --> a221
  q222{"Is clicking OK?"}
  a221 --> q222
  a223(["Yes, clicks are fine (ratchets) · 7"])
  q222 --> a223
  class a223 leaf
  a224(["No, it must be smooth and silent · 7"])
  q222 --> a224
  class a224 leaf
  a225(["It is for air or liquid (one-way valves) · 4"])
  q222 --> a225
  class a225 leaf
  a226(["Slides · 8"])
  q220 --> a226
  class a226 leaf
  a227(["Bends, or something else · 6"])
  q220 --> a227
  class a227 leaf
  a228["Click into set positions · 20"]
  q218 --> a228
  q229{"Does it turn or slide?"}
  a228 --> q229
  a230["Turns · 14"]
  q229 --> a230
  q231{"What should the clicks do?"}
  a230 --> q231
  a232(["Hold a position I set by hand · 8"])
  q231 --> a232
  class a232 leaf
  a233(["Step forward one position at a time · 6"])
  q231 --> a233
  class a233 leaf
  a234(["Slides, bends or something else · 7"])
  q229 --> a234
  class a234 leaf
  a235["Slip, click or let go if overloaded · 21"]
  q218 --> a235
  q236{"What should happen when it is overloaded?"}
  a235 --> q236
  a237["Slip, and keep going · 12"]
  q236 --> a237
  q238{"Will you 3D print it?"}
  a237 --> q238
  a239(["Yes, or partly · 6"])
  q238 --> a239
  class a239 leaf
  a240(["No, I will buy or machine it · 6"])
  q238 --> a240
  class a240 leaf
  a241(["Click or pop out, then reset by itself · 6"])
  q236 --> a241
  class a241 leaf
  a242(["Break or let go once, on purpose (replace it after) · 5"])
  q236 --> a242
  class a242 leaf
  a243["Stay where I leave it, and let go when I release it · 34"]
  q218 --> a243
  q244{"Does it turn or slide?"}
  a243 --> q244
  a245["Turns · 19"]
  q244 --> a245
  q246{"What should it do?"}
  a245 --> q246
  a247(["Lock so only a person can open it (key, code, trigger) · 8"])
  q246 --> a247
  class a247 leaf
  a248(["Hold a load where it stops (brake or self-locking drive) · 10"])
  q246 --> a248
  class a248 leaf
  a249(["Slides · 8"])
  q244 --> a249
  class a249 leaf
  a250(["Bends, or something else · 9"])
  q244 --> a250
  class a250 leaf
  a251["Snap past a point and stay there (over-centre) · 13"]
  q218 --> a251
  q252{"What is it for?"}
  a251 --> q252
  a253(["Clamp or latch something shut · 5"])
  q252 --> a253
  class a253 leaf
  a254(["Flip between two positions (switch, fold or stay) · 8"])
  q252 --> a254
  class a254 leaf
  a255["Slow it down, stop it, or keep its speed steady · 18"]
  q218 --> a255
  q256{"What do you need?"}
  a255 --> q256
  a257(["Stop it or hold it still (brakes) · 4"])
  q256 --> a257
  class a257 leaf
  a258(["Cushion or smooth it (dampers) · 6"])
  q256 --> a258
  class a258 leaf
  a259(["Keep a steady speed or level · 7"])
  q256 --> a259
  class a259 leaf
  classDef leaf fill:#e6f4ea,stroke:#2e7d32
  classDef more fill:#fff4e5,stroke:#b26a00
```

### Branch 5: Change a movement (speed, force or kind of motion) (65 entries)

```mermaid
flowchart LR
  q260{"What change do you need?"}
  a261["Faster, slower or stronger turning · 21"]
  q260 --> a261
  q262{"How are the input and output shafts arranged?"}
  a261 --> q262
  a263(["Side by side (parallel) · 10"])
  q262 --> a263
  class a263 leaf
  a264(["At an angle (e.g. 90 degrees) · 7"])
  q262 --> a264
  class a264 leaf
  a265(["In line (one straight through the other) · 7"])
  q262 --> a265
  class a265 leaf
  a266(["Far apart, or the path bends (belts, cables, chains) · 5"])
  q262 --> a266
  class a266 leaf
  a267["Turning into straight-line motion, or back · 27"]
  q260 --> a267
  q268{"What kind of straight-line motion?"}
  a267 --> q268
  a269(["A slow, precise push (screws) · 7"])
  q268 --> a269
  class a269 leaf
  a270(["Back and forth, again and again (cranks, cams) · 5"])
  q268 --> a270
  class a270 leaf
  a271(["Long travel, or pulling (rack, belt, chain, cable, rope) · 10"])
  q268 --> a271
  class a271 leaf
  a272(["Steady turning into steps, or into rocking · 7"])
  q260 --> a272
  class a272 leaf
  a273["A push or pull moved, multiplied or redirected · 14"]
  q260 --> a273
  q274{"How?"}
  a273 --> q274
  a275(["Levers and linkages · 9"])
  q274 --> a275
  class a275 leaf
  a276(["Cables, ropes, pulleys or liquid in tubes · 5"])
  q274 --> a276
  class a276 leaf
  a277(["Make movement from air, liquid, suction or heat · 8"])
  q260 --> a277
  class a277 leaf
  classDef leaf fill:#e6f4ea,stroke:#2e7d32
  classDef more fill:#fff4e5,stroke:#b26a00
```

### Branch 6: Tighten something, or take up slack (33 entries)

```mermaid
flowchart LR
  q278{"What are you tightening?"}
  a279["A strap, lace, cord or rope · 21"]
  q278 --> a279
  q280{"How should it hold?"}
  a279 --> q280
  a281(["Click, wind or screw it tighter (ratchet, winch, turnbuckle) · 6"])
  q280 --> a281
  class a281 leaf
  a282(["Grip by friction; release by hand (buckles, cord locks, hitches) · 8"])
  q280 --> a282
  class a282 leaf
  a283(["Pull back by itself (spring or elastic) · 3"])
  q280 --> a283
  class a283 leaf
  a284(["A belt, chain or cable in a machine · 6"])
  q278 --> a284
  class a284 leaf
  a285(["Parts clamped or pulled together · 10"])
  q278 --> a285
  class a285 leaf
  classDef leaf fill:#e6f4ea,stroke:#2e7d32
  classDef more fill:#fff4e5,stroke:#b26a00
```

### Branch 7: Line parts up exactly, or adjust and level them (12 entries)

```mermaid
flowchart LR
  q286{"What do you need?"}
  a287(["Put it back in exactly the same place every time · 7"])
  q286 --> a287
  class a287 leaf
  a288(["Set a height, gap or position, then hold it · 5"])
  q286 --> a288
  class a288 leaf
  a289(["Fine-tune a tilt or angle with screws · 4"])
  q286 --> a289
  class a289 leaf
  classDef leaf fill:#e6f4ea,stroke:#2e7d32
  classDef more fill:#fff4e5,stroke:#b26a00
```

### Branch 8: Spring back, or store energy (18 entries)

```mermaid
flowchart LR
  q290{"How should it push back?"}
  a291(["Push or pull in a straight line · 7"])
  q290 --> a291
  class a291 leaf
  a292(["A printed or bent springy part (flexure) · 8"])
  q290 --> a292
  class a292 leaf
  a293(["Twist back (torsion), or wind up · 8"])
  q290 --> a293
  class a293 leaf
  classDef leaf fill:#e6f4ea,stroke:#2e7d32
  classDef more fill:#fff4e5,stroke:#b26a00
```

### Branch 9: Seal it, or pass cables, air or liquid through (65 entries)

```mermaid
flowchart LR
  q294{"What do you need?"}
  a295["Keep water, dust or air out of a joint that does not move · 16"]
  q294 --> a295
  q296{"Will you need to take it apart again?"}
  a295 --> q296
  a297["No, never · 10"]
  q296 --> a297
  q298{"What are the parts?"}
  a297 --> q298
  a299(["Metal sheet, tube or pipe · 6"])
  q298 --> a299
  class a299 leaf
  a300(["Plastic, fabric or film, or a gap to fill · 4"])
  q298 --> a300
  class a300 leaf
  a301(["Yes · 6"])
  q296 --> a301
  class a301 leaf
  a302(["Seal round a moving shaft or rod · 4"])
  q294 --> a302
  class a302 leaf
  a303(["Get cables through a wall or past a moving joint · 8"])
  q294 --> a303
  class a303 leaf
  a304["Join hoses, pipes or tubes · 11"]
  q294 --> a304
  q305{"How is it joined?"}
  a304 --> q305
  a306(["Screwed together (threads or a nut) · 4"])
  q305 --> a306
  class a306 leaf
  a307(["Pushed on, clamped or clicked together · 4"])
  q305 --> a307
  class a307 leaf
  a308(["Fused, soldered or brazed for good · 3"])
  q305 --> a308
  class a308 leaf
  a309["Pump, store or control air or liquid (valves, pumps) · 18"]
  q294 --> a309
  q310{"What should it do?"}
  a309 --> q310
  a311(["Push air or liquid along (pumps) · 7"])
  q310 --> a311
  class a311 leaf
  a312(["Let flow one way only, or let off pressure (safety) · 4"])
  q310 --> a312
  class a312 leaf
  a313(["Switch, set or store the flow (valves, regulators, tanks) · 7"])
  q310 --> a313
  class a313 leaf
  classDef leaf fill:#e6f4ea,stroke:#2e7d32
  classDef more fill:#fff4e5,stroke:#b26a00
```

### Branch 10: Hold or let go using power (electric, air or suction) (37 entries)

```mermaid
flowchart LR
  q314{"What will power it?"}
  a315["Electricity · 11"]
  q314 --> a315
  q316{"What should it do?"}
  a315 --> q316
  a317(["Lock, latch or hold by magnet, and let go on command · 6"])
  q316 --> a317
  class a317 leaf
  a318(["Brake, engage, switch or move something · 5"])
  q316 --> a318
  class a318 leaf
  a319(["Compressed air · 8"])
  q314 --> a319
  class a319 leaf
  a320(["Liquid (hydraulics, water) · 6"])
  q314 --> a320
  class a320 leaf
  a321(["Suction (vacuum) · 6"])
  q314 --> a321
  class a321 leaf
  classDef leaf fill:#e6f4ea,stroke:#2e7d32
  classDef more fill:#fff4e5,stroke:#b26a00
```