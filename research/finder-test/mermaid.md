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
  a22["Let something move (turn, slide, swing or bend) · 98"]
  q0 --> a22
  q23{"How should it move?"}
  a22 --> q23
  a24["Swing or rock, less than a full turn (like a lid or arm) · 21"]
  q23 --> a24
  class a24 more
  a25["Spin round and round (a wheel, roller or shaft) · 21"]
  q23 --> a25
  class a25 more
  a26["Slide in a straight line, or telescope · 18"]
  q23 --> a26
  class a26 more
  a27["Bend or flex (no hinge pin) · 15"]
  q23 --> a27
  class a27 more
  a28(["Swivel or tilt in several directions (ball or universal joint) · 6"])
  q23 --> a28
  class a28 leaf
  a29(["Follow a set path (e.g. swing out and stay level) · 7"])
  q23 --> a29
  class a29 leaf
  a30["Control a movement (one way only, clicks, slips, locks, slows) · 130"]
  q0 --> a30
  q31{"What should it do?"}
  a30 --> q31
  a32["Move one way only (stop it going back) · 31"]
  q31 --> a32
  class a32 more
  a33["Click into set positions · 20"]
  q31 --> a33
  class a33 more
  a34["Slip, click or let go if overloaded · 39"]
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
  a47["A strap, lace, cord or rope · 22"]
  q46 --> a47
  class a47 more
  a48(["A belt, chain or cable in a machine · 3"])
  q46 --> a48
  class a48 leaf
  a49(["Parts clamped or pulled together · 9"])
  q46 --> a49
  class a49 leaf
  a50["Line parts up exactly, or adjust and level them · 12"]
  q0 --> a50
  q51{"What do you need?"}
  a50 --> q51
  a52(["Put it back in exactly the same place every time · 7"])
  q51 --> a52
  class a52 leaf
  a53(["Set a height, gap or position, then hold it · 7"])
  q51 --> a53
  class a53 leaf
  a54(["Fine-tune a tilt or angle with screws · 5"])
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
  a59(["Twist back (torsion) · 7"])
  q56 --> a59
  class a59 leaf
  a60(["Wind up or store energy, then let it go (clock spring, flywheel, trigger) · 5"])
  q56 --> a60
  class a60 leaf
  a61["Seal it, or pass cables, air or liquid through · 65"]
  q0 --> a61
  q62{"What do you need?"}
  a61 --> q62
  a63["Keep water, dust or air out of a joint that does not move · 14"]
  q62 --> a63
  class a63 more
  a64(["Seal round a moving shaft or rod · 4"])
  q62 --> a64
  class a64 leaf
  a65(["Get cables through a wall or past a moving joint · 7"])
  q62 --> a65
  class a65 leaf
  a66["Join hoses, pipes or tubes · 11"]
  q62 --> a66
  class a66 more
  a67["Pump, store or control air or liquid (valves, pumps) · 18"]
  q62 --> a67
  class a67 more
  a68["Hold or let go using power (electric, air or suction) · 37"]
  q0 --> a68
  q69{"What will power it?"}
  a68 --> q69
  a70["Electricity · 24"]
  q69 --> a70
  class a70 more
  a71["Compressed air · 17"]
  q69 --> a71
  class a71 more
  a72["Liquid (hydraulics, water) · 13"]
  q69 --> a72
  class a72 more
  a73(["Suction (vacuum) · 9"])
  q69 --> a73
  class a73 leaf
  classDef leaf fill:#e6f4ea,stroke:#2e7d32
  classDef more fill:#fff4e5,stroke:#b26a00
