---
title: Glossary
description: The technical words used in the encyclopaedia, each in one plain sentence.
---

The technical words used on the entry pages, each explained in one plain sentence. Each entry page
links the first time it uses one of these words. Corrections and new words are welcome (see
`CONTRIBUTING.md`). Made by `tools/make_entries.py` from `glossary.yaml`.

- [How parts move](#how-parts-move)
- [Force, speed and gearing](#force-speed-and-gearing)
- [Springs, bending and damping](#springs-bending-and-damping)
- [Fits, holding and locating](#fits-holding-and-locating)
- [Materials, wear and failure](#materials-wear-and-failure)
- [3D printing, cutting and wood](#3d-printing-cutting-and-wood)
- [Glues](#glues)
- [Seals, air and liquid](#seals-air-and-liquid)

## How parts move

### Degrees of freedom

*Also called:* DOF

The number of separate ways a part can still move: slide along, across or up and down, and turn about each of those three directions, so 6 at most and 0 for a fixed joint.

### Misalignment

*Also called:* offset, angular misalignment

When two shafts or parts don't line up exactly: shifted sideways, tilted at an angle, or too far apart along their length.

### Play

*Also called:* looseness; end float or end play along a shaft

Unwanted wobble or free movement in a joint.

### Backlash

The small free movement between parts such as gear teeth when the direction changes, felt as a dead zone before the output moves.

### Back-driving

*Also called:* back-drivable

When the output can push the input backwards, for example a hanging load turning a motor round; a non-back-drivable drive holds the load when the motor stops.

### Self-locking

Holding its position under load with no brake, because friction is too high for the load to drive it back, as in most worm drives and fine lead screws.

### Axial / radial

Axial means along a shaft's length; radial means outwards from its centre line.

### Thrust load

*Also called:* axial load

A push along the length of a shaft, which needs a bearing made to take it.

### Coaxial

*Also called:* in line

Sharing the same centre line, like the input and output shafts of a planetary gearbox.

### Reciprocating

Moving back and forth in a straight line, again and again, like a piston.

### Oscillating

*Also called:* rocking

Swinging back and forth through part of a turn, like a windscreen wiper.

### Intermittent motion

*Also called:* indexing, stepping

Moving in steps with a pause between each, like a clock's second hand.

### Stroke

How far a sliding part travels from one end of its movement to the other.

### Dead point

*Also called:* dead centre

The position where a crank or linkage lines up straight, so pushing on it does nothing and it can stall there.

### Over-centre

*Also called:* toggle

Pushed just past its dead point, so the load now presses it further shut against a stop and it stays locked.

### Bistable

Having two resting positions and snapping between them, like a light switch or a hair clip.

### Detent

A spring-loaded ball, bump or arm that drops into notches so a part clicks into set positions and stays there.

### Ratchet

A toothed wheel or strip with a catch that lets it move one way, clicking, and stops it going back.

### Pawl

The hinged catch that drops into a ratchet's teeth.

### Freewheel

*Also called:* overrunning clutch, one-way clutch

A clutch that drives in one direction and spins freely in the other, like a bicycle hub when you stop pedalling.

### Sprag

One of the small tilted wedges in a sprag clutch that jam between two rings when turned one way.

## Force, speed and gearing

### Torque

*Also called:* turning force, moment

How hard something is twisted: the force times its distance from the centre, measured in newton-metres.

### Lever arm

*Also called:* moment arm

The distance from a pivot to where a force acts; a longer arm gives more turning effect.

### Mechanical advantage

How many times a lever, pulley or gear multiplies your force; you always pay by moving further.

### Gear ratio

*Also called:* reduction

How many turns the input makes for each turn of the output; a reduction slows the output and multiplies its turning force.

### Efficiency

The share of the input effort that comes out as useful output; the rest is lost as heat in friction.

### Lead

*Also called:* of a screw

How far a nut moves along a screw in one full turn.

### Pitch

The distance between neighbouring threads or teeth.

### Module

*Also called:* of a gear

A metric size for gear teeth (the pitch-circle diameter divided by the number of teeth); two gears must have the same module to mesh.

### Idler

A wheel or pulley that guides or tightens a belt or chain but doesn't drive anything.

### Cam and follower

A shaped disc or drum (the cam) that pushes a rod or lever (the follower) through a planned movement as it turns.

### Crank

An arm on a shaft that turns rotation into a push and pull, or the other way round.

### Linkage

*Also called:* four-bar linkage

Stiff bars joined by pivots that turn one movement into another; four bars in a loop is the simplest useful one.

### Actuator

The part that makes the movement in a powered system, such as a motor, solenoid, air cylinder or muscle wire.

### Solenoid

A coil of wire that pulls an iron plunger in when electricity flows through it.

### Fail-safe / fail-secure

What a powered lock does when the power goes off: fail-safe lets go (so people can get out), fail-secure stays locked.

## Springs, bending and damping

### Stiffness

*Also called:* spring rate

How much force it takes to bend or stretch something by a given amount.

### Preload

Force built into a joint on purpose before use (by tightening, a spring or a tight fit) to remove play or keep parts pressed together.

### Flexure

*Also called:* flexure hinge, flexure bearing

A thin, springy section of a part that bends to act as a hinge or slide, instead of pins or bearings.

### Compliant mechanism

A mechanism that gets its movement from parts bending, not from hinges and sliding joints.

### Living hinge

A thin strip of plastic joining two thicker parts that bends as a hinge, like the lid of a ketchup bottle.

### Cantilever

A beam fixed at one end and free at the other, like a diving board; the springy arm of most snap fits.

### Deflection

How far a part bends or moves under a load.

### Torsion

Twisting; a torsion spring or torsion bar works by being twisted.

### Damping

*Also called:* damper, dashpot

Soaking up movement energy, usually as heat, so a motion slows down or stops bouncing.

### Hysteresis

Behaving differently going one way than coming back, for example a spring giving back less force than it took.

### Stick-slip

Jerky motion where parts stick, then jump, then stick again, because friction at rest is higher than friction while sliding.

## Fits, holding and locating

### Clearance

A deliberate gap between two parts so they can move or fit together; in 3D printing, the gap left between print-in-place parts.

### Tolerance

How far a real size may differ from the drawing and the part still work.

### Interference fit

*Also called:* press fit

A peg slightly bigger than its hole, pressed in so the parts grip by squeezing each other.

### Form-fit / force-fit / material bond

*Also called:* *Formschluss, Kraftschluss, Stoffschluss*

The three ways a joint can hold: by shape (the parts interlock), by friction from a clamping force, or by joining the materials themselves (glue, solvent, melting).

### Holding force

*Also called:* pull-off force

How hard you must pull before a magnet, suction cup or clip lets go.

### Set screw

*Also called:* grub screw

A headless screw through a hub that presses on a shaft so the hub can't slip.

### Spline

Matching ridges on a shaft and inside a hub, so they turn together but the hub can still slide along.

### Taper

*Also called:* taper fit

A gently cone-shaped shaft and hole that wedge tightly together when pushed home.

### Collet

A slotted sleeve that squeezes evenly round a shaft or tool when it is tightened.

### Circlip

*Also called:* retaining ring, E-clip

A springy split ring that clips into a groove to stop a part sliding off a shaft or out of a hole.

### Heat-set insert

A brass sleeve with a thread inside, melted into a 3D-printed hole with a soldering iron to give strong, reusable metal threads.

### Captive nut

*Also called:* nut trap

A pocket shaped to hold a nut so it can't turn while the screw is tightened.

### Boss

A raised round post on a moulded or printed part that takes a screw, insert or pin.

### Pilot hole

A small starter hole that guides a screw.

### Counterbore / countersink

A flat-bottomed or cone-shaped widening at the top of a hole so a screw head sits flush.

### Threadlocker

*Also called:* anaerobic adhesive

A liquid put on threads that hardens once the nut is tight and air is shut out, so the nut can't shake loose.

### Chamfer / fillet

A sloped edge / a rounded corner; both make parts easier to fit together and spread out stress.

### Undercut

A hook or hollow that catches behind a mating part, like the lip of a snap fit.

### Return angle

*Also called:* retention angle

The slope on the back of a snap-fit hook: steep holds for good, shallow lets it pull apart again.

### Keying

*Also called:* poka-yoke, mistake-proofing

Shaping parts so they only fit together the right way round.

### Kinematic coupling

A mount where three balls sit in three V-shaped grooves (or similar), so a part drops back into exactly the same place every time.

### Exact constraint

Holding a part with exactly one contact for each movement you want to stop, so it sits in one definite place without being forced.

### Over-constraint

Stopping the same movement twice (for example two tight pins), so parts fight each other and bind unless made very precisely.

### Elastic averaging

Using many slightly springy locating features at once, so small errors average out and the parts line up well.

### Repeatability / accuracy

Repeatability is going back to the same place every time; accuracy is that place being where you meant it to be.

## Materials, wear and failure

### Creep

Slow, permanent stretching or sagging of a part under a steady load, much worse in plastics and when warm.

### Stress relaxation

The slow loss of clamping or spring force in a part held stretched or squeezed, for example a press fit loosening over months.

### Fatigue

Cracking after many repeated loads, each too small to break the part on its own.

### Brittle / ductile

Brittle materials snap with little warning; ductile ones bend and stretch first.

### Yield

*Also called:* yield point

The load at which a material stops springing back and stays bent.

### Stress concentration

*Also called:* stress raiser, notch

A sharp corner, hole or groove where force crowds together, so cracks start there.

### Wear

Material slowly rubbed away where parts slide or roll on each other.

### Galling / fretting

Galling is sliding metal surfaces tearing and sticking together (common with stainless threads); fretting is wear from tiny repeated rubbing.

### Lubrication

Grease, oil or a slippery material between moving parts to cut friction and wear.

### Shore hardness

*Also called:* durometer

A scale for how soft or hard rubber and flexible plastics are, such as "95A" for a typical TPU filament.

## 3D printing, cutting and wood

### Layer lines

*Also called:* anisotropy, layer adhesion

A print is weaker across its layers than along them, so the way you lay the part on the bed decides where it is strong.

### Perimeters

*Also called:* walls, shells

The solid outer layers of a print; more walls usually add more strength than more infill.

### Infill

The pattern that fills the inside of a print; it affects strength, weight and print time.

### Print-in-place

Printing moving parts already assembled, with small gaps between them, so they work straight off the printer.

### Elephant's foot

The first layers squashing out wider than the rest, which can fuse print-in-place parts or spoil a fit.

### Overhang / bridging

An overhang is printing outwards over empty space at an angle; bridging is printing straight across a gap between two supports.

### Support material

*Also called:* supports

Temporary structure printed under overhangs and removed afterwards.

### Warping / shrinkage

Parts curling or shrinking as hot plastic cools, which changes sizes and fits.

### Kerf

The width of material a saw blade or laser beam removes, which tight joints must allow for.

### End grain

The cut end of a piece of wood, showing the ends of its fibres; glue and screws hold badly in it.

## Glues

### Cure

*Also called:* curing

The chemical hardening of a glue, sealant or resin.

### Pot life / working time

How long a mixed glue stays usable before it starts to set.

### Open time

How long you have to put the parts together after spreading the glue.

### Surface energy

*Also called:* low-surface-energy plastics

How easily a liquid wets a surface; slippery plastics such as polyethylene (PE), polypropylene (PP) and PTFE have low surface energy, so most glues won't stick to them.

### Primer

A thin first coat that helps the glue grip.

### Peel vs shear

*Also called:* lap shear

Glue joints are strong when the parts slide past each other (shear) and weak when one is peeled off the other, so design joints to load the glue in shear.

### Gap filling

Whether a glue can fill and bridge a gap between badly fitting parts (epoxy can; superglue mostly can't).

## Seals, air and liquid

### O-ring

A rubber ring sitting in a groove that seals when squeezed between two parts.

### Gland

The groove or housing an O-ring sits in; also a fitting that seals round a cable passing through a wall (cable gland).

### IP rating

*Also called:* ingress protection

A two-digit code for how well a case keeps out dust (first digit) and water (second digit), for example IP67.

### Pressure

*Also called:* psi, bar, kPa

Force spread over an area; 1 bar is roughly normal air pressure, about 14.5 psi or 100 kPa.

### Check valve

*Also called:* one-way valve

A valve that lets air or liquid flow one way only.

### Regulator

*Also called:* pressure regulator

A valve that turns a high, changing pressure into a lower, steady one.

### Water hammer

A pressure shock when flowing water is stopped suddenly, which can bang pipes and burst fittings.

### Venturi

A narrowing in a pipe where the flow speeds up and the pressure drops, used to make suction from compressed air.
