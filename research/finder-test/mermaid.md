### Overview: first two questions

```mermaid
flowchart LR
  q0{"What do you need it to do?"}
  a1["Hold two things together (they stay still) · 257"]
  q0 --> a1
  q2{"What are you joining?"}
  a1 --> q2
  a3["3D-printed parts, or screws, nuts and magnets into a print · 28"]
  q2 --> a3
  class a3 more
  a4["Boards, panels or sheet (wood, acrylic, metal, card, foam board, glass) · 52"]
  q2 --> a4
  class a4 more
  a5["Tube, rod, pole or aluminium extrusion · 16"]
  q2 --> a5
  class a5 more
  a6["A wheel, gear or arm onto a shaft, or two shafts end to end · 23"]
  q2 --> a6
  class a6 more
  a7["Strap, cord, rope or fabric · 38"]
  q2 --> a7
  class a7 more
  a8["A lid, door or cover that opens and closes · 36"]
  q2 --> a8
  class a8 more
  a9["Something onto a wall, desk, bar, tripod, rail or grid · 25"]
  q2 --> a9
  class a9 more
  a10["Something that has to be gripped or clamped · 13"]
  q2 --> a10
  class a10 more
  a11["Melt them together (weld, braze or solder) · 14"]
  q2 --> a11
  class a11 more
  a12(["Two different kinds of part (e.g. a print onto wood, or a strap onto a tube) · 257"])
  q2 --> a12
  class a12 leaf
  a13["I just want to glue it · 22"]
  q2 --> a13
  class a13 more
  a14["Any solid parts / something else · 27"]
  q2 --> a14
  class a14 more
  a15["Connect wires or power (electrical connections) · 30"]
  q0 --> a15
  q16{"What are you connecting?"}
  a15 --> q16
  a17(["Wires to each other (a splice) · 7"])
  q16 --> a17
  class a17 leaf
  a18["A wire to a board, terminal or device · 12"]
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
  a22["Let something move (turn, slide, swing or bend) · 111"]
  q0 --> a22
  q23{"How should it move?"}
  a22 --> q23
  a24["Swing or rock, less than a full turn (like a lid or arm) · 25"]
  q23 --> a24
  class a24 more
  a25["Spin round and round (a wheel, roller or shaft) · 23"]
  q23 --> a25
  class a25 more
  a26["Slide in a straight line, or telescope · 18"]
  q23 --> a26
  class a26 more
  a27["Bend or flex (no hinge pin) · 17"]
  q23 --> a27
  class a27 more
  a28(["Swivel or tilt in several directions (ball or universal joint) · 7"])
  q23 --> a28
  class a28 leaf
  a29(["Follow a set path (e.g. swing out and stay level) · 7"])
  q23 --> a29
  class a29 leaf
  a30(["Pop up, slide or turn as a card or page opens (paper) · 5"])
  q23 --> a30
  class a30 leaf
  a31["Control a movement (one way only, clicks, slips, locks, slows) · 134"]
  q0 --> a31
  q32{"What should it do?"}
  a31 --> q32
  a33["Move one way only (stop it going back) · 31"]
  q32 --> a33
  class a33 more
  a34["Click into set positions · 21"]
  q32 --> a34
  class a34 more
  a35["Slip, click or let go if overloaded · 40"]
  q32 --> a35
  class a35 more
  a36["Stay where I leave it, and let go when I release it · 34"]
  q32 --> a36
  class a36 more
  a37["Snap past a point and stay there (over-centre) · 15"]
  q32 --> a37
  class a37 more
  a38["Slow it down, stop it, or keep its speed steady · 18"]
  q32 --> a38
  class a38 more
  a39["Change a movement (speed, force or kind of motion) · 78"]
  q0 --> a39
  q40{"What change do you need?"}
  a39 --> q40
  a41["Faster, slower or stronger turning · 25"]
  q40 --> a41
  class a41 more
  a42["Turning into straight-line motion, or back · 33"]
  q40 --> a42
  class a42 more
  a43(["Steady turning into steps, or into rocking · 6"])
  q40 --> a43
  class a43 leaf
  a44["A push or pull moved, multiplied or redirected · 12"]
  q40 --> a44
  class a44 more
  a45(["Make movement from air, liquid, suction or heat · 7"])
  q40 --> a45
  class a45 leaf
  a46["Drive several things from one, or combine several into one · 22"]
  q40 --> a46
  class a46 more
  a47["Tighten something, or take up slack · 33"]
  q0 --> a47
  q48{"What are you tightening?"}
  a47 --> q48
  a49["A strap, lace, cord or rope · 22"]
  q48 --> a49
  class a49 more
  a50(["A belt, chain or cable in a machine · 3"])
  q48 --> a50
  class a50 leaf
  a51(["Parts clamped or pulled together · 9"])
  q48 --> a51
  class a51 leaf
  a52["Line parts up exactly, or adjust and level them · 12"]
  q0 --> a52
  q53{"What do you need?"}
  a52 --> q53
  a54(["Put it back in exactly the same place every time · 7"])
  q53 --> a54
  class a54 leaf
  a55(["Set a height, gap or position, then hold it · 7"])
  q53 --> a55
  class a55 leaf
  a56(["Fine-tune a tilt or angle with screws · 5"])
  q53 --> a56
  class a56 leaf
  a57["Spring back, or store energy · 19"]
  q0 --> a57
  q58{"How should it push back?"}
  a57 --> q58
  a59(["Push or pull in a straight line · 7"])
  q58 --> a59
  class a59 leaf
  a60(["A printed or bent springy part (flexure) · 8"])
  q58 --> a60
  class a60 leaf
  a61(["Twist back (torsion) · 7"])
  q58 --> a61
  class a61 leaf
  a62(["Wind up or store energy, then let it go (clock spring, flywheel, trigger) · 6"])
  q58 --> a62
  class a62 leaf
  a63["Seal it, or pass cables, air or liquid through · 67"]
  q0 --> a63
  q64{"What do you need?"}
  a63 --> q64
  a65["Keep water, dust or air out of a joint that does not move · 16"]
  q64 --> a65
  class a65 more
  a66(["Seal round a moving shaft or rod · 4"])
  q64 --> a66
  class a66 leaf
  a67(["Get cables through a wall or past a moving joint · 7"])
  q64 --> a67
  class a67 leaf
  a68["Join hoses, pipes or tubes · 11"]
  q64 --> a68
  class a68 more
  a69["Pump, store or control air or liquid (valves, pumps) · 18"]
  q64 --> a69
  class a69 more
  a70["Hold or let go using power (electric, air or suction) · 39"]
  q0 --> a70
  q71{"What will power it?"}
  a70 --> q71
  a72["Electricity · 26"]
  q71 --> a72
  class a72 more
  a73["Compressed air · 17"]
  q71 --> a73
  class a73 more
  a74["Liquid (hydraulics, water) · 13"]
  q71 --> a74
  class a74 more
  a75(["Suction (vacuum) · 9"])
  q71 --> a75
  class a75 leaf
  classDef leaf fill:#e6f4ea,stroke:#2e7d32
  classDef more fill:#fff4e5,stroke:#b26a00
```