```

### Branch 1: Hold two things together (they stay still) (226 entries)

```mermaid
flowchart LR
  q74{"What are you joining?"}
  a75["3D-printed parts, or screws, nuts and magnets into a print · 27"]
  q74 --> a75
  q76{"Will you need to take it apart again?"}
  a75 --> q76
  a77(["No, never (permanent) · 9"])
  q76 --> a77
  class a77 leaf
  a78["Yes · 16"]
  q76 --> a78
  q79{"Is there a screw or bolt?"}
  a78 --> q79
  a80(["Yes · 6"])
  q79 --> a80
  class a80 leaf
  a81(["No (clips, pins, rings, magnets) · 10"])
  q79 --> a81
  class a81 leaf
  a82(["It is fabric, chain mail or a folding sheet made in the print · 3"])
  q76 --> a82
  class a82 leaf
  a83["Boards, panels or sheet (wood, plywood, acrylic, sheet metal) · 37"]
  q74 --> a83
  q84{"Will you need to take it apart again?"}
  a83 --> q84
  a85["No, never (permanent) · 18"]
  q84 --> a85
  q86{"What is the sheet made of?"}
  a85 --> q86
  a87(["Wood or plywood · 9"])
  q86 --> a87
  class a87 leaf
  a88(["Sheet metal · 8"])
  q86 --> a88
  class a88 leaf
  a89(["Plastic sheet (acrylic, or laser-cut sheet) · 6"])
  q86 --> a89
  class a89 leaf
  a90["Now and then, with a tool · 16"]
  q84 --> a90
  q91{"What is the sheet made of?"}
  a90 --> q91
  a92(["Wood or plywood · 10"])
  q91 --> a92
  class a92 leaf
  a93(["Sheet metal, plastic or laser-cut sheet · 6"])
  q91 --> a93
  class a93 leaf
  a94(["Often, by hand, without tools · 3"])
  q84 --> a94
  class a94 leaf
  a95["Tube, rod, pole or aluminium extrusion · 13"]
  q74 --> a95
  q96{"Does it carry air or liquid?"}
  a95 --> q96
  a97(["Yes (hoses, pipes and tubing) · 3"])
  q96 --> a97
  class a97 leaf
  a98(["No (frames, poles and rails) · 10"])
  q96 --> a98
  class a98 leaf
  a99["A wheel, gear or arm onto a shaft, or two shafts end to end · 23"]
  q74 --> a99
  q100{"What are you connecting?"}
  a99 --> q100
  a101["A wheel, gear, pulley or arm onto a shaft · 13"]
  q100 --> a101
  q102{"Will you 3D print the part that goes on the shaft?"}
  a101 --> q102
  a103(["Yes · 9"])
  q102 --> a103
  class a103 leaf
  a104(["No, it is metal or bought · 9"])
  q102 --> a104
  class a104 leaf
  a105["Two shafts end to end · 10"]
  q100 --> a105
  q106{"How well do the shafts line up?"}
  a105 --> q106
  a107(["Exactly in line · 3"])
  q106 --> a107
  class a107 leaf
  a108(["A little out of line (needs some give) · 4"])
  q106 --> a108
  class a108 leaf
  a109(["At an angle, or along a bent path · 3"])
  q106 --> a109
  class a109 leaf
  a110["Strap, cord, rope or fabric · 37"]
  q74 --> a110
  q111{"What do you need?"}
  a110 --> q111
  a112(["Close an opening, or attach fabric (zip, hook-and-loop, press stud, button) · 4"])
  q111 --> a112
  class a112 leaf
  a113["Tie, splice or lash it (knots, no hardware) · 10"]
  q111 --> a113
  q114{"What should the knot do?"}
  a113 --> q114
  a115(["Stop a cord pulling through, or finish its end · 3"])
  q114 --> a115
  class a115 leaf
  a116(["Tie it to a post or ring, or join two cords · 4"])
  q114 --> a116
  class a116 leaf
  a117(["Make a loop, or pull it tight and hold it · 3"])
  q114 --> a117
  class a117 leaf
  a118(["Bind or lash things together · 3"])
  q114 --> a118
  class a118 leaf
  a119(["Sew or lace it · 5"])
  q111 --> a119
  class a119 leaf
  a120["Fit a part (buckle, hook, shackle, grommet, rivet) · 16"]
  q111 --> a120
  q121{"What should the part do?"}
  a120 --> q121
  a122(["Hook, link or swivel onto something · 5"])
  q121 --> a122
  class a122 leaf
  a123(["Join or grip strap and cord ends, or hold struts with cord · 6"])
  q121 --> a123
  class a123 leaf
  a124(["Fix it to fabric or leather, or hold a fabric edge · 5"])
  q121 --> a124
  class a124 leaf
  a125["A lid, door or cover that opens and closes · 32"]
  q74 --> a125
  q126{"How should it open?"}
  a125 --> q126
  a127(["It swings open on a hinge, or stays open at an angle · 9"])
  q126 --> a127
  class a127 leaf
  a128(["Twist a lid, knob or fastener · 6"])
  q126 --> a128
  class a128 leaf
  a129["Press, pull or flip a catch or lever · 14"]
  q126 --> a129
  q130{"Should it lock, so only the right person can open it?"}
  a129 --> q130
  a131(["Yes (key, code, hidden catch or safety lock) · 4"])
  q130 --> a131
  class a131 leaf
  a132(["No, it just has to stay shut · 10"])
  q130 --> a132
  class a132 leaf
  a133(["By power (button, remote, timer) · 3"])
  q126 --> a133
  class a133 leaf
  a134["Something onto a wall, desk, bar, tripod, rail or grid · 24"]
  q74 --> a134
  q135{"What is it going onto?"}
  a134 --> q135
  a136["A wall or ceiling · 11"]
  q135 --> a136
  q137{"How should it hold?"}
  a136 --> q137
  a138(["Screws, anchors, hooks or slots · 6"])
  q137 --> a138
  class a138 leaf
  a139(["Magnet, suction cup or sticky tape (no holes) · 5"])
  q137 --> a139
  class a139 leaf
  a140(["A bar, pole, tube or the edge of a desk · 4"])
  q135 --> a140
  class a140 leaf
  a141(["A tripod, camera or light stand · 3"])
  q135 --> a141
  class a141 leaf
  a142(["A rail, extrusion or grid · 5"])
  q135 --> a142
  class a142 leaf
  a143["Something that has to be gripped or clamped · 13"]
  q74 --> a143
  q144{"Who does the gripping?"}
  a143 --> q144
  a145(["I tighten it by hand (clamp, chuck, wedge) · 8"])
  q144 --> a145
  class a145 leaf
  a146(["A robot or machine (gripper) · 7"])
  q144 --> a146
  class a146 leaf
  a147["Melt them together (weld, braze or solder) · 11"]
  q74 --> a147
  q148{"What are the parts made of?"}
  a147 --> q148
  a149(["Metal · 4"])
  q148 --> a149
  class a149 leaf
  a150(["Plastic, or plastic film and coated fabric · 7"])
  q148 --> a150
  class a150 leaf
  a151(["Two different kinds of part (e.g. a print onto wood, or a strap onto a tube) · 226"])
  q74 --> a151
  class a151 leaf
  a152["I just want to glue it · 19"]
  q74 --> a152
  q153{"What are you gluing?"}
  a152 --> q153
  a154["3D-printed plastic (PLA, PETG, ABS) or resin prints · 12"]
  q153 --> a154
  q155{"What matters most?"}
  a154 --> q155
  a156(["Strongest bond · 6"])
  q155 --> a156
  class a156 leaf
  a157(["Stays flexible, or seals too · 4"])
  q155 --> a157
  class a157 leaf
  a158(["Fills gaps, or builds up a shape · 5"])
  q155 --> a158
  class a158 leaf
  a159(["Can be undone later · 3"])
  q155 --> a159
  class a159 leaf
  a160(["Slippery plastics (polyethylene, polypropylene, silicone) · 7"])
  q153 --> a160
  class a160 leaf
  a161["Wood, paper or card · 13"]
  q153 --> a161
  q162{"What matters most?"}
  a161 --> q162
  a163(["Strongest bond · 7"])
  q162 --> a163
  class a163 leaf
  a164(["Stays flexible, or seals too · 4"])
  q162 --> a164
  class a164 leaf
  a165(["Fills gaps, or builds up a shape · 4"])
  q162 --> a165
  class a165 leaf
  a166(["Can be undone later · 3"])
  q162 --> a166
  class a166 leaf
  a167["Metal or glass · 15"]
  q153 --> a167
  q168{"What matters most?"}
  a167 --> q168
  a169(["Strongest bond · 7"])
  q168 --> a169
  class a169 leaf
  a170(["Stays flexible, or seals too · 5"])
  q168 --> a170
  class a170 leaf
  a171(["Fills gaps, or builds up a shape · 6"])
  q168 --> a171
  class a171 leaf
  a172(["Can be undone later · 5"])
  q168 --> a172
  class a172 leaf
  a173["Rubber, fabric, leather or foam · 13"]
  q153 --> a173
  q174{"What matters most?"}
  a173 --> q174
  a175(["Strongest bond · 5"])
  q174 --> a175
  class a175 leaf
  a176(["Stays flexible, or seals too · 5"])
  q174 --> a176
  class a176 leaf
  a177(["Fills gaps, or builds up a shape · 3"])
  q174 --> a177
  class a177 leaf
  a178(["Can be undone later · 4"])
  q174 --> a178
  class a178 leaf
  a179(["Two different materials (e.g. a print onto wood) · 19"])
  q153 --> a179
  class a179 leaf
  a180["Any solid parts / something else · 20"]
  q74 --> a180
  q181{"Where can you reach?"}
  a180 --> q181
  a182(["Only one side, or only the end of a tube or shaft · 9"])
  q181 --> a182
  class a182 leaf
  a183(["Both sides · 6"])
  q181 --> a183
  class a183 leaf
  a184(["It does not matter · 5"])
  q181 --> a184
  class a184 leaf
  classDef leaf fill:#e6f4ea,stroke:#2e7d32
  classDef more fill:#fff4e5,stroke:#b26a00
