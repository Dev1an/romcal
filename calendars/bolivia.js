var _ = require('lodash'),
    moment = require('moment'),
    range = require('moment-range'),
    Path = require('path'),
    Utils = require( Path.join( __dirname, '../lib/utils' )),
    Dates = require( Path.join( __dirname, '../lib/dates' )),
    LiturgicalColors = require( Path.join( __dirname, '../data/liturgicalColors' )),
    Titles = require( Path.join( __dirname, '../data/titles' )),
    Types = require( Path.join( __dirname, '../data/types' )).types;

module.exports = {
  dates: function() {

    var dates = [
      {
        "key": "saintsFelipeDeJesusPaulMikiAndCompanionsMartyrs",
        "type": Types[5],
        "moment": moment.utc({ year: arguments[0], month: 1, day: 6 }),
        "data": {
          "meta": {
            "liturgicalColor": LiturgicalColors.RED,
            "titles": [
              Titles.MARTYR
            ]
          }
        }
      },
      {
        "key": "saintTuribiusOfMogrovejoBishop",
        "type": Types[5],
        "moment": moment.utc({ year: arguments[0], month: 2, day: 23 }),
        "data": {
          "meta": {
            "liturgicalColor": LiturgicalColors.WHITE
          }
        }
      },
      {
        "key": "saintMarianaDeJesusDeParedesVirgin",
        "type": Types[6],
        "moment": moment.utc({ year: arguments[0], month: 4, day: 25 }),
        "data": {}
      },
      {
        "key": "blessedNazariaIgnaciaMarchReligious",
        "type": Types[5],
        "moment": moment.utc({ year: arguments[0], month: 2, day: 23 }),
        "data": {
          "meta": {
            "liturgicalColor": LiturgicalColors.WHITE
          }
        }
      },
      {
        "key": "saintCamillusDeLellisPriest",
        "type": Types[6],
        "moment": moment.utc({ year: arguments[0], month: 6, day: 12 }),
        "data": {}
      },
      {
        "key": "saintFrancisSolanusPriest",
        "type": Types[4],
        "moment": moment.utc({ year: arguments[0], month: 6, day: 14 }),
        "data": {
          "meta": {
            "liturgicalColor": LiturgicalColors.WHITE
          }
        }
      },
      {
        "key": "ourLadyOfMountCarmel",
        "type": Types[0],
        "moment": moment.utc({ year: arguments[0], month: 6, day: 16 }),
        "data": {
          "meta": {
            "liturgicalColor": LiturgicalColors.WHITE
          }
        }
      },
      {
        "key": "saintRoseOfLimaVirgin",
        "type": Types[4],
        "moment": moment.utc({ year: arguments[0], month: 7, day: 23 }),
        "data": {
          "meta": {
            "liturgicalColor": LiturgicalColors.WHITE
          }
        }
      },
      {
        "key": "saintPeterClaverPriest",
        "type": Types[6],
        "moment": moment.utc({ year: arguments[0], month: 8, day: 9 }),
        "data": {}
      },
      {
        "key": "saintJohnMaciasReligious",
        "type": Types[5],
        "moment": moment.utc({ year: arguments[0], month: 8, day: 18 }),
        "data": {
          "meta": {
            "liturgicalColor": LiturgicalColors.WHITE
          }
        }
      },
      {
        "key": "saintLouisBertrandPriest",
        "type": Types[6],
        "moment": moment.utc({ year: arguments[0], month: 9, day: 9 }),
        "data": {}
      },
      {
        "key": "saintMiguelFebresCorderoReligious",
        "type": Types[6],
        "moment": moment.utc({ year: arguments[0], month: 9, day: 21 }),
        "data": {}
      },
      {
        "key": "saintJohnPaulIiPope",
        "type": Types[6],
        "moment": moment.utc({ year: arguments[0], month: 9, day: 22 }),
        "data": {}
      },
      {
        "key": "saintAnthonyMaryClaretBishop",
        "type": Types[5],
        "moment": moment.utc({ year: arguments[0], month: 9, day: 24 }),
        "data": {
          "meta": {
            "liturgicalColor": LiturgicalColors.WHITE
          }
        }
      },
      {
        "key": "saintMartinDePorresReligious",
        "type": Types[5],
        "moment": moment.utc({ year: arguments[0], month: 10, day: 3 }),
        "data": {
          "meta": {
            "liturgicalColor": LiturgicalColors.WHITE
          }
        }
      },
      {
        "key": "saintsRoqueGonzalezAlfonsoRodriguezOlmedoAndJuanDelCastilloPriestsAndMartyrs",
        "type": Types[5],
        "moment": moment.utc({ year: arguments[0], month: 10, day: 19 }),
        "data": {
          "meta": {
            "liturgicalColor": LiturgicalColors.RED,
            "titles": [
              Titles.MARTYR
            ]
          }
        }
      },
      {
        "key": "ourLadyOfGuadalupe",
        "type": Types[4],
        "moment": moment.utc({ year: arguments[0], month: 11, day: 12 }),
        "data": {
          "meta": {
            "liturgicalColor": LiturgicalColors.WHITE
          }
        }
      },
      // Thursday after Pentecost
      {
        "key": "ourLordJesusChristTheEternalHighPriest",
        "type": Types[4],
        "moment": (function( y ) {
          return Dates.pentecostSunday( y ).add( 4, 'days' );
        }()),
        "data": {
          "meta": {
            "liturgicalColor": LiturgicalColors.WHITE
          }
        }
      }
    ];

    // Get localized celebration names
    return _.map( dates, function( date ) {
      date.name = Utils.localize({
        key: 'national.' + date.key
      });
      return date;
    });
  }
};