### Branch 1: Hold two things together (they stay still) (257 entries)

```mermaid
flowchart LR
  q76{"What are you joining?"}
  a77["3D-printed parts, or screws, nuts and magnets into a print · 28"]
  q76 --> a77
  q78{"Will you need to take it apart again?"}
  a77 --> q78
  a79(["No, never (permanent) · 9"])
  q78 --> a79
  class a79 leaf
  a80["Yes · 17"]
  q78 --> a80
  q81{"Is there a screw or bolt?"}
  a80 --> q81
  a82(["Yes · 7"])
  q81 --> a82
  class a82 leaf
  a83(["No (clips, pins, rings, magnets) · 10"])
  q81 --> a83
  class a83 leaf
  a84(["It is fabric, chain mail or a folding sheet made in the print · 3"])
  q78 --> a84
  class a84 leaf
  a85["Boards, panels or sheet (wood, acrylic, metal, card, foam board, glass) · 52"]
  q76 --> a85
  q86{"Will you need to take it apart again?"}
  a85 --> q86
  a87["No, never (permanent) · 24"]
  q86 --> a87
  q88{"What is the sheet made of?"}
  a87 --> q88
  a89(["Wood or plywood · 10"])
  q88 --> a89
  class a89 leaf
  a90(["Sheet metal · 8"])
  q88 --> a90
  class a90 leaf
  a91(["Plastic sheet (acrylic, or laser-cut sheet) · 7"])
  q88 --> a91
  class a91 leaf
  a92(["Paper, card or foam board · 5"])
  q88 --> a92
  class a92 leaf
  a93["Now and then, with a tool · 24"]
  q86 --> a93
  q94{"What is the sheet made of?"}
  a93 --> q94
  a95(["Wood or plywood · 10"])
  q94 --> a95
  class a95 leaf
  a96(["Sheet metal, plastic or laser-cut sheet · 10"])
  q94 --> a96
  class a96 leaf
  a97(["Paper, card or foam board · 4"])
  q94 --> a97
  class a97 leaf
  a98(["Glass or mirror · 3"])
  q94 --> a98
  class a98 leaf
  a99(["Often, by hand, without tools · 4"])
  q86 --> a99
  class a99 leaf
  a100["Tube, rod, pole or aluminium extrusion · 16"]
  q76 --> a100
  q101{"Does it carry air or liquid?"}
  a100 --> q101
  a102(["Yes (hoses, pipes and tubing) · 3"])
  q101 --> a102
  class a102 leaf
  a103["No (frames, poles and rails) · 11"]
  q101 --> a103
  q104{"Where does it join the tube?"}
  a103 --> q104
  a105(["At the end (into or over the end of the tube) · 6"])
  q104 --> a105
  class a105 leaf
  a106(["Along the side, or onto a slot or rail · 5"])
  q104 --> a106
  class a106 leaf
  a107["A wheel, gear or arm onto a shaft, or two shafts end to end · 23"]
  q76 --> a107
  q108{"What are you connecting?"}
  a107 --> q108
  a109["A wheel, gear, pulley or arm onto a shaft · 13"]
  q108 --> a109
  q110{"Will you 3D print the part that goes on the shaft?"}
  a109 --> q110
  a111(["Yes · 9"])
  q110 --> a111
  class a111 leaf
  a112(["No, it is metal or bought · 9"])
  q110 --> a112
  class a112 leaf
  a113["Two shafts end to end · 10"]
  q108 --> a113
  q114{"How well do the shafts line up?"}
  a113 --> q114
  a115(["Exactly in line · 3"])
  q114 --> a115
  class a115 leaf
  a116(["A little out of line (needs some give) · 4"])
  q114 --> a116
  class a116 leaf
  a117(["At an angle, or along a bent path · 3"])
  q114 --> a117
  class a117 leaf
  a118["Strap, cord, rope or fabric · 38"]
  q76 --> a118
  q119{"What do you need?"}
  a118 --> q119
  a120(["Close an opening, or attach fabric (zip, hook-and-loop, press stud, button) · 4"])
  q119 --> a120
  class a120 leaf
  a121["Tie, splice or lash it (knots, no hardware) · 10"]
  q119 --> a121
  q122{"What should the knot do?"}
  a121 --> q122
  a123(["Stop a cord pulling through, or finish its end · 3"])
  q122 --> a123
  class a123 leaf
  a124(["Tie it to a post or ring, or join two cords · 4"])
  q122 --> a124
  class a124 leaf
  a125(["Make a loop, or pull it tight and hold it · 3"])
  q122 --> a125
  class a125 leaf
  a126(["Bind or lash things together · 3"])
  q122 --> a126
  class a126 leaf
  a127(["Sew or lace it · 6"])
  q119 --> a127
  class a127 leaf
  a128["Fit a part (buckle, hook, shackle, grommet, rivet) · 16"]
  q119 --> a128
  q129{"What should the part do?"}
  a128 --> q129
  a130(["Hook, link or swivel onto something · 5"])
  q129 --> a130
  class a130 leaf
  a131(["Join or grip strap and cord ends, or hold struts with cord · 6"])
  q129 --> a131
  class a131 leaf
  a132(["Fix it to fabric or leather, or hold a fabric edge · 5"])
  q129 --> a132
  class a132 leaf
  a133["A lid, door or cover that opens and closes · 36"]
  q76 --> a133
  q134{"How should it open?"}
  a133 --> q134
  a135(["It swings open on a hinge, or stays open at an angle · 10"])
  q134 --> a135
  class a135 leaf
  a136(["Twist a lid, knob or fastener · 6"])
  q134 --> a136
  class a136 leaf
  a137["Press, pull or flip a catch or lever · 14"]
  q134 --> a137
  q138{"Should it lock, so only the right person can open it?"}
  a137 --> q138
  a139(["Yes (key, code, hidden catch or safety lock) · 4"])
  q138 --> a139
  class a139 leaf
  a140(["No, it just has to stay shut · 10"])
  q138 --> a140
  class a140 leaf
  a141(["By power (button, remote, timer) · 3"])
  q134 --> a141
  class a141 leaf
  a142["Something onto a wall, desk, bar, tripod, rail or grid · 25"]
  q76 --> a142
  q143{"What is it going onto?"}
  a142 --> q143
  a144["A wall or ceiling · 12"]
  q143 --> a144
  q145{"How should it hold?"}
  a144 --> q145
  a146(["Screws, anchors, hooks or slots · 7"])
  q145 --> a146
  class a146 leaf
  a147(["Magnet, suction cup or sticky tape (no holes) · 5"])
  q145 --> a147
  class a147 leaf
  a148(["A bar, pole, tube or the edge of a desk · 4"])
  q143 --> a148
  class a148 leaf
  a149(["A tripod, camera or light stand · 3"])
  q143 --> a149
  class a149 leaf
  a150(["A rail, extrusion or grid · 5"])
  q143 --> a150
  class a150 leaf
  a151["Something that has to be gripped or clamped · 13"]
  q76 --> a151
  q152{"Who does the gripping?"}
  a151 --> q152
  a153(["I tighten it by hand (clamp, chuck, wedge) · 8"])
  q152 --> a153
  class a153 leaf
  a154(["A robot or machine (gripper) · 7"])
  q152 --> a154
  class a154 leaf
  a155["Melt them together (weld, braze or solder) · 14"]
  q76 --> a155
  q156{"What are the parts made of?"}
  a155 --> q156
  a157(["Metal · 4"])
  q156 --> a157
  class a157 leaf
  a158(["Plastic, or plastic film and coated fabric · 7"])
  q156 --> a158
  class a158 leaf
  a159(["Glass (stained glass, or fused in a kiln) · 3"])
  q156 --> a159
  class a159 leaf
  a160(["Two different kinds of part (e.g. a print onto wood, or a strap onto a tube) · 257"])
  q76 --> a160
  class a160 leaf
  a161["I just want to glue it · 22"]
  q76 --> a161
  q162{"What are you gluing?"}
  a161 --> q162
  a163["3D-printed plastic (PLA, PETG, ABS) or resin prints · 12"]
  q162 --> a163
  q164{"What matters most?"}
  a163 --> q164
  a165(["Strongest bond · 6"])
  q164 --> a165
  class a165 leaf
  a166(["Stays flexible, or seals too · 4"])
  q164 --> a166
  class a166 leaf
  a167(["Fills gaps, or builds up a shape · 5"])
  q164 --> a167
  class a167 leaf
  a168(["Can be undone later · 3"])
  q164 --> a168
  class a168 leaf
  a169(["Slippery plastics (polyethylene, polypropylene, silicone) · 7"])
  q162 --> a169
  class a169 leaf
  a170["Wood, paper or card · 14"]
  q162 --> a170
  q171{"What matters most?"}
  a170 --> q171
  a172(["Strongest bond · 7"])
  q171 --> a172
  class a172 leaf
  a173(["Stays flexible, or seals too · 4"])
  q171 --> a173
  class a173 leaf
  a174(["Fills gaps, or builds up a shape · 4"])
  q171 --> a174
  class a174 leaf
  a175(["Can be undone later · 3"])
  q171 --> a175
  class a175 leaf
  a176["Metal or glass · 16"]
  q162 --> a176
  q177{"What matters most?"}
  a176 --> q177
  a178(["Strongest bond · 8"])
  q177 --> a178
  class a178 leaf
  a179(["Stays flexible, or seals too · 5"])
  q177 --> a179
  class a179 leaf
  a180(["Fills gaps, or builds up a shape · 6"])
  q177 --> a180
  class a180 leaf
  a181(["Can be undone later · 5"])
  q177 --> a181
  class a181 leaf
  a182["Rubber, fabric, leather or foam · 16"]
  q162 --> a182
  q183{"What matters most?"}
  a182 --> q183
  a184(["Strongest bond · 8"])
  q183 --> a184
  class a184 leaf
  a185(["Stays flexible, or seals too · 5"])
  q183 --> a185
  class a185 leaf
  a186(["Fills gaps, or builds up a shape · 4"])
  q183 --> a186
  class a186 leaf
  a187(["Can be undone later · 4"])
  q183 --> a187
  class a187 leaf
  a188(["Two different materials (e.g. a print onto wood) · 22"])
  q162 --> a188
  class a188 leaf
  a189["Any solid parts / something else · 27"]
  q76 --> a189
  q190{"Where can you reach?"}
  a189 --> q190
  a191(["Only one side, or only the end of a tube or shaft · 10"])
  q190 --> a191
  class a191 leaf
  a192["Both sides · 11"]
  q190 --> a192
  q193{"Will you need to take it apart again?"}
  a192 --> q193
  a194(["No, never (permanent) · 3"])
  q193 --> a194
  class a194 leaf
  a195(["Yes · 8"])
  q193 --> a195
  class a195 leaf
  a196(["It does not matter · 6"])
  q190 --> a196
  class a196 leaf
  classDef leaf fill:#e6f4ea,stroke:#2e7d32
  classDef more fill:#fff4e5,stroke:#b26a00
```