```

### Branch 2: Connect wires or power (electrical connections) (30 entries)

```mermaid
flowchart LR
  q185{"What are you connecting?"}
  a186(["Wires to each other (a splice) · 7"])
  q185 --> a186
  class a186 leaf
  a187["A wire to a board, terminal or device · 12"]
  q185 --> a187
  q188{"Will you unplug it often?"}
  a187 --> q188
  a189(["Yes, it plugs in and out · 8"])
  q188 --> a189
  class a189 leaf
  a190(["No, it stays connected (screwed, crimped or wrapped) · 5"])
  q188 --> a190
  class a190 leaf
  a191(["Batteries, docks, and parts that touch or turn (no plug) · 5"])
  q185 --> a191
  class a191 leaf
  a192(["Wires on fabric, paper or a print (sewn, taped or painted on) · 3"])
  q185 --> a192
  class a192 leaf
  a193(["Insulate, protect or route wires (sleeves, strain relief, lacing, hinges) · 5"])
  q185 --> a193
  class a193 leaf
  classDef leaf fill:#e6f4ea,stroke:#2e7d32
  classDef more fill:#fff4e5,stroke:#b26a00
```

### Branch 3: Let something move (turn, slide, swing or bend) (98 entries)

```mermaid
flowchart LR
  q194{"How should it move?"}
  a195["Swing or rock, less than a full turn (like a lid or arm) · 21"]
  q194 --> a195
  q196{"Should it print in one piece?"}
  a195 --> q196
  a197["Yes, print it assembled · 14"]
  q196 --> a197
  q198{"Should it stay where you put it?"}
  a197 --> q198
  a199(["No, swing freely · 7"])
  q198 --> a199
  class a199 leaf
  a200(["Yes: hold, click or spring shut · 5"])
  q198 --> a200
  class a200 leaf
  a201(["No, I will assemble or buy it · 7"])
  q196 --> a201
  class a201 leaf
  a202["Spin round and round (a wheel, roller or shaft) · 21"]
  q194 --> a202
  q203{"What should spin?"}
  a202 --> q203
  a204(["A wheel or part on a fixed axle or table · 7"])
  q203 --> a204
  class a204 leaf
  a205["A shaft driving another shaft · 14"]
  q203 --> a205
  q206{"What else should it do?"}
  a205 --> q206
  a207(["Just pass the turning on · 4"])
  q206 --> a207
  class a207 leaf
  a208(["Turn one way only · 4"])
  q206 --> a208
  class a208 leaf
  a209(["Change speed or split the drive (gears) · 4"])
  q206 --> a209
  class a209 leaf
  a210["Slide in a straight line, or telescope · 18"]
  q194 --> a210
  q211{"What kind of slide?"}
  a210 --> q211
  a212(["A tube or pole that telescopes and locks · 3"])
  q211 --> a212
  class a212 leaf
  a213(["A carriage, drawer or table on a rail · 5"])
  q211 --> a213
  class a213 leaf
  a214(["Pushed along by a screw, chain or crank · 8"])
  q211 --> a214
  class a214 leaf
  a215["Bend or flex (no hinge pin) · 15"]
  q194 --> a215
  q216{"What should the bendy part do?"}
  a215 --> q216
  a217(["Fold or swing like a hinge · 7"])
  q216 --> a217
  class a217 leaf
  a218(["Move in a straight line, or act as a spring · 5"])
  q216 --> a218
  class a218 leaf
  a219(["Grip, or snap between two positions · 4"])
  q216 --> a219
  class a219 leaf
  a220(["Swivel or tilt in several directions (ball or universal joint) · 6"])
  q194 --> a220
  class a220 leaf
  a221(["Follow a set path (e.g. swing out and stay level) · 7"])
  q194 --> a221
  class a221 leaf
  classDef leaf fill:#e6f4ea,stroke:#2e7d32
  classDef more fill:#fff4e5,stroke:#b26a00
