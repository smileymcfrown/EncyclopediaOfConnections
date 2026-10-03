### Overview: first two questions

```mermaid
flowchart LR
  q0{"What do you need it to do?"}
  a1["Hold two things together (they stay still) · 166"]
  q0 --> a1
  q2{"What are you joining?"}
  a1 --> q2
  a3["3D-printed parts, or screws, nuts and magnets into a print · 24"]
  q2 --> a3
  class a3 more
  a4["Boards, panels or sheet (wood, plywood, acrylic, sheet metal) · 30"]
  q2 --> a4
  class a4 more
  a5(["Tube, rod, pole or aluminium extrusion · 9"])
  q2 --> a5
  class a5 leaf
  a6["A wheel, gear or arm onto a shaft, or two shafts end to end · 23"]
  q2 --> a6
  class a6 more
  a7["Strap, cord, rope or fabric · 10"]
  q2 --> a7
  class a7 more
  a8["A lid, door or cover that opens and closes · 28"]
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
  a19(["Swivel or tilt in several directions (ball or universal joint) · 6"])
  q14 --> a19
  class a19 leaf
  a20(["Follow a set path (e.g. swing out and stay level) · 8"])
  q14 --> a20
  class a20 leaf
  a21["Control a movement (one way only, clicks, slips, locks, slows) · 111"]
  q0 --> a21
  q22{"What should it do?"}
  a21 --> q22
  a23["Move one way only (stop it going back) · 29"]
  q22 --> a23
  class a23 more
  a24["Click into set positions · 20"]
  q22 --> a24
  class a24 more
  a25["Slip, click or let go if overloaded · 19"]
  q22 --> a25
  class a25 more
  a26["Stay where I leave it, and let go when I release it · 31"]
  q22 --> a26
  class a26 more
  a27["Snap past a point and stay there (over-centre) · 12"]
  q22 --> a27
  class a27 more
  a28["Slow it down, stop it, or keep its speed steady · 17"]
  q22 --> a28
  class a28 more
  a29["Change a movement (speed, force or kind of motion) · 65"]
  q0 --> a29
  q30{"What change do you need?"}
  a29 --> q30
  a31["Faster, slower or stronger turning · 21"]
  q30 --> a31
  class a31 more
  a32["Turning into straight-line motion, or back · 27"]
  q30 --> a32
  class a32 more
  a33(["Steady turning into steps, or into rocking · 7"])
  q30 --> a33
  class a33 leaf
  a34["A push or pull moved, multiplied or redirected · 14"]
  q30 --> a34
  class a34 more
  a35(["Make movement from air, liquid, suction or heat · 8"])
  q30 --> a35
  class a35 leaf
  a36["Tighten something, or take up slack · 23"]
  q0 --> a36
  q37{"What are you tightening?"}
  a36 --> q37
  a38["A strap, lace, cord or rope · 13"]
  q37 --> a38
  class a38 more
  a39(["A belt, chain or cable in a machine · 6"])
  q37 --> a39
  class a39 leaf
  a40(["Parts clamped or pulled together · 10"])
  q37 --> a40
  class a40 leaf
  a41(["Line parts up exactly, every time · 7"])
  q0 --> a41
  class a41 leaf
  a42["Spring back, or store energy · 17"]
  q0 --> a42
  q43{"How should it push back?"}
  a42 --> q43
  a44(["Push or pull in a straight line · 6"])
  q43 --> a44
  class a44 leaf
  a45(["A printed or bent springy part (flexure) · 8"])
  q43 --> a45
  class a45 leaf
  a46(["Twist back (torsion), or wind up · 8"])
  q43 --> a46
  class a46 leaf
  a47["Seal it, or pass cables, air or liquid through · 49"]
  q0 --> a47
  q48{"What do you need?"}
  a47 --> q48
  a49["Keep water, dust or air out of a joint that does not move · 11"]
  q48 --> a49
  class a49 more
  a50(["Seal round a moving shaft or rod · 4"])
  q48 --> a50
  class a50 leaf
  a51(["Get cables through a wall or past a moving joint · 5"])
  q48 --> a51
  class a51 leaf
  a52(["Join hoses, pipes or tubes · 4"])
  q48 --> a52
  class a52 leaf
  a53["Pump, store or control air or liquid (valves, pumps) · 18"]
  q48 --> a53
  class a53 more
  a54["Hold or let go using power (electric, air or suction) · 36"]
  q0 --> a54
  q55{"What will power it?"}
  a54 --> q55
  a56["Electricity · 11"]
  q55 --> a56
  class a56 more
  a57(["Compressed air · 8"])
  q55 --> a57
  class a57 leaf
  a58(["Liquid (hydraulics, water) · 6"])
  q55 --> a58
  class a58 leaf
  a59(["Suction (vacuum) · 6"])
  q55 --> a59
  class a59 leaf
  classDef leaf fill:#e6f4ea,stroke:#2e7d32
  classDef more fill:#fff4e5,stroke:#b26a00
```