### Branch 2: Connect wires or power (electrical connections) (30 entries)

```mermaid
flowchart LR
  q197{"What are you connecting?"}
  a198(["Wires to each other (a splice) · 7"])
  q197 --> a198
  class a198 leaf
  a199["A wire to a board, terminal or device · 12"]
  q197 --> a199
  q200{"Will you unplug it often?"}
  a199 --> q200
  a201(["Yes, it plugs in and out · 8"])
  q200 --> a201
  class a201 leaf
  a202(["No, it stays connected (screwed, crimped or wrapped) · 5"])
  q200 --> a202
  class a202 leaf
  a203(["Batteries, docks, and parts that touch or turn (no plug) · 5"])
  q197 --> a203
  class a203 leaf
  a204(["Wires on fabric, paper or a print (sewn, taped or painted on) · 3"])
  q197 --> a204
  class a204 leaf
  a205(["Insulate, protect or route wires (sleeves, strain relief, lacing, hinges) · 5"])
  q197 --> a205
  class a205 leaf
  classDef leaf fill:#e6f4ea,stroke:#2e7d32
  classDef more fill:#fff4e5,stroke:#b26a00
```

### Branch 3: Let something move (turn, slide, swing or bend) (111 entries)

```mermaid
flowchart LR
  q206{"How should it move?"}
  a207["Swing or rock, less than a full turn (like a lid or arm) · 25"]
  q206 --> a207
  q208{"Should it print in one piece?"}
  a207 --> q208
  a209["Yes, print it assembled · 17"]
  q208 --> a209
  q210{"Should it stay where you put it?"}
  a209 --> q210
  a211(["No, swing freely · 7"])
  q210 --> a211
  class a211 leaf
  a212(["Yes: hold, click or spring shut · 5"])
  q210 --> a212
  class a212 leaf
  a213(["No, I will assemble or buy it · 8"])
  q208 --> a213
  class a213 leaf
  a214["Spin round and round (a wheel, roller or shaft) · 23"]
  q206 --> a214
  q215{"What should spin?"}
  a214 --> q215
  a216(["A wheel or part on a fixed axle or table · 9"])
  q215 --> a216
  class a216 leaf
  a217["A shaft driving another shaft · 14"]
  q215 --> a217
  q218{"What else should it do?"}
  a217 --> q218
  a219(["Just pass the turning on · 4"])
  q218 --> a219
  class a219 leaf
  a220(["Turn one way only · 4"])
  q218 --> a220
  class a220 leaf
  a221(["Change speed or split the drive (gears) · 4"])
  q218 --> a221
  class a221 leaf
  a222["Slide in a straight line, or telescope · 18"]
  q206 --> a222
  q223{"What kind of slide?"}
  a222 --> q223
  a224(["A tube or pole that telescopes and locks · 3"])
  q223 --> a224
  class a224 leaf
  a225(["A carriage, drawer or table on a rail · 5"])
  q223 --> a225
  class a225 leaf
  a226(["Pushed along by a screw, chain or crank · 8"])
  q223 --> a226
  class a226 leaf
  a227["Bend or flex (no hinge pin) · 17"]
  q206 --> a227
  q228{"What should the bendy part do?"}
  a227 --> q228
  a229(["Fold or swing like a hinge · 9"])
  q228 --> a229
  class a229 leaf
  a230(["Move in a straight line, or act as a spring · 5"])
  q228 --> a230
  class a230 leaf
  a231(["Grip, or snap between two positions · 4"])
  q228 --> a231
  class a231 leaf
  a232(["Swivel or tilt in several directions (ball or universal joint) · 7"])
  q206 --> a232
  class a232 leaf
  a233(["Follow a set path (e.g. swing out and stay level) · 7"])
  q206 --> a233
  class a233 leaf
  a234(["Pop up, slide or turn as a card or page opens (paper) · 5"])
  q206 --> a234
  class a234 leaf
  classDef leaf fill:#e6f4ea,stroke:#2e7d32
  classDef more fill:#fff4e5,stroke:#b26a00
```