```

### Branch 4: Control a movement (one way only, clicks, slips, locks, slows) (130 entries)

```mermaid
flowchart LR
  q222{"What should it do?"}
  a223["Move one way only (stop it going back) · 31"]
  q222 --> a223
  q224{"Does it turn or slide?"}
  a223 --> q224
  a225["Turns · 18"]
  q224 --> a225
  q226{"Is clicking OK?"}
  a225 --> q226
  a227(["Yes, clicks are fine (ratchets) · 6"])
  q226 --> a227
  class a227 leaf
  a228(["No, it must be smooth and silent · 6"])
  q226 --> a228
  class a228 leaf
  a229(["Slides · 8"])
  q224 --> a229
  class a229 leaf
  a230(["Bends, or something else · 6"])
  q224 --> a230
  class a230 leaf
  a231(["It is air or liquid flowing (one-way valves) · 3"])
  q224 --> a231
  class a231 leaf
  a232["Click into set positions · 20"]
  q222 --> a232
  q233{"Does it turn or slide?"}
  a232 --> q233
  a234["Turns · 14"]
  q233 --> a234
  q235{"What should the clicks do?"}
  a234 --> q235
  a236(["Hold a position I set by hand · 8"])
  q235 --> a236
  class a236 leaf
  a237(["Step forward one position at a time · 5"])
  q235 --> a237
  class a237 leaf
  a238(["Slides, bends or something else · 7"])
  q233 --> a238
  class a238 leaf
  a239["Slip, click or let go if overloaded · 39"]
  q222 --> a239
  q240{"What should happen when it is overloaded?"}
  a239 --> q240
  a241["Slip, and keep going · 20"]
  q240 --> a241
  q242{"Will you 3D print it?"}
  a241 --> q242
  a243(["Yes, or partly · 10"])
  q242 --> a243
  class a243 leaf
  a244(["No, I will buy or machine it · 10"])
  q242 --> a244
  class a244 leaf
  a245(["Click or pop out, then reset by itself · 6"])
  q240 --> a245
  class a245 leaf
  a246(["Pull apart without damage, then refit it by hand · 5"])
  q240 --> a246
  class a246 leaf
  a247(["Break or let go once, on purpose (replace it after) · 6"])
  q240 --> a247
  class a247 leaf
  a248["Stay where I leave it, and let go when I release it · 34"]
  q222 --> a248
  q249{"Does it turn or slide?"}
  a248 --> q249
  a250["Turns · 19"]
  q249 --> a250
  q251{"What should it do?"}
  a250 --> q251
  a252(["Lock so only a person can open it (key, code, trigger) · 8"])
  q251 --> a252
  class a252 leaf
  a253(["Hold a load where it stops (brake or self-locking drive) · 9"])
  q251 --> a253
  class a253 leaf
  a254(["Slides · 8"])
  q249 --> a254
  class a254 leaf
  a255(["Bends, or something else · 9"])
  q249 --> a255
  class a255 leaf
  a256["Snap past a point and stay there (over-centre) · 13"]
  q222 --> a256
  q257{"What is it for?"}
  a256 --> q257
  a258(["Clamp or latch something shut · 6"])
  q257 --> a258
  class a258 leaf
  a259(["Flip between two positions (switch, fold or stay) · 7"])
  q257 --> a259
  class a259 leaf
  a260["Slow it down, stop it, or keep its speed steady · 18"]
  q222 --> a260
  q261{"What do you need?"}
  a260 --> q261
  a262(["Stop it or hold it still (brakes) · 5"])
  q261 --> a262
  class a262 leaf
  a263(["Cushion or smooth it (dampers) · 7"])
  q261 --> a263
  class a263 leaf
  a264(["Keep a steady speed or level · 5"])
  q261 --> a264
  class a264 leaf
  classDef leaf fill:#e6f4ea,stroke:#2e7d32
  classDef more fill:#fff4e5,stroke:#b26a00
