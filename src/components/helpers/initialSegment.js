// units need to be ordered from biggest to smallest

export const initialSegment = {
  calculable: false, // when at least two factors are bigger than 0
  factors: [
    {
      name: "distance",
      pretty: "Dystans",
      active: true,
      units: [
        {
          name: "kilometers",
          unit: "km",
          biggest: true,
          ratio: 1000,
          max: 999
        },
        {
          name: "meters",
          unit: "m",
          ratio: 1,
          max: 999
        }
      ],
      sum: 0,
      standards: [
        { name: "Maraton", value: 42195 },
        { name: "1/2 Maratonu", value: 21097 },
        { name: "1/4 Maratonu", value: 10549 },
        { name: "1/8 Maratonu", value: 5274 },
      ]
    },
    {
      name: "time",
      pretty: "Czas",
      active: true,
      units: [
        {
          name: "hours",
          unit: "h",
          biggest: true,
          max: 99,
          ratio: 3600,
        },
        {
          name: "minutes",
          unit: "min",
          ratio: 60,
          max: 59
        },
        {
          name: "seconds",
          unit: "s",
          ratio: 1,
          max: 59
        }
      ],
      sum: 0
    },
    {
      name: "speed",
      pretty: "Prędkość",
      active: false,
      units: [
        {
          name: "kilometers-per-hour",
          unit: "km/h",
          biggest: true,
          ratio: 1000,
          max: 99
        },
        {
          name: "meters-per-hour",
          unit: "m/h",
          ratio: 1,
          max: 999
        }
      ],
      sum: 0,
      converter: 3600,
      averaged: true,
      siblings: [
        {
          name: "tempo",
          pretty: "Tempo",
          units: [
            {
              name: "minutes-per-kilometers",
              unit: "min/km",
              biggest: true,
              ratio: 60,
              max: 9999
            },
            {
              name: "seconds-per-kilometers",
              unit: "sek/km",
              ratio: 1,
              max: 59
            }
          ],
          converter: 1000,
          transform: 'inverse'
        }
      ]
    }
  ]
}