### Branch 4: Control a movement (one way only, clicks, slips, locks, slows) (134 entries)

```mermaid
flowchart LR
  q235{"What should it do?"}
  a236["Move one way only (stop it going back) · 31"]
  q235 --> a236
  q237{"Does it turn or slide?"}
  a236 --> q237
  a238["Turns · 18"]
  q237 --> a238
  q239{"Is clicking OK?"}
  a238 --> q239
  a240(["Yes, clicks are fine (ratchets) · 6"])
  q239 --> a240
  class a240 leaf
  a241(["No, it must be smooth and silent · 6"])
  q239 --> a241
  class a241 leaf
  a242(["Slides · 8"])
  q237 --> a242
  class a242 leaf
  a243(["Bends, or something else · 6"])
  q237 --> a243
  class a243 leaf
  a244(["It is air or liquid flowing (one-way valves) · 3"])
  q237 --> a244
  class a244 leaf
  a245["Click into set positions · 21"]
  q235 --> a245
  q246{"Does it turn or slide?"}
  a245 --> q246
  a247["Turns · 15"]
  q246 --> a247
  q248{"What should the clicks do?"}
  a247 --> q248
  a249(["Hold a position I set by hand · 8"])
  q248 --> a249
  class a249 leaf
  a250(["Step forward one position at a time · 5"])
  q248 --> a250
  class a250 leaf
  a251(["Slides, bends or something else · 7"])
  q246 --> a251
  class a251 leaf
  a252["Slip, click or let go if overloaded · 40"]
  q235 --> a252
  q253{"What should happen when it is overloaded?"}
  a252 --> q253
  a254["Slip, and keep going · 21"]
  q253 --> a254
  q255{"Will you 3D print it?"}
  a254 --> q255
  a256(["Yes, or partly · 10"])
  q255 --> a256
  class a256 leaf
  a257(["No, I will buy or machine it · 7"])
  q255 --> a257
  class a257 leaf
  a258(["It is a brake or speed limiter (it slips to slow things down) · 5"])
  q255 --> a258
  class a258 leaf
  a259(["Click or pop out, then reset by itself · 6"])
  q253 --> a259
  class a259 leaf
  a260(["Pull apart without damage, then refit it by hand · 5"])
  q253 --> a260
  class a260 leaf
  a261(["Break or let go once, on purpose (replace it after) · 6"])
  q253 --> a261
  class a261 leaf
  a262["Stay where I leave it, and let go when I release it · 34"]
  q235 --> a262
  q263{"Does it turn or slide?"}
  a262 --> q263
  a264["Turns · 19"]
  q263 --> a264
  q265{"What should it do?"}
  a264 --> q265
  a266(["Lock so only a person can open it (key, code, trigger) · 8"])
  q265 --> a266
  class a266 leaf
  a267(["Hold a load where it stops (brake or self-locking drive) · 9"])
  q265 --> a267
  class a267 leaf
  a268(["Slides · 8"])
  q263 --> a268
  class a268 leaf
  a269(["Bends, or something else · 9"])
  q263 --> a269
  class a269 leaf
  a270["Snap past a point and stay there (over-centre) · 15"]
  q235 --> a270
  q271{"What is it for?"}
  a270 --> q271
  a272(["Clamp or latch something shut · 7"])
  q271 --> a272
  class a272 leaf
  a273(["Flip between two positions (switch, fold or stay) · 7"])
  q271 --> a273
  class a273 leaf
  a274["Slow it down, stop it, or keep its speed steady · 18"]
  q235 --> a274
  q275{"What do you need?"}
  a274 --> q275
  a276(["Stop it or hold it still (brakes) · 5"])
  q275 --> a276
  class a276 leaf
  a277(["Cushion or smooth it (dampers) · 7"])
  q275 --> a277
  class a277 leaf
  a278(["Keep a steady speed or level · 5"])
  q275 --> a278
  class a278 leaf
  classDef leaf fill:#e6f4ea,stroke:#2e7d32
  classDef more fill:#fff4e5,stroke:#b26a00
```