```

### Branch 5: Change a movement (speed, force or kind of motion) (65 entries)

```mermaid
flowchart LR
  q265{"What change do you need?"}
  a266["Faster, slower or stronger turning · 21"]
  q265 --> a266
  q267{"How are the input and output shafts arranged?"}
  a266 --> q267
  a268(["Side by side (parallel) · 9"])
  q267 --> a268
  class a268 leaf
  a269(["At an angle (e.g. 90 degrees) · 7"])
  q267 --> a269
  class a269 leaf
  a270(["In line (one straight through the other) · 6"])
  q267 --> a270
  class a270 leaf
  a271(["Far apart, or the path bends (belts, cables, chains) · 3"])
  q267 --> a271
  class a271 leaf
  a272["Turning into straight-line motion, or back · 29"]
  q265 --> a272
  q273{"What kind of straight-line motion?"}
  a272 --> q273
  a274(["A slow, precise push (screws) · 7"])
  q273 --> a274
  class a274 leaf
  a275(["Back and forth, again and again (cranks, cams) · 6"])
  q273 --> a275
  class a275 leaf
  a276(["Long travel, or pulling (rack, belt, chain, cable, rope) · 10"])
  q273 --> a276
  class a276 leaf
  a277(["Steady turning into steps, or into rocking · 6"])
  q265 --> a277
  class a277 leaf
  a278["A push or pull moved, multiplied or redirected · 9"]
  q265 --> a278
  q279{"How?"}
  a278 --> q279
  a280(["Levers and linkages · 5"])
  q279 --> a280
  class a280 leaf
  a281(["Cables, ropes, pulleys or liquid in tubes · 3"])
  q279 --> a281
  class a281 leaf
  a282(["Make movement from air, liquid, suction or heat · 7"])
  q265 --> a282
  class a282 leaf
  classDef leaf fill:#e6f4ea,stroke:#2e7d32
  classDef more fill:#fff4e5,stroke:#b26a00
