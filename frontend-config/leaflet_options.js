'use strict';

var L = require('leaflet');

var omniscale = L.tileLayer('https://maps.omniscale.net/v2/testing-6d943476/style.default/{z}/{x}/{y}.png', {});
var transportLight = L.tileLayer('https://tile.thunderforest.com/transport/{z}/{x}/{y}.png?apikey=9fa04e77ade14217939ae104c7d1b9e3', {});
var transportDark = L.tileLayer('https://tile.thunderforest.com/transport-dark/{z}/{x}/{y}.png?apikey=9fa04e77ade14217939ae104c7d1b9e3', {});
var outdoors = L.tileLayer('https://tile.thunderforest.com/outdoors/{z}/{x}/{y}.png?apikey=9fa04e77ade14217939ae104c7d1b9e3', {});
var neighbourhood = L.tileLayer('https://tile.thunderforest.com/neighbourhood/{z}/{x}/{y}.png?apikey=9fa04e77ade14217939ae104c7d1b9e3', {});
var humanitarian = L.tileLayer('https://tile-a.openstreetmap.fr/hot/{z}/{x}/{y}.png', {});

module.exports = {
  defaultState: {
    center: L.latLng(21.007599,105.843658),
    zoom: 14,
    waypoints: [],
    language: 'vi',
    alternative: 0,
    layer: omniscale
  },
  services: [{
    label: 'Car',
    path: 'http://0.0.0.0:5005/route/v1'
  }],
  layer: [{
    'Omniscale': omniscale,
    'Transport Light': transportLight,
    'Transport Dark': transportDark,
    'Outdoors': outdoors,
    'Neighbourhood': neighbourhood,
    'Humanitarian': humanitarian,
  }],
  overlay: {
    //
  }
};