### Branch 5: Change a movement (speed, force or kind of motion) (78 entries)

```mermaid
flowchart LR
  q279{"What change do you need?"}
  a280["Faster, slower or stronger turning · 25"]
  q279 --> a280
  q281{"How are the input and output shafts arranged?"}
  a280 --> q281
  a282["Side by side (parallel) · 11"]
  q281 --> a282
  q283{"Will you 3D print it?"}
  a282 --> q283
  a284(["Yes, or partly · 7"])
  q283 --> a284
  class a284 leaf
  a285(["No, I will buy or machine it · 4"])
  q283 --> a285
  class a285 leaf
  a286(["At an angle (e.g. 90 degrees) · 9"])
  q281 --> a286
  class a286 leaf
  a287(["In line (one straight through the other) · 7"])
  q281 --> a287
  class a287 leaf
  a288(["Far apart, or the path bends (belts, cables, chains) · 3"])
  q281 --> a288
  class a288 leaf
  a289["Turning into straight-line motion, or back · 33"]
  q279 --> a289
  q290{"What kind of straight-line motion?"}
  a289 --> q290
  a291(["A slow, precise push (screws) · 8"])
  q290 --> a291
  class a291 leaf
  a292(["Back and forth, again and again (cranks, cams) · 6"])
  q290 --> a292
  class a292 leaf
  a293(["Long travel, or pulling (rack, belt, chain, cable, rope) · 10"])
  q290 --> a293
  class a293 leaf
  a294(["Steady turning into steps, or into rocking · 6"])
  q279 --> a294
  class a294 leaf
  a295["A push or pull moved, multiplied or redirected · 12"]
  q279 --> a295
  q296{"How?"}
  a295 --> q296
  a297(["Levers and linkages · 6"])
  q296 --> a297
  class a297 leaf
  a298(["Cables, ropes, pulleys or liquid in tubes · 4"])
  q296 --> a298
  class a298 leaf
  a299(["Make movement from air, liquid, suction or heat · 7"])
  q279 --> a299
  class a299 leaf
  a300["Drive several things from one, or combine several into one · 22"]
  q279 --> a300
  q301{"Which way does the power go?"}
  a300 --> q301
  a302["One input drives several outputs · 18"]
  q301 --> a302
  q303{"How should the outputs move?"}
  a302 --> q303
  a304(["All turn the same way, in step · 6"])
  q303 --> a304
  class a304 leaf
  a305(["Some turn the opposite way, or two turn opposite ways on one axis · 4"])
  q303 --> a305
  class a305 leaf
  a306(["At different speeds, or free to turn at different speeds · 5"])
  q303 --> a306
  class a306 leaf
  a307(["Pushes, pulls or flow shared out (cams, cables, levers, air or liquid) · 9"])
  q303 --> a307
  class a307 leaf
  a308(["Several inputs combine into one (add movements, or share a load) · 6"])
  q301 --> a308
  class a308 leaf
  classDef leaf fill:#e6f4ea,stroke:#2e7d32
  classDef more fill:#fff4e5,stroke:#b26a00
```

