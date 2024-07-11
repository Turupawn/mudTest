import { Has, defineEnterSystem } from "@latticexyz/recs";
import { PhaserLayer } from "../createPhaserLayer";
import { pixelCoordToTileCoord } from "@latticexyz/phaserx";
import { TILE_WIDTH, TILE_HEIGHT } from "../constants";

export const createPlayerSystem = (layer: PhaserLayer) => {
  const {
    world,
    networkLayer: {
      components: {
        Position
      },
      systemCalls: {
        spawn
      }
    },
    scenes: {
        Main: {
            objectPool,
            input
        }
    }
  } = layer;

  input.pointerdown$.subscribe((event) => {
      console.log(event)
      console.log(event.pointer)
      console.log(event.pointer.worldY)
      console.log(event.pointer.worldY)
    const x = event.pointer.worldY;
    const y = event.pointer.worldY;
    console.log("Fin")

    const position = pixelCoordToTileCoord({ x, y }, TILE_WIDTH, TILE_HEIGHT);
    if(position.x == 0 && position.y == 0)
        return;
    console.log("Filanes")
    spawn(position.x, position.y) 
  });

  defineEnterSystem(world, [Has(Position)], ({entity}) => {
    const playerObj = objectPool.get(entity, "Sprite");

    playerObj.setComponent({
        id: 'animation',
        once: (rect) => {
            rect.setSize(20, 20);
            rect.setFillStyle(0xff0000)
        }
    })
  });
};
