import turfRandom from '@turf/random';
import Immutable from 'immutable';

export function slugify(str) {
  return str.toLowerCase().replace(/\s/g, '-');
}

export const markers = [
  {
    name: 'Kottbusser Tor',
    latlng: [52.499040, 13.418392]
  }, {
    name: 'Görlitzer Park',
    latlng: [52.496912, 13.436738]
  }, {
    name: 'webkid',
    latlng: [52.501106, 13.422061]
  }
];

export const mapConfig = {
  center: [52.499219, 13.425416],
  zoom: 9
};

const points = turfRandom('points', 5000, { bbox: [13.0535, 52.3303, 13.7262, 52.6675] });
export const locations = Immutable.fromJS(points.features.map(feat => feat.geometry.coordinates));