### Branch 6: Tighten something, or take up slack (33 entries)

```mermaid
flowchart LR
  q309{"What are you tightening?"}
  a310["A strap, lace, cord or rope · 22"]
  q309 --> a310
  q311{"How should it hold?"}
  a310 --> q311
  a312(["Click, wind or screw it tighter (ratchet, winch, turnbuckle) · 5"])
  q311 --> a312
  class a312 leaf
  a313(["Grip by friction; release by hand (buckles, cord locks, hitches) · 8"])
  q311 --> a313
  class a313 leaf
  a314(["Pull back by itself (spring or elastic) · 4"])
  q311 --> a314
  class a314 leaf
  a315(["A belt, chain or cable in a machine · 3"])
  q309 --> a315
  class a315 leaf
  a316(["Parts clamped or pulled together · 9"])
  q309 --> a316
  class a316 leaf
  classDef leaf fill:#e6f4ea,stroke:#2e7d32
  classDef more fill:#fff4e5,stroke:#b26a00
```

### Branch 7: Line parts up exactly, or adjust and level them (12 entries)

```mermaid
flowchart LR
  q317{"What do you need?"}
  a318(["Put it back in exactly the same place every time · 7"])
  q317 --> a318
  class a318 leaf
  a319(["Set a height, gap or position, then hold it · 7"])
  q317 --> a319
  class a319 leaf
  a320(["Fine-tune a tilt or angle with screws · 5"])
  q317 --> a320
  class a320 leaf
  classDef leaf fill:#e6f4ea,stroke:#2e7d32
  classDef more fill:#fff4e5,stroke:#b26a00
```

