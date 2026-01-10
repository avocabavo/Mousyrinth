# Mousyrinth

Puzzles navigated in the browser with a mouse

## Premise

I try to avoid triggering hover effects while doomscrolling ... what if that was a game?

This application uses Vite and React to facilitate deployment and organization of components, but the core gameplay is implemented without js (html and css only).

## Rules

The following maneuvers are banned for being outside the spirit of this puzzle:
- Opening the context menu (right clicking)
- Dragging other windows in front of part of a level
- Spamming clicks
- Moving the mouse so fast that it skips over an element without triggering hover

The following maneuvers are fair game:
- Leaving and reentering the page through the left and right edges
- Moving the mouse fast enough to outrun an animated transition
- Holding the mouse still to avoid triggering hover effects
- Scrolling

## Installation

1. Clone this repository
1. Move into the mousyrinth sub-directory `cd Mousyrinth/mousyrinth/`
1. Install node packages `npm i`
1. Start Application `npm run dev`
1. Use a browser to navigate to the localhost port indecated in the last command's output

## Extending Mousyrinth

### Adding a Level

1. Make a new .tsx file in Mousyrinth/mousyrinth/src/levels from LevelTemplate.tsx
1. Import that level in Mousyrinth/mousyrinth/src/App.tsx
1. Create a route for that level in the same file
1. Create links to and from that level using Gateway components

### Adding a Component

1. Make new .tsx and .css files for that component in Mousyrinth/mousyrinth/src/components from ComponentTemplate.tsx and ComponentTemplate.css
1. Put z-index variables for the new component in Mousyrinth/mousyrinth/src/App.css for ease of comparison to other components' z-index
1. Put svg icons in Mousyrinth/mousyrinth/public/svg if required
1. Import and use the new component in a level

### Notes

#### vw Units

This app makes extensive use of vw css units so that levels can have consistent geometry regardless of page size, while requiring the player to scroll only vertically.

#### Walls and Barriers

The tools used to make these puzzles won't stop the mouse from moving where it want. Instead, barriers are made relevant to the puzzle by expanding when hovered to block all or part of the puzzle, forcing the mouse to move to another part of the puzzle before it can procede.
