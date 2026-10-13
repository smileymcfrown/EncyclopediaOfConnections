---
title: Heat-sealed seam
description: 'A heat-sealed seam joins two thin layers of thermoplastic film, or coating-to-coating on plastic-coated fabric,
  by pressing them with a hot bar, iron, wire or tip until the facing plastic melts together, giving an airtight, waterproof
  line with no stitches or glue: the joint behind plastic bags, inflatables, dry bags and soft-robot air pouches.'
num: 344
term: Heat-sealed seam (heat sealing, heat welding of plastic film and coated fabric)
plain_name: Pressing two layers of plastic film, or of fabric coated with plastic, together with something hot (a sealer bar,
  an iron or a hot wire) until the plastic melts into one airtight, waterproof line, like the sealed edge of a crisp packet
  or an air mattress
aliases:
- heat sealing, heat seal, heat welding, heat bonding (Wikipedia 'Heat sealer'; Niiyama et al. 2015 call it 'heat bonding')
- hot bar sealing = direct contact thermal sealing; impulse sealing (impulse heat sealer); band or continuous sealing; hot
  wire sealing (cuts and seals at once) (Wikipedia 'Heat sealer')
- hot air (hot gas) seam welding of film, tarps and banners, with the sheets 'rolled together' after heating (Wikipedia 'Plastic
  welding')
- RF welding = radio-frequency welding = high-frequency (HF) welding = dielectric sealing or dielectric welding (Wikipedia
  'Radio-frequency welding')
- 'fused plastic, fusing plastic bags (ironed between parchment) (Make: Maker Camp)'
- pouch motor, 'sticky actuator', aeroMorph, heat-sealed hinge (soft-robot pouches sealed by a heated tip on a CNC) (IEEE
  Spectrum; Ou et al. 2016)
- heat-sealable fabric, TPU-coated nylon, 'HF-weldable' Cordura (Extremtextil product names)
- 'induction (cap) sealing: the foil inner seal under a bottle cap, sealed without contact (Wikipedia ''Heat sealer''; Commons
  ''Heat seal film.jpg'')'
family: welding, brazing & soldering
other_families: [seals & pass-throughs, 'hydraulics, pneumatics & vacuum', 'cord, strap, webbing & textile hardware']
finder:
  job:
  - seal it, or pass cables or fluid through
  - join and hold
  - glue or bond
  motion: none
  special_behaviour: []
  holding_principle: [material bond]
  reuse_cycles: once
  seal: airtight or pressure
  access_needed: both sides
  print_in_place: 'no'
  maker_difficulty: easy
  processes: [off-the-shelf part, CNC, 3D print (FDM), laser cut]
  connects: ['strap, cord or fabric']
  power_source: [none]
  power_loss: not applicable
  motion_in: [not applicable]
  motion_out: [not applicable]
  shaft_layout: [not applicable]
  overload_response: not applicable
  clicks: not applicable
  tools: [soldering iron, power tools]
  load_max: medium
  usual_process: off-the-shelf part
  adjustable: 'no'
  removability: permanent
  power: passive
needs_confirming: {}
confirmed: []
open_points:
- kind: content
  note: '*Heat-sealed seam*: ''weaker in peel than in shear'' is [uncertain] (the patent PDF stating it had no extractable
    text).'
uncertain_fields: [load, materials, environment_limits]
diagram_idea: A cross-section of two plastic films (or two TPU-coated fabric layers, coating facing coating) clamped between
  a hot bar above and a rubber pad below with a parchment release sheet, showing the melted zone joining the layers, then
  a second panel of the jaws still closed while the seam cools, and a top view of a pouch where a copper-tape strip has kept
  an air channel unsealed.
links:
- url: https://commons.wikimedia.org/wiki/File:Impulse_sealer.jpg
  title: Impulse sealer.jpg (Wikimedia Commons, by Cjp24, 2009)
  shows: A small benchtop impulse bag sealer with a metal body and cutter blade
  license: CC BY-SA 3.0 (reuse with credit)
- url: https://commons.wikimedia.org/wiki/File:Heat_Sealing_Film_for_Permeability_Test.jpg
  title: Heat Sealing Film for Permeability Test.jpg (Wikimedia Commons, USDA photo by Peggy Greb)
  shows: A heat sealer being used to seal a plastic bag of lettuce in a food lab
  license: Public domain (USDA)