### Branch 8: Spring back, or store energy (19 entries)

```mermaid
flowchart LR
  q321{"How should it push back?"}
  a322(["Push or pull in a straight line · 7"])
  q321 --> a322
  class a322 leaf
  a323(["A printed or bent springy part (flexure) · 8"])
  q321 --> a323
  class a323 leaf
  a324(["Twist back (torsion) · 7"])
  q321 --> a324
  class a324 leaf
  a325(["Wind up or store energy, then let it go (clock spring, flywheel, trigger) · 6"])
  q321 --> a325
  class a325 leaf
  classDef leaf fill:#e6f4ea,stroke:#2e7d32
  classDef more fill:#fff4e5,stroke:#b26a00
```

### Branch 9: Seal it, or pass cables, air or liquid through (67 entries)

```mermaid
flowchart LR
  q326{"What do you need?"}
  a327["Keep water, dust or air out of a joint that does not move · 16"]
  q326 --> a327
  q328{"Will you need to take it apart again?"}
  a327 --> q328
  a329["No, never · 9"]
  q328 --> a329
  q330{"What are the parts?"}
  a329 --> q330
  a331(["Metal sheet, tube or pipe · 7"])
  q330 --> a331
  class a331 leaf
  a332(["Plastic, fabric or film, or a gap to fill · 5"])
  q330 --> a332
  class a332 leaf
  a333(["Yes · 7"])
  q328 --> a333
  class a333 leaf
  a334(["Seal round a moving shaft or rod · 4"])
  q326 --> a334
  class a334 leaf
  a335(["Get cables through a wall or past a moving joint · 7"])
  q326 --> a335
  class a335 leaf
  a336["Join hoses, pipes or tubes · 11"]
  q326 --> a336
  q337{"How is it joined?"}
  a336 --> q337
  a338(["Screwed together (threads or a nut) · 4"])
  q337 --> a338
  class a338 leaf
  a339(["Pushed on, clamped or clicked together · 4"])
  q337 --> a339
  class a339 leaf
  a340(["Fused, soldered or brazed for good · 3"])
  q337 --> a340
  class a340 leaf
  a341["Pump, store or control air or liquid (valves, pumps) · 18"]
  q326 --> a341
  q342{"What should it do?"}
  a341 --> q342
  a343(["Push air or liquid along (pumps) · 6"])
  q342 --> a343
  class a343 leaf
  a344(["Let flow one way only, or let off pressure (safety) · 3"])
  q342 --> a344
  class a344 leaf
  a345(["Switch, set or store the flow (valves, regulators, tanks) · 9"])
  q342 --> a345
  class a345 leaf
  classDef leaf fill:#e6f4ea,stroke:#2e7d32
  classDef more fill:#fff4e5,stroke:#b26a00
```

