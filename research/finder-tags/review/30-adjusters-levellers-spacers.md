# adjusters, levellers & spacers: Sets, fine-tunes or levels a position, height or gap, then holds it

5 entries; 6 values the script was unsure of, 1 read from text marked [uncertain]. Back to the [index](README.md).

| # | Entry | Connects | Power | If power is lost | Motion in | Motion out | Shafts | If overloaded | Clicks | Tools | Load | Usually made by | Adjust | Take apart |
|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|
| 129 | Eccentric adjuster | – | none | – | **–** | **–** | **–** | – | – | hand tools | heavy | off-the-shelf part | yes | removable |
| 327 | Shims, spacers and standoffs | **any solid parts** | none | – | – | – | – | – | – | none, hand tools | heavy | off-the-shelf part | yes | removable |
| 336 | Locking adjustment screws | **any solid parts** | none | – | steady turning | straight push or pull | – | – | – | hand tools | *heavy* | off-the-shelf part | yes | removable |
| 395 | Slotted adjustment with a jacking screw | **wall, rail, desk or grid** | none | – | steady turning | straight push or pull | – | – | – | hand tools | heavy | 3D print (FDM) | yes | removable |
| 397 | Levelling foot | **any solid parts** | none | – | **steady turning** | **–** | **–** | – | – | drill and tap, hand tools | heavy | off-the-shelf part | yes | removable |

## The script was unsure

- **129 Eccentric adjuster**, motion_in: no "in -> out" form in `input_output`: "An adjuster, not a drive: a rotation of the eccentric (up to 180°) gives a sidew..."
- **327 Shims, spacers and standoffs**, connects: joins parts, but no specific kind of part found; set to any solid parts
- **336 Locking adjustment screws**, connects: joins parts, but no specific kind of part found; set to any solid parts
- **395 Slotted adjustment with a jacking screw**, connects: tagged from its name, but joining is not one of its first two jobs; check it belongs
- **397 Levelling foot**, connects: joins parts, but no specific kind of part found; set to any solid parts
- **397 Levelling foot**, motion_in: could not read both sides of `input_output`: "An adjuster, not a drive: turning the stud (or the base) -> the foot moves in or out by on..."

## Read from text marked [uncertain]

The value is probably right, but the research run was not sure of the fact behind it.

- **336 Locking adjustment screws**, load_max: the source field `load` is marked [uncertain]
