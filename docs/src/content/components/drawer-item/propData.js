import { createTableData } from '../../../utils/createPropData';
const propData = [
  ['active', 'Toggles active state for drawer item', 'bool', ''],
  ['onPress', 'Callback when item is pressed', 'func', ''],
  ['icon', 'Icon name for icon shown on left', 'string', ''],
  [
    'iconComponent',
    'One of the Icon components from react-native-vector-icons',
    'function',
    '',
  ],
  ['style', 'Styles container element', 'object', ''],
  ['text', 'Text shown for item', 'string', ''],
];

export default createTableData(propData);