### Branch 10: Hold or let go using power (electric, air or suction) (39 entries)

```mermaid
flowchart LR
  q346{"What will power it?"}
  a347["Electricity · 26"]
  q346 --> a347
  q348{"What should it do?"}
  a347 --> q348
  a349(["Lock, latch or hold by magnet, and let go on command · 6"])
  q348 --> a349
  class a349 leaf
  a350(["Move or push something (motors, actuators, artificial muscles) · 8"])
  q348 --> a350
  class a350 leaf
  a351(["Pump, switch or control air or liquid · 7"])
  q348 --> a351
  class a351 leaf
  a352(["Brake, clutch or grip · 4"])
  q348 --> a352
  class a352 leaf
  a353["Compressed air · 17"]
  q346 --> a353
  q354{"What should it do?"}
  a353 --> q354
  a355(["Push, pull, bend or turn something (cylinders, air muscles) · 7"])
  q354 --> a355
  class a355 leaf
  a356(["Grip or lift something (grippers, air bearings) · 6"])
  q354 --> a356
  class a356 leaf
  a357(["Switch, pump or control the air (valves, pumps) · 5"])
  q354 --> a357
  class a357 leaf
  a358["Liquid (hydraulics, water) · 13"]
  q346 --> a358
  q359{"What should it do?"}
  a358 --> q359
  a360(["Push, lift, bend or fold something · 8"])
  q359 --> a360
  class a360 leaf
  a361(["Pump, switch or control the liquid · 6"])
  q359 --> a361
  class a361 leaf
  a362(["Suction (vacuum) · 9"])
  q346 --> a362
  class a362 leaf
  classDef leaf fill:#e6f4ea,stroke:#2e7d32
  classDef more fill:#fff4e5,stroke:#b26a00
```