- url: https://www.extremtextil.de/en/know-how/welding-tpu-coated-fabrics
  title: 'TPU-coated fabrics: Easy to weld with heat and pressure (Extremtextil know-how)'
  shows: 'Step-by-step guide (steps 1-3): pre-taping, ironing and cooling a TPU-coated fabric seam under a metal block'
  license: link only
- url: https://www.media.mit.edu/projects/aeromorph/overview/
  title: aeroMorph (MIT Media Lab, Tangible Media Group)
  shows: Project page with video of heat-sealed TPU-coated paper, plastic and fabric pouches folding themselves like origami
    when inflated, and the CNC heat-sealing head
  license: link only
- url: https://hackaday.com/2020/05/14/fusing-plastic-sheets-with-a-3d-printer-sort-of/
  title: Fusing Plastic Sheets With A 3D Printer (Sort Of) (Hackaday, 2020)
  shows: Photo of a foil-wrapped printer hot-end dragging seams into tensioned bag film, with reader suggestions
  license: link only
make_it_yourself:
- url: https://www.printables.com/model/732684-cookietreat-heat-sealer-table
  title: Cookie/Treat Heat Sealer Table (Printables 732684; URL from Printables API, page not opened)
  what_it_is: A printable fold-out table with reference lines that clips to an 8 in impulse sealer with magnets, for sealing
    bags at a consistent position
  license: Creative Commons Attribution-NonCommercial-NoDerivatives
- url: https://makercamp.make.co/projects/toadstool-tote-and-rain-bucket-hat
  title: 'Toadstool Tote and Rain Bucket Hat (Make: Maker Camp)'
  what_it_is: A beginner project fusing plastic shopping bags into sheet with an iron and parchment, then sewing it into a
    tote and hat
  license: link only (licence not stated on the page)
- url: https://imagine.inrialpes.fr/people/mskouras/material/aeroMorph_Ou16.pdf
  title: 'aeroMorph: Heat-sealing Inflatable Shape-change Materials for Interaction Design (Ou et al., UIST 2016; author-hosted
    PDF)'
  what_it_is: Paper with three fabrication methods (hand sealer with copper-tape masks, heat press with stencil, CNC ball-tip
    sealer) and sealing parameters for TPU-coated materials
  license: link only (ACM copyright)
sources:
- https://en.wikipedia.org/wiki/Heat_sealer
- https://en.wikipedia.org/wiki/Plastic_welding
- https://en.wikipedia.org/wiki/Radio-frequency_welding
- https://en.wikipedia.org/wiki/Polyvinyl_chloride
- https://www.extremtextil.de/en/know-how/welding-tpu-coated-fabrics
- https://imagine.inrialpes.fr/people/mskouras/material/aeroMorph_Ou16.pdf
- https://www.media.mit.edu/projects/aeromorph/overview/
- https://dspace.mit.edu/handle/1721.1/107946
- https://spectrum.ieee.org/printable-inflatable-pouch-motors-will-make-building-robots-as-easy-as-using-stickers
- https://www.ebi.ac.uk/europepmc/webservices/rest/PMC9546565/fullTextXML
- https://hackaday.com/2020/05/14/fusing-plastic-sheets-with-a-3d-printer-sort-of/
- https://hackaday.com/2019/04/02/custom-inflatables-are-only-a-laser-beam-away/
- https://hackaday.com/2018/08/05/spot-welding-plastic/
- https://makercamp.make.co/projects/toadstool-tote-and-rain-bucket-hat
- https://uspackagingandwrapping.com/blog/impulse-sealer-heat-settings.html
- https://www.twi-global.com/technical-knowledge/faqs/faq-are-there-any-health-and-safety-implications-of-cutting-and-welding-plastics
- https://commons.wikimedia.org/wiki/File:Impulse_sealer.jpg
- https://commons.wikimedia.org/wiki/File:Heat_Sealing_Film_for_Permeability_Test.jpg
- https://commons.wikimedia.org/wiki/File:Heat_seal_film.jpg
- https://api.printables.com/graphql/ (models 732684, 11188)
research: research/connection-types/results/Heatsealed_seam_heatsealed_plastic_film_and_coated_fabric.json
image: null
glossary: [stroke, bistable, actuator, form-fit--force-fit--material-bond, creep, peel-vs-shear]
---