```

### Branch 6: Tighten something, or take up slack (33 entries)

```mermaid
flowchart LR
  q283{"What are you tightening?"}
  a284["A strap, lace, cord or rope · 22"]
  q283 --> a284
  q285{"How should it hold?"}
  a284 --> q285
  a286(["Click, wind or screw it tighter (ratchet, winch, turnbuckle) · 5"])
  q285 --> a286
  class a286 leaf
  a287(["Grip by friction; release by hand (buckles, cord locks, hitches) · 8"])
  q285 --> a287
  class a287 leaf
  a288(["Pull back by itself (spring or elastic) · 4"])
  q285 --> a288
  class a288 leaf
  a289(["A belt, chain or cable in a machine · 3"])
  q283 --> a289
  class a289 leaf
  a290(["Parts clamped or pulled together · 9"])
  q283 --> a290
  class a290 leaf
  classDef leaf fill:#e6f4ea,stroke:#2e7d32
  classDef more fill:#fff4e5,stroke:#b26a00
```

### Branch 7: Line parts up exactly, or adjust and level them (12 entries)

```mermaid
flowchart LR
  q291{"What do you need?"}
  a292(["Put it back in exactly the same place every time · 7"])
  q291 --> a292
  class a292 leaf
  a293(["Set a height, gap or position, then hold it · 7"])
  q291 --> a293
  class a293 leaf
  a294(["Fine-tune a tilt or angle with screws · 5"])
  q291 --> a294
  class a294 leaf
  classDef leaf fill:#e6f4ea,stroke:#2e7d32
  classDef more fill:#fff4e5,stroke:#b26a00