### Branch 1: Hold two things together (they stay still) (166 entries)

```mermaid
flowchart LR
  q60{"What are you joining?"}
  a61["3D-printed parts, or screws, nuts and magnets into a print · 24"]
  q60 --> a61
  q62{"Will you need to take it apart again?"}
  a61 --> q62
  a63(["No, never (permanent) · 10"])
  q62 --> a63
  class a63 leaf
  a64["Yes · 14"]
  q62 --> a64
  q65{"Is there a screw or bolt?"}
  a64 --> q65
  a66(["Yes · 6"])
  q65 --> a66
  class a66 leaf
  a67(["No (clips, pins, rings, magnets) · 8"])
  q65 --> a67
  class a67 leaf
  a68["Boards, panels or sheet (wood, plywood, acrylic, sheet metal) · 30"]
  q60 --> a68
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
  a79(["Tube, rod, pole or aluminium extrusion · 9"])
  q60 --> a79
  class a79 leaf
  a80["A wheel, gear or arm onto a shaft, or two shafts end to end · 23"]
  q60 --> a80
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
  q60 --> a91
  q92{"What do you need?"}
  a91 --> q92
  a93(["Close an opening, or attach fabric (zip, hook-and-loop, press stud, button) · 4"])
  q92 --> a93
  class a93 leaf
  a94(["Join strap ends, hook something on, or grip a cord · 6"])
  q92 --> a94
  class a94 leaf
  a95["A lid, door or cover that opens and closes · 28"]
  q60 --> a95
  q96{"How should it open?"}
  a95 --> q96
  a97(["It swings open on a hinge, or stays open at an angle · 6"])
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
  q60 --> a104
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
  q60 --> a109
  q110{"Who does the gripping?"}
  a109 --> q110
  a111(["I tighten it by hand (clamp, chuck, wedge) · 6"])
  q110 --> a111
  class a111 leaf
  a112(["A robot or machine (gripper) · 5"])
  q110 --> a112
  class a112 leaf
  a113["I just want to glue it · 18"]
  q60 --> a113
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
  q60 --> a140
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
  a171(["Swivel or tilt in several directions (ball or universal joint) · 6"])
  q145 --> a171
  class a171 leaf
  a172(["Follow a set path (e.g. swing out and stay level) · 8"])
  q145 --> a172
  class a172 leaf
  classDef leaf fill:#e6f4ea,stroke:#2e7d32
  classDef more fill:#fff4e5,stroke:#b26a00
```

### Branch 3: Control a movement (one way only, clicks, slips, locks, slows) (111 entries)