A heat-sealed seam joins two thin layers of thermoplastic film, or coating-to-coating on plastic-coated fabric, by pressing them with a hot bar, iron, wire or tip until the facing plastic melts together, giving an airtight, waterproof line with no stitches or glue: the joint behind plastic bags, inflatables, dry bags and soft-robot air pouches.

**In plain words:** Pressing two layers of plastic film, or of fabric coated with plastic, together with something hot (a sealer bar, an iron or a hot wire) until the plastic melts into one airtight, waterproof line, like the sealed edge of a crisp packet or an air mattress. **Proper term:** Heat-sealed seam (heat sealing, heat welding of plastic film and coated fabric).

**Also called:** heat sealing, heat seal, heat welding, heat bonding (Wikipedia 'Heat sealer'; Niiyama et al. 2015 call it 'heat bonding'); hot bar sealing = direct contact thermal sealing; impulse sealing (impulse heat sealer); band or continuous sealing; hot wire sealing (cuts and seals at once) (Wikipedia 'Heat sealer'); hot air (hot gas) seam welding of film, tarps and banners, with the sheets 'rolled together' after heating (Wikipedia 'Plastic welding'); RF welding = radio-frequency welding = high-frequency (HF) welding = dielectric sealing or dielectric welding (Wikipedia 'Radio-frequency welding'); fused plastic, fusing plastic bags (ironed between parchment) (Make: Maker Camp); pouch motor, 'sticky [actuator](../glossary.md#actuator)', aeroMorph, heat-sealed hinge (soft-robot pouches sealed by a heated tip on a CNC) (IEEE Spectrum; Ou et al. 2016); heat-sealable fabric, TPU-coated nylon, 'HF-weldable' Cordura (Extremtextil product names); induction (cap) sealing: the foil inner seal under a bottle cap, sealed without contact (Wikipedia 'Heat sealer'; Commons 'Heat seal film.jpg').

## How it works

Heat sealing is 'the process of sealing one thermoplastic to another similar thermoplastic using heat and pressure' (Wikipedia 'Heat sealer'). The hot tool heats a narrow strip through the layers until the plastic where they touch melts; pressure squeezes the soft faces together so the plastic flows into one, and the seam is held pressed while it cools so it sets before anything pulls on it. In an impulse sealer the nichrome wire heats 'only when current flows', and the jaws keep clamping after the heat stops which 'allows the material to fuse before stress can be applied' (Wikipedia). Coated fabric seals only coating-to-coating: the woven fabric carries the load and the thin TPU or PVC coating melts to make the seam (Extremtextil). Places that must stay open, such as air channels in a pouch, are kept unsealed with a heat-sinking strip of copper tape on top or a sheet of parchment between the layers (Ou et al. 2016; Decker et al. 2022). Industrial cousins: RF welding heats polar plastics such as PVC and polyurethane from inside with a 27.12 MHz electric field, and hot-air welders blow hot air between overlapping sheets and roll them together (Wikipedia 'Radio-frequency welding', 'Plastic welding').

## Parts

Single piece once made: two layers fused along a line. Making it needs: a heat source (an impulse sealer with a nichrome wire under a PTFE cover, a constant-heat bar sealer, a household iron, a soldering iron or wood-burning pen, a heat press, or a 3-axis CNC or 3D printer carrying a heated tip); a release sheet (baking parchment or PTFE) so the melted plastic doesn't stick to the tool; a firm backing; and, for pouches with air channels, masks such as copper tape or parchment where the layers must stay apart (Wikipedia 'Heat sealer'; Extremtextil; Ou et al. 2016; Decker et al. 2022).

## Everyday examples

- the sealed edges of plastic bags, food pouches and packaging made on heat sealers (Wikipedia 'Heat sealer')
- beach balls, airbeds and life jackets, whose seams are typically RF-welded (Wikipedia 'Radio-frequency welding')
- the foil seal under the cap of a new bottle (induction sealing) (Wikipedia 'Heat sealer'; Commons 'Heat seal film.jpg')
- greenhouse and polytunnel film panels joined with a wheeled heat sealer (Wikipedia 'Heat sealer')

## When to use it

When you need a thin, flexible, airtight or waterproof seam in film or coated fabric: custom inflatables and air pouches for soft robots (pouch motors, aeroMorph hinges, soft valves), vacuum or storage bags, dry bags, waterproof covers and boat or tarp repairs (Niiyama et al. 2015; Ou et al. 2016; Decker et al. 2022; Extremtextil). It is quick, needs no glue or stitching and, unlike a sewn seam, has no needle holes to leak. Choose an impulse sealer for straight seams on bags and film; an iron for TPU-coated fabric; a soldering iron, wood-burning pen or CNC/3D-printer tip for curved patterns; a heat press with a stencil for many identical pouches (Ou et al. 2016).

