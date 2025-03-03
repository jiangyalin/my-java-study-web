import Grid from '../../../lib/Grid/view/Grid.js'
import '../../../lib/Scheduler/column/DurationColumn.js'
import StringHelper from '../../../lib/Core/helper/StringHelper.js'

export default class UnplannedGrid extends Grid {
  /**
     * Original class name getter. See Widget.$name docs for the details.
     * @returns {string}
     */
  static $name = 'UnplannedGrid'

  // Factoryable type name
  static type = 'unplannedgrid'

  static configurable = {
    subGridConfigs: {
      locked: {
        width: 500
      }
    },
    features: {
      stripe: true,
      sort: 'name'
    },

    columns: [{
      text: '资源类型',
      flex: 1,
      field: 'name',
      htmlEncode: false,
      minWidth: 200,
      renderer: data => StringHelper.xss`<i class="${data.record.iconCls}"></i>${data.record.name}`
    }, {
      type: 'duration',
      text: '资源',
      width: 80,
      align: 'right'
    }],

    rowHeight: 50
  }
}

// Register this widget type with its Factory
UnplannedGrid.initClass()