```mermaid
flowchart LR
  q173{"What should it do?"}
  a174["Move one way only (stop it going back) · 29"]
  q173 --> a174
  q175{"Does it turn or slide?"}
  a174 --> q175
  a176["Turns · 17"]
  q175 --> a176
  q177{"Is clicking OK?"}
  a176 --> q177
  a178(["Yes, clicks are fine (ratchets) · 7"])
  q177 --> a178
  class a178 leaf
  a179(["No, it must be smooth and silent · 6"])
  q177 --> a179
  class a179 leaf
  a180(["It is for air or liquid (one-way valves) · 4"])
  q177 --> a180
  class a180 leaf
  a181(["Slides · 8"])
  q175 --> a181
  class a181 leaf
  a182(["Bends, or something else · 5"])
  q175 --> a182
  class a182 leaf
  a183["Click into set positions · 20"]
  q173 --> a183
  q184{"Does it turn or slide?"}
  a183 --> q184
  a185["Turns · 14"]
  q184 --> a185
  q186{"What should the clicks do?"}
  a185 --> q186
  a187(["Hold a position I set by hand · 8"])
  q186 --> a187
  class a187 leaf
  a188(["Step forward one position at a time · 6"])
  q186 --> a188
  class a188 leaf
  a189(["Slides, bends or something else · 7"])
  q184 --> a189
  class a189 leaf
  a190["Slip, click or let go if overloaded · 19"]
  q173 --> a190
  q191{"What should happen when it is overloaded?"}
  a190 --> q191
  a192["Slip, and keep going · 12"]
  q191 --> a192
  q193{"Will you 3D print it?"}
  a192 --> q193
  a194(["Yes, or partly · 6"])
  q193 --> a194
  class a194 leaf
  a195(["No, I will buy or machine it · 6"])
  q193 --> a195
  class a195 leaf
  a196(["Click or pop out, then reset by itself · 6"])
  q191 --> a196
  class a196 leaf
  a197(["Break or let go once, on purpose (replace it after) · 3"])
  q191 --> a197
  class a197 leaf
  a198["Stay where I leave it, and let go when I release it · 31"]
  q173 --> a198
  q199{"Does it turn or slide?"}
  a198 --> q199
  a200["Turns · 17"]
  q199 --> a200
  q201{"What should it do?"}
  a200 --> q201
  a202(["Lock so only a person can open it (key, code, trigger) · 7"])
  q201 --> a202
  class a202 leaf
  a203(["Hold a load where it stops (brake or self-locking drive) · 10"])
  q201 --> a203
  class a203 leaf
  a204(["Slides · 8"])
  q199 --> a204
  class a204 leaf
  a205(["Bends, or something else · 8"])
  q199 --> a205
  class a205 leaf
  a206["Snap past a point and stay there (over-centre) · 12"]
  q173 --> a206
  q207{"What is it for?"}
  a206 --> q207
  a208(["Clamp or latch something shut · 5"])
  q207 --> a208
  class a208 leaf
  a209(["Flip between two positions (switch, fold or stay) · 7"])
  q207 --> a209
  class a209 leaf
  a210["Slow it down, stop it, or keep its speed steady · 17"]
  q173 --> a210
  q211{"What do you need?"}
  a210 --> q211
  a212(["Stop it or hold it still (brakes) · 4"])
  q211 --> a212
  class a212 leaf
  a213(["Cushion or smooth it (dampers) · 6"])
  q211 --> a213
  class a213 leaf
  a214(["Keep a steady speed or level · 7"])
  q211 --> a214
  class a214 leaf
  classDef leaf fill:#e6f4ea,stroke:#2e7d32
  classDef more fill:#fff4e5,stroke:#b26a00
```

### Branch 4: Change a movement (speed, force or kind of motion) (65 entries)

```mermaid
flowchart LR
  q215{"What change do you need?"}
  a216["Faster, slower or stronger turning · 21"]
  q215 --> a216
  q217{"How are the input and output shafts arranged?"}
  a216 --> q217
  a218(["Side by side (parallel) · 10"])
  q217 --> a218
  class a218 leaf
  a219(["At an angle (e.g. 90 degrees) · 7"])
  q217 --> a219
  class a219 leaf
  a220(["In line (one straight through the other) · 7"])
  q217 --> a220
  class a220 leaf
  a221(["Far apart, or the path bends (belts, cables, chains) · 5"])
  q217 --> a221
  class a221 leaf
  a222["Turning into straight-line motion, or back · 27"]
  q215 --> a222
  q223{"What kind of straight-line motion?"}
  a222 --> q223
  a224(["A slow, precise push (screws) · 7"])
  q223 --> a224
  class a224 leaf
  a225(["Back and forth, again and again (cranks, cams) · 5"])
  q223 --> a225
  class a225 leaf
  a226(["Long travel, or pulling (rack, belt, chain, cable, rope) · 10"])
  q223 --> a226
  class a226 leaf
  a227(["Steady turning into steps, or into rocking · 7"])
  q215 --> a227
  class a227 leaf
  a228["A push or pull moved, multiplied or redirected · 14"]
  q215 --> a228
  q229{"How?"}
  a228 --> q229
  a230(["Levers and linkages · 9"])
  q229 --> a230
  class a230 leaf
  a231(["Cables, ropes, pulleys or liquid in tubes · 5"])
  q229 --> a231
  class a231 leaf
  a232(["Make movement from air, liquid, suction or heat · 8"])
  q215 --> a232
  class a232 leaf
  classDef leaf fill:#e6f4ea,stroke:#2e7d32
  classDef more fill:#fff4e5,stroke:#b26a00
```

