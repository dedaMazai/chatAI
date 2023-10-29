const song = {
  metaData: {
      title: 'Highway to Hell',
      author: 'AC/DC',
      date: '27.07.1979',
  },
  tracks: [
      {
          id: 1,
          name: 'Piano',
          soundType: 'virtual_instrument',
          instrument: 'piano',
          regions: [
              {
                  id: 1,
                  start: 0,
                  end: 3,
                  midiData: [
                      {note: 'F4', velocity: 80, startTime: 0, duration: 1},
                      {note: 'D4', velocity: 80, startTime: 1, duration: 1},
                      {note: 'E4', velocity: 90, startTime: 2, duration: 1},
                  ],
                  effects: [
                      {type: 'reverb', intensity: 15},
                      {type: 'delay', time: 0.5, feedback: 30, mix: 20},
                  ],
              },
          ],
          pan: 5,
          volume: 78,
      },
      {
          id: 2,
          name: 'Guitar',
          soundType: 'virtual_instrument',
          instrument: 'guitar',
          regions: [
              {
                  id: 1,
                  start: 0,
                  end: 5,
                  midiData: [
                      {note: 'C4', velocity: 10, startTime: 0, duration: 1},
                      {note: 'E4', velocity: 20, startTime: 1, duration: 1},
                      {note: 'E4', velocity: 30, startTime: 2, duration: 1},
                      {note: 'F4', velocity: 40, startTime: 3, duration: 1},
                      {note: 'D4', velocity: 50, startTime: 4, duration: 1},
                  ],
              },
          ],
          pan: 10,
          volume: 60,
      },
  ],
} as const;

type TypeFromArray<T extends ReadonlyArray<unknown>, Start extends number, End extends number> = T[Start | End];
// type Partial<T extends ReadonlyArray<unknown>, Start extends number, End extends number> = { [P in keyof T]?: T[P] };
// type ArraySlice<T, Start extends number, End extends number> = T extends Array<infer U> ? U extends any[] ? U[Start:End] : never : never;
type NumberFromString<T extends string> = T extends `${infer Num}` ? Num extends string ? never : Num : never;

type Get<T extends unknown, Path extends string> = Path extends `${infer F}->${infer R}`
  ? F extends keyof T ? Get<T[F], R> : F extends `(${infer C}-${infer D})`
    ? T extends ReadonlyArray<unknown> ? Get<TypeFromArray<T, NumberFromString<C>, NumberFromString<D>>, R> : never : never
  : Path extends keyof T ? T[Path] : Path extends `(${infer C}-${infer D})`
    ? T extends ReadonlyArray<unknown> ? TypeFromArray<T, NumberFromString<C>, NumberFromString<D>> : never : never;


type songAuthor = Get<typeof song, 'metaData->author'>; // AC/DC
type tracksVolume = Get<typeof song, 'tracks->(0-2)->volume'>; // 78 | 60
type notes = Get<typeof song, 'tracks->1->regions->0->midiData->(0-5)->note'>; // "F4" | "D4" | "E4" | "C4"
type midiData = Get<typeof song, 'tracks->1->regions->0->midiData->(0-2)'>; // { note: "C4", velocity: 10, startTime: 0, duration: 1, } | { note: "E4", velocity: 20, startTime: 1, duration: 1 }