```

### Branch 8: Spring back, or store energy (18 entries)

```mermaid
flowchart LR
  q295{"How should it push back?"}
  a296(["Push or pull in a straight line · 7"])
  q295 --> a296
  class a296 leaf
  a297(["A printed or bent springy part (flexure) · 8"])
  q295 --> a297
  class a297 leaf
  a298(["Twist back (torsion) · 7"])
  q295 --> a298
  class a298 leaf
  a299(["Wind up or store energy, then let it go (clock spring, flywheel, trigger) · 5"])
  q295 --> a299
  class a299 leaf
  classDef leaf fill:#e6f4ea,stroke:#2e7d32
  classDef more fill:#fff4e5,stroke:#b26a00
```

### Branch 9: Seal it, or pass cables, air or liquid through (65 entries)

```mermaid
flowchart LR
  q300{"What do you need?"}
  a301["Keep water, dust or air out of a joint that does not move · 14"]
  q300 --> a301
  q302{"Will you need to take it apart again?"}
  a301 --> q302
  a303["No, never · 9"]
  q302 --> a303
  q304{"What are the parts?"}
  a303 --> q304
  a305(["Metal sheet, tube or pipe · 7"])
  q304 --> a305
  class a305 leaf
  a306(["Plastic, fabric or film, or a gap to fill · 5"])
  q304 --> a306
  class a306 leaf
  a307(["Yes · 5"])
  q302 --> a307
  class a307 leaf
  a308(["Seal round a moving shaft or rod · 4"])
  q300 --> a308
  class a308 leaf
  a309(["Get cables through a wall or past a moving joint · 7"])
  q300 --> a309
  class a309 leaf
  a310["Join hoses, pipes or tubes · 11"]
  q300 --> a310
  q311{"How is it joined?"}
  a310 --> q311
  a312(["Screwed together (threads or a nut) · 4"])
  q311 --> a312
  class a312 leaf
  a313(["Pushed on, clamped or clicked together · 4"])
  q311 --> a313
  class a313 leaf
  a314(["Fused, soldered or brazed for good · 3"])
  q311 --> a314
  class a314 leaf
  a315["Pump, store or control air or liquid (valves, pumps) · 18"]
  q300 --> a315
  q316{"What should it do?"}
  a315 --> q316
  a317(["Push air or liquid along (pumps) · 6"])
  q316 --> a317
  class a317 leaf
  a318(["Let flow one way only, or let off pressure (safety) · 3"])
  q316 --> a318
  class a318 leaf
  a319(["Switch, set or store the flow (valves, regulators, tanks) · 9"])
  q316 --> a319
  class a319 leaf
  classDef leaf fill:#e6f4ea,stroke:#2e7d32
  classDef more fill:#fff4e5,stroke:#b26a00
```

### Branch 10: Hold or let go using power (electric, air or suction) (37 entries)

```mermaid
flowchart LR
  q320{"What will power it?"}
  a321["Electricity · 24"]
  q320 --> a321
  q322{"What should it do?"}
  a321 --> q322
  a323(["Lock, latch or hold by magnet, and let go on command · 6"])
  q322 --> a323
  class a323 leaf
  a324(["Move or push something (motors, actuators, artificial muscles) · 7"])
  q322 --> a324
  class a324 leaf
  a325(["Pump, switch or control air or liquid · 7"])
  q322 --> a325
  class a325 leaf
  a326(["Brake, clutch or grip · 4"])
  q322 --> a326
  class a326 leaf
  a327["Compressed air · 17"]
  q320 --> a327
  q328{"What should it do?"}
  a327 --> q328
  a329(["Push, pull, bend or turn something (cylinders, air muscles) · 7"])
  q328 --> a329
  class a329 leaf
  a330(["Grip or lift something (grippers, air bearings) · 6"])
  q328 --> a330
  class a330 leaf
  a331(["Switch, pump or control the air (valves, pumps) · 5"])
  q328 --> a331
  class a331 leaf
  a332["Liquid (hydraulics, water) · 13"]
  q320 --> a332
  q333{"What should it do?"}
  a332 --> q333
  a334(["Push, lift, bend or fold something · 8"])
  q333 --> a334
  class a334 leaf
  a335(["Pump, switch or control the liquid · 6"])
  q333 --> a335
  class a335 leaf
  a336(["Suction (vacuum) · 9"])
  q320 --> a336
  class a336 leaf
  classDef leaf fill:#e6f4ea,stroke:#2e7d32
  classDef more fill:#fff4e5,stroke:#b26a00
```