### Branch 5: Tighten something, or take up slack (23 entries)

```mermaid
flowchart LR
  q233{"What are you tightening?"}
  a234["A strap, lace, cord or rope · 13"]
  q233 --> a234
  q235{"How should it hold?"}
  a234 --> q235
  a236(["Click, wind or screw it tighter (ratchet, winch, turnbuckle) · 6"])
  q235 --> a236
  class a236 leaf
  a237(["Grip by friction; release by hand (buckles, cord locks) · 4"])
  q235 --> a237
  class a237 leaf
  a238(["Pull back by itself (spring or elastic) · 3"])
  q235 --> a238
  class a238 leaf
  a239(["A belt, chain or cable in a machine · 6"])
  q233 --> a239
  class a239 leaf
  a240(["Parts clamped or pulled together · 10"])
  q233 --> a240
  class a240 leaf
  classDef leaf fill:#e6f4ea,stroke:#2e7d32
  classDef more fill:#fff4e5,stroke:#b26a00
```

### Branch 6: Line parts up exactly, every time (7 entries)

This answer goes straight to a shortlist; no further question.


### Branch 7: Spring back, or store energy (17 entries)

```mermaid
flowchart LR
  q241{"How should it push back?"}
  a242(["Push or pull in a straight line · 6"])
  q241 --> a242
  class a242 leaf
  a243(["A printed or bent springy part (flexure) · 8"])
  q241 --> a243
  class a243 leaf
  a244(["Twist back (torsion), or wind up · 8"])
  q241 --> a244
  class a244 leaf
  classDef leaf fill:#e6f4ea,stroke:#2e7d32
  classDef more fill:#fff4e5,stroke:#b26a00
```

### Branch 8: Seal it, or pass cables, air or liquid through (49 entries)

```mermaid
flowchart LR
  q245{"What do you need?"}
  a246["Keep water, dust or air out of a joint that does not move · 11"]
  q245 --> a246
  q247{"Will you need to take it apart again?"}
  a246 --> q247
  a248(["No, never · 6"])
  q247 --> a248
  class a248 leaf
  a249(["Yes · 5"])
  q247 --> a249
  class a249 leaf
  a250(["Seal round a moving shaft or rod · 4"])
  q245 --> a250
  class a250 leaf
  a251(["Get cables through a wall or past a moving joint · 5"])
  q245 --> a251
  class a251 leaf
  a252(["Join hoses, pipes or tubes · 4"])
  q245 --> a252
  class a252 leaf
  a253["Pump, store or control air or liquid (valves, pumps) · 18"]
  q245 --> a253
  q254{"What should it do?"}
  a253 --> q254
  a255(["Push air or liquid along (pumps) · 7"])
  q254 --> a255
  class a255 leaf
  a256(["Let flow one way only, or let off pressure (safety) · 4"])
  q254 --> a256
  class a256 leaf
  a257(["Switch, set or store the flow (valves, regulators, tanks) · 7"])
  q254 --> a257
  class a257 leaf
  classDef leaf fill:#e6f4ea,stroke:#2e7d32
  classDef more fill:#fff4e5,stroke:#b26a00
```

### Branch 9: Hold or let go using power (electric, air or suction) (36 entries)

```mermaid
flowchart LR
  q258{"What will power it?"}
  a259["Electricity · 11"]
  q258 --> a259
  q260{"What should it do?"}
  a259 --> q260
  a261(["Lock, latch or hold by magnet, and let go on command · 6"])
  q260 --> a261
  class a261 leaf
  a262(["Brake, engage, switch or move something · 5"])
  q260 --> a262
  class a262 leaf
  a263(["Compressed air · 8"])
  q258 --> a263
  class a263 leaf
  a264(["Liquid (hydraulics, water) · 6"])
  q258 --> a264
  class a264 leaf
  a265(["Suction (vacuum) · 6"])
  q258 --> a265
  class a265 leaf
  classDef leaf fill:#e6f4ea,stroke:#2e7d32
  classDef more fill:#fff4e5,stroke:#b26a00
```