## When not to use it

For rigid plastic parts: use Melted plastic weld or Friction-welded plastic. For uncoated fabric, or fabric to a different material: sew it (Sewn seams and hand stitches) and seal with seam tape, or glue it (Iron-on fusible web for non-airtight hems). For seams that must open and close again: use a zipper or a roll-top closure. For films that won't fuse with your tool (e.g. LDPE with a household iron for one maker, Hackaday 2019) or plastics that don't melt (silicone): change the material or method. For anything that must keep a person afloat or hold high pressure (life jackets, rafts, airbags for lifting): buy certified products; a home-made seam isn't tested to the standards industry uses (Wikipedia lists ASTM seal, burst and leak tests).

## Details

- **What it does (jobs):**
  - seal it, or pass cables or fluid through: makes airtight, waterproof seams for inflatables, air pouches and actuators, dry bags, covers and food or storage bags
  - join and hold: joins layers of film or coated fabric into bags, tubes, pouches and covers
  - glue or bond: a melted bond with no glue; some films carry a heat-activated glue layer instead (Wikipedia 'Heat sealer')
- **Movement:** none (the seam itself doesn't move; the film around it flexes, and seam patterns in an inflated pouch act as fold lines, Ou et al. 2016)
- **Directions it can move (degrees of freedom):** 0: the two layers are fused along the seam line (the film itself stays flexible).
- **Special behaviour:**
  - none: it is a plain permanent seal; seam shapes can, however, be designed so a pouch bends or folds in a planned way when inflated (aeroMorph, Ou et al. 2016)
- **How it holds:** [material bond](../glossary.md#form-fit--force-fit--material-bond) (glue, solvent or melting): the facing plastic layers melt and fuse
- **Input and output:** not applicable
- **Power:** passive (no power needed) once made; making it needs a heat sealer, iron, soldering iron, heat press or heated CNC tip
- **Load:** Light for plastic film, medium for coated fabric. A linear pouch motor made of heat-sealed film reached up to 100 N pull and 28% [stroke](../glossary.md#stroke) (Niiyama et al. 2015), and TPU-coated fabric seams are used for inflatables and boats (Extremtextil; Hackaday 2019: a raft planned in TPU-coated fabric 'fused together with a hot iron'). Thin bag film sealed with a printer nozzle could still be pulled apart by hand (Hackaday 2020). A seam is strongest when the load runs along it (shear, as when an inflated pouch stretches the seam) and weakest when the two layers are peeled apart from the inside edge, which is how seal strength is usually tested ('seal strength testing, also known as [peel](../glossary.md#peel-vs-shear) testing', Wikipedia 'Heat sealer') ⚑ [uncertain: no opened page gives peel and shear figures side by side].
- **Play and precision:** not applicable for play. Seam placement: by hand within a few millimetres; a heat press with a stencil or a CNC sealing head gives repeatable patterns (Ou et al. 2016). Film shrinks as it fuses (Make: Maker Camp) and bunches under a dragged tip (Hackaday 2020), so leave extra margin and keep film flat and tensioned.
- **Taking it apart:** permanent: a seam is cut open rather than undone; some packaging seals are designed to peel open, and their 'opening force' is tested (Wikipedia 'Heat sealer')
- **How often it can be reused:** once (a cut-open bag can be resealed below the old seam if there is enough material left)
- **Sealing:** airtight or pressure: heat sealing makes 'gas-tight bladders' for pouch motors (Niiyama et al. 2015) and 'water- and airtight bonds' in TPU-coated fabric (Extremtextil); RF welds are 'water-, air-, and bacteria-proof' (Wikipedia 'Plastic welding'). Pressure capacity is low and depends on the film and seam width: packaging seams are tested by bursting and by holding about 80% of burst pressure until they [creep](../glossary.md#creep) apart (ASTM F1140 and F2054, Wikipedia 'Heat sealer').
- **Adjustable:** no
- **Access needed:** both sides: the layers must be pressed between the hot tool and a firm backing (sealer jaws, or an iron onto a board), so the seam must lie flat and be reachable from above with support underneath; it can't be done blind inside a closed bag or tube
- **Materials:** Seals thermoplastic film and plastic-coated sheet to the same or a similar plastic: polyethylene (LDPE bags, HDPE milk-bottle sheet), polypropylene, PVC film, polyolefin shrink film, TPU film, and TPU- or PVC-coated fabrics, plus laminates where at least one layer is a thermoplastic, such as foil bags with a plastic liner (Wikipedia 'Heat sealer'; US Packaging & Wrapping; Extremtextil; Hackaday 2018 and 2020 reader comments). Paper, plastic sheet and fabric can be made heat-sealable by first ironing or pressing on a TPU layer (Ou et al. 2016). RF (high-frequency) welding only works on polar plastics such as PVC, polyurethane, nylon, PET, EVA and cellulose acetate, not on polyethylene (Wikipedia 'Radio-frequency welding'). Won't seal: uncoated fabric, coated fabric face-to-back ('The material only sticks when coating is applied to coating', Extremtextil), and mismatched plastics; one maker found LDPE film would not fuse with a household iron and switched to a defocused laser (Hackaday 2019), while others sealed LDPE and HDPE with a wood-burning pen through parchment (Hackaday 2020 comments). Silicone rubber and uncoated paper don't melt and can't be heat-sealed ⚑ [uncertain: not stated on an opened page].
- **Heat, cold, water and wear:** The seam shares the film's limits: heat softens it again (it was made by heat), so keep sealed TPU or PE away from hot surfaces ⚑ [uncertain: no softening temperatures from an opened page]. Seams under steady internal pressure can creep open over time, which is why packaging is tested by holding about 80% of burst pressure until failure (Wikipedia 'Heat sealer', ASTM F2054). Sunlight, cold and chemical limits depend on the film and coating; no figures found for maker films ⚑ [uncertain].

## Making it

- **Ways to make or get it:**
  - off-the-shelf part: plastic film, bags, tubing and TPU- or PVC-coated fabric sealed with a heat sealer or iron
  - 3D print (FDM): a 3D printer or CNC can carry a heated tip to draw seams (Hackaday 2020; Niiyama et al. 2015; Ou et al. 2016), and printed jigs help seal consistently (Printables 732684)
  - laser cut: a defocused CO2 laser at low power can weld LDPE film, and slightly more power cuts it (Hackaday 2019)
  - CNC: a heat-sealing head on a 3-axis CNC (Ou et al. 2016), or a CNC-milled or water-jet-cut aluminium stencil for a heat press
- **Printing it in one piece (print in place):** no: the seam joins film or fabric, not printed parts; a printer can be used as the sealing machine
- **Tools:** One of: an impulse heat sealer (hand or foot operated; suited to straight seams on bags and film), a constant-heat bar or band sealer, a household iron (TPU-coated fabric, fused bags), a soldering iron or wood-burning pen with a smooth tip (curved seams), a heat press with a cut aluminium stencil (repeated patterns), or a 3D printer or CNC with a heated tip (Wikipedia 'Heat sealer'; Extremtextil; Ou et al. 2016; Hackaday 2020). Also: baking parchment or PTFE sheet as a release layer, a firm flat backing (board or wooden bar the width of the seam), a metal block or roller to press while cooling, paper packing tape to pre-position seams, and copper tape or parchment to mask areas that must stay open (Extremtextil; Ou et al. 2016).
- **Difficulty:** easy: an impulse sealer or a household iron and baking parchment are enough, but each film or fabric needs a few test seams to find the right heat, time and pressure (Extremtextil; Make: Maker Camp)

### 3D printing tips

Using a 3D printer as a sealing plotter: wrap the hot-end in aluminium foil, put cardboard on the bed, stretch the film tight with binder clips and a frame, and script the printer to drag the nozzle along the seam at different speeds and temperatures; thin (0.5 mil) bag film gave 'decent seams at around 180 deg C' but bunched up and could be pulled apart by hand (Hackaday 2020). Readers suggested laying baking parchment over the film, or using a rolling tip such as a small ball-transfer unit instead of a dragging nozzle (Hackaday 2020 comments); the aeroMorph team did exactly that, fixing a 1/4 in metal ball transfer to a temperature-controlled soldering iron on a CNC, with a 3D-printed spring mount to keep the sealing force even on bumpy surfaces (Ou et al. 2016). Niiyama's pouch motors were made on 'a 3-axis CNC holding a rod that can be heated, like a soldering iron' (IEEE Spectrum). Printed helpers: a fold-out table with reference lines for consistent seal positions on an impulse sealer (Printables 732684). Alternative: if you can't seal film, print the air chamber itself in TPU (see Soft pneumatic bending actuator); a printed TPU lid can also be fused on with a soldering iron (Printables 11188, see Melted plastic weld). Not applicable to sealing printed parts to each other.

### Buying one (off-the-shelf parts)

Search terms: 'impulse heat sealer' (hand or foot; 'with cutter'; seal width e.g. 2 mm or 5 mm), 'replacement heating element' and 'PTFE (Teflon) tape' for impulse sealers, 'continuous band sealer', 'heat press', 'mini iron' or 'craft iron', 'baking parchment' or 'PTFE sheet' ('BBQ mat'), 'TPU film', 'heat-sealable fabric' or 'TPU-coated nylon' (one or both sides coated), 'PVC-coated polyester' (tarp fabric), 'LDPE lay-flat tubing', 'heat-sealable bags' or 'vacuum sealer bags', 'copper foil tape' (masking channels), and 'hot air welder' with 'overlap welding nozzle' for tarps. Link to supplier pages for sizes rather than copying them.

## Rules of thumb

- Good seals come from the right 'time, temperature and pressure for the correct clean material' (Wikipedia, https://en.wikipedia.org/wiki/Heat_sealer).
- TPU-coated fabric with a household iron: setting 2-3, about 10-15 s with pressure, seam about 1-2 cm wide, coating facing coating, baking paper between iron and fabric, then let the joint cool under pressure (a metal block helps); iron only the seam, e.g. over a wooden bar the width of the seam (Extremtextil, https://www.extremtextil.de/en/know-how/welding-tpu-coated-fabrics).
- TPU heat press: about 10 s at 260 deg F (127 deg C) through a 1/4 in aluminium stencil with channels etched to half its depth; thinner stencils or longer heating 'over-seal' and block the air channels. Coating a sheet with TPU first: about 60 s at 260 deg F (Ou et al., aeroMorph, UIST 2016, https://imagine.inrialpes.fr/people/mskouras/material/aeroMorph_Ou16.pdf).
- Keep areas unsealed with a heat-sinking mask: copper tape over the air channels when sealing by hand (Ou et al. 2016), or parchment paper between two TPU layers (Decker et al., PNAS 2022, https://www.ebi.ac.uk/europepmc/webservices/rest/PMC9546565/fullTextXML).
- Printer-nozzle sealing of 0.5 mil bag film: decent seams at about 180 deg C, but the film bunched up (Hackaday, https://hackaday.com/2020/05/14/fusing-plastic-sheets-with-a-3d-printer-sort-of/).
- Impulse sealers: the right setting depends mainly on the film type and thickness; use the lowest setting that still gives a sturdy seal, which also makes the heating wire and PTFE tape last longer (US Packaging & Wrapping, https://uspackagingandwrapping.com/blog/impulse-sealer-heat-settings.html).
- Fusing bag film into sheet: iron on the 'synthetics' setting between two sheets of parchment, keep the iron moving, let it cool before lifting the paper, and turn it over to fuse the other side; too hot an iron makes the plastic shrink fast and ripple (Make: Maker Camp, https://makercamp.make.co/projects/toadstool-tote-and-rain-bucket-hat).
- PTFE release sheets and PTFE-coated tools should not go above 270 deg C, to avoid polymer fume fever (TWI, https://www.twi-global.com/technical-knowledge/faqs/faq-are-there-any-health-and-safety-implications-of-cutting-and-welding-plastics).
- RF (high-frequency) welding works at about 27.12 MHz and only on plastics with polar molecules (PVC is excellent, polyethylene can't be done) (Wikipedia, https://en.wikipedia.org/wiki/Radio-frequency_welding).

## Common failures

(1) Too little heat, time or pressure: a seam that peels apart by hand (Hackaday 2020) or leaks in spots; adjust one setting at a time on test strips (Wikipedia; Extremtextil). (2) Too much heat or time: melt-through holes, shrinking and rippled film (Make: Maker Camp), bubbles in the seam, coating that tears away from the fabric instead of the seam failing (Extremtextil), or over-sealed, blocked air channels (Ou et al. 2016). (3) Releasing pressure too early: seams must cool under pressure (Wikipedia; Extremtextil: bubbles 'if the pressure was too low during cooling'). (4) Film sticking to the tool: use parchment or PTFE as a release layer (Wikipedia; Extremtextil). (5) Wrinkles and bunching under a dragged tip: tension the film, use a rolling ball tip or a parchment layer (Hackaday 2020 and comments; Ou et al. 2016). (6) Coated fabric placed face-to-back, which doesn't bond (Extremtextil). (7) Dirty, oily or wet film, or mismatched plastics (Wikipedia: 'correct clean material'; Hackaday 2019). (8) Leaks at corners, where seams cross, and where a tube or fitting passes through: check by inflating the pouch under water and looking for bubbles, the same idea as the bubble-emission leak test ASTM D3078 (Wikipedia 'Heat sealer'). (9) Hot-wire cut-and-seal edges are narrow beads, 'not usually employed when barrier properties are critical' (Wikipedia).

## Safety

BURNS: sealer bars, impulse-sealer wires, irons, soldering-iron tips and freshly melted plastic are hot; let the jaws close and cool before handling the seam. FIRE: keep hot irons and tips in a stand and away from loose film. FUMES: ventilate ('be sure your workspace is well ventilated', Make: Maker Camp). PVC gives off hydrogen chloride when overheated (TWI, for laser cutting; Wikipedia 'Polyvinyl chloride'), so seal PVC with good ventilation and without scorching; TWI says hot-gas welding fumes from PVC are not normally a concern except in confined spaces with the face close to the work. Melting urethane (polyurethane, as in TPU) 'has been known to give off toxic cyanide gasses' (Wikipedia 'Plastic welding'), so don't overheat TPU. Keep PTFE (Teflon) release sheets, BBQ mats and sealer covers below 270 deg C, because overheated PTFE causes polymer fume fever (TWI). RF welders need a screening enclosure to protect the operator from radio-frequency radiation (Wikipedia 'Radio-frequency welding'): an industrial machine, not a home project. MEDICAL AND FOOD LOOK-ALIKES: heat-sealed pouches look like medical fluid bags and sterile or food packaging, which industry validates with seal-strength, burst and leak tests; a home-made seal is not validated, so don't use it for medical, sterile or food-safety purposes. Never rely on a home-sealed inflatable to keep a person afloat or to lift a load over people.

## Related

- Melted plastic weld (plastic welding with a soldering iron, 3D pen or hot-air gun): joins rigid plastic parts, usually with a filler rod
- Ultrasonic weld (ultrasonic plastic welding, energy director): Wikipedia lists ultrasonic welding as another way to heat-seal film and fabric industrially
- Sewn seams and hand stitches (lockstitch, saddle stitch, flat-felled seam): strong in any fabric, but leaks through needle holes unless taped or sealed
- Iron-on fusible web (heat-activated adhesive web, hem tape): also ironed, but uses a separate glue film between fabrics; not airtight
- Rope-end finishing (whipping, heat-sealing, back splice, aglet): melting synthetic rope and webbing ends so they don't fray
- Hot-melt adhesive (glue gun): hot-melt glue in strips is one of Wikipedia's listed heat-sealing methods, for materials that won't fuse
- Bellows and inflatable actuators (air bag, air spring): many hobby versions are heat-sealed film pouches
- Air-logic valve (pneumatic logic, soft [bistable](../glossary.md#bistable) valve): soft valves built from heat-sealed TPU film (Decker et al. 2022)
- Soft pneumatic bending actuator (air-powered soft finger): a printed or moulded alternative to heat-sealed pouches
- Zipper (slide fastener): the reopenable closure to pair with heat-sealed bags and covers

## Make it yourself

- [Cookie/Treat Heat Sealer Table (Printables 732684; URL from Printables API, page not opened)](https://www.printables.com/model/732684-cookietreat-heat-sealer-table): A printable fold-out table with reference lines that clips to an 8 in impulse sealer with magnets, for sealing bags at a consistent position *(licence: Creative Commons Attribution-NonCommercial-NoDerivatives)*
- [Toadstool Tote and Rain Bucket Hat (Make: Maker Camp)](https://makercamp.make.co/projects/toadstool-tote-and-rain-bucket-hat): A beginner project fusing plastic shopping bags into sheet with an iron and parchment, then sewing it into a tote and hat *(licence: link only (licence not stated on the page))*
- [aeroMorph: Heat-sealing Inflatable Shape-change Materials for Interaction Design (Ou et al., UIST 2016; author-hosted PDF)](https://imagine.inrialpes.fr/people/mskouras/material/aeroMorph_Ou16.pdf): Paper with three fabrication methods (hand sealer with copper-tape masks, heat press with stencil, CNC ball-tip sealer) and sealing parameters for TPU-coated materials *(licence: link only (ACM copyright))*

## Pictures, videos and models

- [Impulse sealer.jpg (Wikimedia Commons, by Cjp24, 2009)](https://commons.wikimedia.org/wiki/File:Impulse_sealer.jpg): A small benchtop impulse bag sealer with a metal body and cutter blade *(licence: CC BY-SA 3.0 (reuse with credit))*
- [Heat Sealing Film for Permeability Test.jpg (Wikimedia Commons, USDA photo by Peggy Greb)](https://commons.wikimedia.org/wiki/File:Heat_Sealing_Film_for_Permeability_Test.jpg): A heat sealer being used to seal a plastic bag of lettuce in a food lab *(licence: Public domain (USDA))*
- [TPU-coated fabrics: Easy to weld with heat and pressure (Extremtextil know-how)](https://www.extremtextil.de/en/know-how/welding-tpu-coated-fabrics): Step-by-step guide (steps 1-3): pre-taping, ironing and cooling a TPU-coated fabric seam under a metal block *(licence: link only)*
- [aeroMorph (MIT Media Lab, Tangible Media Group)](https://www.media.mit.edu/projects/aeromorph/overview/): Project page with video of heat-sealed TPU-coated paper, plastic and fabric pouches folding themselves like origami when inflated, and the CNC heat-sealing head *(licence: link only)*
- [Fusing Plastic Sheets With A 3D Printer (Sort Of) (Hackaday, 2020)](https://hackaday.com/2020/05/14/fusing-plastic-sheets-with-a-3d-printer-sort-of/): Photo of a foil-wrapped printer hot-end dragging seams into tensioned bag film, with reader suggestions *(licence: link only)*

## Needs confirming

⚑ marks something nobody has confirmed yet: a fact the research could not confirm from a source, a finder value that is a best guess, or an open point from the research notes. Corrections are welcome (see `research/needs-confirming.md`).

- ⚑ 4 sentences on this page marked [uncertain].
- ⚑ Research note: *Heat-sealed seam*: 'weaker in peel than in shear' is [uncertain] (the patent PDF stating it had no extractable text).

## Sources

- <https://en.wikipedia.org/wiki/Heat_sealer>
- <https://en.wikipedia.org/wiki/Plastic_welding>
- <https://en.wikipedia.org/wiki/Radio-frequency_welding>
- <https://en.wikipedia.org/wiki/Polyvinyl_chloride>
- <https://www.extremtextil.de/en/know-how/welding-tpu-coated-fabrics>
- <https://imagine.inrialpes.fr/people/mskouras/material/aeroMorph_Ou16.pdf>
- <https://www.media.mit.edu/projects/aeromorph/overview/>
- <https://dspace.mit.edu/handle/1721.1/107946>
- <https://spectrum.ieee.org/printable-inflatable-pouch-motors-will-make-building-robots-as-easy-as-using-stickers>
- <https://www.ebi.ac.uk/europepmc/webservices/rest/PMC9546565/fullTextXML>
- <https://hackaday.com/2020/05/14/fusing-plastic-sheets-with-a-3d-printer-sort-of/>
- <https://hackaday.com/2019/04/02/custom-inflatables-are-only-a-laser-beam-away/>
- <https://hackaday.com/2018/08/05/spot-welding-plastic/>
- <https://makercamp.make.co/projects/toadstool-tote-and-rain-bucket-hat>
- <https://uspackagingandwrapping.com/blog/impulse-sealer-heat-settings.html>
- <https://www.twi-global.com/technical-knowledge/faqs/faq-are-there-any-health-and-safety-implications-of-cutting-and-welding-plastics>
- <https://commons.wikimedia.org/wiki/File:Impulse_sealer.jpg>
- <https://commons.wikimedia.org/wiki/File:Heat_Sealing_Film_for_Permeability_Test.jpg>
- <https://commons.wikimedia.org/wiki/File:Heat_seal_film.jpg>
- <https://api.printables.com/graphql/ (models 732684, 11188)>
