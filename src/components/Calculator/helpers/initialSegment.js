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
          ratio: 1000,
          max: 99999
        },
        {
          name: "meters",
          unit: "m",
          ratio: 1,
          max: 999
        }
      ],
      sum: 0
    },
    {
      name: "time",
      pretty: "Czas",
      active: true,
      units: [
        {
          name: "hours",
          unit: "h",
          max: 9999,
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
          ratio: 1000,
          max: 999999999
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
              ratio: 60,
              max: 99999
            },
            {
              name: "seconds-per-kilometers",
              unit: "sek/km",
              ratio: 1,
              max: 59,
            }
          ],
          converter: 1000,
          transform: 'inverse'
        }
      ]
    }
  ]
}
